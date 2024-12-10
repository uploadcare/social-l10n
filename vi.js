l10n.translations.vi = {
  logout: "Đăng xuất",
  disconnect: "Ngắt kết nối từ %source",
  error: {
    a: "Đã xảy ra lỗi. Vui lòng",
    b: "tải lại",
    c: "Đây là một số chi tiết kỹ thuật:",
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
    title: "Tải lên tệp từ %source",
    lineA: {
      onedrive: "Lấy tệp từ tài khoản OneDrive của bạn.",
      gdrive: "Lấy tệp từ tài khoản Google của bạn.",
      dropbox: "Lấy tệp từ tài khoản Dropbox của bạn.",
      box: "Lấy tệp từ tài khoản Box của bạn.",
      evernote: "Lấy tệp từ tài khoản Evernote của bạn.",
      instagram: "Lấy ảnh của bạn.",
      flickr: "Lấy ảnh của bạn hoặc của bạn bè.",
      facebook: "Lấy hình ảnh từ album của bạn.",
      vk: "Lấy ảnh và tài liệu từ tài khoản của bạn.",
      gphotos: "Lấy ảnh từ tài khoản Google Photos của bạn.",
      nft: "Lấy tệp từ tài sản NFT của bạn.",
    },
    lineB: "Chúng tôi hoạt động tốt. Bạn chỉ cần đăng nhập.",
    button: "Kết nối với %source",
    facebookButton: "Tiếp tục với Facebook",
    note: "Chúng tôi sẽ mở một trang mới để kết nối tài khoản %source của bạn.",
    cookieWarning:
      "Bạn đã chặn cookie của bên thứ ba trong trình duyệt của mình. " +
      "Ủy quyền yêu cầu cookie của bên thứ ba ít nhất cho " +
      "<code>social.uploadcare.com</code> miền.",
    cookieRetry: "Tôi đã bỏ chặn cookie và muốn thử lại.",
  },
  pagination: {
    loading: "Đang tải thêm mục...",
    loadMore: "Tải thêm",
    failed: {
      a: "Tải không thành công.",
      b: "Thử lại",
    },
  },
  dropbox: {
    menu: {
      myFiles: "Tệp",
      team: "Tệp nhóm",
      search: "Tìm kiếm tệp",
    },
    search: {
      placeholder: "Tìm kiếm tệp",
      button: "Tìm kiếm tệp",
    },
  },
  instagram: {
    menu: {
      myPhotos: "Ảnh của tôi",
    },
  },
  onedrive: {
    menu: {
      myFiles: "Tệp của tôi",
      shared: "Chia sẻ với tôi",
      sharepoint: "SharePoint",
      myDrives: "Ổ đĩa của tôi",
      groups: "Nhóm của tôi",
    },
  },
  gdrive: {
    menu: {
      myFiles: "Tệp của tôi",
      shared: "Chia sẻ với tôi",
      starred: "Đánh dấu sao",
      search: "Tìm kiếm",
      teamDrives: "Ổ đĩa nhóm",
    },
    search: {
      placeholder: "Tìm kiếm tệp",
      button: "Tìm kiếm",
    },
  },
  facebook: {
    menu: {
      myAlbums: "Album của tôi",
      likedPages: "Trang",
    },
  },
  vk: {
    menu: {
      myAlbums: "Album của tôi",
      page: "Ảnh hồ sơ",
      withMe: "Ảnh có tôi",
      saved: "Ảnh đã lưu",
      myFriends: "Bạn bè của tôi",
      docs: "Tài liệu của tôi",
    },
  },
  evernote: {
    menu: {
      allNotes: "Tất cả ghi chú",
      notebooks: "Sổ tay",
      tags: "Thẻ",
      search: "Tìm kiếm",
    },
    search: {
      placeholder: "Tìm kiếm ghi chú",
      button: "Tìm kiếm",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "Dòng ảnh",
      myAlbums: "Album",
      myFavorites: "Yêu thích",
      follows: "Theo dõi",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "Album",
      myPhotos: "Ảnh",
    },
  },
  huddle: {
    menu: {
      workspaces: "Không gian làm việc",
    },
  },
  nft: {
    menu: {
      myAssets: "Tài sản của tôi",
      owner: "Địa chỉ chủ sở hữu",
    },
    assets: {
      button: "Hiển thị",
    },
  },

  search: {
    empty: "Thư mục trống",
    noResult: "Không có kết quả cho",
    retry: "Vui lòng nhập truy vấn tìm kiếm",
    placeholder: "Tìm kiếm",
    clear: "Xóa",
  },

  files: {
    one: "%n tệp",
    other: "%n tệp",
  },
  list: {
    table: {
      title: "Tiêu đề",
      size: "Kích thước",
    },
  },
};

// Quy tắc số nhiều được lấy từ:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.vi = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.vi = function (d) {
  var months = [
    "Th1",
    "Th2",
    "Th3",
    "Th4",
    "Th5",
    "Th6",
    "Th7",
    "Th8",
    "Th9",
    "Th10",
    "Th11",
    "Th12",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
