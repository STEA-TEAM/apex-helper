<script setup lang="ts">
import { onMounted, ref } from 'vue';

import DrawLayer from 'components/DrawLayer.vue';
import { DrawElement, DrawType } from 'types/WsMessage/DrawElement';

const obsVersion = ref('');

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    obsstudio?: {
      pluginVersion?: string;
    };
  }
}

const drawElements = ref<DrawElement[]>([
  {
    type: DrawType.Circle,
    dimensions: {
      x: 300,
      y: 200,
      radius: 100,
    },
    stroke: {
      color: 'blue',
      width: 5,
    },
  },
  {
    type: DrawType.Line,
    dimensions: {
      x1: 300,
      y1: 500,
      x2: 600,
      y2: 400,
    },
    stroke: {
      color: 'lime',
      width: 5,
    },
  },
  {
    type: DrawType.Rectangle,
    dimensions: {
      x: 50,
      y: 50,
      width: 100,
      height: 100,
    },
    stroke: {
      color: 'red',
      width: 5,
    },
  },
  {
    type: DrawType.Text,
    content: 'Hello, World!',
    dimensions: {
      x: 100,
      y: 400,
    },
    font: {
      size: 50,
    },
    fill: {
      color: 'orange',
    },
  },
]);

onMounted(() => {
  obsVersion.value = window.obsstudio?.pluginVersion ?? 'unknown';
});
</script>

<template>
  <q-page class="row items-center justify-evenly">
    <draw-layer class="absolute-full" :model-value="drawElements" />
    <q-card class="bg-transparent col-8 column" bordered flat>
      <q-card-section class="text-blue" style="white-space: pre">
        <div class="text-h4">OBS version: {{ obsVersion }}</div>
        <div class="text-h4">
          Window size: {{ $q.screen.width }} x {{ $q.screen.height }}
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<style scoped></style>
