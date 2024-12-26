l10n.translations.pl = {
  logout: "Wyloguj",
  disconnect: "Rozłącz z %source",
  error: {
    a: "Ups. Coś poszło nie tak. Proszę,",
    b: "przeładuj stronę.",
    c: "Sprawdź, co mogło być przyczyną błędu:",
  },
  sourceName: {
    gdrive: "Google Drive",
    dropbox: "Dropbox",
    facebook: "Facebook",
    instagram: "Instagram",
    vk: "VK",
    box: "Box",
    evernote: "Evernote",
    onedrive: "OneDrive",
    skydrive: "OneDrive",
    flickr: "Flickr",
    huddle: "Huddle",
    gphotos: "Google Photos",
    nft: "NFT",
  },
  login: {
    title: "Skorzystaj z konta %source",
    lineA: {
      onedrive: "Wybierz pliki ze swojego konta OneDrive.",
      gdrive: "Wybierz pliki ze swojego konta Google Drive.",
      dropbox: "Wybierz pliki ze swojego konta Dropbox.",
      box: "Wybierz pliki ze swojego konta Box.",
      evernote: "Wybierz pliki ze swojego konta Evernote.",
      instagram: "Wybierz zdjęcie ze swojego albumu.",
      flickr: "Wybierz zdjęcie ze swojego albumu.",
      facebook: "Wybierz zdjęcie ze swojego albumu.",
      vk: "Wybierz zdjęcie lub pliki ze swojego konta.",
      gphotos: "Wybierz zdjęcie ze swojego konta Google Photos.",
      nft: "Wybierz pliki ze swojego konta NFT.",
    },
    lineB: "To proste. Wystarczy, że się zalogujesz.",
    button: "Połącz z kontem %source",
    facebookButton: "Kontynuuj logowanie za pośrednictwem Facebooka",
    note: "Strona otworzy się w nowej karcie.",
    cookieWarning:
      "Twoja przeglądarka blokuje pliki cookies innych serwisów. " +
      "Autoryzacja wymaga odblokowania plików cookies dla" +
      "<code>social.uploadcare.com</code> domain.",
    cookieRetry: "Pliki cookies zostały odblokowane. Spróbuj ponownie.",
  },
  pagination: {
    loading: "Ładowanie w trakcie...",
    loadMore: "Doładuj",
    failed: {
      a: "Wystąpił błąd w trakcie ładowania.",
      b: "Spróbuj ponownie",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Moje pliki",
      team: "Pliki drużyn",
      search: "Szukaj",
    },
    search: {
      placeholder: "Szukaj plików",
      button: "Szukaj plików",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Moje zdjęcia",
    },
    deprecated: {
      title: "%source nie jest już dostępny",
      description:
        "Meta zakończyła dostęp do %source dla aplikacji innych firm.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Moje pliki",
      shared: "Udostępnione",
      sharepoint: "SharePoint",
      myDrives: "Moje dyski",
      groups: "Moje grupy",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Moje pliki",
      shared: "Udostępnione",
      starred: "Wyróżnione",
      search: "Szukaj",
      teamDrives: "Dyski zespołowe",
    },
    search: {
      placeholder: "Przeszukaj pliki",
      button: "Szukaj",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Moje albumy",
      likedPages: "Moje polubienia",
    },
  },
  vk: {
    menu: {
      myAlbums: "Moje albumy",
      page: "Zdjęcia profilowe",
      withMe: "Zdjęcia, na których jestem",
      saved: "Zachowane zdjęcia",
      myFriends: "Moi znajomi",
      docs: "Moje dokumenty",
    },
  },
  evernote: {
    menu: {
      allNotes: "Wszystkie notatki",
      notebooks: "Notatniki",
      tags: "Tagi",
      search: "Szukaj",
    },
    search: {
      placeholder: "Przeszukaj notatki",
      button: "Szukaj",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Zdjęcia",
      myAlbums: "Albumy",
      myFavorites: "Ulubione",
      follows: "Polubienia",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Albumy",
      myPhotos: "Zdjęcia",
    },
  },
  huddle: {
    menu: {
      workspaces: "Obszary robocze",
    },
  },
  nft: {
    menu: {
      myAssets: "Moje zasoby",
      owner: "Adres właściciela",
    },
    assets: {
      button: "Pokaż",
    },
  },
  // pluralization example
  files: {
    one: "%n plik",
    other: "%n plików",
  },
  list: {
    table: {
      title: "Tytuł",
      size: "Rozmiar",
    },
  },
  search: {
    empty: "Folder jest pusty",
    noResult: "Brak wyników dla",
    retry: "Proszę wprowadzić zapytanie wyszukiwania",
    placeholder: "Szukaj",
    clear: "Wyczyść",
  },
};

l10n.pluralize.pl = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.pl = function (d) {
  var months = [
    "Sty",
    "Lut",
    "Mar",
    "Kwi",
    "Maj",
    "Cze",
    "Lip",
    "Sie",
    "Wrz",
    "Paź",
    "Lis",
    "Gru",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
