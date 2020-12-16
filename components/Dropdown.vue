<template>
  <div class="inline-block relative">
    <button type="button" class="inline-flex justify-center text-md border border-black dark:border-white dark:border-blue px-2 focus:outline-none" :class="show ? 'rounded-t' : 'rounded'" @click="show = !show">
      {{ value }}
      <svg class="-mr-1 ml-2 h-6 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100 transform"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75 transform"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div v-show="show" class="origin-top-right absolute border border-blue-400 w-full rounded-b-lg">
        <div>
          <button
            v-for="item in items"
            :key="item.value"
            type="button"
            class="block px-4 py-1 text-md hover:bg-gray-300 hover:text-black w-full"
            @click="toggleItem(item.value)"
          >
            {{ item.text }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    value: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      show: false
    };
  },
  methods: {
    toggleItem (item: any) {
      this.show = false;
      this.$emit('input', item);
    }
  }
});
</script>
