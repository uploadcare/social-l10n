const path = require("path");
const fs = require("fs");
const { promisify } = require("util");

const directoryPath = path.join(__dirname, "../");
const readdir = promisify(fs.readdir);
const lstat = promisify(fs.lstat);
const readFile = promisify(fs.readFile);

const contentToFn = (content) =>
  new Function(`
  var l10n = { translations: {}, pluralize: {}, date: {} };

  ${content}
  var keys = Object.keys(l10n.translations)
  return l10n.translations[keys[0]]
`);

var deepDiff = (function () {
  const VALUE_CREATED = "unnecessary";
  const VALUE_DELETED = "missing";
  const VALUE_OK = "ok";

  const isValue = function (x) {
    return Object.prototype.toString.call(x) !== "[object Object]";
  };

  const compareValues = function (value1, value2) {
    if (value1 === undefined) {
      return VALUE_CREATED;
    }
    if (value2 === undefined) {
      return VALUE_DELETED;
    }
    return VALUE_OK;
  };

  const map = function (obj1, obj2, path = []) {
    if (isValue(obj1) || isValue(obj2)) {
      return {
        path,
        result: compareValues(obj1, obj2),
      };
    }

    var mapa = {};
    var diff = [];
    for (var key in obj1) {
      var value2 = undefined;
      if (obj2[key] !== undefined) {
        value2 = obj2[key];
      }

      mapa[key] = true;
      diff = diff.concat(map(obj1[key], value2, path.concat(key)));
    }
    for (var key in obj2) {
      if (mapa[key] !== undefined) {
        continue;
      }

      diff = diff.concat(map(undefined, obj2[key], path.concat(key)));
    }

    return diff;
  };

  const pluralizeRegex = /(one|other|few)$/;
  const last = (arr) => arr[arr.length - 1];

  const compare = function (obj1, obj2) {
    const diff = map(obj1, obj2);
    return diff
      .filter(
        ({ result, path }) =>
          last(path).search(pluralizeRegex) && result !== VALUE_OK
      )
      .map(({ path, result }) => `'${path.join(".")}' is ${result}`)
      .join("\n");
  };

  return {
    compare,
  };
})();

module.exports = () =>
  readdir(directoryPath)
    .then((files) =>
      Promise.all(files.map((file) => lstat(file).then((stat) => [file, stat])))
    )
    .then((stats) =>
      stats.filter(
        ([file, stat]) => stat.isFile() && path.extname(file) === ".js"
      )
    )
    .then((stats) => stats.map(([path]) => path))
    .then((paths) =>
      Promise.all(
        paths.map((path) =>
          readFile(path).then((content) => [
            path,
            contentToFn(content.toString("utf-8")),
          ])
        )
      )
    )
    .then((infos) => {
      var reference = infos.find((info) => info[0] === "en.js");

      return [reference[1](), infos.filter((info) => info[0] !== reference[0])];
    })
    .then(([ref, tests]) =>
      tests.map(([path, exec]) => {
        const result = deepDiff.compare(ref, exec());

        return result && `
<details>
  <summary>
    <strong>${path}</strong>
  </summary>

\`\`\`
${result}
\`\`\` 

</details>

`;
      })
    )
    .then((rows) => rows.join(""))
    .catch(console.err);
