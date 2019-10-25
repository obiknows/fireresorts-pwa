<template>
  <div class="page-wrapper full-screen">
    <div style="height:100vh;width:100vw;">
      <MglMap :accessToken="accessToken" :mapStyle="mapStyle" :center="center" :zoom="10">
        <!-- DRAIS -->
        <MglMarker :coordinates="drais" @click="onMarkerClick">
          <MglPopup anchor="bottom">
            <a-card title="Drais Nightclub">
              <!-- <a href="#" slot="extra">more</a> -->
              <p>3595 S Las Vegas Blvd</p>
              <a href="#">Visit Club Page</a>
            </a-card>
            <!-- <a-card
                hoverable
                style="width: 20px;height:50px;"
              >
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                slot="cover"
              />
              <template class="ant-card-actions" slot="actions">
                <a-icon type="setting" />
                <a-icon type="edit" />
                <a-icon type="ellipsis" />
              </template>
              <a-card-meta
                title="Card title"
                description="This is the description">
                <a-avatar slot="avatar" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              </a-card-meta>
            </a-card> -->
          </MglPopup>
        </MglMarker>
        

      </MglMap>
    </div>
    <!-- <div style="height:30vh;width:100vw;">
      <h3>Events</h3>
      <a-card>

      </a-card>
    </div> -->
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductList from '@/components/ProductList'
import AddProduct from '@/components/AddProduct'
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker, MglPopup } from "vue-mapbox";

export default {
  components: { ProductList, AddProduct, MglMap, MglPopup, MglMarker },
  computed: mapState('app', ['networkOnLine']),
  data() {
    return {
      accessToken: "pk.eyJ1Ijoib2Jpbm5hLWl6enpsaXQiLCJhIjoiY2sxNXh5aXJjMDE5MDNobWoxZ29hbXNxYyJ9.N_Go-CocmmlnDfl-cnJGkA", // your access token. Needed if you using Mapbox maps
      mapStyle: "mapbox://styles/obinna-izzzlit/ck15zi1t22xuw1cq6cugyg14f", // your map style
      center: [-115.132921, 36.122325], // Las Vegas Center Coordinates
      coordinates: [-115.132921, 36.122325], // Vegas
      drais: [-115.171790, 36.115020],
    };
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  },
  methods: {
    async onMarkerClick(payload) {
      // get the params from the payload
      let marker = payload.marker
      let markerComponent = payload.component
      let map = payload.map

      let markerCoords= markerComponent.coordinates


      const newParams = await map.flyTo({
        center: markerCoords,
        zoom: 14,
        speed: 1
      })

      console.log(newParams);
      
    }
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
