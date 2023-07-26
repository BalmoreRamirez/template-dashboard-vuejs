<template>
  <v-app id="inspire">
    <SideBar :drawer="drawer"/>
    <TopBar @drawerEvent="drawer = !drawer"/>
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
//import DataTable from "@/components/home/DataTable.vue";

export default {
  name: "App",
  components: { TopBar, SideBar},
  data: () => ({
    drawer: true,
  }),
  methods: {},
};
</script>