<template>
  <v-navigation-drawer app :value="drawer" style="z-index: 3;box-shadow: 7px 0 60px rgba(0,0,0,.05);" width="285">
    <v-list>
      <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
      >
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" class="text__sidebar"></v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
            v-for="child in item.items"
            :key="child.title"
            link
        >
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
        action: 'mdi-ticket',
        items: [{title: 'List Item'}],
        title: 'Attractions',
      },
      {
        action: 'mdi-silverware-fork-knife',
        items: [
          {title: 'Breakfast & brunch'},
          {title: 'New American'},
          {title: 'Sushi'},
        ],
        title: 'Dining',
      },
      {
        action: 'mdi-school',
        items: [{title: 'List Item'}],
        title: 'Education',
      },
      {
        action: 'mdi-human-male-female-child',
        items: [{title: 'List Item'}],
        title: 'Family',
      },
      {
        action: 'mdi-bottle-tonic-plus',
        items: [{title: 'List Item'}],
        title: 'Health',
      },
      {
        action: 'mdi-briefcase',
        items: [{title: 'List Item'}],
        title: 'Office',
      },
      {
        action: 'mdi-tag',
        items: [{title: 'List Item'}],
        title: 'Promotions',
      },
    ],
  }),
};
</script>

<style scoped>
.text__sidebar {
  font-size: 12px;
  font-weight: 500;
}

.text__sidebar-child {
  font-size: 11px;
  font-weight: 400;
}
</style>
