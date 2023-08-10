<template>
  <v-app id="inspire">
    <SideBar :drawer="drawer"/>
    <TopBar @drawerEvent="drawer = !drawer"/>
    <v-main style="background: #f1f4f6">
      <v-container class="py-8 px-6" fluid>

      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import TopBar from "@/components/layout/Topbar.vue";
import SideBar from "@/components/layout/Sidebar.vue";

export default {
  name: "DashBoard",
  components: {TopBar, SideBar},
  data: () => ({
    drawer: true,
  }),
  mounted() {
    if (window.innerWidth <= 1263) {
      this.drawer = false;
    }
  },
}
</script>

<style scoped>

</style>