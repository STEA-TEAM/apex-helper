<script setup lang="ts">
import { useQuasar } from 'quasar';

import { DrawElement, DrawType } from 'types/WsMessage/DrawElement';

const { screen } = useQuasar();

interface Props {
  height?: number;
  modelValue: DrawElement[];
  width?: number;
}

defineProps<Props>();
</script>

<template>
  <svg :width="height ?? screen.height" :height="width ?? screen.width">
    <template v-for="(item, index) in modelValue" :key="index">
      <circle
        v-if="item.type === DrawType.Circle"
        :cx="item.dimensions.x"
        :cy="item.dimensions.y"
        :r="item.dimensions.radius"
        :fill="item.fill?.color ?? 'transparent'"
        :fill-opacity="item.fill?.opacity ?? 1"
        :opacity="item.opacity ?? 1"
        :stroke="item.stroke?.color ?? 'transparent'"
        :stroke-width="item.stroke?.width ?? 1"
      />
      <line
        v-else-if="item.type === DrawType.Line"
        :x1="item.dimensions.x1"
        :y1="item.dimensions.y1"
        :x2="item.dimensions.x2"
        :y2="item.dimensions.y2"
        :fill="item.fill?.color ?? 'transparent'"
        :fill-opacity="item.fill?.opacity ?? 1"
        :opacity="item.opacity ?? 1"
        :stroke="item.stroke?.color ?? 'transparent'"
        :stroke-width="item.stroke?.width ?? 1"
      />
      <rect
        v-else-if="item.type === DrawType.Rectangle"
        :x="item.dimensions.x"
        :y="item.dimensions.y"
        :width="item.dimensions.width"
        :height="item.dimensions.height"
        :fill="item.fill?.color ?? 'transparent'"
        :fill-opacity="item.fill?.opacity ?? 1"
        :opacity="item.opacity ?? 1"
        :stroke="item.stroke?.color ?? 'transparent'"
        :stroke-width="item.stroke?.width ?? 1"
      />
      <text
        v-else-if="item.type === DrawType.Text"
        :x="item.dimensions.x"
        :y="item.dimensions.y"
        :font-size="item.font?.size"
        :font-family="item.font?.family"
        :fill="item.fill?.color ?? 'transparent'"
        :fill-opacity="item.fill?.opacity ?? 1"
        :opacity="item.opacity ?? 1"
        :stroke="item.stroke?.color ?? 'transparent'"
        :stroke-width="item.stroke?.width ?? 1">
        {{ item.content }}
      </text>
    </template>
  </svg>
</template>

<style scoped></style>
