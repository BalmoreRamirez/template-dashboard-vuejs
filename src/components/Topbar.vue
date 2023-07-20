<template>
  <v-app-bar app
             style="background-color:#fafbfc;box-shadow: 0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03) !important;">
    <v-app-bar-nav-icon @click="$emit('drawerEvent')"></v-app-bar-nav-icon>
    <v-spacer/>
    <v-col lg="6" cols="12">
    </v-col>
    <v-spacer/>
    <v-menu offset-y>
      <template v-slot:activator="{ attrs, on }">
        <span style="cursor: pointer" v-bind="attrs" v-on="on">
          <v-chip link>
            <v-badge dot bottom color="green" offset-y="10" offset-x="10">
              <v-avatar size="40">
                <v-img src="https://randomuser.me/api/portraits/women/81.jpg"/>
              </v-avatar>
            </v-badge>
            <span class="ml-3">Maria Ramirez</span>
          </v-chip>
        </span>
      </template>

      <v-card width="270">
        <v-img
            height="100px"
            src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        >
          <v-card-title class="white--text mt-4">
            <v-avatar size="50">
              <img
                  alt="user"
                  src="https://randomuser.me/api/portraits/women/81.jpg"
              >
            </v-avatar>
            <p class="ml-3">
              Maria Ramirez
            </p>
          </v-card-title>
        </v-img>
        <v-list width="250" class="py-0">
          <v-divider/>
          <v-list-item link v-for="(menu, i) in menus" :key="i">
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="text__profile-child">
              {{ menu.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: `Topbar`,
  data() {
    return {
      menus: [
        {title: "Perfil", icon: "mdi-account"},
        {title: "Cambiar contraseña", icon: "mdi-key"},
        {title: "Configuración", icon: "mdi-cog"},
        {title: "Cierre de sesión", icon: "mdi-logout"},
      ],
    };
  },
};
</script>

<style scoped>
.text__profile-child {
  font-size: 11px;
  font-weight: 400;
}
</style>
