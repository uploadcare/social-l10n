l10n.translations.pt = {
  logout: "Sair",
  disconnect: "Desconectar do %source",
  error: {
    a: "Alguma coisa deu errado. Por favor",
    b: "recarregue", // not sure about this one
    c: "Alguns detalhes técnicos:",
  },
  sourceName: {
    gdrive: "Google Drive",
    ngdrive: "Google Drive",
    dropbox: "Dropbox",
    facebook: "Facebook",
    instagram: "Instagram",
    vk: "VK",
    evernote: "Evernote",
    gphotos: "Google Photos",
    nft: "NFT",
    box: "Box",
    skydrive: "OneDrive",
    onedrive: "OneDrive",
    flickr: "Flickr",
    huddle: "Huddle",
  },
  login: {
    title: "Faça upload de um arquivo do %source",
    lineA: {
      onedrive: "Acesse arquivos da sua conta do OneDrive.",
      gdrive: "Acesse arquivos da sua conta do Google.",
      ngdrive: "Acesse arquivos da sua conta do Google.",
      dropbox: "Acesse arquivos da sua conta do Dropbox.",
      box: "Acesse arquivos da sua conta do Box.",
      facebook: "Acesse imagens dos seus álbuns.",
      instagram: "Acessar fotos do seu perfil está mais fácil do que nunca.",
      vk: "Acesse fotos e documentos da sua conta.",
      evernote: "Acesse arquivos da sua conta do Evernote",
      gphotos: "Acesse imagens dos sua conta do Google Photos.",
      nft: "Acesse arquivos dos seus ativos NFT.",
      flickr: "Acesse fotos dos seus álbuns.",
    },
    lineB: "Nós jogamos limpo. Você só precisa fazer login.",
    button: "Conectar ao %source",
    facebookButton: "Continuar com o Facebook",
    note: "Nós abriremos uma nova página para conectar sua conta %source.",
    cookieWarning:
      "Você bloqueou cookies de terceiros em seu navegador. A autorização requer cookies de terceiros, pelo menos para o domínio <code>social.uploadcare.com</code>.",
    cookieRetry: "Desbloqueei os cookies e quero tentar novamente.",
  },
  pagination: {
    loading: "Carregando mais itens...",
    loadMore: "Carregar mais",
    failed: {
      a: "Não foi possível carregar.",
      b: "Por favor, tente novamente",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Meus Arquivos",
      team: "Arquivos da equipe",
      search: "Pesquisar",
    },
    search: {
      placeholder: "Procurar arquivos",
      button: "Buscar",
    },
    openChooser: "Abrir Dropbox",
  },
  instagram: {
    menu: {
      myPhotos: "Minhas Fotos",
    },
    deprecated: {
      title: "%source não está mais disponível",
      description:
        "A Meta descontinuou o acesso ao %source para aplicativos de terceiros.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Meus Arquivos",
      shared: "Compartilhados comigo",
      sharepoint: "SharePoint",
      myDrives: "Meus drives",
      groups: "Meus grupos",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Meus Arquivos",
      shared: "Compartilhados comigo",
      starred: "Com Estrela",
      search: "Busca",
      teamDrives: "Drives da equipe",
    },
    search: {
      placeholder: "Procurar por arquivos",
      button: "Buscar",
    },
  },
  ngdrive: {
    menu: {
      myFiles: "Meus Arquivos",
      shared: "Compartilhados comigo",
      starred: "Com Estrela",
      search: "Busca",
      teamDrives: "Drives da equipe",
    },
    search: {
      placeholder: "Procurar por arquivos",
      button: "Buscar",
    },
    openPicker: "Abrir Google Drive",
    fileUnavailable: "Não é possível acessar este arquivo",
  },
  flickr: {
    menu: {
      myPhotostream: "Fotostream",
      myAlbums: "Álbuns",
      myFavorites: "Favoritos",
      follows: "Seguindo",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Álbuns",
      myPhotos: "Fotos",
    },
    openPicker: "Abrir Google Fotos",
    waitSession: "Aguardando Google Fotos",
  },
  huddle: {
    menu: {
      workspaces: "Espaços de Trabalho",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Meus Álbuns",
      likedPages: "Páginas",
    },
  },
  vk: {
    menu: {
      myAlbums: "Meus Álbuns",
      page: "Imagens de Perfil",
      withMe: "Fotos Comigo",
      saved: "Fotos Salvas",
      myFriends: "Meus Amigos",
      docs: "Meus Documentos",
    },
  },
  evernote: {
    menu: {
      notebooks: "Notebooks",
      tags: "Tags",
      search: "Busca",
      allNotes: "Todas as Notas",
    },
    search: {
      placeholder: "Procurar arquivos em notas",
      button: "Buscar",
    },
  },
  nft: {
    menu: {
      myAssets: "Meus Ativos",
      owner: "Endereço do proprietário",
    },
    assets: {
      button: "Mostrar",
    },
  },
  search: {
    empty: "A pasta está vazia",
    noResult: "Nenhum resultado para",
    retry: "Por favor, insira a consulta de pesquisa",
    placeholder: "Buscar",
    clear: "Limpar",
  },
  files: {
    // pluralization example
    one: "1 arquivo",
    other: "%n arquivos",
  },
  list: {
    table: {
      title: "Título",
      size: "Tamanho",
    },
  },
};

l10n.pluralize.pt = function (n) {
  return n === 1 ? "one" : "other";
};
