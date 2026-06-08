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

    <v-app-bar :color="appBarColor" elevation="0" border="b-thin">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Antoine Duarte (<a href="mailto:antoineduarte1112@gmail.com">antoineduarte1112@gmail.com</a>)</v-app-bar-title>
      <v-btn
        :icon="isDark ? 'mdi-weather-night' : 'mdi-weather-sunny'"
        variant="text"
        @click="toggleTheme"
        :title="isDark ? 'Passer en mode clair' : 'Passer en mode sombre'"
      ></v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer :color="footerColor" border="t-thin" class="footer-bar px-6 py-0">
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
import { useTheme } from 'vuetify'

const drawer = ref(false)
const route = useRoute()

const theme = useTheme()
const storedTheme = localStorage.getItem('theme')
if (storedTheme === 'light' || storedTheme === 'dark') {
  theme.global.name.value = storedTheme
}

const isDark = computed(() => theme.global.name.value === 'dark')
const appBarColor = computed(() => isDark.value ? '#1f1f1f' : '#ffffff')
const footerColor = computed(() => isDark.value ? '#161616' : '#eef1f7')

function toggleTheme() {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
  localStorage.setItem('theme', theme.global.name.value)
}

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

<style>
/* Theme-adaptive custom properties used by the scoped styles of every page. */
.v-theme--dark {
  --surface-card: #1f1f1f;
  --surface-card-alt: #161616;
  --surface-border: #353535;
  --surface-divider: #2e2e2e;
  --accent-label: #ffcc80;
  --text-heading: #f4f6fb;
  --text-body: #d5d9e2;
  --text-faint: #555555;
  --text-muted: #888888;
  --surface-tint: rgba(255, 255, 255, 0.02);
}

.v-theme--light {
  --surface-card: #ffffff;
  --surface-card-alt: #eef1f7;
  --surface-border: #dde1ea;
  --surface-divider: #e3e6ee;
  --accent-label: #a15c00;
  --text-heading: #1d2027;
  --text-body: #383b44;
  --text-faint: #aab0bd;
  --text-muted: #5b6068;
  --surface-tint: rgba(0, 0, 0, 0.03);
}

/* Vuetify's pastel "-lighten" utility colors are tuned for dark backgrounds and
   fall below WCAG AA contrast on white. Re-map them to darker same-hue shades
   in light mode (Vuetify's own utility rules carry no !important, so a more
   specific theme-scoped selector is enough to win the cascade). */
.v-theme--light .text-green-lighten-2 { color: #2e7d32; }
.v-theme--light .text-blue-lighten-2 { color: #1565c0; }
.v-theme--light .text-purple-lighten-2 { color: #7b1fa2; }
.v-theme--light .text-teal-lighten-2 { color: #00796b; }
.v-theme--light .text-orange-lighten-2 { color: #a15c00; }
.v-theme--light .text-pink-lighten-2 { color: #ad1457; }
.v-theme--light .text-indigo-lighten-2 { color: #303f9f; }

.v-theme--light .text-red-lighten-1 { color: #c62828; }
.v-theme--light .text-blue-lighten-1 { color: #1565c0; }
.v-theme--light .text-green-lighten-1 { color: #2e7d32; }

.v-theme--light .text-grey-lighten-1 { color: #757575; }
.v-theme--light .text-grey { color: #616161; }

/* Same problem for the "Difficulté"/"Évaluation" tonal chips, whose color
   prop resolves to a fixed Material base hue (e.g. amber #FFC107) that reads
   fine on dark cards but is nearly invisible on light ones. */
.v-theme--light .text-amber { color: #8d6200; }
.v-theme--light .text-blue { color: #1565c0; }
.v-theme--light .text-green { color: #2e7d32; }
.v-theme--light .text-cyan { color: #00838f; }
.v-theme--light .text-deep-orange { color: #bf360c; }

.v-theme--light .bg-grey-darken-4 {
  background-color: var(--surface-card-alt);
  color: var(--text-heading);
}
</style>
