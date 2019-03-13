<template>
  <div id="">
    <app-header :title="title"></app-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="index">
        <img slot="icon" src="./assets/img/logo.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/logo.png">
        搜索
      </mt-tab-item>
      <mt-tab-item id="employment">
        <img slot="icon" src="./assets/img/logo.png">
        就业
      </mt-tab-item>
      <mt-tab-item id="my">
        <img slot="icon" src="./assets/img/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Header from './components/Common/Header.vue'
export default {
   data () {
    return {
      selected : '',
      title : '首页'
    }
  },
  components : {
    appHeader : Header
  },
  watch: {
    selected (newV, oleV) {
      this.$router.push({
        name: newV
      })
      switch(newV){
        case 'index' :
            this.title = '首页';
            break;
        case 'search' :
            this.title = '搜索';
            break;
        case 'employment' :
            this.title = '就业';
            break;
        case 'my' :
            this.title = '我的';
            break;
      }
    }
  }
}
</script>

<style>

</style>
