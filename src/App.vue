<template>
  <v-app>
    <SideBar v-if="$route.path !== '/login'" :drawer="drawer"/>
    <TopBar v-if="$route.path !== '/login'" @drawerEvent="drawer = !drawer"/>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>

<script>

import SideBar from "@/components/layout/Sidebar.vue";
import TopBar from "@/components/layout/Topbar.vue";

export default {
  name: "App",
  components: {TopBar, SideBar},
  data: () => ({
    drawer: true,
  }),
  mounted() {
    if (window.innerWidth <= 1263) {
      this.drawer = false;
    }
  },
};
</script>

