import homePage from './pages/home-page.js';
import emailApp from './apps/email/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';
// import bookApp from './apps/book/';

const routes = [

    {
        path: '/',
        component: homePage
    },

    {
        path: '/email',
        component: emailApp,
        // children: [{
        //     path: '/email/compose',
        //     components: {
        //         compose: emailCompose
        //     }
        // }, ]
    },

    {
        path: '/keep',
        component: keepApp
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
]

export const router = new VueRouter({ routes })