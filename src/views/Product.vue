<template>
  <div class="page-wrapper" style="height:100vh;width:100vw;background:white;">
    
    <product-detail
      v-if="currentProduct"
      :product="currentProduct"
    ></product-detail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductDetail from '@/components/ProductDetail'

export default {
  components: { ProductDetail, MglMap },
  props: {
    id: String
  },
  computed: {
    ...mapGetters('products', ['getProductById']),
    currentProduct() {
      return this.getProductById(this.id)
    }
  }
}
</script>
