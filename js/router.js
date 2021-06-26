import homePage from './pages/home-page.js';
import emailApp from './apps/email/pages/email-app.js';
import emailDetails from './apps/email/pages/email-details.js';
import emailList from './apps/email/cmps/email-list.js';
import emailCompose from './apps/email/cmps/email-compose.js';
import keepApp from './apps/keep/pages/keep-app.js';
import keepDetails from './apps/keep/pages/keep-details.js';



const routes = [

    {
        path: '/',
        component: homePage
    },

    {
        path: '/email',
        component: emailApp,
        children: [{
                path: '/email/email-list',
                component: emailList,
            },
            {
                path: '/email/email-compose',
                component: emailCompose,
            },
            {
                path: '/email/:emailId',
                component: emailDetails,
            },
        ]
    },
    // {
    //     path: '/email/:emailId', // : => Param
    //     component: emailDetails,
    // },

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