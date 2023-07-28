<template>
  <v-navigation-drawer app :value="drawer"
                       style="z-index: 3;box-shadow: 0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03);"
                       width="285">
    <v-list>
      <v-list-group v-for="item in items" :key="item.title" no-action :value="active">
        <template v-slot:activator>
          <i v-bind:class="item.action" class="icon__sidebar"></i>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text__sidebar"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item v-for="child in item.items" :key="child.title" :to="child.route" link>
          <i v-bind:class="child.icon" class="icon__sidebar"></i>
          <v-list-item-content>
            <v-list-item-title v-text="child.title" class="text__sidebar-child"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list-group>

    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SideBar",
  props: ["drawer", "active"],
  data: () => ({
    items: [
      {
        action: 'bi bi-bank2',
        items: [
          {
            icon: 'bi bi-spellcheck', title: 'Typography', route: 'typography'
          }, {
            icon: 'bi bi-calendar',
            title: 'DataTable',
            route: 'data-table'
          }],
        title: 'Sales',
      },
    ],
  }),
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.icon__sidebar {
  font-size: 1em;
  margin-right: 10px;
}

.text__sidebar {
  font-size: 12px;
  font-weight: 500;
}

.text__sidebar-child {
  font-size: 11px;
  font-weight: 400;
}
@media (max-width: 1263px) {
  .v-navigation-drawer{
    margin-top: 60px;
  }
  .v-app-bar__nav-icon{
    margin-left: 0;
  }

}

</style>
