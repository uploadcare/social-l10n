l10n.translations.ja = {
  logout: 'ログアウト',
  error: {
    a: '処理できませんでした。',
    b: 'リロードしてください。',
    c: '以下、詳細情報となります。'
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
    onedrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos'
  },
  login: {
    title: '%sourceからファイルをアップロード',
    lineA: {
      oneDrive: 'OneDriveアカウントからファイルを読み込む。',
      gdrive: 'Googleアカウントからファイルを読み込む。',
      dropbox: 'Dropboxアカウントからファイルを読み込む。',
      box: 'Boxアカウントからファイルを読み込む。',
      evernote: 'Evernoteアカウントからファイルを読み込む。',
      instagram: '画像を読み込む。',
      flickr: '画像を読み込む。',
      facebook: 'アルバムから画像を読み込む。',
      vk: 'アカウントから画像、書類を読み込む。',
      gphotos: 'Google Photosアカウントからファイルを読み込む。'
    },
    lineB: 'ログインしてください。',
    button: '%sourceに接続',
    facebookButton: 'Facebookに接続',
    note: '%sourceに接続するため、新しい画面が開きます。',
    cookieWarning: 'ブラウザのクッキーがブロックされています。' +
      '<code>social.uploadcare.com</code>にログインするため、クッキーの許可が必要です。',
    cookieRetry: "再試行"
  },
  pagination: {
    loading: '追加読み込み...',
    loadMore: '追加読み込み',
    failed: {
      a: '読み込みが失敗しました。',
      b: '再試行'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'ファイル',
      team: 'チームのファイル'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'フォト',
      myLikes: 'お気に入り',
      myFollowings: 'フォロー',
      search: '検索'
    },
    search: {
      placeholder: 'ハッシュタグで画像を検索',
      button: '検索'
    },
    errors: {
      account_is_private: 'プライベートフィード'
    }
  },
  onedrive: {
    menu: {
        myFiles: 'ファイル',
        shared: '共有'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'ファイル',
      shared: '共有',
      starred: 'スター付き',
      search: '検索'
    },
    search: {
      placeholder: 'ファイル検索',
      button: '検索'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'アルバム',
      likedPages: 'ページ'
    }
  },
  vk: {
    menu: {
      myAlbums: 'アルバム',
      page: 'プロフィール画像',
      withMe: '画像',
      saved: '保存済みの画像',
      myFriends: '友達',
      docs: '書類'
    }
  },
  evernote: {
    menu: {
      allNotes: 'ノート',
      notebooks: 'ノートブック',
      tags: 'タグ',
      search: '検索'
    },
    search: {
      placeholder: 'ノート検索',
      button: '検索'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'ストリーム',
      myAlbums: 'アルバム',
      myFavorites: 'お気に入り',
      follows: 'フォロー'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'アルバム',
    }
  },
  huddle: {
    menu: {
      workspaces: 'ワークスペース'
    }
  },
  // pluralization example
  files: {
    one: '%n ファイル',
    other: '%n ファイル'
  },
  list: {
    table: {
      title: 'タイトル',
      size: 'サイズ'
    }
  }
};

// Pluralization rules taken from:
// http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
l10n.pluralize.ja = function (n) {
  return 'other';
};


l10n.date.ja = function(d) {
  return "" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
};
