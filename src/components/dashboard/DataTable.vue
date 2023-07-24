<template>
<div>
  <h2 style="color: #495057;font-weight: 400; font-size: 1.25rem">Datos en tiempo real</h2>

  <template>
    <v-breadcrumbs :items="items" class="pa-0 mb-4">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item
            :href="item.href"
            :disabled="item.disabled"
        >
          {{ item.title }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
  </template>

  <v-data-table
      :headers="headers"
      :items="desserts"
      class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
          flat
      >
        <v-toolbar-title>Company example</v-toolbar-title>

        <v-spacer></v-spacer>
        <template>
          <v-btn
              color="primary"
              dark
              class="mb-2"
          >
            Actions menu
          </v-btn>
        </template>
      </v-toolbar>
    </template>
    <template v-slot:[`item.id`]="{ item }">
      <v-chip
          :color="getColor(item.id)"
          dark
      >
        {{ item.id }}
      </v-chip>
    </template>

    <template v-slot:[`item.status`]="{  }">
      <v-progress-linear
          olor="blue-lighten-3"
          class="rounded-pill"
          v-model="knowledge"
          height="15"
      >
        <strong>{{ Math.ceil(knowledge) }}%</strong>
      </v-progress-linear>

    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
          color="primary"
          class="mr-2"
          @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
          color="red"
          @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        title: 'Dashboard',
        disabled: false,
        href: 'breadcrumbs_dashboard',
      },
      {
        title: 'Link 1',
        disabled: false,
        href: 'breadcrumbs_link_1',
      },
      {
        title: 'Link 2',
        disabled: true,
        href: 'breadcrumbs_link_2',
      },
    ],
    skill: 20,
    knowledge: 33,
    power: 78,
    headers: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'nombre',
      },
      {text: 'Calories', value: 'id'},
      {text: 'Fat (g)', value: 'categoria'},
      {text: 'Carbs (g)', value: 'autor'},
      {text: 'Protein (g)', value: 'grupo'},
      {text: 'Iron (%)', value: 'restaurante'},
      {text: 'Status',value: 'status'},
      {text: 'Actions', value: 'actions', sortable: false},
    ],
    desserts: [],
  }),
  mounted() {
    this.getItems()
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    getItems(){
      fetch('http://localhost:3000/recetas')
          .then(response => response.json())
          .then(data => {
            this.desserts = data
            console.log({"data":data})
          })
          .catch(error => console.error('Error fetching data:', error));
    },
    editItem() {

    },
    deleteItem() {

    }
  },
}
</script>
<style scoped>

</style>