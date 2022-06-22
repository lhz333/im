<template>
  <!-- eslint-disable vue/require-component-is -->
  <component v-bind="linkProps(to)" :is="linkProps(to).is">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { isExternal } from '@/utils'

defineProps<{
  to: string
}>()

const linkProps = (url: string) => {
  if (isExternal(url)) {
    return {
      is: 'a',
      href: url,
      target: '_blank',
      rel: 'noopener'
    }
  }
  return {
    is: 'router-link',
    to: url
  }
}
</script>

<style lang="scss" scoped></style>
