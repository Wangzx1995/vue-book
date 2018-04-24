<template>
  <div>
    <Row style="background:#eee;padding:20px;text-align:center">
      <Col span="5"
        offset="1"
        v-for="(book,index) in books"
        :key="index"
        class="text">
      <Card :bordered="false">
        <p slot="title">{{book.bookName}}</p>
        <img class="bookimg"
          :src="book.imgUrl"
          alt=""
          style="width: 140px;height: 200px;">
        <p>售价：{{book.price}}</p>
        <Button class="text"
          type="primary"
          size="small"
          @click="buy(book)">加入购物车</Button>
      </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['books'])
  },
  methods: {
    buy: function(book) {
      this.$Message.success('加入购物车成功!')
      this.$store.dispatch('buyBook', book)
    }
  }
}
</script>

<style>

</style>
