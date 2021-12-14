module.exports = {
    lang: 'ru',
    title: 'Документация ServiceBook',
    description: 'Описание ServiceBook',
    patterns: ['**/index.md'],
    themeConfig: {
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Начало', link: '/start/' },
            { text: 'Новости', link: '/news/' },
        ],
        sidebar: [
            ['/', 'Главная'],
            ['/start/', 'Начало'],
            ['/add-hotel/', 'Добавление гостиницы'],
            ['/add-rest/', 'Добавление ресторана'],
        ]
    },
    dest: 'public',
};