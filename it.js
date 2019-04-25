l10n.translations.it = {
  logout: 'Esci',
  error: {
    a: 'Si è verificato un problema. Si prega',
    b: 'ricarica',
    c: 'Alcuni dettagli tecnici:'
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
    title: 'Carica un file da %source',
    lineA: {
      gdrive: 'Ottieni file dal tuo account Google.',
      dropbox: 'Ottieni file dal tuo account Dropbox.',
      box: 'Ottieni file dal tuo account Dropbox.',
      evernote: 'Ottieni file dal tuo account Evernote.',
      instagram: 'Ottieni le tue foto o quelle dei tuoi amici',
      flickr: 'Ottieni le tue foto o quelle dei tuoi amici',
      facebook: 'Ottieni immagini dal tuo album.',
      vk: 'Ottieni foto e documenti dal tuo account.',
      gphotos: 'Ottieni immagini dal tuo account Google Photos.'
    },
    lineB: 'Bel gioco. Devi fare il login.',
    button: 'Impossibile connettersi a %source',
    facebookButton: 'Continua con Facebook',
    note: 'Apriremo una nuova pagina per collegare il tuo account %source.',
    cookieWarning: 'Hai bloccato i cookie di terzi nel tuo browser. L’autorizzazione richiede cookie di terzi almeno per il dominio <code>social.uploadcare.com</code>.',
    cookieRetry: 'Ho sbloccato i cookie e voglio riprovare.'
  },
  pagination: {
    loading: 'Caricamento di altri oggetti in corso...',
    loadMore: 'Carica altro',
    failed: {
      a: 'Caricamento non riuscito.',
      b: 'Riprova'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'I miei file',
      team: 'File del team'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Le mie foto',
      myLikes: 'I miei Mi piace',
      myFollowings: 'Persone che seguo',
      search: 'Cerca'
    },
    search: {
      placeholder: 'Cerca le foto per hashtag',
      button: 'Cerca'
    },
    errors: {
      account_is_private: 'Questo utente ha un feed privato'
    }
  },
  onedrive: {
    menu: {
      myFiles: 'I miei file',
      shared: 'Condivisi con me'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'I miei file',
      shared: 'Condivisi con me',
      starred: 'Stellato',
      search: 'Cerca'
    },
    search: {
      placeholder: 'Cerca i file',
      button: 'Cerca'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'I miei album',
      likedPages: 'Pagine'
    }
  },
  vk: {
    menu: {
      myAlbums: 'I miei album',
      page: 'Immagini del profilo',
      withMe: 'Foto con me',
      saved: 'Foto salvate',
      myFriends: 'I miei amici',
      docs: 'I miei documenti'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Tutte le note',
      notebooks: 'Portatili',
      tags: 'Tag',
      search: 'Cerca'
    },
    search: {
      placeholder: 'Cerca in note',
      button: 'Cerca'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Galleria di immagini',
      myAlbums: 'Album',
      myFavorites: 'Preferiti',
      follows: 'Persone che seguo'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Album',
      myPhotos: 'Foto'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Aree di lavoro'
    }
  },
  files: {
    one: '%n file',
    other: '%n file'
  },
  list: {
    table: {
      title: 'Titolo',
      size: 'Dimensione'
    }
  }
};


l10n.date.it = function(d) {
  var months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu',
                'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic' ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
