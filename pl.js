l10n.translations.pl = {
  logout: 'Wyloguj',
  error: {
    a: 'Ups. Coś poszło nie tak. Proszę,',
    b: 'przeładuj stronę.',
    c: 'Sprawdź, co mogło być przyczyną błędu:'
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
    title: 'Skorzystaj z konta %source',
    lineA: {
      gdrive: 'Wybierz pliki ze swojego konta Google Drive.',
      dropbox: 'Wybierz pliki ze swojego konta Dropbox.',
      box: 'Wybierz pliki ze swojego konta Box.',
      evernote: 'Wybierz pliki ze swojego konta Evernote.',
      instagram: 'Wybierz zdjęcie ze swojego albumu.',
      flickr: 'Wybierz zdjęcie ze swojego albumu.',
      facebook: 'Wybierz zdjęcie ze swojego albumu.',
      vk: 'Wybierz zdjęcie lub pliki ze swojego konta.',
      gphotos: 'Wybierz zdjęcie ze swojego konta Google Photos.'
    },
    lineB: 'To proste. Wystarczy, że się zalogujesz.',
    button: 'Połącz z kontem %source',
    note: 'Strona otworzy się w nowej karcie.',
    cookieWarning: 'Twoja przeglądarka blokuje pliki cookies innych serwisów. ' +
      'Autoryzacja wymaga odblokowania plików cookies dla' +
      '<code>social.uploadcare.com</code> domain.',
    cookieRetry: "Pliki cookies zostały odblokowane. Spróbuj ponownie."
  },
  pagination: {
    loading: 'Ładowanie w trakcie...',
    loadMore: 'Doładuj',
    failed: {
      a: 'Wystąpił błąd w trakcie ładowania.',
      b: 'Spróbuj ponownie'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Moje zdjęcia',
      myLikes: 'Moje polubienia',
      myFollowings: 'Moi obserwujący',
      search: 'Szukaj'
    },
    search: {
      placeholder: 'Szukaj zdjęć po hashtagach',
      button: 'Szukaj'
    },
    errors: {
      account_is_private: 'To konto jest prywatna i nie możemy sprowadzić dowolny '+
        'Media od niego. Przepraszamy za tę niedogodność.'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Moje pliki',
      shared: 'Udostępnione',
      starred: 'Wyróżnione'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Moje albumy',
      myFriends: 'Moi znajomi',
      likedPages: 'Moje polubienia'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Moje albumy',
      page: 'Zdjęcia profilowe',
      withMe: 'Zdjęcia, na których jestem',
      saved: 'Zachowane zdjęcia',
      myFriends: 'Moi znajomi',
      docs: 'Moje dokumenty'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Wszystkie notatki',
      notebooks: 'Notatniki',
      tags: 'Tagi',
      search: 'Szukaj'
    },
    search: {
      placeholder: 'Przeszukaj notatki',
      button: 'Szukaj'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Zdjęcia',
      myAlbums: 'Albumy',
      myFavorites: 'Ulubione',
      follows: 'Polubienia'
    }
  },
  huddle: {
    menu: {
      workspaces: 'Obszary robocze'
    }
  },
  // pluralization example
  files: {
    one: '%n plik',
    other: '%n plików'
  },
  list: {
    table: {
      title: 'Tytuł',
      size: 'Rozmiar'
    }
  }
};

l10n.pluralize.pl = function (n) {
  return n === 1 ? 'one' : 'other';
};

l10n.date = function(d) {
  var months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze',
                'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
