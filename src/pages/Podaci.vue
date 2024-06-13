<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Galerija slika</h1>
        <div class="button-container">
          <v-btn @click="fetchData">SLIKE</v-btn>
        </div>

        <v-pagination
          v-model="page"
          :length="pageCount"
          total-visible="5"
          class="my-4"
        ></v-pagination>

        <v-row>
          <v-col v-for="photo in paginatedItems" :key="photo.id" cols="12" md="4">
            <v-card class="hover-card">
              <v-img :src="photo.src.medium" :alt="photo.photographer"></v-img>
              <v-card-title class="autor">{{ photo.photographer }}</v-card-title>
              <v-card-subtitle class="alt-text">{{ photo.alt }}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>

      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const items = ref([]);
const page = ref(1);
const itemsPerPage = 6;

const fetchData = async () => {
  try {
    const response = await axios.get('http://localhost:3030/api/pexels');
    items.value = response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const pageCount = computed(() => Math.ceil(items.value.length / itemsPerPage));
const paginatedItems = computed(() => {
  const start = (page.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return items.value.slice(start, end);
});
</script>

<style scoped>
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
  margin-bottom: 20px;
}

.hover-card:hover {
  transform: scale(1.07);
  box-shadow: 0px 8px 30px rgba(50, 50, 50, 0.9);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.button-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.my-4 {
  margin-top: 16px;
  margin-bottom: 16px;
}

.alt-text {
  font-size: 1rem;
  padding-bottom: 5px;
  text-align: center;
  }

.autor {
  font-size: 1.2rem;
  padding-bottom: 5px;
  text-align: center;
  /* text-shadow: 1cap;*/
  text-decoration: solid;
  }
</style>
