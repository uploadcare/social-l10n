l10n.translations.ko = {
  logout: "로그아웃",
  disconnect: "%source에서 연결 해제",
  error: {
    a: "문제가 발생했습니다. 다시",
    b: "로드",
    c: "여기 기술 세부 사항이 있습니다:",
  },
  sourceName: {
    gdrive: "Google 드라이브",
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
    gphotos: "Google 포토",
    nft: "NFT",
  },
  login: {
    title: "%source에서 파일 업로드",
    lineA: {
      onedrive: "OneDrive 계정에서 파일을 가져옵니다.",
      gdrive: "Google 계정에서 파일을 가져옵니다.",
      dropbox: "Dropbox 계정에서 파일을 가져옵니다.",
      box: "Box 계정에서 파일을 가져옵니다.",
      evernote: "Evernote 계정에서 파일을 가져옵니다.",
      instagram: "사진을 가져옵니다.",
      flickr: "당신 또는 친구의 사진을 가져옵니다.",
      facebook: "앨범에서 이미지를 가져옵니다.",
      vk: "계정에서 사진 및 문서를 가져옵니다.",
      gphotos: "Google 포토 계정에서 사진을 가져옵니다.",
      nft: "NFT 자산에서 파일을 가져옵니다.",
    },
    lineB: "우리는 잘 지냅니다. 로그인만 하면 됩니다.",
    button: "%source에 연결",
    facebookButton: "Facebook으로 계속",
    note: "%source 계정을 연결하기 위해 새 페이지를 엽니다.",
    cookieWarning:
      "브라우저에서 타사 쿠키를 차단했습니다. " +
      "인증에는 최소한 <code>social.uploadcare.com</code> 도메인에 대한 " +
      "타사 쿠키가 필요합니다.",
    cookieRetry: "쿠키 차단을 해제하고 다시 시도하고 싶습니다.",
  },
  pagination: {
    loading: "더 많은 항목을 로드 중...",
    loadMore: "더 로드",
    failed: {
      a: "로드 실패.",
      b: "다시 시도",
    },
  },
  dropbox: {
    menu: {
      myFiles: "파일",
      team: "팀 파일",
      search: "파일 검색",
    },
    search: {
      placeholder: "파일 검색",
      button: "검색",
    },
  },
  instagram: {
    menu: {
      myPhotos: "내 사진",
    },
  },
  onedrive: {
    menu: {
      myFiles: "내 파일",
      shared: "공유된 파일",
      sharepoint: "SharePoint",
      myDrives: "내 드라이브",
      groups: "내 그룹",
    },
  },
  gdrive: {
    menu: {
      myFiles: "내 파일",
      shared: "공유된 파일",
      starred: "별표 표시됨",
      search: "검색",
      teamDrives: "팀 드라이브",
    },
    search: {
      placeholder: "파일 검색",
      button: "검색",
    },
  },
  facebook: {
    menu: {
      myAlbums: "내 앨범",
      likedPages: "페이지",
    },
  },
  vk: {
    menu: {
      myAlbums: "내 앨범",
      page: "프로필 사진",
      withMe: "나와 함께한 사진",
      saved: "저장된 사진",
      myFriends: "내 친구들",
      docs: "내 문서",
    },
  },
  evernote: {
    menu: {
      allNotes: "모든 노트",
      notebooks: "노트북",
      tags: "태그",
      search: "검색",
    },
    search: {
      placeholder: "노트 검색",
      button: "검색",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "포토스트림",
      myAlbums: "앨범",
      myFavorites: "즐겨찾기",
      follows: "팔로우",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "앨범",
      myPhotos: "사진",
    },
  },
  huddle: {
    menu: {
      workspaces: "작업 공간",
    },
  },
  nft: {
    menu: {
      myAssets: "내 자산",
      owner: "소유자 주소",
    },
    assets: {
      button: "보기",
    },
  },

  search: {
    empty: "폴더가 비어 있습니다",
    noResult: "결과가 없습니다",
    retry: "검색어를 입력하세요",
    placeholder: "검색",
    clear: "지우기",
  },

  files: {
    one: "%n 파일",
    other: "%n 파일",
  },
  list: {
    table: {
      title: "제목",
      size: "크기",
    },
  },
};

// Pluralization rules taken from:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.ko = function (n) {
  return "other";
};

l10n.date.ko = function (d) {
  var months = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
