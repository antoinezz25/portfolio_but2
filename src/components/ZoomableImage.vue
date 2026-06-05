<template>
  <div class="zoomable-image">
    <!-- Image miniature -->
    <button class="preview-button" type="button" @click="openDialog" aria-label="Agrandir l'image">
      <v-img :src="src" :alt="alt" class="preview bg-grey-darken-3" :height="previewHeight"></v-img>
    </button>

    <!-- Dialog plein écran pour le zoom -->
    <v-dialog v-model="dialog" fullscreen transition="dialog-bottom-transition" @after-leave="resetZoom">
      <v-card class="bg-black" style="overflow: hidden;">
        <v-toolbar color="black" density="compact">
          <span class="ml-4 mr-4 font-weight-bold">{{ Math.round(scale * 100) }}%</span>
          
          <v-btn icon="mdi-magnify-plus" @click="zoomIn" aria-label="Zoomer"></v-btn>
          <v-btn icon="mdi-magnify-minus" @click="zoomOut" aria-label="Dézoomer"></v-btn>
          <v-btn icon="mdi-scan-helper" @click="resetZoom" aria-label="Réinitialiser"></v-btn>

          <v-spacer></v-spacer>
          
          <span class="text-caption text-grey mr-4 hidden-sm-and-down">
            Molette pour zoomer - Glisser pour naviguer - Double-clic pour réinitialiser
          </span>
          
          <v-btn icon="mdi-close" @click="dialog = false" aria-label="Fermer"></v-btn>
        </v-toolbar>

        <!-- Conteneur de l'image -->
        <div 
          ref="containerRef"
          class="zoom-container"
          @wheel.prevent="handleWheel"
          @mousedown="handleMouseDown"
          @mousemove="handleMouseMove"
          @mouseup="handleMouseUp"
          @mouseleave="handleMouseUp"
          @dblclick="resetZoom"
          :style="{ cursor: isDragging ? 'grabbing' : 'grab' }"
        >
          <img 
            :src="src" 
            :alt="alt"
            class="modal-image"
            :style="{
              transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
              transition: isDragging ? 'none' : 'transform 0.1s ease-out'
            }"
            draggable="false"
          />
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  previewHeight: {
    type: [String, Number],
    default: 320,
  },
})

// Dialog state
const dialog = ref(false)
const openDialog = () => {
  dialog.value = true
}

// Zoom & Pan state
const scale = ref(1)
const translateX = ref(0)
const translateY = ref(0)
const isDragging = ref(false)
let startX = 0
let startY = 0

const zoomIn = () => {
  scale.value = Math.min(scale.value * 1.3, 10)
}

const zoomOut = () => {
  scale.value = Math.max(scale.value / 1.3, 0.2)
}

const resetZoom = () => {
  scale.value = 1
  translateX.value = 0
  translateY.value = 0
}

const handleWheel = (e) => {
  if (e.deltaY < 0) {
    zoomIn()
  } else {
    zoomOut()
  }
}

const handleMouseDown = (e) => {
  isDragging.value = true
  startX = e.clientX - translateX.value
  startY = e.clientY - translateY.value
}

const handleMouseMove = (e) => {
  if (!isDragging.value) return
  translateX.value = e.clientX - startX
  translateY.value = e.clientY - startY
}

const handleMouseUp = () => {
  isDragging.value = false
}
</script>

<style scoped>
.preview-button {
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.preview {
  border-radius: 6px;
}

.zoom-container {
  width: 100%; 
  height: 100%; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  overflow: hidden;
  background-color: #000;
  touch-action: none;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
