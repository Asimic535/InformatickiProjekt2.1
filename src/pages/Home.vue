<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Europsko Prvenstvo - Pobjednici</h1>
        <v-text-field v-model="search" label="Unesite zemlju" class="mb-4"></v-text-field>
        <v-data-table
          :items="filteredItems"
          hide-default-footer
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Lista Pobjednika</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
            </v-toolbar>
          </template>
          <template v-slot:item.informacije="{ item }">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span v-bind="attrs" v-on="on">{{ item.informacije }}</span>
              </template>
              <span>{{ item.informacije }}</span>
            </v-tooltip>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>



<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const items = ref([]);
const search = ref('');

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3030/api/data');
    items.value = response.data;
  } catch (error) {
    console.error('Greška pri dohvaćanju podataka:', error);
  }
};

const filteredItems = computed(() => {
  let filtered = items.value;
  if (search.value) {
    filtered = filtered.filter(item => item.zemlja.toLowerCase().includes(search.value.toLowerCase()));
  }
  return filtered;
});

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
h1 {
  text-align: center;
  margin-bottom: 20px;
}

body {
  margin-bottom: 10px;
}
</style>
