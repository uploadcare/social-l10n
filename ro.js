l10n.translations.ro = {
  logout: "Deconectare",
  disconnect: "Deconectare de la %source",
  error: {
    a: "Ceva a mers prost. Vă rugăm",
    b: "reîncărcați",
    c: "Iată câteva detalii tehnice:",
  },
  sourceName: {
    gdrive: "Google Drive",
    dropbox: "Dropbox",
    facebook: "Facebook",
    instagram: "Instagram",
    vk: "VK",
    box: "Box",
    evernote: "Evernote",
    skydrive: "OneDrive",
    onedrive: "OneDrive",
    flickr: "Flickr",
    huddle: "Huddle",
    gphotos: "Google Photos",
    nft: "NFT",
  },
  login: {
    title: "Încărcați un fișier de la %source",
    lineA: {
      onedrive: "Obțineți fișiere din contul dvs. OneDrive.",
      gdrive: "Obțineți fișiere din contul dvs. Google.",
      dropbox: "Obțineți fișiere din contul dvs. Dropbox.",
      box: "Obțineți fișiere din contul dvs. Box.",
      evernote: "Obțineți fișiere din contul dvs. Evernote.",
      instagram: "Obțineți fotografiile dvs.",
      flickr: "Obțineți fotografiile dvs. sau ale prietenilor dvs.",
      facebook: "Obțineți imagini din albumele dvs.",
      vk: "Obțineți fotografii și documente din contul dvs.",
      gphotos: "Obțineți fotografii din contul dvs. Google Photos.",
      nft: "Obțineți fișiere din activele dvs. NFT.",
    },
    lineB: "Noi jucăm corect. Trebuie doar să vă conectați.",
    button: "Conectați-vă la %source",
    facebookButton: "Continuați cu Facebook",
    note: "Vom deschide o pagină nouă pentru a vă conecta contul %source.",
    cookieWarning:
      "Ați blocat cookie-urile terțe în browserul dvs. " +
      "Autorizarea necesită cookie-uri terțe cel puțin pentru domeniul " +
      "<code>social.uploadcare.com</code>.",
    cookieRetry: "Am deblocat cookie-urile și vreau să încerc din nou.",
  },
  pagination: {
    loading: "Se încarcă mai multe elemente...",
    loadMore: "Încărcați mai multe",
    failed: {
      a: "Încărcarea a eșuat.",
      b: "Încercați din nou",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Fișiere",
      team: "Fișiere de echipă",
      search: "Căutați fișiere",
    },
    search: {
      placeholder: "Căutați fișiere",
      button: "Căutați fișiere",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Fotografiile mele",
    },
    deprecated: {
      title: "%source nu mai este disponibil",
      description:
        "Meta a întrerupt accesul la %source pentru aplicațiile terțe.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Fișierele mele",
      shared: "Partajat cu mine",
      sharepoint: "SharePoint",
      myDrives: "Unitățile mele",
      groups: "Grupurile mele",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Fișierele mele",
      shared: "Partajat cu mine",
      starred: "Favorite",
      search: "Căutați",
      teamDrives: "Unități de echipă",
    },
    search: {
      placeholder: "Căutați fișiere",
      button: "Căutați",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Albumele mele",
      likedPages: "Pagini",
    },
  },
  vk: {
    menu: {
      myAlbums: "Albumele mele",
      page: "Fotografii de profil",
      withMe: "Fotografii cu mine",
      saved: "Fotografii salvate",
      myFriends: "Prietenii mei",
      docs: "Documentele mele",
    },
  },
  evernote: {
    menu: {
      allNotes: "Toate notele",
      notebooks: "Caiete",
      tags: "Etichete",
      search: "Căutați",
    },
    search: {
      placeholder: "Căutați note",
      button: "Căutați",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Flux foto",
      myAlbums: "Albume",
      myFavorites: "Favorite",
      follows: "Urmăriri",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Albume",
      myPhotos: "Fotografii",
    },
    openPicker: "Deschideți Google Photos",
    waitSession: "Așteptare Google Photos",
    reVerificationMessagePart1: "Suntem în proces de reverificare din cauza modificărilor politicii Google. Dacă doriți să vă conectați la Google Photos, pe pagina care se deschide, faceți clic pe",
    reVerificationMessagePart2: "Avansat → Accesați Uploadcare (nesigur)",
  },
  huddle: {
    menu: {
      workspaces: "Spații de lucru",
    },
  },
  nft: {
    menu: {
      myAssets: "Activele mele",
      owner: "Adresa proprietarului",
    },
    assets: {
      button: "Afișați",
    },
  },

  search: {
    empty: "Folderul este gol",
    noResult: "Niciun rezultat pentru",
    retry: "Vă rugăm să introduceți interogarea de căutare",
    placeholder: "Căutați",
    clear: "Ștergeți",
  },

  files: {
    one: "%n fișier",
    other: "%n fișiere",
  },
  list: {
    table: {
      title: "Titlu",
      size: "Dimensiune",
    },
  },
};

// Reguli de pluralizare preluate de la:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.ro = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.ro = function (d) {
  var months = [
    "Ian",
    "Feb",
    "Mar",
    "Apr",
    "Mai",
    "Iun",
    "Iul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
