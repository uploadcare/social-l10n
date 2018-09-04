l10n.translations.zh = {
  logout: '退出',
  error: {
    a: '发生错误，请',
    b: '重新载入',
    c: '错误详情:'
  },
  sourceName: {
    gdrive: 'Google Drive',
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
    title: '从%source上传文件',
    lineA: {
      gdrive: '从Google账号获取文件并上传',
      dropbox: '从Dropbox账号获取文件并上传',
      box: '从Box账号获取文件并上传',
      evernote: '从Evernote账号获取文件并上传',
      instagram: '上传自己或好友的照片',
      flickr: '上传自己或好友的照片',
      facebook: '从自己相册里上传照片',
      vk: '从VK账号上传照片和文件',
      gphotos: '从Google Photos账号上传照片'
    },
    lineB: '您只需要登录',
    button: '链接%source',
    facebookButton: '继续使用 Facebook 登录',
    note: '我们将新开页面来链接您的%source账号',
    cookieWarning: '您的浏览器停用了第三方的cookies.' +
                   '授权需要<code>social.uploadcare.com</code>域名的cookies',
    cookieRetry: "开启了第三方cookies, 准备重试"
  },
  pagination: {
    loading: '正在载入更多的文件...',
    loadMore: '载入更多',
    failed: {
      a: '载入失败',
      b: '重试'
    }
  },
  instagram: {
    menu: {
      myPhotos: '我的照片',
      myLikes: '我点赞的照片',
      myFollowings: '我关注的用户',
      search: '搜索'
    },
    search: {
      placeholder: '用hashtag搜索照片',
      button: '搜索'
    },
    errors: {
      account_is_private: '该用户的账户设置了隐私'
    }
  },
  gdrive: {
    menu: {
      myFiles: '我的文件',
      shared: '分享给我的文件',
      starred: '关注的文件',
      search: '搜索'
    },
    search: {
      placeholder: '搜索文件',
      button: '搜索'
    }
  },
  facebook: {
    menu: {
      myAlbums: '我的相册',
      likedPages: '我点赞的主页'
    }
  },
  vk: {
    menu: {
      myAlbums: '我的相册',
      page: '头像照片',
      withMe: '与我有关的照片',
      saved: '保存的照片',
      myFriends: '我的好友',
      docs: '我的文件'
    }
  },
  evernote: {
    menu: {
      allNotes: '所有笔记',
      notebooks: '笔记本',
      tags: '标签',
      search: '搜索'
    },
    search: {
      placeholder: '搜索笔记',
      button: '搜索'
    }
  },
  flickr: {
    menu: {
      myPhotostream: '照片流',
      myAlbums: '相册',
      myFavorites: '我的最爱',
      follows: '我的关注'
    }
  },
  gphotos: {
    menu: {
      myAlbums: '相册',
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  // pluralization example
  files: {
    other: '%n文件'
  },
  list: {
    table: {
      title: '名称',
      size: '大小'
    }
  }
};

// Pluralization rules taken from:
// http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
l10n.pluralize.zh = function (n) {
  return 'other';
};


l10n.date.zh = function(d) {
  var months = ['一月', '二月', '三月', '四月', '五月', '六月',
                '七月', '八月', '九月', '十月', '十一月', '十二月'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
