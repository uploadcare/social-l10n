l10n.translations.uk = {
  logout: "Вийти",
  disconnect: "Відключитися від %source",
  error: {
    a: "Щось пішло не так. Будь ласка",
    b: "перезавантажити",
    c: "Технічні подробиці:",
  },
  sourceName: {
    gdrive: "Google Drive",
    dropbox: "Dropbox",
    facebook: "Facebook",
    instagram: "Instagram",
    vk: "VK",
    box: "Box",
    evernote: "Evernote",
    skydrive: "OneDrive",
    onedrive: "OneDrive",
    flickr: "Flickr",
    huddle: "Huddle",
    gphotos: "Google Photos",
    nft: "NFT",
  },
  login: {
    title: "Завантажити файли з %source",
    lineA: {
      instagram: "Виберіть фото з вашого акаунту.",
      onedrive: "Отримайте файли з вашого акаунту OneDrive.",
      gdrive: "Отримайте файли з вашого акаунту Google.",
      dropbox: "Отримайте файли з вашого акаунту Dropbox.",
      box: "Отримайте файли з вашого акаунту Box.",
      evernote: "Отримайте файли з вашого акаунту Evernote.",
      flickr: "Отримайте ваші або фото ваших друзів.",
      facebook: "Отримайте зображення з ваших альбомів.",
      vk: "Отримайте фото та документи з вашого акаунту.",
      gphotos: "Отримайте фото з вашого акаунту Google Photos.",
      nft: "Отримайте файли з ваших NFT активів.",
    },
    lineB: "Ми про все подбаємо.<br> Вам достатньо лише увійти до системи.",
    note: "Сторінка входу відкриється у новому вікні.",
    button: "Увійти через %source",
    facebookButton: "Продовжити з Facebook",
    cookieWarning:
      "Ви заблокували сторонні файли cookie у своєму браузері. " +
      "Авторизація вимагає сторонніх файлів cookie принаймні для " +
      "<code>social.uploadcare.com</code> домену.",
    cookieRetry: "Я розблокував файли cookie і хочу спробувати ще раз.",
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
    deprecated: {
      title: "%source більше недоступний",
      description: "Meta припинила доступ до %source для сторонніх додатків.",
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
    openPicker: "Відкрити Google Drive",
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
    openPicker: "Відкрити Google Photos",
    waitSession: "Очікування Google Photos",
  },
  huddle: {
    menu: {
      workspaces: "Робочі простори",
    },
  },
  nft: {
    menu: {
      myAssets: "Мої активи",
      owner: "Адреса власника",
    },
    assets: {
      button: "Показати",
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
