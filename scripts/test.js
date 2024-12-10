(async () => {
  const path = require("path");
  const scriptPath = path.resolve("scripts/compare.js");
  const info = await require(scriptPath)();
  console.log(info);
})();
