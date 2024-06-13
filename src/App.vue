<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-spacer></v-spacer>
      <v-btn text to="/">Početna</v-btn>
      <v-btn text to="/about">O nama</v-btn>
      <v-btn text to="/podaci">Podaci</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <app-footer />
  </v-app>
</template>

<script setup>
import AppFooter from './components/AppFooter.vue';
</script>

<style scoped>
.v-app-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

.v-main {
  margin-top: 64px;
  padding: 16px;
}
</style>
