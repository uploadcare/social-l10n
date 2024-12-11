l10n.translations.uk = {
  logout: "Вийти",
  error: {
    a: "Щось пішло не так. Будь ласка",
    b: "перезавантажити",
    c: "Технічні подробиці:",
  },
  login: {
    title: "Завантажити файли з %source",
    lineA: {
      instagram: "Виберіть фото з вашого акаунту.",
    },
    lineB: "Ми про все подбаємо.<br> Вам достатньо лише увійти до системи.",
    note: "Сторінка входу відкриється у новому вікні.",
    button: "Увійти через %source",
  },
  pagination: {
    loading: "Завантаження...",
    loadMore: "Завантажити ще",
    failed: {
      a: "Не вдалося завантажити.",
      b: "Спробувати ще",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Мої файли",
      team: "Файли команди",
      search: "Пошук файлів",
    },
    search: {
      placeholder: "Пошук файлів",
      button: "Пошук файлів",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Мої фото",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Мої файли",
      shared: "Спільно зі мною",
      sharepoint: "SharePoint",
      myDrives: "Мої диски",
      groups: "Мої групи",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Мої файли",
      shared: "Спільно зі мною",
      starred: "Вибране",
      search: "Пошук",
      teamDrives: "Командні диски",
    },
    search: {
      placeholder: "Пошук файлів",
      button: "Пошук",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Мої альбоми",
      likedPages: "Сторінки",
    },
  },
  vk: {
    menu: {
      myAlbums: "Мої альбоми",
      page: "Фотографії профілю",
      withMe: "Фотографії зі мною",
      saved: "Збережені фотографії",
      myFriends: "Мої друзі",
      docs: "Мої документи",
    },
  },
  evernote: {
    menu: {
      allNotes: "Усі нотатки",
      notebooks: "Записники",
      tags: "Теги",
      search: "Пошук",
    },
    search: {
      placeholder: "Пошук нотаток",
      button: "Пошук",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Фотопотік",
      myAlbums: "Альбоми",
      myFavorites: "Вибране",
      follows: "Підписки",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Альбоми",
      myPhotos: "Фотографії",
    },
  },
  huddle: {
    menu: {
      workspaces: "Робочі простори",
    },
  },
  // pluralization example
  files: {
    one: "%n файл",
    few: "%n файли",
    many: "%n файлів",
  },
  list: {
    table: {
      title: "Назва",
      size: "Розмір",
    },
  },
  search: {
    empty: "Folder is empty",
    noResult: "No results for",
    retry: "Please enter the search query",
    placeholder: "Search",
    clear: "Clear",
  },
};

// Pluralization rules taken from:
// http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
l10n.pluralize.uk = function (n) {
  return ((n / 10) % 10 | 0) == 1 || n % 10 == 0 || n % 10 > 4
    ? "many"
    : n % 10 == 1
    ? "one"
    : "few";
};

l10n.date.uk = function (d) {
  var months = [
    "Січ",
    "Лют",
    "Бер",
    "Квіт",
    "Трав",
    "Чер",
    "Лип",
    "Серп",
    "Вер",
    "Жов",
    "Лис",
    "Груд",
  ];

  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
