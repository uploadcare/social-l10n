l10n.translations.tr = {
  logout: 'Oturumu kapat',
  error: {
    a: 'Bir sorun oluştu. Lütfen',
    b: 'yeniden yükleyin',
    c: 'Bazı teknik ayrıntılar şunlardır:'
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
    title: '%source kaynağından bir dosya yükleyin',
    lineA: {
      gdrive: 'Google hesabınızdan dosya alın.',
      dropbox: 'Dropbox hesabınızdan dosya alın.',
      box: 'Box hesabınızdan dosya alın.',
      evernote: 'Evernote hesabınızdan dosya alın.',
      instagram: 'Kendinizin veya arkadaşlarınızın fotoğraflarını alın.',
      flickr: 'Kendinizin veya arkadaşlarınızın fotoğraflarını alın.',
      facebook: 'Kendinizin albümlerinden resim alın.',
      vk: 'Hesabınızdan fotoğraf veya belge alın.',
      gphotos: 'Google Photos fotoğraflarını dosya alın.'
    },
    lineB: 'İşinizi kolaylaştırıyoruz. Sadece oturum açmanız gerekiyor.',
    button: '%source\'a bağlan',
    facebookButton: 'Facebook ile Devam Et',
    note: '%source hesabınıza bağlanmak için yeni bir sayfa açacağız.',
    cookieWarning: 'Tarayıcınızdaki üçüncü taraf çerezleri engellediniz. En azından <code>social.uploadcare.com</code> alanı için üçüncü taraf çerezlerine izin vermeniz gerekiyor.',
    cookieRetry: 'Çerezlerin engelini kaldırdım ve tekrar denemek istiyorum.'
  },
  pagination: {
    loading: 'Daha fazla öğe yükleniyor…',
    loadMore: 'Daha fazla yükleyin',
    failed: {
      a: 'Yükleme başarısız oldu.',
      b: 'Tekrar deneyin'
    }
  },
  dropbox: {
    menu: {
      team: 'Ekip dosyalarım'
    }
  },
  instagram: {
    menu: {
      myPhotos: 'Fotoğraflarım',
      myLikes: 'Beğenilerim',
      myFollowings: 'Takip Ettiklerim',
      search: 'Arama'
    },
    search: {
      placeholder: 'Hashtag\'lerle fotoğraf arma',
      button: 'Arama'
    },
    errors: {
      account_is_private: 'Bu kullanıcıya özel feed vardır'
    }
  },
  gdrive: {
    menu: {
      myFiles: 'Dosyalarım',
      shared: 'Benimle paylaşılanlar',
      starred: 'Favoriler',
      search: 'Arama'
    },
    search: {
      placeholder: 'Dosyaları ara',
      button: 'Arama'
    }
  },
  facebook: {
    menu: {
      myAlbums: 'Albümlerim',
      likedPages: 'Sayfalar'
    }
  },
  vk: {
    menu: {
      myAlbums: 'Albümlerim',
      page: 'Profil Resimleri',
      withMe: 'Benim Olduğum Fotoğraflar',
      saved: 'Kaydedilen Fotoğraflar',
      myFriends: 'Arkadaşlarım',
      docs: 'Belgelerim'
    }
  },
  evernote: {
    menu: {
      allNotes: 'Tüm Notlar',
      notebooks: 'Not Defterleri',
      tags: 'Etiketler',
      search: 'Arama'
    },
    search: {
      placeholder: 'Arama notları',
      button: 'Arama'
    }
  },
  flickr: {
    menu: {
      myPhotostream: 'Fotoğraf akışı',
      myAlbums: 'Albümler',
      myFavorites: 'Favoriler',
      follows: 'Takip Edilenler'
    }
  },
  gphotos: {
    menu: {
      myAlbums: 'Albümler',
    }
  },
  huddle: {
    menu: {
      workspaces: 'Çalışma alanları'
    }
  },
  files: {
    one: '%n dosya',
    other: '%n dosyalar'
  },
  list: {
    table: {
      title: 'Başlık',
      size: 'Boyut'
    }
  }
};


l10n.date.tr = function(d) {
  var months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz',
                'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara' ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
