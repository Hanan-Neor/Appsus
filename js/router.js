import homePage from './pages/home-page.js';
import emailApp from './apps/email/pages/email-app.js';
import emailDetails from './apps/email/pages/email-details.js';
import keepApp from './apps/keep/pages/keep-app.js';
import keepDetails from './apps/keep/pages/keep-details.js';
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
        path: '/email/:emailId', // : => Param

        component: emailDetails
    },

    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/keep/:keepId',
        component: keepDetails
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
]

export const router = new VueRouter({ routes })