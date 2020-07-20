l10n.translations.uk = {
    logout: 'Вийти',
    error: {
        a: 'Щось пішло не так. Будь ласка',
        b: 'перезавантажити',
        c: 'Технічні подробиці:'
    },
    login: {
        title: 'Завантажити файли з %source',
        lineA: {
            instagram: 'Виберіть фото з вашого акаунту.'
        },
        lineB: 'Ми про все подбаємо.<br> Вам достатньо лише увійти до системи.',
        note: 'Сторінка входу відкриється у новому вікні.',
    },
    pagination: {
        loading: 'Завантаження...',
        loadMore: 'Завантажити ще',
        failed: {
            a: 'Не вдалося завантажити.',
            b: 'Спробувати ще'
        }
    },
    instagram: {
        menu: {
            myPhotos: 'Мої фото'
        },
    },
    // pluralization example
    files: {
        one: '%n файл',
        few: '%n файли',
        many: '%n файлів'
    },
    list: {
        table: {
            title: 'Назва',
            size: 'Розмір'
        }
    }
};

// Pluralization rules taken from:
// http://unicode.org/repos/cldr-tmp/trunk/diff/supplemental/language_plural_rules.html
l10n.pluralize.uk = function (n) {
    return ((n/10%10|0) == 1) || (n%10 == 0) || (n%10 > 4) ?
    'many' : ((n%10 == 1) ? 'one' : 'few');
};

l10n.date.uk = function(d) {
    var months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Чер', 'Лип', 'Серп', 'Вер', 'Жов', 'Лис', 'Груд'];

    return "" + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
};
