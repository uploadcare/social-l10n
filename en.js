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
    flickr: 'Flickr'
  },
  login: {
    title: 'Upload a file from %source',
    lineA: {
      gdrive: 'Get files from your Google account.',
      dropbox: 'Get files from your Dropbox account.',
      box: 'Get files from your Box account.',
      evernote: 'Get files from your Evernote account.',
      instagram: 'Get your or your friend\'s photos.',
      flickr: 'Get your or your friend\'s photos.',
      facebook: 'Get images from your or your friend\'s albums.',
      vk: 'Get photos and docs from your account.'
    },
    lineB: 'We play nice. You just need to login.',
    button: 'Connect to %source',
    note: 'We will open a new page to connect your %source account.'
  },
  pagination: {
    loading: 'Loading more items...',
    loadMore: 'Load more',
    failed: {
      a: 'Loading failed.',
      b: 'Try again'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'My Photos',
      myLikes: 'My Likes',
      myFollowings: 'My Followings',
      search: 'Search'
    },
    search: {
      placeholder: 'Search photos by hashtags',
      button: 'Search'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'My Files',
      starred: 'Starred'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'My Albums',
      myFriends: 'My Friends'
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
  files: { // pluralization example
    one: '1 file',
    other: '%n files'
  },
  list: {
    table: {
      title: 'Title',
      size: 'Size'
    }
  }
};

l10n.pluralize.en = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date = function(d) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
