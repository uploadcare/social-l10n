l10n.translations.is = {
  logout: "Skrá út",
  disconnect: "Aftengja frá %source",
  error: {
    a: "Eitthvað fór úrskeiðis. Vinsamlegast",
    b: "endurhlaða",
    c: "Hér eru nokkrar tæknilegar upplýsingar:",
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
    title: "Hlaða upp skrá frá %source",
    lineA: {
      onedrive: "Sækja skrár frá OneDrive reikningnum þínum.",
      gdrive: "Sækja skrár frá Google reikningnum þínum.",
      ngdrive: "Sækja skrár frá Google reikningnum þínum.",
      dropbox: "Sækja skrár frá Dropbox reikningnum þínum.",
      box: "Sækja skrár frá Box reikningnum þínum.",
      evernote: "Sækja skrár frá Evernote reikningnum þínum.",
      instagram: "Sækja myndirnar þínar.",
      flickr: "Sækja myndirnar þínar eða vina þinna.",
      facebook: "Sækja myndir úr albúmunum þínum.",
      vk: "Sækja myndir og skjöl frá reikningnum þínum.",
      gphotos: "Sækja myndir frá Google Photos reikningnum þínum.",
      nft: "Sækja skrár frá NFT eignum þínum.",
    },
    lineB: "Við spilum vel. Þú þarft bara að skrá þig inn.",
    button: "Tengjast %source",
    facebookButton: "Halda áfram með Facebook",
    note: "Við opnum nýja síðu til að tengja %source reikninginn þinn.",
    cookieWarning:
      "Þú hefur lokað fyrir vafrakökur frá þriðja aðila í vafranum þínum. " +
      "Heimild krefst vafrakaka frá þriðja aðila að minnsta kosti fyrir lénið " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Ég hef opnað fyrir vafrakökur og vil reyna aftur.",
  },
  pagination: {
    loading: "Hleð fleiri atriði...",
    loadMore: "Hlaða meira",
    failed: {
      a: "Hleðsla mistókst.",
      b: "Reyna aftur",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Skrárnar mínar",
      team: "Liðsskrár",
      search: "Leita að skrám",
    },
    search: {
      placeholder: "Leita að skrám",
      button: "Leita að skrám",
    },
    openChooser: "Opnaðu Dropbox",
  },
  instagram: {
    menu: {
      myPhotos: "Myndirnar mínar",
    },
    deprecated: {
      title: "%source er ekki lengur í boði",
      description:
        "Meta hefur hætt aðgangi að %source fyrir forrit frá þriðja aðila.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Skrárnar mínar",
      shared: "Deilt með mér",
      sharepoint: "SharePoint",
      myDrives: "Drifin mín",
      groups: "Hóparnir mínir",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Skrárnar mínar",
      shared: "Deilt með mér",
      starred: "Stjörnumerkt",
      search: "Leita",
      teamDrives: "Liðsdrif",
    },
    search: {
      placeholder: "Leita að skrám",
      button: "Leita",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Skrárnar mínar",
      shared: "Deilt með mér",
      starred: "Stjörnumerkt",
      search: "Leita",
      teamDrives: "Liðsdrif",
    },
    search: {
      placeholder: "Leita að skrám",
      button: "Leita",
    },
    openPicker: "Opnaðu Google Drive",
    fileUnavailable: "Ekki er hægt að opna þessa skrá",
  },
  facebook: {
    menu: {
      myAlbums: "Albúmin mín",
      likedPages: "Síður",
    },
  },
  vk: {
    menu: {
      myAlbums: "Albúmin mín",
      page: "Prófílmyndir",
      withMe: "Myndir með mér",
      saved: "Vistaðar myndir",
      myFriends: "Vinir mínir",
      docs: "Skjölin mín",
    },
  },
  evernote: {
    menu: {
      allNotes: "Allar athugasemdir",
      notebooks: "Minnisbækur",
      tags: "Merki",
      search: "Leita",
    },
    search: {
      placeholder: "Leita að athugasemdum",
      button: "Leita",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Myndastraumur",
      myAlbums: "Albúm",
      myFavorites: "Uppáhalds",
      follows: "Fylgjendur",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Albúm",
      myPhotos: "Myndir",
    },
    openPicker: "Opnaðu Google Myndir",
    waitSession: "Bíð eftir Google Myndir",
  },
  huddle: {
    menu: {
      workspaces: "Vinnusvæði",
    },
  },
  nft: {
    menu: {
      myAssets: "Eignir mínar",
      owner: "Eigandaheimilisfang",
    },
    assets: {
      button: "Sýna",
    },
  },

  search: {
    empty: "Mappan er tóm",
    noResult: "Engar niðurstöður fyrir",
    retry: "Vinsamlegast sláðu inn leitarfyrirspurnina",
    placeholder: "Leita",
    clear: "Hreinsa",
  },

  files: {
    one: "%n skrá",
    other: "%n skrár",
  },
  list: {
    table: {
      title: "Titill",
      size: "Stærð",
    },
  },
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.is = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.is = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maí",
    "Jún",
    "Júl",
    "Ágú",
    "Sep",
    "Okt",
    "Nóv",
    "Des",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
