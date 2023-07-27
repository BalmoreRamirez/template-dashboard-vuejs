<template>
  <v-app id="inspire">
    <SideBar :drawer="drawer" :active="active" />
    <TopBar @drawerEvent="drawer = !drawer" @eventActiveMenu="eventChild" />
    <v-main style="background: #f1f4f6">
      <v-container class="py-8 px-6" fluid>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/Sidebar";
import TopBar from "./components/Topbar";

export default {
  name: "App",
  components: { TopBar, SideBar },
  data: () => ({
    drawer: true,
    active: false,
  }),
  methods: {
    eventChild(){
      
      if (!this.active) {
        console.log('child');
       
      }
    }
  },
};
</script>