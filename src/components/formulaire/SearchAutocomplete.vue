<template>
  <div class="autocomplete">
    <input
      :name="name"
      type="text"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter="onEnter"
    />
    <ul
      id="autocomplete-results"
      v-show="isOpen"
      class="autocomplete-results"
    >
      <li
        class="loading"
        v-if="isLoading"
      >
        Loading results...
      </li>
      <li
        v-else
        v-for="(result, i) in results"
        :id="result.id"
        :key="i"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': i === arrowCounter }"
        v-html="result.name"
      >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'SearchAutocomplete',
    props: {
      name: String,
      items: {
        type: Array,
        required: false,
        default: () => [],
      },
      isAsync: {
        type: Boolean,
        required: false,
        default: false,
      },
    },
    data() {
      return {
        isOpen: false,
        results: [],
        search: '',
        isLoading: false,
        arrowCounter: -1,
      };
    },
    watch: {
      items: function (value, oldValue) {
        if (value.length !== oldValue.length) {
          this.results = value;
          this.isLoading = false;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside)
    },
    unmounted() {
      document.removeEventListener('click', this.handleClickOutside)
    },
    methods: {
      setResult(result) {
        console.log('setResult', result);
        this.search = result;
        this.isOpen = false;
        this.$emit('itemSelected', this.search);
        this.search = '';
      },
      filterResults() {
        this.results = this.items.filter((item) => {
          return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        });
      },
      onChange() {
        this.$emit('input', this.search);

        if (this.isAsync) {
          this.isLoading = true;
        } else {
          this.filterResults();
          this.isOpen = true;
        }
      },
      handleClickOutside(event) {
        if (!this.$el.contains(event.target)) {
          this.isOpen = false;
          this.arrowCounter = -1;
        }
      },
      onArrowDown() {
        if (this.arrowCounter < this.results.length) {
          this.arrowCounter = this.arrowCounter + 1;
        }
      },
      onArrowUp() {
        if (this.arrowCounter > 0) {
          this.arrowCounter = this.arrowCounter - 1;
        }
      },
      onEnter() {
        console.log('onEnter', this.results[this.arrowCounter]);
        this.setResult(this.results[this.arrowCounter]);
        /* this.search = this.results[this.arrowCounter];
        this.isOpen = false;
        this.arrowCounter = -1; */
      },
    },
  };
</script>

<style>
  .autocomplete {
    position: relative;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result.is-active,
  .autocomplete-result:hover {
    background-color: var(--primary-color);
    color: white;
  }
</style>