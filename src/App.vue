<template>
  <v-app id="inspire">
    <SideBar :drawer="drawer"/>
    <TopBar @drawerEvent="drawer = !drawer"/>
    <v-main style="background: #f1f4f6">
      <v-container class="py-8 px-6" fluid>
        <DataTable></DataTable>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "./components/Sidebar";
import TopBar from "./components/Topbar";
import DataTable from "@/components/dashboard/DataTable.vue";

export default {
  name: "App",
  components: {DataTable, TopBar, SideBar},
  data: () => ({
    drawer: true,
  }),
  methods: {},
};
</script>