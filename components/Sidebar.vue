<template>
  <aside
    class="transform top-0 left-0 w-64 bg-gray-600 absolute h-full overflow-auto ease-in-out transition-all duration-200"
    :class="value ? 'translate-x-0' : '-translate-x-full'"
  >
    <div class="h-16" />
    <a href="#">test</a>
  </aside>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  }
});
</script>
