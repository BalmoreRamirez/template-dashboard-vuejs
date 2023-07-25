<template>
  <v-navigation-drawer app :value="drawer" style="z-index: 3;box-shadow: 7px 0 60px rgba(0,0,0,.05);" width="285">
    <v-list>
      <v-list-group v-for="item in items" :key="item.title" v-model="item.active" no-action>
        <template v-slot:activator>
          <i v-bind:class="item.action"></i>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text__sidebar"></v-list-item-title>
          </v-list-item-content>
        </template>


        <v-list-item v-for="child in item.items" :key="child.title" link>
          <i v-bind:class="child.icon"></i>
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
  props: ["drawer"],
  data: () => ({
    items: [
      {
        action: 'bi bi-bank2',
        items: [{  icon: 'bi bi-calendar',title: 'List Item' }],
        title: 'Attractions',
      },
      {
        action: 'bi bi-basket',
        items: [
          {  icon: 'bi bi-calendar',title: 'Breakfast & brunch' },
          {  icon: 'bi bi-calendar',title: 'New American' },
          {  icon: 'bi bi-calendar',title: 'Sushi' },
        ],
        title: 'Dining',
      },
      {
        action: 'bi bi-brush',
        items: [
          {
            icon: 'bi bi-calendar',
            title: 'List Item'
          }
        ],
        title: 'Education',
      },
      {
        action: 'bi bi-calendar',
        items: [{ icon: 'bi bi-calendar', title: 'List Item' }],
        title: 'Family',
      },
      {
        action: 'bi bi-cart',
        items: [{ icon: 'bi bi-calendar', title: 'List Item' }],
        title: 'Health',
      },
      {
        action: 'bi bi-chat',
        items: [{  icon: 'bi bi-calendar',title: 'List Item' }],
        title: 'Office',
      },
      {
        action: 'bi bi-clipboard-data',
        items: [{ icon: 'bi bi-calendar', title: 'List Item' }],
        title: 'Promotions',
      },
    ],
  }),
};
</script>

<style scoped>
.bi {
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
</style>
