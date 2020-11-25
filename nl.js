l10n.translations.nl = {
  logout: 'Uitloggen',
  error: {
    a: 'Er ging iets mis.',
    b: 'ververs',
    c: 'Hier zijn enkele technische details:'
  },
  sourceName: {
    gdrive: 'Google Drive',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    vk: 'VK',
    box: 'Box',
    evernote: 'Evernote',
    onedrive: 'OneDrive',
    skydrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos'
  },
  login: {
    title: 'Upload een bestand van %source',
    lineA: {
      onedrive: 'Upload vanuit je OneDrive',
      gdrive: 'Upload vanuit je Google Drive',
      dropbox: 'Upload vanuit je Dropbox',
      box: 'Upload vanuit je Box account',
      evernote: 'Upload vanuit Evernote',
      instagram: 'Upload vanuit Instagram foto\'s',
      flickr: 'Upload vanuit je Flickr foto\'s',
      facebook: 'Upload vanuit je Facebook foto\'s',
      vk: 'Upload vanuit vKontakte',
      gphotos: 'Upload vanuit je Google Photos'
    },
    lineB: 'Login om je bestanden te kunnen zien.',
    button: 'Maak verbinding met %source',
    facebookButton: 'Doorgaan met Facebook',
    note: 'Er wordt een verbinding gelegd met je %source account.',
    cookieWarning: 'Je hebt cookies van derden in je browser geblokkeerd. Voor autorisatie zijn minimaal cookies noodzakelijk voor het domein <code>social.uploadcare.com</code>.',
    cookieRetry: 'Ik heb de blokkade op de cookies opgeheven en wil het nogmaals proberen.'
  },
  pagination: {
    loading: 'Items worden geladen..',
    loadMore: 'Meer items..',
    failed: {
      a: 'Laden mislukt.',
      b: 'Probeer opnieuw'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Mijn bestanden',
      team: 'Teambestanden'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Mijn foto\'s',
    },
  },
  onedrive: {
    menu: {
      myFiles: 'Mijn bestanden',
      shared: 'Delt med mig',
      sharepoint: 'SharePoint',
      myDrives: 'Mijn drives',
      groups: 'Mijn groepen'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Mijn bestanden',
      shared: 'Delt med mig',
      starred: 'Met ster',
      search: 'Zoeken'
    },
    search: {
      placeholder: 'Zoek naar bestanden',
      button: 'Zoeken'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Mijn albums',
      likedPages: 'Pagina\'s'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Mijn albums',
      page: 'Profiel foto\'s',
      withMe: 'Foto\'s van mij',
      saved: 'Opgeslagen foto\'s',
      myFriends: 'Mijn vrienden',
      docs: 'Mijn documenten'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Alle documenten',
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Zoeken'
    },
    search: {
      placeholder: 'Zoek binnen je notes',
      button: 'Zoeken'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Stream',
      myAlbums: 'Albums',
      myFavorites: 'Favorieten',
      follows: 'Volgers'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albums',
      myPhotos: 'Foto\'s'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Werkruimte'
    }
  },
  files: {
    one: '%n bestand',
    other: '%n bestanden'
  },
  list: {
    table: {
      title: 'Bestandsnaam',
      size: 'Grootte'
    }
  }
};

l10n.pluralize.nl = function (n) {
    return n === 1 ? 'one' : 'other';
};


l10n.date.nl = function(d) {
  var months = ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun',
                'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
