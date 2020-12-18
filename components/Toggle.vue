<template>
  <div class="flex relative transition duration-200 ease-in overflow-hidden" @click="toggleClick">
    <input type="checkbox" class="hidden" @change="$emit('click', value)">
    <div class="flex cursor-pointer my-auto bg-gray-200 dark:bg-gray-700 w-10 h-5 px-1 rounded-full">
      <span class="block my-auto w-4 h-4 my-auto border border-gray-400 dark:border-gray-600 rounded-full transition transform" :class="value ? 'bg-gray-800 translate-x-full' : 'bg-gray-100'" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggleClick () {
      this.$emit('click', !this.value);
    }
  }
});
</script>
