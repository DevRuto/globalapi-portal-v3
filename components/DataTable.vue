<template>
  <div>
    <div class="table-fixed text-white mx-auto my-4">
      <div class="flex flex-col w-full">
        <div class="flex">
          <span class="w-1/12">ID</span>
          <span class="w-4/12">Name</span>
          <span class="w-2/12">Filesize</span>
          <span class="w-1/12">Difficulty</span>
          <span class="w-1/12">Validated</span>
          <span class="w-3/12">Created</span>
        </div>
        <div
          v-for="(map, i) of paginatedValue"
          :key="i"
          class="flex hover:bg-purple-900"
          :class="i % 2 == 0 ? 'bg-gray-800' : 'bg-gray-900'">
          <span class="border border-blue-200 w-1/12 px-2 py-1">{{ map.id }}</span>
          <span class="border border-blue-200 w-4/12 px-2 py-1">{{ map.name }}</span>
          <span class="border border-blue-200 w-2/12 px-2 py-1">{{ map.filesize }}</span>
          <span class="border border-blue-200 w-1/12 px-2 py-1">{{ map.difficulty }}</span>
          <span class="border border-blue-200 w-1/12 px-2 py-1">{{ map.validated }}</span>
          <span class="border border-blue-200 w-3/12 px-2 py-1">{{ map.created_on }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end mx-auto text-white">
      <span class="px-2">{{ start }} - {{ value.length }}</span>
      <select class="text-black" v-model="count">
        <option v-for="option in countOptions" :key="option.value" v-bind:value="option.value">{{ option.text }}</option>
      </select>
      <button @click="prevPage" type="button" class="px-2 mx-2 rounded border border-blue-200 bg-blue-600">Back</button>
      <button @click="nextPage" type="button" class="px-2 mx-2 rounded border border-blue-200 bg-blue-600">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      start: 0,
      count: 10,
      countOptions: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
        { text: '25', value: 25 },
        { text: '50', value: 50 },
        { text: 'All', value: 9999 }
      ]
    }
  },
  computed: {
    paginatedValue: function(): any[] {
      console.log('[Maps pagination] Start: %i, Count: %i', this.start, this.count);
      return this.value.slice(this.start, this.start + this.count);
    }
  },
  methods: {
    nextPage() {
      this.start = Math.min(this.start + this.count, this.value.length);
    },
    prevPage() {
      this.start = Math.max(this.start - this.count, 0);
    }
  }
})
</script>
