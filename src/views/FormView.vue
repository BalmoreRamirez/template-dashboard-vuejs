<template>
  <v-container>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step
            :complete="e1 > 1"
            editable
            step="1"
        >
          Paso 1
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            :complete="e1 > 2"
            editable
            step="2"
        >
          Paso 2
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
            step="3"
            editable
        >
          Paso 3
        </v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Nombre"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Apellido"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Teléfono"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Correo"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Nombre"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Apellido"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Telefono"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-text-field
                              label="Correo"
                              dense
                              outlined
                          ></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>

          <v-btn
              color="primary"
              @click="e1 = 2"
          >
            Continuar
          </v-btn>

          <v-btn text>
            Cancelar
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-card>
                  <v-card-title>Checkboxes</v-card-title>
                  <v-form>
                    <v-container>
                      <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                        >
                          <v-checkbox
                              label="checkboxes"
                              value="John"
                          ></v-checkbox>
                          <v-checkbox
                              label="checkboxes"
                              value="John"
                              disabled
                          ></v-checkbox>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-form>
                </v-card>
              </v-col>
              <v-col cols="6">
                <v-card>
                  <v-card-title>Radio Buttons</v-card-title>
                  <v-form>
                    <v-container>
                      <v-row>

                        <v-col cols="12" sm="6">
                          <v-radio-group>
                            <v-radio
                                label="radio-buttons"
                                value="radio-buttons"
                            ></v-radio>
                            <v-radio
                                label="radio-buttons"
                                value="radio-buttons"
                                disabled
                            ></v-radio>
                          </v-radio-group>
                        </v-col>

                      </v-row>
                    </v-container>
                  </v-form>
                </v-card>
              </v-col>
            </v-row>
          </v-container>


          <v-btn
              color="primary"
              @click="e1 = 3"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card
              class="mb-12"
              color="grey lighten-1"
              height="200px"
          ></v-card>

          <v-btn
              color="primary"
              @click="e1 = 1"
          >
            Continue
          </v-btn>

          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>
<script>
export default {
  name: 'FormView',
  data() {
    return {
      e1: 1,
    }
  },
}
</script>

<style scoped>

</style>
