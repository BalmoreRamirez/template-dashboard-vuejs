<template>
<v-container>
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

</v-container>
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
    desserts: [
      {
        "id": 1,
        "nombre": "Receta 1",
        "caloria": 200,
        "grasa": 10,
        "carbohidrato": 30,
        "proteina": 15,
        "hierro": 2.5,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 2,
        "nombre": "Receta 2",
        "caloria": 300,
        "grasa": 15,
        "carbohidrato": 25,
        "proteina": 20,
        "hierro": 1.8,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 3,
        "nombre": "Receta 3",
        "caloria": 250,
        "grasa": 12,
        "carbohidrato": 40,
        "proteina": 10,
        "hierro": 3,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 4,
        "nombre": "Receta 4",
        "caloria": 180,
        "grasa": 8,
        "carbohidrato": 35,
        "proteina": 18,
        "hierro": 2.2,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 5,
        "nombre": "Receta 5",
        "caloria": 220,
        "grasa": 13,
        "carbohidrato": 28,
        "proteina": 22,
        "hierro": 1.5,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 6,
        "nombre": "Receta 6",
        "caloria": 270,
        "grasa": 14,
        "carbohidrato": 20,
        "proteina": 25,
        "hierro": 2,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 7,
        "nombre": "Receta 7",
        "caloria": 190,
        "grasa": 9,
        "carbohidrato": 33,
        "proteina": 12,
        "hierro": 1.7,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 8,
        "nombre": "Receta 8",
        "caloria": 240,
        "grasa": 11,
        "carbohidrato": 22,
        "proteina": 30,
        "hierro": 2.8,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 9,
        "nombre": "Receta 9",
        "caloria": 280,
        "grasa": 16,
        "carbohidrato": 18,
        "proteina": 28,
        "hierro": 2.1,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 10,
        "nombre": "Receta 10",
        "caloria": 210,
        "grasa": 12,
        "carbohidrato": 26,
        "proteina": 17,
        "hierro": 1.9,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 11,
        "nombre": "Receta 11",
        "caloria": 320,
        "grasa": 18,
        "carbohidrato": 30,
        "proteina": 14,
        "hierro": 2.3,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 12,
        "nombre": "Receta 12",
        "caloria": 260,
        "grasa": 13,
        "carbohidrato": 25,
        "proteina": 20,
        "hierro": 1.6,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 13,
        "nombre": "Receta 13",
        "caloria": 180,
        "grasa": 10,
        "carbohidrato": 35,
        "proteina": 10,
        "hierro": 2,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 14,
        "nombre": "Receta 14",
        "caloria": 290,
        "grasa": 15,
        "carbohidrato": 20,
        "proteina": 30,
        "hierro": 2.5,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 15,
        "nombre": "Receta 15",
        "caloria": 220,
        "grasa": 12,
        "carbohidrato": 30,
        "proteina": 15,
        "hierro": 1.8,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 16,
        "nombre": "Receta 16",
        "caloria": 250,
        "grasa": 14,
        "carbohidrato": 25,
        "proteina": 18,
        "hierro": 2,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 17,
        "nombre": "Receta 17",
        "caloria": 270,
        "grasa": 15,
        "carbohidrato": 18,
        "proteina": 28,
        "hierro": 2.3,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 18,
        "nombre": "Receta 18",
        "caloria": 200,
        "grasa": 11,
        "carbohidrato": 22,
        "proteina": 30,
        "hierro": 1.9,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 19,
        "nombre": "Receta 19",
        "caloria": 310,
        "grasa": 16,
        "carbohidrato": 26,
        "proteina": 17,
        "hierro": 2.4,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 20,
        "nombre": "Receta 20",
        "caloria": 240,
        "grasa": 14,
        "carbohidrato": 28,
        "proteina": 20,
        "hierro": 1.7,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 21,
        "nombre": "Receta 21",
        "caloria": 190,
        "grasa": 9,
        "carbohidrato": 33,
        "proteina": 12,
        "hierro": 2.1,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 22,
        "nombre": "Receta 22",
        "caloria": 330,
        "grasa": 19,
        "carbohidrato": 30,
        "proteina": 14,
        "hierro": 2.6,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 23,
        "nombre": "Receta 23",
        "caloria": 280,
        "grasa": 14,
        "carbohidrato": 25,
        "proteina": 18,
        "hierro": 2,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 24,
        "nombre": "Receta 24",
        "caloria": 210,
        "grasa": 10,
        "carbohidrato": 35,
        "proteina": 10,
        "hierro": 1.8,
        "createdAt": null,
        "updatedAt": null
      },
      {
        "id": 25,
        "nombre": "Receta 25",
        "caloria": 300,
        "grasa": 15,
        "carbohidrato": 20,
        "proteina": 30,
        "hierro": 2.2,
        "createdAt": null,
        "updatedAt": null
      }
    ],
  }),
  mounted() {
   // this.getItems()
  },
  methods: {
    getColor(calories) {
      if (calories > 400) return 'red'
      else if (calories > 200) return 'orange'
      else return 'green'
    },
    getItems() {
      console.log('code',process.env.VUE_APP_API_URL);
      fetch(process.env.VUE_APP_API_URL + '/v1/recipe')
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