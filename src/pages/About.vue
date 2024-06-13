<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row justify="start">
      <v-col cols="12">
        <h1>O nama - Marin i Ante</h1>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" class="v-col-lg-5 v-col-md-7 v-col-sm-10 mx-5">
        <v-card class="v-card--variant-plain">
          <v-row class="justify-center">
            <v-col cols="9" class="v-col-md-10 v-col-sm-8">
              <v-img
                  height="480px"
                  src="/src/assets/MarinSlika.jpeg"
                  cover
                  class="rounded elevation-10 mt-5"
              ></v-img>
            </v-col>
          </v-row>
          <v-card-title class="py-6">Marin Mlikota</v-card-title>
          <v-card-subtitle>Front-end Developer</v-card-subtitle>
          <v-card-text>
            <p>Marin Mlikota is a passionate developer specializing in front-end development on the University of Mostar at Science faculty.</p>
            <v-btn variant="outlined" class="mt-3">POZIV</v-btn>
            <v-btn disabled variant="tonal" class="mt-3 ml-5">PORUKA</v-btn>
            <v-btn variant="tonal" class="mt-3 ml-5">E-POŠTA</v-btn>
            <v-btn variant="tonal" class="mt-3 ml-5" @click="showSuccessAlert">Obriši</v-btn>
            <v-snackbar v-model="snackbar" :timeout="3000" top right>
              <v-row justify="center">
                <h2 class="ma-8">Ne možete brisati programere!</h2>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-btn color="gray" size="small" text @click="snackbar = false">Zatvori</v-btn>
              </v-row>
            </v-snackbar>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" class="v-col-lg-5 v-col-md-7 v-col-sm-10 mx-5">
        <v-card class="v-card--variant-plain">
          <v-row class="justify-center">
            <v-col cols="9" class="v-col-md-10 v-col-sm-8">
              <v-img
                  height="480px"
                  src="/src/assets/MojaSlika.jpg"
                  cover
                  class="rounded elevation-10 mt-5"
              ></v-img>
            </v-col>
          </v-row>
          <v-card-title class="py-6">Ante Šimić</v-card-title>
          <v-card-subtitle class="pt-0">Back-end Developer</v-card-subtitle>
          <v-card-text>
            <p>Ante Šimić is a skilled developer with expertise in back-end development, student at University of Mostar as well.</p>
            <v-btn variant="outlined" class="mt-3">POZIV</v-btn>
            <v-btn variant="tonal" class="mt-3 ml-5">PORUKA</v-btn>
            <v-btn disabled variant="tonal" class="mt-3 ml-5">E-POŠTA</v-btn>
            <v-btn variant="tonal" class="mt-3 ml-5" @click="showSuccessAlert">Obriši</v-btn>
            <v-snackbar v-model="snackbar" :timeout="3000" top right>
              <v-row justify="center">
                <h2 class="ma-8">Ne možete brisati programere!</h2>
              </v-row>
              <v-row justify="center" class="mb-1">
                <v-btn color="gray" size="small" text @click="snackbar = false">Zatvori</v-btn>
              </v-row>
            </v-snackbar>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      snackbar: false,
      snackbarText: '',
    };
  },
  methods: {
    showSuccessAlert() {
      this.snackbarText = 'Action was successful!';
      this.snackbar = true;
    }
  }
};
</script>

<style scoped>
.v-card {
  margin-bottom: 20px;
}
</style>
