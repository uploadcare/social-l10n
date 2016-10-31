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
    huddle: 'Huddle',
    gphotos: 'Google Photos'
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
      vk: 'Вы сможете выбрать фотографии<br> и документы из своего аккаунта.',
      gphotos: 'Вы сможете выбрать свои фотографии.'
    },
    button: 'Войти через %source',
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
    },
    errors: {
      account_is_private: 'Это приватный аккаунт'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Мои файлы',
      shared: 'Доступные мне',
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
