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
    skydrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle'
  },
  login: {
    title: 'Выбор файлов из %source',
    lineA: {
      gdrive: 'Вы сможете выбрать свои файлы.',
      dropbox: 'Вы сможете выбрать свои файлы.',
      box: 'Вы сможете выбрать свои файлы.',
      evernote: 'Вы сможете выбрать свои файлы.',
      instagram: 'Вы сможете выбрать свои фотографии<br> и фотографии друзей.',
      flickr: 'Вы сможете выбрать свои фотографии<br> и фотографии друзей.',
      facebook: 'Вы сможете выбрать фотографии<br> из своих альбомов и альбомов друзей.',
      vk: 'Вы сможете выбрать фотографии<br> и документы из своего аккаунта.'
    },
    button: 'Войти через %source',
    lineB: 'Мы обо всем позаботимся. Вам достаточно только войти в систему',
    note: 'Страница входа откроется в новом окне.',
    cookieWarning: 'В вашем браузере заблокированы сторонние куки. Для авторизации необходимо снять ограничение хотя бы для домена <code>social.uploadcare.com</code>.',
    cookieRetry: 'Я разблокировал куки| попробовать снова.'
  },
  pagination: {
    loading: 'Загрузка...',
    loadMore: 'Загрузить еще',
    failed: {
      a: 'Не удалось загрузить.',
      b: 'Повторить попытку'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Мои фото',
      myLikes: 'Избранное',
      myFollowings: 'Подписки',
      search: 'Поиск'
    },
    search: {
      placeholder: 'Искать фотографии по хеш-тегу',
      button: 'Искать'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Мои файлы',
      starred: 'Избранное'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Альбомы',
      myFriends: 'Друзья',
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
  huddle: {
    menu: {
      workspaces: 'Пространства'
    }
  },
  files: {
    one: '1 файл',
    few: '%n файла',
    many: '%n файлов',
    other: '%n файла'
  },
  list: {
    table: {
      title: 'Название',
      size: 'Размер'
    }
  }
};

l10n.pluralize.ru = function (n) {
  var m10 = n % 10,
      m100 = n % 100;
  if (m10 === 1 && m100 !== 11) {
    return 'one';
  }
  if (_.contains([2, 3, 4], m10) && !_.contains([12, 13, 14], m100)) {
    return 'few';
  }
  if (_.contains([0, 5, 6, 7, 8, 9], m10) || _.contains([11, 12, 13, 14], m100)) {
    return 'many';
  }
  return 'other';
};
