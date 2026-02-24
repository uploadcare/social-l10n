l10n.translations.sr = {
  logout: "Odjavi se",
  disconnect: "Odspoji se od %source",
  error: {
    a: "Nešto je pošlo po zlu. Molimo",
    b: "ponovo učitajte",
    c: "Evo nekih tehničkih detalja:",
  },
  sourceName: {
    gdrive: "Google Disk",
    ngdrive: "Google Disk",
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
    gphotos: "Google Fotografije",
    nft: "NFT",
  },
  login: {
    title: "Otpremite datoteku sa %source",
    lineA: {
      onedrive: "Preuzmite datoteke sa vašeg OneDrive naloga.",
      gdrive: "Preuzmite datoteke sa vašeg Google naloga.",
      ngdrive: "Preuzmite datoteke sa vašeg Google naloga.",
      dropbox: "Preuzmite datoteke sa vašeg Dropbox naloga.",
      box: "Preuzmite datoteke sa vašeg Box naloga.",
      evernote: "Preuzmite datoteke sa vašeg Evernote naloga.",
      instagram: "Preuzmite vaše fotografije.",
      flickr: "Preuzmite vaše ili fotografije vaših prijatelja.",
      facebook: "Preuzmite slike iz vaših albuma.",
      vk: "Preuzmite fotografije i dokumente sa vašeg naloga.",
      gphotos: "Preuzmite fotografije sa vašeg Google Fotografije naloga.",
      nft: "Preuzmite datoteke sa vaših NFT sredstava.",
    },
    lineB: "Igramo pošteno. Samo se trebate prijaviti.",
    button: "Poveži se sa %source",
    somethingWentWrong: "Nešto je pošlo naopako?",
    retry: "Pokušaj ponovo",
    facebookButton: "Nastavi sa Facebookom",
    note: "Otvorit ćemo novu stranicu za povezivanje vašeg %source naloga.",
    cookieWarning:
      "Blokirali ste kolačiće trećih strana u vašem pretraživaču. " +
      "Autorizacija zahteva kolačiće trećih strana barem za domen " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Odblokirao sam kolačiće i želim pokušati ponovo.",
  },
  pagination: {
    loading: "Učitavanje više stavki...",
    loadMore: "Učitaj više",
    failed: {
      a: "Učitavanje nije uspelo.",
      b: "Pokušajte ponovo",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Datoteke",
      team: "Tim datoteke",
      search: "Pretraži datoteke",
    },
    search: {
      placeholder: "Pretraži datoteke",
      button: "Pretraži datoteke",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Moje fotografije",
    },
    deprecated: {
      title: "%source više nije dostupan",
      description:
        "Meta je prekinula pristup %source za aplikacije trećih strana.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Moje datoteke",
      shared: "Deljeno sa mnom",
      sharepoint: "SharePoint",
      myDrives: "Moji diskovi",
      groups: "Moje grupe",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Moje datoteke",
      shared: "Deljeno sa mnom",
      starred: "Zvezdano",
      search: "Pretraži",
      teamDrives: "Tim diskovi",
    },
    search: {
      placeholder: "Pretraži datoteke",
      button: "Pretraži",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Moje datoteke",
      shared: "Deljeno sa mnom",
      starred: "Zvezdano",
      search: "Pretraži",
      teamDrives: "Tim diskovi",
    },
    search: {
      placeholder: "Pretraži datoteke",
      button: "Pretraži",
    },
    openPicker: "Otvorite Google Drive",
  },
  facebook: {
    menu: {
      myAlbums: "Moji albumi",
      likedPages: "Stranice",
    },
  },
  vk: {
    menu: {
      myAlbums: "Moji albumi",
      page: "Profilne fotografije",
      withMe: "Fotografije sa mnom",
      saved: "Sačuvane fotografije",
      myFriends: "Moji prijatelji",
      docs: "Moji dokumenti",
    },
  },
  evernote: {
    menu: {
      allNotes: "Sve beleške",
      notebooks: "Sveske",
      tags: "Oznake",
      search: "Pretraži",
    },
    search: {
      placeholder: "Pretraži beleške",
      button: "Pretraži",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Albumi",
      myFavorites: "Omiljeno",
      follows: "Pratioci",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Albumi",
      myPhotos: "Fotografije",
    },
    openPicker: "Отворите Google Photos",
    waitSession: "Чекање на Google Photos",
  },
  huddle: {
    menu: {
      workspaces: "Radni prostori",
    },
  },
  nft: {
    menu: {
      myAssets: "Moja sredstva",
      owner: "Adresa vlasnika",
    },
    assets: {
      button: "Prikaži",
    },
  },

  search: {
    empty: "Folder je prazan",
    noResult: "Nema rezultata za",
    retry: "Molimo unesite upit za pretragu",
    placeholder: "Pretraži",
    clear: "Očisti",
  },

  files: {
    one: "%n datoteka",
    other: "%n datoteka",
  },
  list: {
    table: {
      title: "Naslov",
      size: "Veličina",
    },
  },
};

// Pravila za množinu preuzeta sa:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.sr = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.sr = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Avg",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
