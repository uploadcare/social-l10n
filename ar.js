l10n.translations.ar = {
  logout: "تسجيل الخروج",
  disconnect: "قطع الاتصال من %source",
  error: {
    a: "حدث خطأ ما. من فضلك",
    b: "أعد التحميل",
    c: "إليك بعض التفاصيل التقنية:",
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
    title: "تحميل ملف من %source",
    lineA: {
      onedrive: "احصل على الملفات من حساب OneDrive الخاص بك.",
      gdrive: "احصل على الملفات من حساب Google الخاص بك.",
      dropbox: "احصل على الملفات من حساب Dropbox الخاص بك.",
      box: "احصل على الملفات من حساب Box الخاص بك.",
      evernote: "احصل على الملفات من حساب Evernote الخاص بك.",
      instagram: "احصل على صورك.",
      flickr: "احصل على صورك أو صور أصدقائك.",
      facebook: "احصل على الصور من ألبوماتك.",
      vk: "احصل على الصور والمستندات من حسابك.",
      gphotos: "احصل على الصور من حساب Google Photos الخاص بك.",
      nft: "احصل على الملفات من أصول NFT الخاصة بك.",
    },
    lineB: "نحن نعمل بشكل جيد. فقط تحتاج إلى تسجيل الدخول.",
    button: "الاتصال بـ %source",
    facebookButton: "تابع مع Facebook",
    note: "سنفتح صفحة جديدة لتوصيل حساب %source الخاص بك.",
    cookieWarning:
      "لقد قمت بحظر ملفات تعريف الارتباط للجهات الخارجية في متصفحك. " +
      "يتطلب التفويض ملفات تعريف الارتباط للجهات الخارجية على الأقل لـ " +
      "<code>social.uploadcare.com</code> المجال.",
    cookieRetry:
      "لقد قمت بإلغاء حظر ملفات تعريف الارتباط وأريد المحاولة مرة أخرى.",
  },
  pagination: {
    loading: "جارٍ تحميل المزيد من العناصر...",
    loadMore: "تحميل المزيد",
    failed: {
      a: "فشل التحميل.",
      b: "حاول مرة أخرى",
    },
  },
  dropbox: {
    menu: {
      myFiles: "الملفات",
      team: "ملفات الفريق",
      search: "البحث عن الملفات",
    },
    search: {
      placeholder: "البحث عن الملفات",
      button: "البحث عن الملفات",
    },
  },
  instagram: {
    menu: {
      myPhotos: "صوري",
    },
    deprecated: {
      title: "لم يعد %source متاحًا",
      description: "أوقفت Meta الوصول إلى %source لتطبيقات الطرف الثالث.",
    },
  },
  onedrive: {
    menu: {
      myFiles: "ملفاتي",
      shared: "مشتركة معي",
      sharepoint: "SharePoint",
      myDrives: "محركات الأقراص الخاصة بي",
      groups: "مجموعاتي",
    },
  },
  gdrive: {
    menu: {
      myFiles: "ملفاتي",
      shared: "مشتركة معي",
      starred: "المميزة بنجمة",
      search: "بحث",
      teamDrives: "محركات الأقراص الخاصة بالفريق",
    },
    search: {
      placeholder: "البحث عن الملفات",
      button: "بحث",
    },
  },
  facebook: {
    menu: {
      myAlbums: "ألبوماتي",
      likedPages: "الصفحات",
    },
  },
  vk: {
    menu: {
      myAlbums: "ألبوماتي",
      page: "صور الملف الشخصي",
      withMe: "الصور معي",
      saved: "الصور المحفوظة",
      myFriends: "أصدقائي",
      docs: "مستنداتي",
    },
  },
  evernote: {
    menu: {
      allNotes: "كل الملاحظات",
      notebooks: "دفاتر الملاحظات",
      tags: "العلامات",
      search: "بحث",
    },
    search: {
      placeholder: "البحث عن الملاحظات",
      button: "بحث",
    },
  },
  flickr: {
    menu: {
      myPhotostream: "تدفق الصور",
      myAlbums: "الألبومات",
      myFavorites: "المفضلة",
      follows: "المتابعات",
    },
  },
  gphotos: {
    menu: {
      myAlbums: "الألبومات",
      myPhotos: "الصور",
    },
  },
  huddle: {
    menu: {
      workspaces: "مساحات العمل",
    },
  },
  nft: {
    menu: {
      myAssets: "أصولي",
      owner: "عنوان المالك",
    },
    assets: {
      button: "عرض",
    },
  },
  search: {
    empty: "المجلد فارغ",
    noResult: "لا توجد نتائج لـ",
    retry: "يرجى إدخال استعلام البحث",
    placeholder: "بحث",
    clear: "مسح",
  },

  files: {
    one: "%n ملف",
    other: "%n ملفات",
  },
  list: {
    table: {
      title: "العنوان",
      size: "الحجم",
    },
  },
};

// قواعد الجمع مأخوذة من:
// https://unicode.org/cldr/charts/34/supplemental/language_plural_rules.html
l10n.pluralize.ar = function (n) {
  return n === 1 ? "one" : "other";
};

l10n.date.ar = function (d) {
  var months = [
    "يناير",
    "فبراير",
    "مارس",
    "أبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];
  return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
