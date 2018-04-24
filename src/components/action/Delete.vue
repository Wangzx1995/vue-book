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
        <Icon type="close-round"></Icon>
        <Button type="error"
          size="small"
          @click="deleteBook(book.id)">删除</Button>
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
    deleteBook: function(a) {
      this.$store.dispatch('deleteBook', a)
    }
  }
}
</script>

<style>

</style>
