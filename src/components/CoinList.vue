<script>
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { AgGridVue } from 'ag-grid-vue3';

export default {
  data() {
    return {
      coins: [],
      message: '',
      currentSort: 'symbol',
      currentSortDir: 'asc',
      perPage: 20,
      currentPage: 1,
    };
  },
  setup() {
    return {
      columnDefs: [
        { headerName: 'Make', field: 'make' },
        { headerName: 'Model', field: 'model' },
        { headerName: 'Price', field: 'price' },
      ],
      rowData: [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
      ],
    };
  },
  methods: {
    getCoinList() {
      const path = 'http://localhost:5000/coins';
      axios
        .get(path)
        .then((res) => {
          this.coins = res.data.coins;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    },
    sort(s) {
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc';
      }
      this.currentSort = s;
    },
  },
  created() {
    this.getCoinList();
  },
  components: {
    AgGridVue,
  },
  computed: {
    sortedCoins() {
      // eslint-disable-next-line
      return this.coins
        .sort((a, b) => {
          let modifier = 1;
          if (this.currentSortDir === 'desc') modifier = -1;
          if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
          if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
          return 0;
        })
        .filter((row, index) => {
          const start = (this.currentPage - 1) * this.perPage;
          const end = this.currentPage * this.perPage;
          if (index >= start && index < end) {
            return true;
          }
          return false;
        });
    },
    coinListLength() {
      return this.coins.length;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <div
          ><h3>{{ coinListLength }}</h3></div
        >
        <ag-grid-vue
          style="width: 500px; height: 500px"
          class="ag-theme-alpine"
          :columnDefs="columnDefs"
          :rowData="rowData"
        >
        </ag-grid-vue>
        <table class="table table-hover">
          <thead>
            <tr>
              <th @click="sort('symbol')">symbol</th>
              <th @click="sort('base')">base</th>
              <th @click="sort('quote')">quote</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(c, index) in sortedCoins" :key="index">
              <td>{{ c.symbol }}</td>
              <td>{{ c.base }}</td>
              <td>{{ c.quote }}</td>
            </tr>
          </tbody>
        </table>
        <p> </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
a:hover,
a:focus,
a:visited,
table thead tr th {
  text-decoration: underline;
  cursor: pointer;
}
</style>
