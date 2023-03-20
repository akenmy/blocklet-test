<template>
  <div class="main-content">
    <b-container fluid>
      <!-- Content here -->
      <b-row>
        <b-input-group class="mt-3">
          <template v-slot:append>
            <b-input-group-text @click="handleSearch"><strong class="text-danger">🔍</strong></b-input-group-text>
          </template>
          <b-form-input v-model="searchId"></b-form-input>
        </b-input-group>
      </b-row>
      <b-row>
        <h4 style="text-align: left">Transactions</h4>
        <div class="buttons">
          <span>
            <img src="../assets/images/open.svg" />
          </span>
          <span><img src="../assets/images/close.svg" /></span>
          <span>Last</span>
          <span>First</span>
          <span><img src="../assets/images/up.svg" />Value</span>
          <span><img src="../assets/images/down.svg" />value</span>
          <span><img src="../assets/images/up.svg" />Fee</span>
          <span><img src="../assets/images/down.svg" />Fee</span>
        </div>
      </b-row>
      <b-row>
        <CollapseItem v-for="(item, index) in items" v-key="index" :info="item" :isopen="currentActive" />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios';
import CollapseItem from './CollapseItem.vue';
export default {
  name: 'MainContent',
  data() {
    return {
      searchId: undefined,
      currentActive: undefined,
      items: [1, 2, 3],
      id: undefined,
      queryParams: {
        page: 1,
        pageSize: 10,
        id: undefined,
      },
    };
  },
  props: {
    msg: String,
  },
  components: {
    CollapseItem,
  },
  created() {
    const path = window.location.pathname;
    const pathArr = path.split('/');
    this.getData(pathArr[pathArr.length - 1]);
  },
  mounted() {},
  methods: {
    handleSearch() {
      if (this.searchId) {
        this.getData(this.searchId);
      }
    },
    getData(id) {
      const parmas = `/blocklet-server/rawblock/${id}`;
      axios.get(parmas).then(res => {
        this.items = res.tx;
      }).catch(err => {
        console.log(err)
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-content {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  flex-direction: row;
  align-items: left;
}

.buttons span {
  display: flex;
  cursor: pointer;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  user-select: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: rgb(238, 238, 238);
  color: rgb(0, 0, 0);
  opacity: 1;
  border: none;
  padding: 0px 14px;
  border-radius: 40px;
  font-weight: 400;
  font-size: 16px;
  margin: 0px 0px 4px;
  height: 34px;
  text-transform: capitalize;
}

.buttons span img {
  height: 10px;
  width: 10px;
  margin: 0px 5px 0px 0px;
  color: black;
}
</style>
