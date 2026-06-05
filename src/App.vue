<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item to="/" title="Accueil"></v-list-item>
        <v-list-item to="/tech/trace1" title="Technique"></v-list-item>
        <v-list-item to="/proj/trace3" title="Suivi de projet"></v-list-item>
        <v-list-item to="/integration/trace5" title="Intégration entreprise"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar color="#1f1f1f" elevation="0" border="b-thin">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Antoine Duarte (<a href="mailto:antoineduarte1112@gmail.com">antoineduarte1112@gmail.com</a>)</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
</script>
