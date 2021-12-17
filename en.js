l10n.translations.en = {
  logout: 'Log out',
  error: {
    a: 'Something went wrong. Please',
    b: 'reload',
    c: 'Here some technical details:'
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
    nft: 'NFT',
  },
  login: {
    title: 'Upload a file from %source',
    lineA: {
      onedrive: 'Get files from your OneDrive account.',
      gdrive: 'Get files from your Google account.',
      dropbox: 'Get files from your Dropbox account.',
      box: 'Get files from your Box account.',
      evernote: 'Get files from your Evernote account.',
      instagram: 'Get your photos.',
      flickr: 'Get your or your friend\'s photos.',
      facebook: 'Get images from your albums.',
      vk: 'Get photos and docs from your account.',
      gphotos: 'Get photos from your Google Photos account.',
      nft: 'Get files from your NFT assets.',
    },
    lineB: 'We play nice. You just need to login.',
    button: 'Connect to %source',
    facebookButton: 'Continue with Facebook',
    note: 'We will open a new page to connect your %source account.',
    cookieWarning: 'You have blocked third-party cookies in your browser. ' +
      'Authorization requires third-party cookies at least for ' +
      '<code>social.uploadcare.com</code> domain.',
    cookieRetry: "I've unblocked cookies and want to try again."
  },
  pagination: {
    loading: 'Loading more items...',
    loadMore: 'Load more',
    failed: {
      a: 'Loading failed.',
      b: 'Try again'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Files',
      team: 'Team files',
      search: 'Search files'
    },
    search: {
      placeholder: 'Search files',
      button: 'Search files'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'My Photos',
    }
  },
  onedrive: {
    menu: {
        myFiles: 'My files',
        shared: 'Shared with me',
        sharepoint: 'SharePoint',
        myDrives: 'My drives',
        groups: 'My groups'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'My Files',
      shared: 'Shared with me',
      starred: 'Starred',
      search: 'Search',
      teamDrives: 'Team drives'
    },
    search: {
      placeholder: 'Search files',
      button: 'Search'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'My Albums',
      likedPages: 'Pages'
    }
  },
  vk: {
    menu: {
      myAlbums: 'My Albums',
      page: 'Profile Pictures',
      withMe: 'Photos with Me',
      saved: 'Saved Photos',
      myFriends: 'My Friends',
      docs: 'My Documents'
    }
  },
  evernote: {
    menu: {
      allNotes: 'All Notes',
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Search'
    },
    search: {
      placeholder: 'Search notes',
      button: 'Search'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Photostream',
      myAlbums: 'Albums',
      myFavorites: 'Favorites',
      follows: 'Followings'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albums',
      myPhotos: 'Photos'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  nft: {
    menu: {
      owner: 'Owner address'
    },
    assets: {
      placeholder: 'Owner address',
      button: 'Show'
    }
  },
  // pluralization example
  files: {
    one: '%n file',
    other: '%n files'
  },
  list: {
    table: {
      title: 'Title',
      size: 'Size'
    }
  }
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.en = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date.en = function(d) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
