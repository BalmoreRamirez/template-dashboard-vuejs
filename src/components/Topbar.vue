<template>
  
  <v-system-bar app color=”white” height="60" fixed class="px-5"
                style="background-color:#fafbfc;box-shadow: 0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03) !important;">
    <v-img
        max-height="23"
        max-width="97"
        src="@/assets/logo-inverse.png"
    ></v-img>

    <v-app-bar-nav-icon style="margin-left: 119px" @click="$emit('drawerEvent')"></v-app-bar-nav-icon>

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
            <span class="ml-3 name-profile">Maria Ramirez</span>
          </v-chip>
        </span>
      </template>

      <v-card width="270">
        <v-img
            height="100px"
            src="@/assets/image-profile-header.jpg"
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
        <v-list class="py-0">
          <v-divider/>
          <v-list-item link v-for="(menu, i) in menus" :key="i">

            <v-list-item-icon class="card__profile-topbar">
              <i v-bind:class="menu.icon"></i>

            </v-list-item-icon>

            <v-list-item-title class="text__profile-child">
              {{ menu.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>

  </v-system-bar>
</template>

<script>
export default {
  name: `TopBar`,
  data() {
    return {
      menus: [
        {title: "Perfil", icon: "bi bi-person"},
        {title: "Cambiar contraseña", icon: "bi bi-key"},
        {title: "Configuración", icon: "bi bi-gear"},
        {title: "Cierre de sesión", icon: "bi bi-box-arrow-right"},
      ],
    };
  },
};
</script>

<style scoped>
.card__profile-topbar{
  color: #3f6ad8;
}
.text__profile-child {
  font-size: 11px;
  font-weight: 400;
  color: #3f6ad8;
}

.v-system-bar .v-btn .v-icon {
  color: #3f6ad8;
  width: 22px;
  height: 2px;
}

@media (max-width: 375px) {
  .name-profile { display: none; }
}
</style>
