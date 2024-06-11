<script setup lang="ts">
import { useQuasar } from 'quasar';
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';

import { websocket } from 'boot/websocket';
import DrawLayer from 'components/DrawLayer.vue';
import { WsAction } from 'types/WsMessage';
import { DrawElement } from 'types/WsMessage/DrawElement';

declare global {
  // noinspection JSUnusedGlobalSymbols
  interface Window {
    obsstudio?: {
      pluginVersion?: string;
    };
  }
}

const { screen } = useQuasar();

const drawElements = reactive<Record<string, DrawElement[]>>({});
const obsVersion = ref('');
const resolution = reactive({ height: screen.height, width: screen.width });

websocket.url = 'ws://localhost:8080';

onMounted(() => {
  websocket.connect();
  obsVersion.value = window.obsstudio?.pluginVersion ?? 'unknown';
  websocket.registerWsAction(WsAction.Handshake, ({ data }) => {
    if (data.result === 'success') {
      resolution.height = data.resolution.height;
      resolution.width = data.resolution.width;
    }
  });
  websocket.registerWsAction(WsAction.LayerDraw, ({ data }) => {
    if (data.result === 'success') {
      drawElements[data.name] = data.elements;
    }
  });
});
onBeforeUnmount(() => {
  websocket.unregisterWsAction(WsAction.Handshake);
  websocket.unregisterWsAction(WsAction.LayerDraw);
});
</script>

<template>
  <q-page class="flex">
    <q-card class="bg-transparent" bordered flat>
      <q-card-section class="text-blue" style="white-space: pre">
        <div class="text-h4">OBS version: {{ obsVersion }}</div>
        <div class="text-h4">
          Window size: {{ resolution.width }} x {{ resolution.height }}
        </div>
      </q-card-section>
    </q-card>
    <draw-layer
      v-for="(items, name) in drawElements"
      :key="name"
      class="absolute-full"
      :height="resolution.height"
      :width="resolution.width"
      :model-value="items"
    />
  </q-page>
</template>

<style scoped></style>
