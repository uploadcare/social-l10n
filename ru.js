l10n.translations.ru = {
  logout: "Выйти",
  disconnect: "Выйти из %source",
  error: {
    a: "Что-то пошло не так. Пожалуйста",
    b: "перезагрузите",
    c: "Технические подробности:",
  },
  sourceName: {
    gdrive: "Google Drive",
    ngdrive: "Google Drive",
    dropbox: "Dropbox",
    facebook: "Facebook",
    instagram: "Instagram",
    vk: "ВКонтакте",
    box: "Box",
    evernote: "Evernote",
    onedrive: "OneDrive",
    skydrive: "OneDrive",
    flickr: "Flickr",
    huddle: "Huddle",
    gphotos: "Google Photos",
    nft: "NFT",
  },
  login: {
    title: "Загрузить файл из %source",
    lineA: {
      onedrive: "Получите файлы из вашего аккаунта OneDrive.",
      gdrive: "Получите файлы из вашего аккаунта Google.",
      ngdrive: "Получите файлы из вашего аккаунта Google.",
      dropbox: "Получите файлы из вашего аккаунта Dropbox.",
      box: "Получите файлы из вашего аккаунта Box.",
      evernote: "Получите файлы из вашего аккаунта Evernote.",
      instagram: "Получите ваши фотографии из Instagram.",
      flickr: "Получите ваши или фотографии друзей из Flickr.",
      facebook: "Получите изображения из ваших альбомов Facebook.",
      vk: "Получите фотографии и документы из вашего аккаунта VK.",
      gphotos: "Получите фотографии из вашего аккаунта Google Photos.",
      nft: "Получите файлы из ваших NFT-ассетов.",
    },
    lineB: "Всё просто. Вам нужно только войти.",
    button: "Подключиться к %source",
    facebookButton: "Продолжить с Facebook",
    note: "Мы откроем новую страницу для подключения вашего аккаунта %source.",
    cookieWarning:
      "В вашем браузере заблокированы сторонние куки. " +
      "Для авторизации необходимы сторонние куки хотя бы для домена " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Я разблокировал куки, хочу попробовать снова.",
  },
  pagination: {
    loading: "Загрузка...",
    loadMore: "Загрузить еще",
    failed: {
      a: "Не удалось загрузить.",
      b: "Повторить попытку",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Мои файлы",
      team: "Файлы команды",
      search: "Поиск",
    },
    search: {
      placeholder: "Искать файлы",
      button: "Искать файлы",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Мои фото",
    },
    deprecated: {
      title: "%source больше недоступен",
      description: "Meta прекратила доступ к %source для сторонних приложений.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Мои файлы",
      shared: "Доступные мне",
      sharepoint: "SharePoint",
      myDrives: "Мои диски",
      groups: "Мои группы",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Мои файлы",
      shared: "Доступные мне",
      starred: "Избранное",
      search: "Поиск",
      teamDrives: "Диски моей команды",
    },
    search: {
      placeholder: "Искать файлы",
      button: "Искать",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Мои файлы",
      shared: "Доступные мне",
      starred: "Избранное",
      search: "Поиск",
      teamDrives: "Диски моей команды",
    },
    search: {
      placeholder: "Искать файлы",
      button: "Искать",
    },
    openPicker: "Открыть Google Drive",
  },
  facebook: {
    menu: {
      myAlbums: "Альбомы",
      likedPages: "Страницы",
    },
  },
  vk: {
    menu: {
      myAlbums: "Мои альбомы",
      page: "Фотографии с моей страницы",
      withMe: "Фотографии со мной",
      saved: "Сохранённые фотографии",
      myFriends: "Мои друзья",
      docs: "Документы",
    },
  },
  evernote: {
    menu: {
      allNotes: "Все заметки",
      notebooks: "Блокноты",
      tags: "Метки",
      search: "Поиск",
    },
    search: {
      placeholder: "Искать заметки",
      button: "Искать",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Photostream",
      myAlbums: "Альбомы",
      myFavorites: "Избранное",
      follows: "Фолловинг",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Альбомы",
      myPhotos: "Фотографии",
    },
    openPicker: "Открыть Google Фото",
    waitSession: "Ожидание Google Фото",
  },
  huddle: {
    menu: {
      workspaces: "Пространства",
    },
  },
  nft: {
    menu: {
      myAssets: "Мои ассеты",
      owner: "Адрес владельца",
    },
    assets: {
      button: "Показать",
    },
  },
  search: {
    empty: "Папка пуста",
    noResult: "Нет результатов для",
    retry: "Пожалуйста, введите запрос для поиска",
    placeholder: "Поиск",
    clear: "Очистить",
  },
  files: {
    one: "%n файл",
    few: "%n файла",
    many: "%n файлов",
  },
  list: {
    table: {
      title: "Название",
      size: "Размер",
    },
  },
};

l10n.pluralize.ru = function (n) {
  return ((n / 10) % 10 | 0) == 1 || n % 10 == 0 || n % 10 > 4
    ? "many"
    : n % 10 == 1
      ? "one"
      : "few";
};

l10n.date.ru = function (d) {
  var months = [
    "Янв",
    "Фев",
    "Март",
    "Апр",
    "Май",
    "Июнь",
    "Июль",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
