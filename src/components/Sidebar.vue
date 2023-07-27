<template>
  <v-navigation-drawer app :value="drawer"
    style="z-index: 3;box-shadow: 0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03);"
    width="285">
    <v-list>

      <v-list-group v-for="item in items" :key="item.title" no-action :value="activeItem" v-model="activeItem">
        <template v-slot:activator>
          <i v-bind:class="item.action"></i>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text__sidebar"></v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item v-for="child in item.items" :key="child.title" :to="child.route" link>
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
  props: ["drawer","active"],
  data: () => ({
    items: [
      {
        action: 'bi bi-bank2',
        items: [{ icon: 'bi bi-calendar', title: 'DataTable', route: 'data-table' }],
        title: 'Home',
      },
      {
        action: 'bi bi-basket',
        items: [
          { icon: 'bi bi-calendar', title: 'Breakfast & brunch', route: 'data-table' },
          { icon: 'bi bi-calendar', title: 'New American', route: 'data-table' },
          { icon: 'bi bi-calendar', title: 'Sushi', route: 'data-table' },
        ],
        title: 'Dining',
      },
      {
        action: 'bi bi-brush',
        items: [
          {
            icon: 'bi bi-calendar',
            title: 'List Item',
            route: 'data-table'
          }
        ],
        title: 'Education',
      },
      {
        action: 'bi bi-calendar',
        active:true,
        items: [{ icon: 'bi bi-calendar', title: 'List Item', route: 'data-table' }],
        title: 'Family',
      },
      {
        action: 'bi bi-cart',
        items: [{ icon: 'bi bi-calendar', title: 'List Item', route: 'data-table' }],
        title: 'Health',
      },
      {
        action: 'bi bi-chat',
        items: [{ icon: 'bi bi-calendar', title: 'List Item', route: 'data-table' }],
        title: 'Office',
      },
      {
        action: 'bi bi-clipboard-data',
        items: [{ icon: 'bi bi-calendar', title: 'List Item', route: 'data-table' }],
        title: 'Promotions',
      },
    ],
    activeItem: null
  }),
  watch:{
    activeItem(val){
      console.log(val);
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

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
