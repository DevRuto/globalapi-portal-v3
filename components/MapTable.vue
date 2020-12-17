<template>
  <div class="min-w-screen overflow-x-visible">
    <div class="table-fixed text-black dark:text-white mx-auto my-4">
      <div class="flex justify-end mx-auto text-white my-2 h-6">
        <label for="count" class="text-black dark:text-white text-sm">Per page</label>
        <select
          id="count"
          v-model="count"
          class="text-black dark:text-white dark:bg-black border border-gray-600 rounded px-2 mx-2"
          @change="saveCount"
        >
          <option v-for="option in countOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <button type="button" class="px-2 mx-2 rounded border border-gray-800 dark:border-white text-black dark:text-white focus:outline-none hover:bg-gray-400 dark:hover:bg-gray-700" @click="prevPage">
          Back
        </button>
        <button type="button" class="px-2 mx-2 rounded border border-gray-800 dark:border-white text-black dark:text-white focus:outline-none hover:bg-gray-400 dark:hover:bg-gray-700" @click="nextPage">
          Next
        </button>
      </div>
      <div class="flex flex-col w-full border border-gray-600">
        <div class="flex flex-col md:flex-row cursor-pointer select-none hidden md:visisble">
          <span class="w-1/12 px-2 py-1 flex" @click="sortTable('id')">
            ID
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </span>
          <span class="w-3/12 px-2 py-1 flex" @click="sortTable('name')">
            Name
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg></span>
          <span class="w-2/12 px-2 py-1 flex" @click="sortTable('filesize')">
            Filesize
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </span>
          <span class="w-2/12 px-2 py-1 flex" @click="sortTable('difficulty')">
            Difficulty
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </span>
          <span class="w-1/12 px-2 py-1 flex" @click="sortTable('is_validated')">
            Global
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </span>
          <span class="w-3/12 px-2 py-1 flex" @click="sortTable('created_on')">
            Created
            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
            </svg>
          </span>
        </div>
        <div>
          <div
            v-for="(map, i) of paginatedValue"
            :key="i"
            class="flex flex-col md:flex-row hover:bg-purple-200 dark:hover:bg-purple-800"
            :class="i % 2 == 0 ? 'bg-gray-200 dark:bg-gray-800' : 'bg-gray-100 dark:bg-gray-900'"
          >
            <span class="md:w-1/12 px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">ID: </span>{{ map.id }}</span>
            <span class="md:w-3/12 px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">Name: </span>{{ map.name }}</span>
            <span class="md:w-2/12 px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">Filesize: </span>{{ map.filesize.toLocaleString() }}</span>
            <span class="md:w-2/12 px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">Difficulty: </span>{{ map.difficulty }} - {{ getDifficultyText(map.difficulty) }}</span>
            <span class="md:w-1/12 px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">Global: </span>{{ map.validated }}</span>
            <span class="md:w-auto px-2 py-1 flex"><span class="md:hidden font-bold w-1/3">Created: </span>{{ map.created_on }}</span>
            <span class="md:w-1/12 px-2 py-1 text-center text-blue-400"><n-link to="#">Edit</n-link></span>
          </div>
        </div>
      </div>
      <div class="flex justify-end mx-auto text-white my-2 h-6 md:hidden">
        <label for="count" class="text-black dark:text-white text-sm">Per page</label>
        <select
          id="count"
          v-model="count"
          class="text-black dark:text-white dark:bg-black border border-gray-600 rounded px-2 mx-2"
          @change="saveCount"
        >
          <option v-for="option in countOptions" :key="option.value" :value="option.value">{{ option.text }}</option>
        </select>
        <button type="button" class="px-2 mx-2 rounded border border-gray-800 dark:border-white text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700" @click="prevPage">
          Back
        </button>
        <button type="button" class="px-2 mx-2 rounded border border-gray-800 dark:border-white text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-700" @click="nextPage">
          Next
        </button>
      </div>
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
        { text: '20', value: 20 },
        { text: '50', value: 50 },
        { text: 'All', value: 9999 }
      ],
      sort: '',
      admin: true
    };
  },
  computed: {
    paginatedValue (): any[] {
      console.log('[Maps pagination] Start: %i, Count: %i', this.start, this.count);
      let maps = [...this.value];
      if (!!this.sort) {
        const index = this.sort.indexOf(':');
        const col = this.sort.substring(0, index);
        const direction = this.sort.substring(index + 1) == 'asc' ? 1 : -1;
        maps.sort((a: any, b: any) => {
          const varType = typeof a[col];
          let retVal = 0;
          if (varType === 'number') {
            retVal = (a[col] - b[col]) * direction;
          } else if (typeof varType === 'string') {
            retVal = a[col].localeCompare(b[col]) * direction;
          }
          return retVal;
        });
      }
      return maps.slice(this.start, this.start + this.count);
    }
  },
  mounted () {
    if (localStorage.mapcount) {
      this.count = parseInt(localStorage.mapcount);
    }
  },
  methods: {
    nextPage () {
      this.start = Math.min(this.start + this.count, this.value.length);
      window.scrollTo(0,0);
    },
    prevPage () {
      this.start = Math.max(this.start - this.count, 0);
      window.scrollTo(0,0);
    },
    getDifficultyText (difficulty: number) {
      return difficultyLabels[difficulty - 1];
    },
    saveCount () {
      localStorage.setItem('mapcount', this.count.toString());
    },
    sortTable(col: string) {
      console.log(`${this.sort} - ${col}`);
      if (this.sort.substring(0, this.sort.indexOf(':')) == col) {
        if (this.sort.indexOf(':asc') > 0) {
          this.sort = `${col}:desc`;
        } else {
          this.sort = `${col}:asc`;
        }
      } else {
        this.sort = `${col}:asc`;
      }
    }
  }
});
</script>
