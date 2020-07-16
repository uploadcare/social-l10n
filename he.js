l10n.translations.he = {
  logout: 'להתנתק',
  error: {
    a: 'משהו השתבש נא',
    b: 'טען מחדש',
    c: 'הנה כמה פרטים טכניים:'
  },
  sourceName: {
    gdrive: 'Google Drive',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    instagram_graph_api: 'Instagram',
    vk: 'VK',
    box: 'Box',
    evernote: 'Evernote',
    skydrive: 'OneDrive',
    onedrive: 'OneDrive',
    flickr: 'Flickr',
    huddle: 'Huddle',
    gphotos: 'Google Photos'
  },
  login: {
    title: 'העלו את תמונתכם %source',
    lineA: {
      oneDrive: 'קבל קבצים מחשבון OneDrive שלך.',
      gdrive: 'קבל קבצים מחשבון גוגל.',
      dropbox: 'קבל קבצים מחשבון דרופבוקס.',
      box: 'קבל קבצים מחשבון Box שלך.',
      evernote: 'קבל קבצים מחשבון Evernote שלך',
      instagram: 'קבל את התמונות שלך.',
      instagram_graph_api: 'קבל את התמונות שלך.',
      flickr: 'קבל קבצים מחשבון Flickr שלך.',
      facebook: 'קבל תמונות מהאלבומים שלך.',
      vk: 'קבל קבצים מחשבון VK שלך.',
      gphotos: 'קבל קבצים מחשבון Google Photos שלך.'
    },
    lineB: 'רק נשאר להתחבר למשתמש שלכם.',
    button: 'התחבר ל %source',
    facebookButton: 'להמשיך עם פייסבוק',
    הערה: 'אנו נפתח דף חדש כדי לחבר %source account.',
    cookieWarning: 'חסמת קבצי קוקיס של צד שלישי בדפדפןשלך. ' +
      'הרשאה דורשת קובצי cookie של צד שלישי לפחות עבור ' +
      '<code>social.uploadcare.com</code> שם דומיין.',
    cookieRetry: "ביטלתי את החסימה של קובצי cookie ורוצה לנסות שוב."
  },
  pagination: {
    loading: 'טוען פריטים נוספים...',
    loadMore: 'לטעון עוד',
    failed: {
      a: 'טעינה נכשלה.',
      b: 'נסה שוב'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'קבצים',
      team: 'קבצי צוות',
      search: 'לחפש קבצים'
    },
    search: {
      placeholder: 'לחפש קבצים',
      button: 'חפש קבצים'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'התמונות שלי',
    }
  },
  onedrive: {
    menu: {
        myFiles: 'הקבצים שלי',
        shared: 'שתף איתי',
        sharepoint: 'SharePoint',
        myDrives: 'My drives',
        groups: 'הקבוצה שלי'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'הקבצים שלי',
      shared: 'שתף איתי',
      starred: 'מסומן בכוכב',
      search: 'לחפש',
      teamDrives: 'צוות נוהג'
    },
    search: {
      placeholder: 'לחפש קבצים',
      button: 'חפש קבצים'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'האלבומים שלי',
      likedPages: 'עמודים'
    }
  },
  vk: {
    menu: {
      myAlbums: 'האלבומים שלי',
      page: 'פרופיל תמונות',
      withMe: 'תמונות איתי',
      saved: 'תמונות נשמרו',
      myFriends: 'החברים שלי',
      docs: 'המסמכים שלי'
    }
  },
  evernote: {
    menu: {
      allNotes: 'כל הערות',
      notebooks: 'Notebooks',
      tags: 'תגיות',
      search: 'לחפש'
    },
    search: {
      placeholder: 'חפש הערות',
      button: 'לחפש'
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
      myAlbums: 'אלבומים',
      myPhotos: 'תמונות'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Workspaces'
    }
  },
  // pluralization example
  files: {
    one: '%n קובץ',
    other: '%n קבצים'
  },
  list: {
    table: {
      title: 'כותרת',
      size: 'גודל'
    }
  }
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.he = function (n) {
  return n === 1 ? 'one' : 'other';
};


l10n.date.en = function(d) {
  var months = ['יָנוּאָר', 'פברואר', 'מרץ', 'אַפּרִיל', 'מאי', 'יוני',
                'יולי', 'אוגוסט', 'סֶפּטֶמבֶּר', 'אוֹקְטוֹבֶּר', 'נוֹבֶמבֶּר', 'דֵצֶמבֶּר'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};