l10n.translations.sv = {
  logout: "Logga ut",
  disconnect: "Koppla från %source",
  error: {
    a: "Något gick fel. Vänligen",
    b: "ladda om",
    c: "Här är några tekniska detaljer:",
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
    gphotos: "Google Foton",
    nft: "NFT",
  },
  login: {
    title: "Ladda upp en fil från %source",
    lineA: {
      onedrive: "Hämta filer från ditt OneDrive-konto.",
      gdrive: "Hämta filer från ditt Google-konto.",
      ngdrive: "Hämta filer från ditt Google-konto.",
      dropbox: "Hämta filer från ditt Dropbox-konto.",
      box: "Hämta filer från ditt Box-konto.",
      evernote: "Hämta filer från ditt Evernote-konto.",
      instagram: "Hämta dina foton.",
      flickr: "Hämta dina eller dina vänners foton.",
      facebook: "Hämta bilder från dina album.",
      vk: "Hämta foton och dokument från ditt konto.",
      gphotos: "Hämta foton från ditt Google Foton-konto.",
      nft: "Hämta filer från dina NFT-tillgångar.",
    },
    lineB: "Vi spelar schysst. Du behöver bara logga in.",
    button: "Anslut till %source",
    facebookButton: "Fortsätt med Facebook",
    note: "Vi kommer att öppna en ny sida för att ansluta ditt %source-konto.",
    cookieWarning:
      "Du har blockerat tredjepartscookies i din webbläsare. " +
      "Auktorisering kräver tredjepartscookies åtminstone för domänen " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Jag har avblockerat cookies och vill försöka igen.",
  },
  pagination: {
    loading: "Laddar fler objekt...",
    loadMore: "Ladda mer",
    failed: {
      a: "Laddningen misslyckades.",
      b: "Försök igen",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Filer",
      team: "Teamfiler",
      search: "Sök filer",
    },
    search: {
      placeholder: "Sök filer",
      button: "Sök filer",
    },
    openChooser: "Öppna Dropbox",
  },
  instagram: {
    menu: {
      myPhotos: "Mina foton",
    },
    deprecated: {
      title: "%source är inte längre tillgänglig",
      description:
        "Meta har avbrutit åtkomsten till %source för tredjepartsappar.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Mina filer",
      shared: "Delat med mig",
      sharepoint: "SharePoint",
      myDrives: "Mina enheter",
      groups: "Mina grupper",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Mina filer",
      shared: "Delat med mig",
      starred: "Stjärnmärkta",
      search: "Sök",
      teamDrives: "Team-enheter",
    },
    search: {
      placeholder: "Sök filer",
      button: "Sök",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Mina filer",
      shared: "Delat med mig",
      starred: "Stjärnmärkta",
      search: "Sök",
      teamDrives: "Team-enheter",
    },
    search: {
      placeholder: "Sök filer",
      button: "Sök",
    },
    openPicker: "Öppna Google Drive",
  },
  facebook: {
    menu: {
      myAlbums: "Mina album",
      likedPages: "Sidor",
    },
  },
  vk: {
    menu: {
      myAlbums: "Mina album",
      page: "Profilbilder",
      withMe: "Foton med mig",
      saved: "Sparade foton",
      myFriends: "Mina vänner",
      docs: "Mina dokument",
    },
  },
  evernote: {
    menu: {
      allNotes: "Alla anteckningar",
      notebooks: "Anteckningsböcker",
      tags: "Taggar",
      search: "Sök",
    },
    search: {
      placeholder: "Sök anteckningar",
      button: "Sök",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Fotoström",
      myAlbums: "Album",
      myFavorites: "Favoriter",
      follows: "Följer",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Album",
      myPhotos: "Foton",
    },
    openPicker: "Öppna Google Foto",
    waitSession: "Väntar på Google Foto",
  },
  huddle: {
    menu: {
      workspaces: "Arbetsytor",
    },
  },
  nft: {
    menu: {
      myAssets: "Mina tillgångar",
      owner: "Ägaradress",
    },
    assets: {
      button: "Visa",
    },
  },

  search: {
    empty: "Mappen är tom",
    noResult: "Inga resultat för",
    retry: "Vänligen ange sökfrågan",
    placeholder: "Sök",
    clear: "Rensa",
  },

  files: {
    one: "%n fil",
    other: "%n filer",
  },
  list: {
    table: {
      title: "Titel",
      size: "Storlek",
    },
  },
};

// Pluraliseringsregler tagna från:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.sv = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.sv = function (d) {
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
