l10n.translations.zhTW = {
  logout: '登出',
  error: {
    a: '發生了一些問題，請',
    b: '重新載入',
    c: '技術細節:'
  },
  sourceName: {
    gdrive: 'Google雲端硬碟',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    vk: 'VK',
    box: 'Box',
    evernote: 'Evernote',
    skydrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos'
  },
  login: {
    title: '從我的 %source 上傳',
    lineA: {
      gdrive: '從自己的 Google雲端硬碟帳號取得檔案並上傳',
      dropbox: '從自己的 Dropbox 帳號取得檔案並上傳',
      box: '從自己的 Box 帳號取得檔案並上傳',
      evernote: '從自己的 Evernote 帳號取得檔案並上傳',
      instagram: '從自己或好友的相簿上傳照片',
      flickr: '從自己或好友的相簿上傳照片',
      facebook: '從自己或好友的相簿上傳照片',
      vk: '從自己的帳號上傳照片',
      gphotos: '從自己的 Google Photos雲端硬碟帳號取得檔案並上傳'
    },
    lineB: '您只需要登入並連接您的帳號',
    button: '連接 %source',
    note: '我們將另開視窗協助您連結您的 %source account 帳號，若您使用iPhone或iPad但不是直接使用Safari或Chrome，第一次連接可能出現空白畫面，敬請見諒',
    cookieWarning: '您的瀏覽器已阻擋了第三方 Cookie 的使用 ' +
      '連接授權至少需要 ' +
      '<code>social.uploadcare.com</code> 網域的Cookie.',
    cookieRetry: "我已經取消阻擋 Cookie , 我想要再試一次！"
  },
  pagination: {
    loading: '正在載入更多項目...',
    loadMore: '更多',
    failed: {
      a: '載入失敗.',
      b: '重試'
    }
  },
  instagram: {
    menu: {
      myPhotos: '我的相片',
      myLikes: '我喜歡的',
      myFollowings: '我正在追蹤的',
      search: '尋找'
    },
    search: {
      placeholder: '從 hashtags 尋找照片',
      button: '尋找'
    },
    errors: {
      account_is_private: '此用户拥有一个私人饲料'
    }
  },
  gdrive: {
    menu: {
      myFiles: '我的文件',
      shared: '與我共用',
      starred: '已加星號'
    }
  },
  facebook: {
    menu: {
      myAlbums: '我的相簿',
      myFriends: '我的好友',
      likedPages: '專頁'
    }
  },
  vk: {
    menu: {
      myAlbums: '我的相簿',
      page: '個人檔案照片',
      withMe: '與我有關的照片',
      saved: '已儲存相片',
      myFriends: '我的好友',
      docs: '我的文件'
    }
  },
  evernote: {
    menu: {
      allNotes: '所有筆記',
      notebooks: '筆記本',
      tags: '標籤',
      search: '尋找'
    },
    search: {
      placeholder: '尋找筆記',
      button: '尋找'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Photostream',
      myAlbums: '相簿',
      myFavorites: '最愛',
      follows: '追蹤'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  // pluralization example
  files: {
    one: '%n 個檔案',
    other: '%n 個檔案'
  },
  list: {
    table: {
      title: '名稱',
      size: '大小'
    }
  }
};

// Pluralization rules taken from:
// http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
l10n.pluralize.zhTW = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date = function(d) {
  var months = ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
