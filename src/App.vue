<template>
  <v-app>
    <v-main>
     <Auth></Auth>
    </v-main>
  </v-app>
</template>

<script>
import Auth from "@/views/Auth.vue";

export default {
  name: "App",
  components: {Auth}
};
</script>

