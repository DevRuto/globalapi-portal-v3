<template>
  <div>
    <div class="table-fixed text-black dark:text-white mx-auto my-4">
      <div class="flex flex-col w-full border border-gray-600">
        <div class="flex">
          <span class="w-1/12 px-2 py-1">ID</span>
          <span class="w-3/12 px-2 py-1">Name</span>
          <span class="w-2/12 px-2 py-1">Filesize</span>
          <span class="w-2/12 px-2 py-1">Difficulty</span>
          <span class="w-1/12 px-2 py-1">Validated</span>
          <span class="w-3/12 px-2 py-1">Created</span>
        </div>
        <div
          v-for="(map, i) of paginatedValue"
          :key="i"
          class="flex hover:bg-purple-200 hover:dark:bg-purple-900"
          :class="i % 2 == 0 ? 'bg-gray-200 dark:bg-gray-900' : 'bg-gray-100 dark:bg-gray-800'"
        >
          <span class="w-1/12 px-2 py-1">{{ map.id }}</span>
          <span class="w-3/12 px-2 py-1">{{ map.name }}</span>
          <span class="w-2/12 px-2 py-1">{{ map.filesize.toLocaleString() }}</span>
          <span class="w-2/12 px-2 py-1">{{ map.difficulty }} - {{ getDifficultyText(map.difficulty) }}</span>
          <span class="w-1/12 px-2 py-1">{{ map.validated }}</span>
          <span class="w-3/12 px-2 py-1">{{ map.created_on }}</span>
        </div>
      </div>
    </div>

    <div class="flex justify-end mx-auto text-white">
      <span class="px-2">{{ start }} - {{ value.length }}</span>
      <select v-model="count" class="text-black">
        <option v-for="option in countOptions" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
      <button type="button" class="px-2 mx-2 rounded border border-blue-200 bg-blue-600" @click="prevPage">
        Back
      </button>
      <button type="button" class="px-2 mx-2 rounded border border-blue-200 bg-blue-600" @click="nextPage">
        Next
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const difficultyLabels = [
  'Very Easy',
  'Easy',
  'Medium',
  'Hard',
  'Very Hard',
  'Extreme',
  'Death'
];

export default Vue.extend({
  props: {
    value: {
      type: Array,
      required: true
    }
  },
  data () {
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
    };
  },
  computed: {
    paginatedValue (): any[] {
      console.log('[Maps pagination] Start: %i, Count: %i', this.start, this.count);
      return this.value.slice(this.start, this.start + this.count);
    }
  },
  methods: {
    nextPage () {
      this.start = Math.min(this.start + this.count, this.value.length);
    },
    prevPage () {
      this.start = Math.max(this.start - this.count, 0);
    },
    getDifficultyText(difficulty: number) {
      return difficultyLabels[difficulty - 1];
    }
  }
});
</script>
