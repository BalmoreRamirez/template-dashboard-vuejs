<template>
  <v-container>
    <h2 style="color: #495057;font-weight: 400; font-size: 1.25rem">Typography</h2>

    <template>
      <v-breadcrumbs :items="items" class="pa-0 mb-4">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
            {{ item.title }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
    </template>
    <v-row>
      <v-col lg="12" md="12" sm="12">
        <template>
          <v-card class="mx-auto card__custom-style"
          >
            <v-card-title>
              <div>Word of the Day</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Footer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col lg="6" md="12" sm="12">
        <template>
          <v-card class="mx-auto card__custom-style"
          >
            <v-card-title>
              <div>Word of the Day</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Footer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col lg="6" md="12" sm="12">
        <template>
          <v-card class="mx-auto card__custom-style"
          >
            <v-card-title>
              <div>Word of the Day</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Footer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col lg="6" md="12" sm="12">
        <template>
          <v-card class="mx-auto card__custom-style"
          >
            <v-card-title>
              <div>Word of the Day</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Footer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
      <v-col lg="6" md="12" sm="12">
        <template>
          <v-card class="mx-auto card__custom-style"
          >
            <v-card-title>
              <div>Word of the Day</div>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <p>adjective</p>
              <div class="text--primary">
                well meaning and kindly.<br>
                "a benevolent smile"
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>Footer</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "card-dashboard",
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
  })
}
</script>

<style scoped>
.card__custom-style {
  box-shadow: 0 .46875rem 2.1875rem rgba(4, 9, 20, .03), 0 .9375rem 1.40625rem rgba(4, 9, 20, .03), 0 .25rem .53125rem rgba(4, 9, 20, .05), 0 .125rem .1875rem rgba(4, 9, 20, .03) !important;
  border-width: 0;
}
</style>