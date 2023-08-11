<template>
  <v-app>
    <SideBar :drawer="drawer"/>
    <TopBar @drawerEvent="drawer = !drawer"/>
    <v-main>
      <router-view :key="$route.fullPath"></router-view>
    </v-main>
  </v-app>
</template>
<script>
import SideBar from '@/components/layout/SideBar.vue';
import TopBar from '@/components/layout/TopBar.vue';
export default {
  name: "DashBoard",
  components: {
    SideBar,
    TopBar
  },
  data: () => ({
    drawer: true
  }),
  mounted() {
    if (window.innerWidth <= 1263) {
      this.drawer = false;
    }
  },
}
</script>
