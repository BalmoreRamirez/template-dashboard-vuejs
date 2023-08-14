<template>
  <v-app>
    <SideBar :drawer="drawer" @updateDrawer="updateDrawer"/>
    <TopBar @drawerEvent="toggleDrawer" :isMobile="isMobile"/>
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
    drawer: false,
    isMobile: false
  }),
  mounted() {
    this.isMobile = window.innerWidth <= 1263;
    this.drawer = !this.isMobile;
    window.addEventListener('resize', this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth <= 1263;
    },
    toggleDrawer() {
      if (this.isMobile) {
        this.drawer = !this.drawer;
      }else{
        this.drawer = !this.drawer;
      }
    },
    updateDrawer(newDrawerState) {
      this.drawer = newDrawerState;
    }
  }
};
</script>
