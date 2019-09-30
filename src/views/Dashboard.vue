<template>
  <div class="page-wrapper full-screen">
    <a-row>
      <MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
    </a-row>
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
      accessToken: "pk.eyJ1Ijoib2Jpbm5hLWl6enpsaXQiLCJhIjoiY2sxNXh5aXJjMDE5MDNobWoxZ29hbXNxYyJ9.N_Go-CocmmlnDfl-cnJGkA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/obinna-izzzlit/ck15zi1t22xuw1cq6cugyg14f" // your map style
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
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
