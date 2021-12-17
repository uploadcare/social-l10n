l10n.translations.ru = {
  logout: 'Выйти',
  error: {
    a: 'Что-то пошло не так. Пожалуйста',
    b: 'перезагрузите',
    c: 'Технические подробности:'
  },
  sourceName: {
    gdrive: 'Google Drive',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    vk: 'ВКонтакте',
    box: 'Box',
    evernote: 'Evernote',
    onedrive: 'OneDrive',
    skydrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos',
    nft: 'NFT',
  },
  login: {
    title: 'Выбор файлов из %source',
    lineA: {
      onedrive: 'Вы сможете выбрать свои файлы.',
      gdrive: 'Вы сможете выбрать свои файлы.',
      dropbox: 'Вы сможете выбрать свои файлы.',
      box: 'Вы сможете выбрать свои файлы.',
      evernote: 'Вы сможете выбрать свои файлы.',
      instagram: 'Вы сможете выбрать свои фотографии<br> и фотографии друзей.',
      flickr: 'Вы сможете выбрать свои фотографии<br> и фотографии друзей.',
      facebook: 'Вы сможете выбрать фотографии из своих альбомов.',
      vk: 'Вы сможете выбрать фотографии<br> и документы из своего аккаунта.',
      gphotos: 'Вы сможете выбрать свои фотографии.',
      nft: 'Вы сможете выбрать свои файлы.',
    },
    button: 'Войти через %source',
    facebookButton: 'Продолжить с Facebook',
    lineB: 'Мы обо всем позаботимся.<br> Вам достаточно только войти в систему.',
    note: 'Страница входа откроется в новом окне.',
    cookieWarning: 'В вашем браузере заблокированы сторонние куки. ' +
      'Для авторизации необходимо снять ограничение хотя бы для домена ' +
      '<code>social.uploadcare.com</code>.',
    cookieRetry: 'Я разблокировал куки, попробовать снова.'
  },
  pagination: {
    loading: 'Загрузка...',
    loadMore: 'Загрузить еще',
    failed: {
      a: 'Не удалось загрузить.',
      b: 'Повторить попытку'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Мои файлы',
      team: 'Файлы команды'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Мои фото'
    },
  },
  onedrive: {
    menu: {
      myFiles: 'Мои файлы',
      shared: 'Доступные мне',
      sharepoint: 'SharePoint',
      myDrives: 'Мои диски',
      groups: 'Мои группы'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Мои файлы',
      shared: 'Доступные мне',
      starred: 'Избранное',
      search: 'Поиск',
      teamDrives: 'Диски моей команды'
    },
    search: {
      placeholder: 'Искать файлы',
      button: 'Искать'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Альбомы',
      likedPages: 'Страницы'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Мои альбомы',
      page: 'Фотографии с моей страницы',
      withMe: 'Фотографии со мной',
      saved: 'Сохранённые фотографии',
      myFriends: 'Мои друзья',
      docs: 'Документы'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Все заметки',
      notebooks: 'Блокноты',
      tags: 'Метки',
      search: 'Поиск'
    },
    search: {
      placeholder: 'Искать заметки',
      button: 'Искать'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Photostream',
      myAlbums: 'Альбомы',
      myFavorites: 'Избранное',
      follows: 'Фолловинг'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Альбомы',
      myPhotos: 'Фотографии',
    }
  },
  huddle: {
    menu: {
      workspaces: 'Пространства'
    }
  },
  nft: {
    menu: {
      owner: 'Адрес владельца'
    },
    assets: {
      placeholder: 'Адрес владельца',
      button: 'Показать'
    }
  },
  files: {
    one: '%n файл',
    few: '%n файла',
    many: '%n файлов'
  },
  list: {
    table: {
      title: 'Название',
      size: 'Размер'
    }
  }
};

l10n.pluralize.ru = function (n) {
  return ((n/10%10|0) == 1) || (n%10 == 0) || (n%10 > 4) ?
    'many' : ((n%10 == 1) ? 'one' : 'few');
};


l10n.date.ru = function(d) {
  var months = ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь',
                'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
