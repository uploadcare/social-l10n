l10n.translations.fr = {
  logout: 'Déconnexion',
  error: {
    a: 'Il y a eu un petit soucis. Merci de',
    b: 'recharger',
    c: 'Voici quelques détails techniques:'
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
    title: 'Envoyer un fichier depuis %source',
    lineA: {
      gdrive: 'Récupérer des fichiers depuis votre compte Google.',
      dropbox: 'Récupérer des fichiers depuis votre compte Dropbox.',
      box: 'Récupérer des fichiers depuis votre compte Box.',
      evernote: 'Récupérer des fichiers depuis votre compte Evernote.',
      instagram: 'Récupérer vos photos ou celles de vos amis.',
      flickr: 'Récupérer vos photos ou celles de vos amis.',
      facebook: 'Récupérer des images à partir de vos albums.',
      vk: 'Récupérer vos photos et vos documents depuis votre compte.',
      gphotos: 'Récupérer vos photos depuis votre compte Google Photos.'
    },
    lineB: 'On s\'occupe de tout. Vous n\'avez qu\'à vous connecter.',
    button: 'Se connecter à %source',
    facebookButton: 'Continuer avec Facebook',
    note: 'Nous allons ouvrir une nouvelle page pour vous connecter à votre compte %source.',
    cookieWarning: 'Vous avez bloqué les cookies tiers dans votre navigateur. ' +
      'Vous devez autoriser les cookies pour le domaine ' +
      '<code>social.uploadcare.com</code>.',
    cookieRetry: "J'ai autorisé les cookies et je veux réessayer."
  },
  pagination: {
    loading: 'Chargement...',
    loadMore: 'Charger plus d\'éléments',
    failed: {
      a: 'Le chargement a échoué...',
      b: 'Réessayer'
    }
  },
  dropbox: {
    menu: {
      team: 'Mes fichiers d\'équipe'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Mes Photos',
      myLikes: 'Mes Likes',
      myFollowings: 'Mes Followings',
      search: 'Recherche'
    },
    search: {
      placeholder: 'Rechercher les photos par hashtags',
      button: 'Rechercher'
    },
    errors: {
      account_is_private: 'Cet utilisateur a une alimentation privée'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Mes fichiers',
      shared: 'Partagés avec moi',
      starred: 'Favoris',
      search: 'Recherche'
    },
    search: {
      placeholder: 'Rechercher des fichiers',
      button: 'Rechercher'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Mes albums',
      likedPages: 'Pages'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Mes albums',
      page: 'Images de profil',
      withMe: 'Photos avec moi',
      saved: 'Photos sauvegardées',
      myFriends: 'Mes amis',
      docs: 'Mes documents'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Toutes les notes',
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Recherche'
    },
    search: {
      placeholder: 'Rechercher des notes',
      button: 'Rechercher'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Photostream',
      myAlbums: 'Albums',
      myFavorites: 'Favoris',
      follows: 'Followings'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albums',
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  files: {
    one: '%n fichier',
    other: '%n fichiers'
  },
  list: {
    table: {
      title: 'Titre',
      size: 'Taille'
    }
  }
};

l10n.pluralize.fr = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date.fr = function(d) {
  var months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun',
                'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
