<template>
  <v-navigation-drawer :value="drawer" app style="box-shadow: 7px 0 60px rgba(0,0,0,.05);" elevation="1">

    <v-divider></v-divider>

    <v-list>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-home</v-icon>
        </v-list-item-icon>

        <v-list-item-title>Inicio</v-list-item-title>
      </v-list-item>
      <v-list-group
          :value="true"
          prepend-icon="mdi-account-circle"
      >
        <template v-slot:activator>
          <v-list-item-title>Usuarios</v-list-item-title>
        </template>

        <v-list-group
            :value="true"
            no-action
            sub-group
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Administrador</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
              v-for="([title, icon], i) in admins"
              :key="i"
              link
          >
            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-title v-text="title"></v-list-item-title>


          </v-list-item>
        </v-list-group>


      </v-list-group>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  props: ["drawer"],
  data() {
    return {
      admins: [
        ['Administración', 'mdi-account-multiple-outline'],
        ['Ajustes', 'mdi-cog-outline'],
      ],
      cruds: [
        ['Create', 'mdi-plus-outline'],
        ['Read', 'mdi-file-outline'],
        ['Update', 'mdi-update'],
        ['Delete', 'mdi-delete'],
      ],
    };
  },
};
</script>

<style scoped></style>
