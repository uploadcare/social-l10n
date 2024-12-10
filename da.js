l10n.translations.da = {
  logout: 'Log ud',
  disconnect: 'Afbryd fra %source',
  error: {
    a: 'Noget gik galt. Venligst',
    b: 'genindlæs',
    c: 'Her er nogle tekniske detaljer:'
  },
  sourceName: {
    gdrive: 'Google Drev',
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
    gphotos: 'Google Fotos',
    nft: 'NFT',
    unsplash: 'Unsplash'
  },
  login: {
    title: 'Upload en fil fra %source',
    lineA: {
      onedrive: 'Hent filer fra din OneDrive-konto.',
      gdrive: 'Hent filer fra din Google-konto.',
      dropbox: 'Hent filer fra din Dropbox-konto.',
      box: 'Hent filer fra din Box-konto.',
      evernote: 'Hent filer fra din Evernote-konto.',
      instagram: 'Hent dine fotos.',
      flickr: 'Hent dine eller dine venners fotos.',
      facebook: 'Hent billeder fra dine albums.',
      vk: 'Hent fotos og dokumenter fra din konto.',
      gphotos: 'Hent fotos fra din Google Fotos-konto.',
      nft: 'Hent filer fra dine NFT-aktiver.'
    },
    lineB: 'Vi spiller pænt. Du skal bare logge ind.',
    button: 'Forbind til %source',
    facebookButton: 'Fortsæt med Facebook',
    note: 'Vi åbner en ny side for at forbinde din %source-konto.',
    cookieWarning: 'Du har blokeret tredjepartscookies i din browser. ' +
      'Autorisation kræver tredjepartscookies mindst for domænet ' +
      '<code>social.uploadcare.com</code>.',
    cookieRetry: "Jeg har fjernet blokeringen af cookies og vil prøve igen."
  },
  pagination: {
    loading: 'Indlæser flere elementer...',
    loadMore: 'Indlæs mere',
    failed: {
      a: 'Indlæsning mislykkedes.',
      b: 'Prøv igen'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Mine filer',
      team: 'Teamfiler',
      search: 'Søg filer'
    },
    search: {
      placeholder: 'Søg filer',
      button: 'Søg filer',
      clear: "Ryd"
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Mine fotos',
    }
  },
  onedrive: {
    menu: {
        myFiles: 'Mine filer',
        shared: 'Delt med mig',
        sharepoint: 'SharePoint',
        myDrives: 'Mine drev',
        groups: 'Mine grupper'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Mine filer',
      shared: 'Delt med mig',
      starred: 'Stjernemarkeret',
      search: 'Søg',
      teamDrives: 'Teamdrev'
    },
    search: {
      placeholder: 'Søg filer',
      button: 'Søg'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Mine albums',
      likedPages: 'Sider'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Mine albums',
      page: 'Profilbilleder',
      withMe: 'Fotos med mig',
      saved: 'Gemte fotos',
      myFriends: 'Mine venner',
      docs: 'Mine dokumenter'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Alle noter',
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Søg'
    },
    search: {
      placeholder: 'Søg noter',
      button: 'Søg'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Fotostream',
      myAlbums: 'Albums',
      myFavorites: 'Favoritter',
      follows: 'Følger'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albums',
      myPhotos: 'Fotos'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Arbejdsområder'
    }
  },
  nft: {
    menu: {
      myAssets: 'Mine aktiver',
      owner: 'Ejeradresse'
    },
    assets: {
      button: 'Vis'
    }
  },
  unsplash: {
    menu: {
      editorial: 'Redaktionelt',
      search: 'Søg',
      random: 'Tilfældig'
    },
    search: {
      placeholder: 'Søg fotos',
      button: 'Søg'
    },
    filters: {
      orientation: {
        any: 'Enhver orientering',
        landscape: 'Landskab',
        portrait: 'Portræt',
        squarish: 'Kvadratisk'
      },
      content_safety: {
        any: 'Standard indholdssikkerhed',
        low: 'Lav',
        high: 'Høj'
      },
      color: {
        any: 'Enhver farve',
        black_and_white: 'Sort og hvid',
        black: 'Sort',
        white: 'Hvid',
        yellow: 'Gul',
        orange: 'Orange',
        red: 'Rød',
        purple: 'Lilla',
        magenta: 'Magenta',
        green: 'Grøn',
        teal: 'Teal',
        blue: 'Blå'
      }
    }
  },

  search: {
    empty: "Mappen er tom",
    noResult: "Ingen resultater for",
    retry: "Indtast venligst søgeforespørgslen",
  },

  files: {
    one: '%n fil',
    other: '%n filer'
  },
  list: {
    table: {
      title: 'Titel',
      size: 'Størrelse'
    }
  }
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.da = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date.da = function(d) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
                'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};