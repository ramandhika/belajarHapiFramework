const { request } = require('https');

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            // Detailed notation
            const response = h.response('Berhasil dimuat').code(200);
            response.type('text/html');
            response.header('X-Custom', 'Hapi Framework');
            response.header('Created-by', 'Ramandhika');
            return response;
        },
    },
    {
        method: '*',
        path: '/',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/login',
        handler: (request, h) => {
            // Alternatif
            return (response = h
                .response('Sukses Login')
                .type('text/html')
                .header('X-Custom', 'Hapi Framework')
                .header('Created-By', 'Ramandhika'));
            return `Kamu berada di halaman Login`;
        },
    },
    {
        method: 'POST',
        path: '/login',
        handler: (request, h) => {
            // Query http://localhost:3000/login?username=ramandhika&password=blabla
            // Output : Berhasil dibuat ramandhika
            const { username = 'Guest', password = '***' } = request.query;
            const response = h.response(`Berhasil dibuat ${username}`).code(201);
            response.type('text/html');
            response.header('Created-By', 'Ramandhika');
            return response;
            // return `Welcome ${username}`;
        },
    },
    {
        method: 'GET',
        path: '/about',
        handler: (request, h) => {
            return h
                .response('Sukses')
                .type('text/html')
                .header('X-Custom', 'Hapi Framework')
                .header('Created-By', 'Ramandhika');
            return 'About page';
        },
    },
    {
        method: '*',
        path: '/about',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/profile/{username?}',
        handler: (request, h) => {
            const { username = 'Default' } = request.params;
            return `Hallo ${username}, selamat datang di halaman Profile`;
        },
    },
    {
        method: '*',
        path: '/profil',
        handler: (request, h) => {
            return 'Halaman tidak dapat diakses dengan method tersebut';
        },
    },
    {
        method: 'GET',
        path: '/data-diri',
        // Contoh Menggunakan Query Parameters http://localhost:3000/data-diri?nama=Ramandhika&lokasi=Surakarta
        // Output : Nama : Ramandhika yang beralamatkan Surakarta
        handler: (request, h) => {
            const { nama = 'Guest', lokasi = 'Bumi' } = request.query;
            return `Nama : ${nama} yang beralamatkan ${lokasi}`;
        },
    },
    {
        method: 'GET',
        path: '/hello/{name?}',
        handler: (request, h) => {
            const { name = 'Guest' } = request.params;
            const { lang } = request.query;

            // cara penggunaan http://localhost:3000/hello/Ramandhika?lang=id
            // Output : Hai, Ramandhika
            if (lang === 'id') {
                return `Hai, ${name}`;
            }
            return `Hello, ${name}`;
        },
    },
    {
        method: '*',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Halaman tidak ditemukan';
        },
    },
];

module.exports = routes;
