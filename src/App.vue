<template>
  <v-app id="inspire">
    <Sidebar :drawer="drawer"/>
    <Topbar @drawerEvent="drawer = !drawer"/>
    <v-main style="background: #f1f4f6">
      <v-container class="py-8 px-6" fluid>
        <!--<Dashboard></Dashboard>-->
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
//import Dashboard from "@/views/Dashboard.vue";

export default {
  name: "App",
  components: {Topbar, Sidebar},
  data: () => ({
    cards: ["Today", "Yesterday"],
    drawer: null,
  }),
  methods: {},
};
</script>