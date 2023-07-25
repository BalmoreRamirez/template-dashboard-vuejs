<template>
  <div>
    <h2 style="color: #495057;font-weight: 400; font-size: 1.25rem">Datos en tiempo real</h2>

    <template>
      <v-breadcrumbs :items="items" class="pa-0 mb-4">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            {{ item.title }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </template>

    <v-data-table :headers="headers" :items="desserts" class="card__custom-style">
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Company example</v-toolbar-title>

          <v-spacer></v-spacer>
          <template>
            <v-btn color="primary" dark class="mb-2">
              Actions menu
            </v-btn>
          </template>
        </v-toolbar>
      </template>
      <template v-slot:[`item.caloria`]="{ item }">
        <v-chip :color="getColor(item.caloria)" dark>
          {{ item.id }}
        </v-chip>
      </template>

      <template v-slot:[`item.hierro`]="{item}">
        <v-progress-linear olor="blue-lighten-3" class="rounded-pill" v-model="knowledge" height="15">
          <strong>{{ Math.ceil(item.hierro) }}%</strong>
        </v-progress-linear>

      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <i class="bi bi-pencil mr-2" style="font-size: 1.2rem;color: cornflowerblue;" @click="editItem(item)"></i>
        <i class="bi bi-trash" style="font-size: 1.2rem; color:crimson;" @click="deleteItem(item)"></i>
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
      { text: 'Calories', value: 'caloria' },
      { text: 'Fat (g)', value: 'grasa' },
      { text: 'Carbs (g)', value: 'carbohidrato' },
      { text: 'Protein (g)', value: 'proteina' },
      { text: 'Iron (%)', value: 'hierro' },
      { text: 'Status', value: 'status' },
      { text: 'Actions', value: 'actions', sortable: false },
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
    getItems() {
      console.log('code',process.env.VUE_APP_API_URL);
      fetch(process.env.VUE_APP_API_URL + '/v1/recetas')
        .then(response => response.json())
        .then(data => {
          this.desserts = data
          console.log({ "data": data })
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
.card__custom-style{
  box-shadow: 0 .46875rem 2.1875rem rgba(4,9,20,.03),0 .9375rem 1.40625rem rgba(4,9,20,.03),0 .25rem .53125rem rgba(4,9,20,.05),0 .125rem .1875rem rgba(4,9,20,.03);
  border-width: 0;
}
</style>