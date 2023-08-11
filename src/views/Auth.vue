<template>
  <v-container fluid class="pa-0">
    <v-row class="ma-0" align="center" justify="center">
      <v-col lg="5" sm="4" class="login-container">
        <v-img src="@/assets/login.jpg"
               gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
               class="login-image">
          <div class="d-flex flex-column fill-height justify-center align-center text__image-login">
            <h1 class="text-h4 font-weight-thin mb-4 text-white">
              Vuetify
            </h1>
            <h4 class="subheading">
              Build your application today!
            </h4>
          </div>
        </v-img>
      </v-col>
      <v-col lg="7" sm="12">
        <v-row align="center" justify="center">
          <v-col lg="7" sm="8">
            <div class="indication_login">
              <img src="../assets/logo-inverse.png" height="23" width="97" class="mb-8"/>
              <p>Bienvenido de nuevo,</p>
              <p>Por favor, acceda a su cuenta.</p>
            </div>
            <v-form @submit.prevent="submitForm">
              <v-text-field prepend-inner-icon="mdi mdi-account-check" outlined v-model="username"
                            label="Usuario"></v-text-field>
              <v-text-field prepend-inner-icon="mdi mdi-key-outline" outlined v-model="password" label="Contraseña"
                            type="password"></v-text-field>


              <v-checkbox
                  :error-messages="checkboxErrors"
                  label="¿Recordar la contraseña?"
                  required
              ></v-checkbox>
                  <v-btn depressed color="primary" type="submit">
                    <v-icon
                        right
                        dark
                        class="mr-3"
                    >
                      mdi-account-check
                    </v-icon>
                    Iniciar sesión
                  </v-btn>

              <a href="" class="ml-5 restore__password">Recuperar contraseña</a>




            </v-form>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>

</template>
<script>
export default {
  name: `Auth`,
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submitForm() {
      this.$router.push({name: 'dashboard'});
    }
  }
};
</script>

<style scoped>
.restore__password{
  font-size: 16px;
}
.text__image-login {
  color: #fff;
}

.indication_login p {
  font-family: "Manrope";
  font-size: 16px;
  color: #495057;
  line-height: 0.5;
}
.indication_login {
  margin-bottom: 30px;
}

.slider-content {
  position: relative;
  z-index: 15;
  text-align: center;
}

.login-container {
  height: 100vh;
  padding: 0;

}

.login-image {

  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
}

@media (max-width: 1264px) {
  .login-container {
    display: none;
  }
}

</style>

