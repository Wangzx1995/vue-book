<template>
    <div>
        <Carousel autoplay
            v-model="value2"
            loop
            style="margin:auto">
            <CarouselItem v-for="(src,index) in lunbos"
                :key="index">
                <div class="demo-carousel"><img :src="src.src"
                        style="width:100%" /></div>
            </CarouselItem>
        </Carousel>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      value2: 0
    }
  },
  computed: {
    ...mapGetters(['lunbos'])
  }
}
</script>
<style scoped>

</style>
