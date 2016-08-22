l10n.translations.es = {
  logout: 'Cerrar sesión',
  error: {
    a: 'Se ha producido un error. Le rogamos que',
    b: 'vuelva a cargarlo',
    c: 'Aquí encontrará algunos detalles técnicos:'
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
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos'
  },
  login: {
    title: 'Cargue un archivo desde %source',
    lineA: {
      gdrive: 'Obtenga archivos desde su cuenta de Google.',
      dropbox: 'Obtenga archivos desde su cuenta de Dropbox.',
      box: 'Obtenga archivos desde su cuenta de Box.',
      evernote: 'Obtenga archivos desde su cuenta de Evernote.',
      instagram: 'Obtenga sus fotos o las de sus amigos.',
      flickr: 'Obtenga sus fotos o las de sus amigos.',
      facebook: 'Obtenga imágenes desde su álbum o desde los de sus amigos.',
      vk: 'Obtenga fotos y documentos desde su cuenta.',
      gphotos: 'Obtenga fotos desde su cuenta de Google Photos.'
    },
    lineB: 'Le facilitamos las cosas, solo tiene que iniciar sesión.',
    button: 'Conectarse a la %source',
    note: 'Abriremos una nueva página para que se conecte a su cuenta %source.',
    cookieWarning: 'Tiene bloqueadas las cookies de terceros en su navegador. Se requiere autorización de cookies de terceros al menos para el dominio <code>social.uploadcare.com</code>.',
    cookieRetry: 'He desbloqueado las cookies y quiero intertarlo de nuevo.'
  },
  pagination: {
    loading: 'Cargar más archivos...',
    loadMore: 'Cargar más',
    failed: {
      a: 'La carga no se ha realizado con éxito.',
      b: 'Vuelva a intentarlo'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Mis fotos',
      myLikes: 'Mis Likes',
      myFollowings: 'Mis Followings',
      search: 'Buscar'
    },
    search: {
      placeholder: 'Buscar fotos por hashtags',
      button: 'Buscar'
    },
    errors: {
      account_is_private: 'Esta cuenta es privada y no puede recuperar cualquier '+
        'medios de él. Perdón por las molestias.'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Mis archivos',
      shared: 'Compartidos conmigo',
      starred: 'Favoritos'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Mis Álbumes',
      myFriends: 'Mis amigos',
      likedPages: 'Páginas'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Mis Álbumes',
      page: 'Fotos de perfil',
      withMe: 'Fotos donde yo aparezco',
      saved: 'Fotos guardadas',
      myFriends: 'Mis amigos',
      docs: 'Mis documentos'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Todas las notas',
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Buscar'
    },
    search: {
      placeholder: 'Buscar notas',
      button: 'Buscar'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Photostream',
      myAlbums: 'Álbumes',
      myFavorites: 'Favoritos',
      follows: 'Followings'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  files: {
    one: '%n archivo',
    other: '%n archivos'
  },
  list: {
    table: {
      title: 'Título',
      size: 'Tamaño'
    }
  }
};


l10n.date = function(d) {
  var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
                'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
