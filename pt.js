l10n.translations.pt = {
  logout: 'Sair',
  error: {
    a: 'Alguma coisa deu errado. Por favor',
    b: 'recarregue', // not sure about this one
    c: 'Alguns detalhes técnicos:'
  },
  sourceName: {
    gdrive: 'Google Drive',
    dropbox: 'Dropbox',
    facebook: 'Facebook',
    instagram: 'Instagram',
    vk: 'VK',
    evernote: 'Evernote',
    gphotos: 'Google Photos'
  },
  login: {
    title: 'Faça upload de um arquivo do %source',
    lineA: {
      onedrive: 'Acesse arquivos da sua conta do OneDrive.',
      gdrive: 'Acesse arquivos da sua conta do Google.',
      dropbox: 'Acesse arquivos da sua conta do Dropbox.',
      box: 'Acesse arquivos da sua conta do Box.',
      facebook: 'Acesse imagens dos seus álbuns.',
      instagram: 'Acessar fotos do seu perfil está mais fácil do que nunca.',
      vk: 'Acesse fotos e documentos da sua conta.',
      evernote: 'Acesse arquivos da sua conta do Evernote',
      gphotos: 'Acesse imagens dos sua conta do Google Photos.'
    },
    lineB: 'Nós jogamos limpo. Você só precisa fazer login.',
    button: 'Conectar ao %source',
    facebookButton: 'Continuar com o Facebook',
    note: 'Nós abriremos uma nova página para conectar sua conta %source.'
  },
  pagination: {
    loading: 'Carregando mais itens...',
    failed: {
      a: 'Não foi possível carregar.',
      b: 'Por favor, tente novamente'
    }
  },
  dropbox: {
    menu: {
      myFiles: 'Meus Arquivos',
      team: 'Arquivos da equipe'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Minhas Fotos',
    },
  },
  onedrive: {
    menu: {
      myFiles: 'Meus Arquivos',
      shared: 'Compartilhados comigo',
      sharepoint: 'SharePoint',
      myDrives: 'Meus drives',
      groups: 'Meus grupos'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Meus Arquivos',
      shared: 'Compartilhados comigo',
      starred: 'Com Estrela',
      search: 'Busca'
    },
    search: {
      placeholder: 'Procurar por arquivos',
      button: 'Buscar'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Álbuns',
      myPhotos: 'Fotos'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Meus Álbuns'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Meus Álbuns',
      page: 'Imagens de Perfil',
      withMe: 'Fotos Comigo',
      saved: 'Fotos Salvas',
      myFriends: 'Meus Amigos',
      docs: 'Meus Documentos'
    }
  },
  evernote: {
    menu: {
      notebooks: 'Notebooks',
      tags: 'Tags',
      search: 'Busca'
    },
    search: {
      placeholder: 'Procurar arquivos em notas',
      button: 'Buscar'
    }
  },
  files: { // pluralization example
    one: '1 arquivo',
    other: '%n arquivos'
  },
  list: {
    table: {
      title: 'Título',
      size: 'Tamanho'
    }
  }
};

l10n.pluralize.pt = function (n) {
  return n === 1 ? 'one' : 'other';
};
