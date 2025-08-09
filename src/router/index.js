import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import PPCServices from '../components/PPCServices.vue'
import GoogleAdsManagement from '../components/GoogleAdsManagement.vue'
import EmailMarketing from '../components/EmailMarketing.vue'
import ContentMarketing from '../components/ContentMarketing.vue'
import MetaAds from '../components/MetaAds.vue'
import LinkedInAds from '../components/LinkedInAds.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ppc-services', name: 'PPCServices', component: PPCServices },
    { path: '/google-ads-management', name: 'GoogleAdsManagement', component: GoogleAdsManagement },
    { path: '/email-marketing', name: 'EmailMarketing', component: EmailMarketing },
    { path: '/content-marketing', name: 'ContentMarketing', component: ContentMarketing },
    { path: '/meta-ads', name: 'MetaAds', component: MetaAds },
    { path: '/linkedin-ads', name: 'LinkedInAds', component: LinkedInAds },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router