<template>
  <div class="page-wrapper full-screen">
    <div style="height:100vh;width:100vw;">
      <div style="height: 100vh; width:45vw; position: absolute; z-index:10; overflow: auto;">
        <h1 style="padding-left:30px; padding-top:30px;">Lit Events Tonight</h1>
        <!-- EVENTS GRID -->
        <div class="gutter-example">
          <a-row :gutter="16">
            <a-col class="gutter-row" :xs="{span: 24}" :sm="{span: 24}" :md="{span: 12}" :lg="{span: 12}">
              <!-- A CARD -->
              <a>
                <a-card style="">
                  <img
                    alt="example"
                    src="https://d3nxoulyw7bc8u.cloudfront.net/images/events/5a1f11cd-9bb2-44ef-a60a-c47fb8cb7733.jpg"
                    slot="cover"
                  />
                  <a-card-meta title="Official Lexani Afterparty 2019 with DJ Quik">
                    <template slot="title">Chateau</template>
                    <template slot="description">10:30 PM - 11:55 PM</template>
                  </a-card-meta>
                </a-card>
              </a>
            </a-col>
            <a-col class="gutter-row" :xs="{span: 24}" :sm="{span: 24}" :md="{span: 12}" :lg="{span: 12}">
              <!-- ANOTHER CARD -->
              <a>
                <a-card style="">
                  <img
                    alt="example"
                    src="https://d3nxoulyw7bc8u.cloudfront.net/images/events/d6f69d69-3e3c-48b7-941f-f5e6081f14b8.jpg"
                    slot="cover"
                  />
                  <a-card-meta title="DJ Zo Sound & Color Industry Wednesdays">
                    <template slot="title">On The Record</template>
                    <template slot="description">10:30 PM - 4:00 AM</template>
                  </a-card-meta>
                </a-card>
              </a>
            </a-col>
            <a-col class="gutter-row" :xs="{span: 24}" :sm="{span: 24}" :md="{span: 12}" :lg="{span: 12}">
              <!-- A CARD -->
              <a>
                <a-card style="">
                  <img
                    alt="example"
                    src="https://d3nxoulyw7bc8u.cloudfront.net/images/events/5a1f11cd-9bb2-44ef-a60a-c47fb8cb7733.jpg"
                    slot="cover"
                  />
                  <a-card-meta title="Official Lexani Afterparty 2019 with DJ Quik">
                    <template slot="title"
                      >Chateau</template
                    >
                    <template slot="description">10:30 PM - 11:55 PM</template>
                  </a-card-meta>
                </a-card>
              </a>
            </a-col>
            <a-col class="gutter-row" :xs="{span: 24}" :sm="{span: 24}" :md="{span: 12}" :lg="{span: 12}">
              <!-- A CARD -->
              <a>
                <a-card style="">
                  <img
                    alt="example"
                    src="https://d3nxoulyw7bc8u.cloudfront.net/images/events/5a1f11cd-9bb2-44ef-a60a-c47fb8cb7733.jpg"
                    slot="cover"
                  />
                  <a-card-meta title="Official Lexani Afterparty 2019 with DJ Quik">
                    <template slot="title"
                      >Chateau</template
                    >
                    <template slot="description">10:30 PM - 11:55 PM</template>
                  </a-card-meta>
                </a-card>
              </a>
            </a-col>
          </a-row>
        </div>

      </div>
      <div style="height: 100vh; width:55vw; z-index:10; position: absolute; right: 0;">
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
      
    </div>
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
        zoom: 13,
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

.left-pane {
  height: 100vh;
  width:45vw; 
  position: absolute;
  z-index:10;
  overflow: auto;
}

.right-pane {
  height: 100vh;
  width:55vw;
  z-index:10;
  position: absolute;
  right: 0;
}

.gutter-example >>> .ant-row > div {
    background: transparent;
    border: 0;
    padding-left: 16px;
    padding-right: 16px;
  }
  .gutter-example {
    padding-left: 16px;
    padding-right: 16px;
  }

  .gutter-box {
    background: #00a0e9;
    padding: 5px 0;
    margin-bottom: 16px;
  }

  .gutter-row{
    padding-top: 16px;
  }

</style>
