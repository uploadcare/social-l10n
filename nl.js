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
    skydrive: 'OneDrive',
    flickr: 'Flickr'
  },
  login: {
    title: 'Upload een bestand van %source',
    lineA: {
      gdrive: 'Upload vanuit je Google Drive',
      dropbox: 'Upload vanuit je Dropbox',
      box: 'Upload vanuit je Box account',
      evernote: 'Upload vanuit Evernote',
      instagram: 'Upload vanuit Instagram foto\'s',
      flickr: 'Upload vanuit je Flickr foto\'s',
      facebook: 'Upload vanuit je Facebook foto\'s',
      vk: 'Upload vanuit vKontakte'
    },
    lineB: 'Login om je bestanden te kunnen zien.',
    button: 'Maak verbinding met %source',
    note: 'Er wordt een verbinding gelegd met je %source account.'
  },
  pagination: {
    loading: 'Items worden geladen..',
    loadMore: 'Meer items..',
    failed: {
      a: 'Laden mislukt.',
      b: 'Probeer opnieuw'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Mijn foto\'s',
      myLikes: 'Mijn likes',
      myFollowings: 'Mijn volgers',
      search: 'Zoeken'
    },
    search: {
      placeholder: 'Zoek op hashtag',
      button: 'Zoeken'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Mijn bestanden',
      starred: 'Met ster'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Mijn albums',
      myFriends: 'Mijn vrienden'
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
  files: { // pluralization example
    one: '1 bestand',
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
