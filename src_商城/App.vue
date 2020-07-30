<template>
  <div id="app">
    <Loading v-show="this.$store.state.Loading">
    </Loading>
    <router-view />
  </div>
</template>

<script>
import Loading from "@/components/loa/Loading";
export default {
  name: "App",
  components:{
    Loading
  },
};
</script>

<style>
</style>
