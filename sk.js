l10n.translations.sk = {
  logout: "Odhlásiť sa",
  disconnect: "Odpojiť sa od %source",
  error: {
    a: "Niečo sa pokazilo. Prosím",
    b: "obnovte",
    c: "Tu sú niektoré technické detaily:",
  },
  sourceName: {
    gdrive: "Google Disk",
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
    gphotos: "Google Fotky",
    nft: "NFT",
  },
  login: {
    title: "Nahrať súbor z %source",
    lineA: {
      onedrive: "Získajte súbory z vášho účtu OneDrive.",
      gdrive: "Získajte súbory z vášho účtu Google.",
      dropbox: "Získajte súbory z vášho účtu Dropbox.",
      box: "Získajte súbory z vášho účtu Box.",
      evernote: "Získajte súbory z vášho účtu Evernote.",
      instagram: "Získajte vaše fotografie.",
      flickr: "Získajte vaše alebo fotografie vašich priateľov.",
      facebook: "Získajte obrázky z vašich albumov.",
      vk: "Získajte fotografie a dokumenty z vášho účtu.",
      gphotos: "Získajte fotografie z vášho účtu Google Fotky.",
      nft: "Získajte súbory z vašich NFT aktív.",
    },
    lineB: "Hráme fér. Stačí sa prihlásiť.",
    button: "Pripojiť sa k %source",
    facebookButton: "Pokračovať s Facebookom",
    note: "Otvoríme novú stránku na pripojenie vášho účtu %source.",
    cookieWarning:
      "Zablokovali ste súbory cookie tretích strán vo vašom prehliadači. " +
      "Autorizácia vyžaduje súbory cookie tretích strán aspoň pre doménu " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Odblokoval som súbory cookie a chcem to skúsiť znova.",
  },
  pagination: {
    loading: "Načítavajú sa ďalšie položky...",
    loadMore: "Načítať viac",
    failed: {
      a: "Načítanie zlyhalo.",
      b: "Skúste znova",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Súbory",
      team: "Tímové súbory",
      search: "Hľadať súbory",
    },
    search: {
      placeholder: "Hľadať súbory",
      button: "Hľadať súbory",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Moje fotografie",
    },
    deprecated: {
      title: "%source už nie je k dispozícii",
      description:
        "Meta ukončila prístup k %source pre aplikácie tretích strán.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Moje súbory",
      shared: "Zdieľané so mnou",
      sharepoint: "SharePoint",
      myDrives: "Moje disky",
      groups: "Moje skupiny",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Moje súbory",
      shared: "Zdieľané so mnou",
      starred: "Obľúbené",
      search: "Hľadať",
      teamDrives: "Tímové disky",
    },
    search: {
      placeholder: "Hľadať súbory",
      button: "Hľadať",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Moje albumy",
      likedPages: "Stránky",
    },
  },
  vk: {
    menu: {
      myAlbums: "Moje albumy",
      page: "Profilové fotografie",
      withMe: "Fotografie so mnou",
      saved: "Uložené fotografie",
      myFriends: "Moji priatelia",
      docs: "Moje dokumenty",
    },
  },
  evernote: {
    menu: {
      allNotes: "Všetky poznámky",
      notebooks: "Zápisníky",
      tags: "Štítky",
      search: "Hľadať",
    },
    search: {
      placeholder: "Hľadať poznámky",
      button: "Hľadať",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Albumy",
      myFavorites: "Obľúbené",
      follows: "Sledovania",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Albumy",
      myPhotos: "Fotografie",
    },
    openPicker: "Otvoriť Google Fotky",
    waitSession: "Čaká sa na Google Fotky",
    reVerificationMessagePart1: "Znovu overujeme kvôli zmenám v politike Google. Ak sa chcete pripojiť k Google Photos, na otvorenej stránke kliknite",
    reVerificationMessagePart2: "Rozšírené → Prejsť na Uploadcare (nebezpečné)",
  },
  huddle: {
    menu: {
      workspaces: "Pracovné priestory",
    },
  },
  nft: {
    menu: {
      myAssets: "Moje aktíva",
      owner: "Adresa vlastníka",
    },
    assets: {
      button: "Zobraziť",
    },
  },

  search: {
    empty: "Priečinok je prázdny",
    noResult: "Žiadne výsledky pre",
    retry: "Prosím, zadajte hľadaný výraz",
    placeholder: "Hľadať",
    clear: "Vymazať",
  },

  files: {
    one: "%n súbor",
    other: "%n súborov",
  },
  list: {
    table: {
      title: "Názov",
      size: "Veľkosť",
    },
  },
};

// Pravidlá pre množné čísla prevzaté z:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.sk = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.sk = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Máj",
    "Jún",
    "Júl",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
