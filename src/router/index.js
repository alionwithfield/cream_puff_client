import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import CardLayoutView from '../views/CardLayoutView.vue';
import WithSecondaryNavAndTertiaryColumn from '../components/application-ui/page-examples/home-screens/WithSecondaryNavAndTertiaryColumn.vue';
import FullWidthWithSidebar from '../components/application-ui/page-examples/home-screens/FullWidthWithSidebar.vue';
import ConstrainedMultiColumn from '../components/application-ui/page-examples/home-screens/ConstrainedMultiColumn.vue';
import ConstrainedGridLayout from '../components/application-ui/page-examples/home-screens/ConstrainedGridLayout.vue';
import CardLayoutWithSidebar from '../components/application-ui/page-examples/home-screens/CardLayoutWithSidebar.vue';
import BrandNavWithOverlapAndSidebarForm from '../components/application-ui/page-examples/settings-screens/BrandNavWithOverlapAndSidebarForm.vue';
import WithTieredSidebarNavigation from '../components/application-ui/page-examples/settings-screens/WithTieredSidebarNavigation.vue';
import WithSidebarNavigationAndTwoColumnForm from '../components/application-ui/page-examples/settings-screens/WithSidebarNavigationAndTwoColumnForm.vue';
import WithSidebarNavigationAndConstrainedContentArea from '../components/application-ui/page-examples/settings-screens/WithSidebarNavigationAndConstrainedContentArea.vue';
import MultiColumnInbox from '../components/application-ui/page-examples/detail-screens/MultiColumnInbox.vue';
import FileGallery from '../components/application-ui/page-examples/detail-screens/FileGallery.vue';
import ConstrainedWithSidebar from '../components/application-ui/page-examples/detail-screens/ConstrainedWithSidebar.vue';
import MultiColumnDirectory from '../components/application-ui/page-examples/detail-screens/MultiColumnDirectory.vue';
import WithPageHeadingAndStackedList from '../components/application-ui/page-examples/detail-screens/WithPageHeadingAndStackedList.vue';
import StackedCardLayout from '../components/application-ui/page-examples/detail-screens/StackedCardLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DashboardView.vue'),
    },
    {
      path: '/frequently-asked-questions',
      name: 'frequentlyaskedquestions',
      component: () => import('../views/FrequentlyAskedQuestionsView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/request',
      name: 'request',
      component: () => import('../views/RequestsView.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // meta: {
      //   guest: true,
      //   authenticated: true,
      // },
    },
    {
      path: '/test',
      name: 'test',
      component: WithSecondaryNavAndTertiaryColumn,
    },
    {
      path: '/fullwidthwithsidebar',
      name: 'fullwidthwithsidebar',
      component: FullWidthWithSidebar,
    },
    {
      path: '/constrainedmulticolumn',
      name: 'constrainedmulticolumn',
      component: ConstrainedMultiColumn,
    },
    {
      path: '/constrainedgridlayout',
      name: 'constrainedgridlayout',
      component: ConstrainedGridLayout,
    },
    {
      path: '/cardlayoutwithsidebar',
      name: 'cardlayoutwithsidebar',
      component: CardLayoutWithSidebar,
    },
    {
      path: '/brandnavwithoverlapandsidebarform',
      name: 'brandnavwithoverlapandsidebarform',
      component: BrandNavWithOverlapAndSidebarForm,
    },
    {
      path: '/multicolumninbox',
      name: 'multicolumninbox',
      component: MultiColumnInbox,
    },
    {
      path: '/withtieredsidebarnavigation',
      name: 'withtieredsidebarnavigation',
      component: WithTieredSidebarNavigation,
    },
    {
      path: '/withsidebarnavigationandtwocolumnform',
      name: 'withsidebarnavigationandtwocolumnform',
      component: WithSidebarNavigationAndTwoColumnForm,
    },
    {
      path: '/withsidebarnavigationandconstrainedcontentarea',
      name: 'withsidebarnavigationandconstrainedcontentarea',
      component: WithSidebarNavigationAndConstrainedContentArea,
    },
    {
      path: '/filegallery',
      name: 'filegallery',
      component: FileGallery,
    },
    {
      path: '/constrainedwithsidebar',
      name: 'constrainedwithsidebar',
      component: ConstrainedWithSidebar,
    },
    {
      path: '/multicolumndirectory',
      name: 'multicolumndirectory',
      component: MultiColumnDirectory,
    },
    {
      path: '/withpageheadingandstackedlist',
      name: 'withpageheadingandstackedlist',
      component: WithPageHeadingAndStackedList,
    },
    {
      path: '/stackedcardlayout',
      name: 'stackedcardlayout',
      component: StackedCardLayout,
    },
  ],
});

export default router;
