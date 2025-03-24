l10n.translations.ca = {
  logout: "Tanca la sessió",
  disconnect: "Desconnecta de %source",
  error: {
    a: "Alguna cosa ha anat malament. Si us plau",
    b: "torna a carregar",
    c: "Aquí tens alguns detalls tècnics:",
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
    gphotos: "Google Fotos",
    nft: "NFT",
  },
  login: {
    title: "Carrega un fitxer des de %source",
    lineA: {
      onedrive: "Obteniu fitxers del vostre compte de OneDrive.",
      gdrive: "Obteniu fitxers del vostre compte de Google.",
      dropbox: "Obteniu fitxers del vostre compte de Dropbox.",
      box: "Obteniu fitxers del vostre compte de Box.",
      evernote: "Obteniu fitxers del vostre compte de Evernote.",
      instagram: "Obteniu les vostres fotos.",
      flickr: "Obteniu les vostres fotos o les dels vostres amics.",
      facebook: "Obteniu imatges dels vostres àlbums.",
      vk: "Obteniu fotos i documents del vostre compte.",
      gphotos: "Obteniu fotos del vostre compte de Google Fotos.",
      nft: "Obteniu fitxers dels vostres actius NFT.",
    },
    lineB: "Ens portem bé. Només cal que inicieu sessió.",
    button: "Connecta a %source",
    facebookButton: "Continua amb Facebook",
    note: "Obrirem una nova pàgina per connectar el vostre compte de %source.",
    cookieWarning:
      "Heu bloquejat les galetes de tercers al vostre navegador. " +
      "L'autorització requereix galetes de tercers almenys per al domini " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "He desbloquejat les galetes i vull tornar-ho a provar.",
  },
  pagination: {
    loading: "Carregant més elements...",
    loadMore: "Carrega més",
    failed: {
      a: "La càrrega ha fallat.",
      b: "Torna-ho a provar",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Fitxers",
      team: "Fitxers de l'equip",
      search: "Cerca fitxers",
    },
    search: {
      placeholder: "Cerca fitxers",
      button: "Cerca fitxers",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Les meves fotos",
    },
    deprecated: {
      title: "%source ja no està disponible",
      description:
        "Meta ha interromput l'accés a %source per a aplicacions de tercers.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Els meus fitxers",
      shared: "Compartit amb mi",
      sharepoint: "SharePoint",
      myDrives: "Els meus discs",
      groups: "Els meus grups",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Els meus fitxers",
      shared: "Compartit amb mi",
      starred: "Destacats",
      search: "Cerca",
      teamDrives: "Discs de l'equip",
    },
    search: {
      placeholder: "Cerca fitxers",
      button: "Cerca",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Els meus àlbums",
      likedPages: "Pàgines",
    },
  },
  vk: {
    menu: {
      myAlbums: "Els meus àlbums",
      page: "Fotos de perfil",
      withMe: "Fotos amb mi",
      saved: "Fotos desades",
      myFriends: "Els meus amics",
      docs: "Els meus documents",
    },
  },
  evernote: {
    menu: {
      allNotes: "Totes les notes",
      notebooks: "Quaderns",
      tags: "Etiquetes",
      search: "Cerca",
    },
    search: {
      placeholder: "Cerca notes",
      button: "Cerca",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Àlbums",
      myFavorites: "Favorits",
      follows: "Seguint",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Àlbums",
      myPhotos: "Fotos",
    },
    openPicker: "Obre Google Fotos",
    waitSession: "Esperant Google Fotos",
  },
  huddle: {
    menu: {
      workspaces: "Espais de treball",
    },
  },
  nft: {
    menu: {
      myAssets: "Els meus actius",
      owner: "Adreça del propietari",
    },
    assets: {
      button: "Mostra",
    },
  },

  search: {
    empty: "La carpeta està buida",
    noResult: "No hi ha resultats per a",
    retry: "Si us plau, introduïu la consulta de cerca",
    placeholder: "Cerca",
    clear: "Esborra",
  },

  files: {
    one: "%n fitxer",
    other: "%n fitxers",
  },
  list: {
    table: {
      title: "Títol",
      size: "Mida",
    },
  },
};

// Regles de pluralització preses de:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.ca = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.ca = function (d) {
  var months = [
    "Gen",
    "Feb",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Oct",
    "Nov",
    "Des",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
