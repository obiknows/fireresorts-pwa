<template>
  <div class="page-wrapper full-screen" style="height:100vh;width:100vw;background:white;">
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from '@/components/ProductList'
import AddProduct from '@/components/AddProduct'
import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components: { ProductList, AddProduct, MglMap },
  computed: mapState('app', ['networkOnLine']),
  data() {
    return {
    };
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
@import '@/theme/variables.scss';

.products-page-title {
  text-align: center;
  margin-bottom: 60px;
}

.product-list {
  margin: 20px 0;
}
</style>
