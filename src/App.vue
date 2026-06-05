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

    <v-footer color="#161616" border="t-thin" class="footer-bar px-6 py-0">
      <v-row no-gutters align="center" style="height: 48px;">
        <v-col cols="4" class="d-flex justify-start">
          <v-btn
            v-if="prevRoute"
            variant="text"
            size="small"
            :to="prevRoute.path"
            prepend-icon="mdi-arrow-left"
            class="text-grey-lighten-1"
          >{{ prevRoute.label }}</v-btn>
        </v-col>
        <v-col cols="4" class="d-flex justify-center">
          <span class="text-caption text-grey">Antoine Duarte · Portfolio BUT2 · 2026</span>
        </v-col>
        <v-col cols="4" class="d-flex justify-end">
          <v-btn
            v-if="nextRoute"
            variant="text"
            size="small"
            :to="nextRoute.path"
            append-icon="mdi-arrow-right"
            class="text-grey-lighten-1"
          >{{ nextRoute.label }}</v-btn>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const drawer = ref(false)
const route = useRoute()

const pages = [
  { path: '/', label: 'Accueil' },
  { path: '/tech/trace1', label: 'Technique' },
  { path: '/proj/trace3', label: 'Suivi de projet' },
  { path: '/integration/trace5', label: 'Intégration' },
]

const currentIndex = computed(() => pages.findIndex(p => p.path === route.path))
const prevRoute = computed(() => currentIndex.value > 0 ? pages[currentIndex.value - 1] : null)
const nextRoute = computed(() => currentIndex.value < pages.length - 1 ? pages[currentIndex.value + 1] : null)
</script>
