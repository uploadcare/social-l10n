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
    evernote: 'Evernote'
  },
  login: {
    title: 'Faça upload de um arquivo do %source',
    lineA: {
      gdrive: 'Acesse arquivos da sua conta do Google.',
      dropbox: 'Acesse arquivos da sua conta do Dropbox.',
      facebook: 'Acesse imagens dos seus álbuns ou dos álbuns de seus amigos.',
      instagram: 'Acessar fotos do seu perfil está mais fácil do que nunca.',
      vk: 'Acesse fotos e documentos da sua conta.',
      evernote: 'Acesse arquivos da sua conta do Evernote'
    },
    lineB: 'Nós jogamos limpo. Você só precisa fazer login.',
    button: 'Conectar ao %source',
    note: 'Nós abriremos uma nova página para conectar sua conta %source.'
  },
  pagination: {
    loading: 'Carregando mais itens...',
    failed: {
      a: 'Não foi possível carregar.',
      b: 'Por favor, tente novamente'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Minhas Fotos',
      myLikes: 'Meus Likes',
      myFollowings: 'Quem Eu Sigo',
      search: 'Busca'
    },
    search: {
      placeholder: 'Procurar fotos por hashtags',
      button: 'Buscar'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Meus Arquivos',
      starred: 'Com Estrela'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Meus Álbuns',
      myFriends: 'Meus Amigos'
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
