l10n.translations.nb = {
  logout: "Logg ut",
  disconnect: "Koble fra %source",
  error: {
    a: "Noe gikk galt. Vennligst",
    b: "last inn på nytt",
    c: "Her er noen tekniske detaljer:",
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
    gphotos: "Google Bilder",
    nft: "NFT",
  },
  login: {
    title: "Last opp en fil fra %source",
    lineA: {
      onedrive: "Hent filer fra din OneDrive-konto.",
      gdrive: "Hent filer fra din Google-konto.",
      dropbox: "Hent filer fra din Dropbox-konto.",
      box: "Hent filer fra din Box-konto.",
      evernote: "Hent filer fra din Evernote-konto.",
      instagram: "Hent bildene dine.",
      flickr: "Hent dine eller venners bilder.",
      facebook: "Hent bilder fra albumene dine.",
      vk: "Hent bilder og dokumenter fra kontoen din.",
      gphotos: "Hent bilder fra din Google Bilder-konto.",
      nft: "Hent filer fra dine NFT-eiendeler.",
    },
    lineB: "Vi spiller fair. Du trenger bare å logge inn.",
    button: "Koble til %source",
    facebookButton: "Fortsett med Facebook",
    note: "Vi åpner en ny side for å koble til din %source-konto.",
    cookieWarning:
      "Du har blokkert tredjepartscookies i nettleseren din. " +
      "Autorisasjon krever tredjepartscookies minst for " +
      "<code>social.uploadcare.com</code>-domenet.",
    cookieRetry: "Jeg har fjernet blokkeringen av cookies og vil prøve igjen.",
  },
  pagination: {
    loading: "Laster inn flere elementer...",
    loadMore: "Last inn mer",
    failed: {
      a: "Lasting mislyktes.",
      b: "Prøv igjen",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Filer",
      team: "Teamfiler",
      search: "Søk filer",
    },
    search: {
      placeholder: "Søk filer",
      button: "Søk",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Mine bilder",
    },
    deprecated: {
      title: "%source er ikke lenger tilgjengelig",
      description:
        "Meta har avbrutt tilgangen til %source for tredjepartsapper.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Mine filer",
      shared: "Delt med meg",
      sharepoint: "SharePoint",
      myDrives: "Mine disker",
      groups: "Mine grupper",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Mine filer",
      shared: "Delt med meg",
      starred: "Stjernemerket",
      search: "Søk",
      teamDrives: "Teamdisker",
    },
    search: {
      placeholder: "Søk filer",
      button: "Søk",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Mine album",
      likedPages: "Sider",
    },
  },
  vk: {
    menu: {
      myAlbums: "Mine album",
      page: "Profilbilder",
      withMe: "Bilder med meg",
      saved: "Lagrede bilder",
      myFriends: "Mine venner",
      docs: "Mine dokumenter",
    },
  },
  evernote: {
    menu: {
      allNotes: "Alle notater",
      notebooks: "Notatbøker",
      tags: "Tagger",
      search: "Søk",
    },
    search: {
      placeholder: "Søk notater",
      button: "Søk",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostrøm",
      myAlbums: "Album",
      myFavorites: "Favoritter",
      follows: "Følger",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Album",
      myPhotos: "Bilder",
    },
    openPicker: "Åpne Google Bilder",
    waitSession: "Venter på Google Bilder",
  },
  huddle: {
    menu: {
      workspaces: "Arbeidsområder",
    },
  },
  nft: {
    menu: {
      myAssets: "Mine eiendeler",
      owner: "Eieradresse",
    },
    assets: {
      button: "Vis",
    },
  },

  search: {
    empty: "Mappen er tom",
    noResult: "Ingen resultater for",
    retry: "Vennligst skriv inn søkespørringen",
    placeholder: "Søk",
    clear: "Tøm",
  },

  files: {
    one: "%n fil",
    other: "%n filer",
  },
  list: {
    table: {
      title: "Tittel",
      size: "Størrelse",
    },
  },
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.nb = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.nb = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Des",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
