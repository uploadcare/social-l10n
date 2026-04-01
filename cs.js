l10n.translations.cs = {
  logout: "Odhlásit se",
  disconnect: "Odpojit od %source",
  error: {
    a: "Něco se pokazilo. Prosím",
    b: "obnovte",
    c: "Zde jsou některé technické detaily:",
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
    title: "Nahrát soubor z %source",
    lineA: {
      onedrive: "Získejte soubory z vašeho účtu OneDrive.",
      gdrive: "Získejte soubory z vašeho účtu Google.",
      ngdrive: "Získejte soubory z vašeho účtu Google.",
      dropbox: "Získejte soubory z vašeho účtu Dropbox.",
      box: "Získejte soubory z vašeho účtu Box.",
      evernote: "Získejte soubory z vašeho účtu Evernote.",
      instagram: "Získejte vaše fotografie.",
      flickr: "Získejte vaše nebo přátelské fotografie.",
      facebook: "Získejte obrázky z vašich alb.",
      vk: "Získejte fotografie a dokumenty z vašeho účtu.",
      gphotos: "Získejte fotografie z vašeho účtu Google Photos.",
      nft: "Získejte soubory z vašich NFT aktiv.",
    },
    lineB: "Hrajeme fér. Stačí se přihlásit.",
    button: "Připojit k %source",
    facebookButton: "Pokračovat s Facebookem",
    note: "Otevřeme novou stránku pro připojení vašeho účtu %source.",
    cookieWarning:
      "Ve vašem prohlížeči jste zablokovali soubory cookie třetích stran. " +
      "Autorizace vyžaduje soubory cookie třetích stran alespoň pro doménu " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Odblokoval jsem soubory cookie a chci to zkusit znovu.",
  },
  pagination: {
    loading: "Načítání dalších položek...",
    loadMore: "Načíst více",
    failed: {
      a: "Načítání selhalo.",
      b: "Zkuste to znovu",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Soubory",
      team: "Týmové soubory",
      search: "Hledat soubory",
    },
    search: {
      placeholder: "Hledat soubory",
      button: "Hledat soubory",
    },
    openChooser: "Otevřít Dropbox",
  },
  instagram: {
    menu: {
      myPhotos: "Moje fotografie",
    },
    deprecated: {
      title: "%source již není k dispozici",
      description:
        "Meta ukončila přístup k %source pro aplikace třetích stran.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Moje soubory",
      shared: "Sdíleno se mnou",
      sharepoint: "SharePoint",
      myDrives: "Moje disky",
      groups: "Moje skupiny",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Moje soubory",
      shared: "Sdíleno se mnou",
      starred: "S hvězdičkou",
      search: "Hledat",
      teamDrives: "Týmové disky",
    },
    search: {
      placeholder: "Hledat soubory",
      button: "Hledat",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Moje soubory",
      shared: "Sdíleno se mnou",
      starred: "S hvězdičkou",
      search: "Hledat",
      teamDrives: "Týmové disky",
    },
    search: {
      placeholder: "Hledat soubory",
      button: "Hledat",
    },
    openPicker: "Otevřít Google Drive",
  },
  facebook: {
    menu: {
      myAlbums: "Moje alba",
      likedPages: "Stránky",
    },
  },
  vk: {
    menu: {
      myAlbums: "Moje alba",
      page: "Profilové obrázky",
      withMe: "Fotografie se mnou",
      saved: "Uložené fotografie",
      myFriends: "Moji přátelé",
      docs: "Moje dokumenty",
    },
  },
  evernote: {
    menu: {
      allNotes: "Všechny poznámky",
      notebooks: "Poznámkové bloky",
      tags: "Štítky",
      search: "Hledat",
    },
    search: {
      placeholder: "Hledat poznámky",
      button: "Hledat",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Alba",
      myFavorites: "Oblíbené",
      follows: "Sledování",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Alba",
      myPhotos: "Fotografie",
    },
    openPicker: "Otevřít Google Fotky",
    waitSession: "Čekání na Google Fotky",
  },
  huddle: {
    menu: {
      workspaces: "Pracovní prostory",
    },
  },
  nft: {
    menu: {
      myAssets: "Moje aktiva",
      owner: "Adresa vlastníka",
    },
    assets: {
      button: "Zobrazit",
    },
  },

  search: {
    empty: "Složka je prázdná",
    noResult: "Žádné výsledky pro",
    retry: "Zadejte prosím hledaný dotaz",
    placeholder: "Hledat",
    clear: "Vymazat",
  },

  files: {
    one: "%n soubor",
    other: "%n souborů",
  },
  list: {
    table: {
      title: "Název",
      size: "Velikost",
    },
  },
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.cs = function (n) {
  return n === 1 ? "one" : n >= 2 && n <= 4 ? "few" : "other";
};

l10n.date.cs = function (d) {
  var months = [
    "Led",
    "Úno",
    "Bře",
    "Dub",
    "Kvě",
    "Čvn",
    "Čvc",
    "Srp",
    "Zář",
    "Říj",
    "Lis",
    "Pro",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
