import type { RouterConfig } from "@nuxt/schema";
// const route = useRoute()

// https://router.vuejs.org/api/#routeroptions
export default <RouterConfig>{
  // scrollBehavior(to, from, savedPosition) {
  //   // Scroll to Full site search result if page is search result
  //   if ((from.fullPath != to.fullPath && to.query.s == from.query.s) && to.name == "search-results" && savedPosition == null) {
  //     const section = document.getElementById("fullSiteSearchRes");
  //     const scrollHeight = section?.offsetTop - 50 || 0
  //     return new Promise(function (resolve, reject) {
  //       setTimeout(() => {
  //         resolve({ top: scrollHeight, behavior: 'smooth' });
  //       }, 100);
  //     });
  //   }
  //   if (savedPosition?.top) {
  //     return { top: savedPosition.top }
  //   } else {
  //     // always scroll to top
  //     return new Promise(function (resolve, reject) {
  //       setTimeout(() => {
  //         resolve({ top: 0 });
  //       }, 350);
  //     });
  //   }
  // },
};
