l10n.translations.et = {
  logout: 'Logi välja',
  disconnect: 'Ühenda lahti %source',
  error: {
    a: 'Midagi läks valesti. Palun',
    b: 'laadige uuesti',
    c: 'Siin on mõned tehnilised üksikasjad:'
  },
  sourceName: {
    gdrive: 'Google Drive',
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
    gphotos: 'Google Photos',
    nft: 'NFT'
  },
  login: {
    title: 'Laadige fail üles %source',
    lineA: {
      onedrive: 'Hankige failid oma OneDrive kontolt.',
      gdrive: 'Hankige failid oma Google kontolt.',
      dropbox: 'Hankige failid oma Dropbox kontolt.',
      box: 'Hankige failid oma Box kontolt.',
      evernote: 'Hankige failid oma Evernote kontolt.',
      instagram: 'Hankige oma fotod.',
      flickr: 'Hankige oma või oma sõprade fotod.',
      facebook: 'Hankige pildid oma albumitest.',
      vk: 'Hankige fotod ja dokumendid oma kontolt.',
      gphotos: 'Hankige fotod oma Google Photos kontolt.',
      nft: 'Hankige failid oma NFT varadest.'
    },
    lineB: 'Me mängime kenasti. Sa pead lihtsalt sisse logima.',
    button: 'Ühenda %source',
    facebookButton: 'Jätka Facebookiga',
    note: 'Avame uue lehe, et ühendada oma %source konto.',
    cookieWarning: 'Olete oma brauseris blokeerinud kolmanda osapoole küpsised. ' +
      'Autoriseerimine nõuab kolmanda osapoole küpsiseid vähemalt domeeni ' +
      '<code>social.uploadcare.com</code> jaoks.',
    cookieRetry: "Olen küpsised blokeeringust vabastanud ja tahan uuesti proovida."
  },
  pagination: {
    loading: 'Laadin rohkem üksusi...',
    loadMore: 'Laadi rohkem',
    failed: {
      a: 'Laadimine ebaõnnestus.',
      b: 'Proovi uuesti'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Minu failid',
      team: 'Meeskonna failid',
      search: 'Otsi faile'
    },
    search: {
      placeholder: 'Otsi faile',
      button: 'Otsi faile',
      clear: "Tühjenda"
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Minu fotod',
    }
  },
  onedrive: {
    menu: {
        myFiles: 'Minu failid',
        shared: 'Jagatud minuga',
        sharepoint: 'SharePoint',
        myDrives: 'Minu kettad',
        groups: 'Minu grupid'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Minu failid',
      shared: 'Jagatud minuga',
      starred: 'Tärniga märgitud',
      search: 'Otsi',
      teamDrives: 'Meeskonna kettad'
    },
    search: {
      placeholder: 'Otsi faile',
      button: 'Otsi'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Minu albumid',
      likedPages: 'Lehed'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Minu albumid',
      page: 'Profiilipildid',
      withMe: 'Fotod minuga',
      saved: 'Salvestatud fotod',
      myFriends: 'Minu sõbrad',
      docs: 'Minu dokumendid'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Kõik märkmed',
      notebooks: 'Märkmikud',
      tags: 'Sildid',
      search: 'Otsi'
    },
    search: {
      placeholder: 'Otsi märkmeid',
      button: 'Otsi'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Fotovoog',
      myAlbums: 'Albumid',
      myFavorites: 'Lemmikud',
      follows: 'Jälgimised'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albumid',
      myPhotos: 'Fotod'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Tööruumid'
    }
  },
  nft: {
    menu: {
      myAssets: 'Minu varad',
      owner: 'Omaniku aadress'
    },
    assets: {
      button: 'Näita'
    }
  },
  search: {
    empty: "Kaust on tühi",
    noResult: "Tulemusi ei leitud",
    retry: "Palun sisestage otsingupäring",
    placeholder: "Otsi",
    clear: "Tühjenda",
  },

  files: {
    one: '%n fail',
    other: '%n faili'
  },
  list: {
    table: {
      title: 'Pealkiri',
      size: 'Suurus'
    }
  }
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.et = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date.et = function(d) {
  var months = ['Jaan', 'Veebr', 'Märts', 'Apr', 'Mai', 'Juun',
                'Juuli', 'Aug', 'Sept', 'Okt', 'Nov', 'Dets'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};