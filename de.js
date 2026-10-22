l10n.translations.de = {
  disconnect: "Trennen von %source",
  logout: "Abmelden",
  error: {
    a: "Ein Fehler ist aufgetreten. Bitte",
    b: "neu laden",
    c: "Hier einige technische Details:",
  },
  sourceName: {
    gdrive: "Google Drive",
    ngdrive: "Google Drive",
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
    title: "Hochladen einer Datei von %source",
    lineA: {
      onedrive: "Holen Sie Dateien aus Ihrem OneDrive-Konto.",
      gdrive: "Holen Sie Dateien aus Ihrem Google-Konto.",
      ngdrive: "Holen Sie Dateien aus Ihrem Google-Konto.",
      dropbox: "Holen Sie Dateien aus Ihrem Dropbox-Konto.",
      box: "Holen Sie Dateien aus Ihrem Box-Konto.",
      evernote: "Holen Sie Dateien aus Ihrem Evernote-Konto.",
      instagram: "Holen Sie Ihre Fotos oder die Ihrer Freunde.",
      flickr: "Holen Sie Ihre Fotos oder die Ihrer Freunde.",
      facebook: "Holen Sie Bilder aus Ihren Alben.",
      vk: "Holen Sie Fotos und Dokumente aus Ihrem Konto.",
      gphotos: "Holen Fotos aus Ihrem Google Fotos-Konto.",
      nft: "Holen Sie Dateien aus Ihren NFT-Vermögenswerten.",
    },
    lineB: "Wir machen es Ihnen einfach. Sie brauchen sich nur anzumelden.",
    button: "Verbinden mit %source",
    facebookButton: "Weiter mit Facebook",
    note: "Wir öffnen eine neue Seite für die Verbindung mit Ihrem %source-Konto.",
    cookieWarning:
      "Sie haben in Ihrem Browser Cookies von Drittanbietern blockiert. Die Autorisierung benötigt Cookies von Drittanbietern zumindest für die <code>social.uploadcare.com</code> Domain.",
    cookieRetry:
      "Ich habe das Speichern von Cookies erlaubt und möchte es erneut versuchen.",
  },
  pagination: {
    loading: "Lädt weitere Items ...",
    loadMore: "Mehr laden",
    failed: {
      a: "Laden fehlgeschlagen.",
      b: "Erneut versuchen",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Meine Dateien",
      team: "My team files",
      search: "Suche",
    },
    search: {
      placeholder: "Dateien suchen",
      button: "Dateien suchen",
    },
    openChooser: "Dropbox öffnen",
  },
  instagram: {
    menu: {
      myPhotos: "Meine Fotos",
    },
    deprecated: {
      title: "%source ist nicht mehr verfügbar",
      description:
        "Meta hat den Zugriff auf %source für Drittanbieter-Apps eingestellt.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Meine Dateien",
      shared: "Für mich freigegeben",
      sharepoint: "SharePoint",
      myDrives: "Meine antriebe",
      groups: "Meine gruppen",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Meine Dateien",
      shared: "Für mich freigegeben",
      starred: "Favoriten",
      search: "Suche",
      teamDrives: "Team-Laufwerke",
    },
    search: {
      placeholder: "Suchnotizen",
      button: "Suche",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Meine Dateien",
      shared: "Für mich freigegeben",
      starred: "Favoriten",
      search: "Suche",
      teamDrives: "Team-Laufwerke",
    },
    search: {
      placeholder: "Suchnotizen",
      button: "Suche",
    },
    openPicker: "Google Drive öffnen",
    skippedFiles: "Auf einige Dateien konnte nicht zugegriffen werden, sie wurden übersprungen:",
    fileUnavailable: "Kein Zugriff auf diese Datei",
  },
  facebook: {
    menu: {
      myAlbums: "Meine Alben",
      likedPages: "Seiten",
    },
  },
  vk: {
    menu: {
      myAlbums: "Meine Alben",
      page: "Profilbilder",
      withMe: "Fotos mit mir",
      saved: "Gespeicherte Fotos",
      myFriends: "Meine Freunde",
      docs: "Meine Dokumente",
    },
  },
  evernote: {
    menu: {
      allNotes: "Alle Notizen",
      notebooks: "Notizbücher",
      tags: "Tags",
      search: "Suche",
    },
    search: {
      placeholder: "Suchnotizen",
      button: "Suche",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Alben",
      myFavorites: "Favoriten",
      follows: "Followings",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Alben",
      myPhotos: "Fotos",
    },
    openPicker: "Google Fotos öffnen",
    waitSession: "Warten auf Google Fotos",
  },
  huddle: {
    menu: {
      workspaces: "Workspaces",
    },
  },
  nft: {
    menu: {
      myAssets: "Meine Vermögenswerte",
      owner: "Eigentümeradresse",
    },
    assets: {
      button: "Anzeigen",
    },
  },
  files: {
    one: "%n Datei",
    other: "%n Dateien",
  },
  list: {
    table: {
      title: "Name",
      size: "Größe",
    },
  },
  search: {
    empty: "Ordner ist leer",
    noResult: "Keine Ergebnisse für",
    retry: "Bitte geben Sie die Suchanfrage ein",
    placeholder: "Suche",
    clear: "Löschen",
  },
};

l10n.date.de = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mär",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dez",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
