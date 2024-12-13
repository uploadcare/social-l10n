l10n.translations.ja = {
  logout: "ログアウト",
  disconnect: "%source から切断",
  error: {
    a: "処理できませんでした。",
    b: "リロードしてください。",
    c: "以下、詳細情報となります。",
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
    title: "%sourceからファイルをアップロード",
    lineA: {
      onedrive: "OneDriveアカウントからファイルを読み込む。",
      gdrive: "Googleアカウントからファイルを読み込む。",
      dropbox: "Dropboxアカウントからファイルを読み込む。",
      box: "Boxアカウントからファイルを読み込む。",
      evernote: "Evernoteアカウントからファイルを読み込む。",
      instagram: "画像を読み込む。",
      flickr: "画像を読み込む。",
      facebook: "アルバムから画像を読み込む。",
      vk: "アカウントから画像、書類を読み込む。",
      gphotos: "Google Photosアカウントからファイルを読み込む。",
      nft: "NFTアセットからファイルを読み込む。",
    },
    lineB: "ログインしてください。",
    button: "%sourceに接続",
    facebookButton: "Facebookに接続",
    note: "%sourceに接続するため、新しい画面が開きます。",
    cookieWarning:
      "ブラウザのクッキーがブロックされています。" +
      "<code>social.uploadcare.com</code>にログインするため、クッキーの許可が必要です。",
    cookieRetry: "再試行",
  },
  pagination: {
    loading: "追加読み込み...",
    loadMore: "追加読み込み",
    failed: {
      a: "読み込みが失敗しました。",
      b: "再試行",
    },
  },
  dropbox: {
    menu: {
      myFiles: "ファイル",
      team: "チームのファイル",
      search: "検索",
    },
    search: {
      placeholder: "ファイル検索",
      button: "ファイル検索",
    },
  },
  instagram: {
    menu: {
      myPhotos: "フォト",
    },
  },
  onedrive: {
    menu: {
      myFiles: "ファイル",
      shared: "共有",
      sharepoint: "SharePoint",
      groups: "グループ",
      myDrives: "ドライブ",
    },
  },
  gdrive: {
    menu: {
      myFiles: "ファイル",
      shared: "共有",
      starred: "スター付き",
      search: "検索",
      teamDrives: "チームドライブ",
    },
    search: {
      placeholder: "ファイル検索",
      button: "検索",
    },
  },
  facebook: {
    menu: {
      myAlbums: "アルバム",
      likedPages: "ページ",
    },
  },
  vk: {
    menu: {
      myAlbums: "アルバム",
      page: "プロフィール画像",
      withMe: "画像",
      saved: "保存済みの画像",
      myFriends: "友達",
      docs: "書類",
    },
  },
  evernote: {
    menu: {
      allNotes: "ノート",
      notebooks: "ノートブック",
      tags: "タグ",
      search: "検索",
    },
    search: {
      placeholder: "ノート検索",
      button: "検索",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "ストリーム",
      myAlbums: "アルバム",
      myFavorites: "お気に入り",
      follows: "フォロー",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "アルバム",
      myPhotos: "写真",
    },
  },
  huddle: {
    menu: {
      workspaces: "ワークスペース",
    },
  },
  nft: {
    menu: {
      myAssets: "アセット",
      owner: "所有者のアドレス",
    },
    assets: {
      button: "表示",
    },
  },
  // pluralization example
  files: {
    one: "%n ファイル",
    other: "%n ファイル",
  },
  list: {
    table: {
      title: "タイトル",
      size: "サイズ",
    },
  },

  search: {
    empty: "フォルダは空です",
    noResult: "結果がありません",
    retry: "検索クエリを入力してください",
    placeholder: "検索",
    clear: "クリア",
  },
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.ja = function (n) {
  return "other";
};

l10n.date.ja = function (d) {
  return (
    "" + d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日"
  );
};
