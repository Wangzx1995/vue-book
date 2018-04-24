<template>
  <div>
    <Form ref="formCustom"
      :model="formCustom"
      :label-width="80">
      <FormItem label="书名：">
        <Input type="text"
          v-model="formCustom.bookName" />
      </FormItem>
      <FormItem label="价格：">
        <Input type="text"
          v-model="formCustom.price" />
      </FormItem>
      <FormItem label="封面：">
        <Input type="text"
          v-model="formCustom.imgUrl" />
      </FormItem>
      <FormItem>
        <Button type="primary"
          @click="handleSubmit(formCustom)">确认添加</Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formCustom: {
        bookName: '',
        price: '',
        imgUrl: '',
        id: ''
      }
    }
  },
  methods: {
    handleSubmit: function(name) {
      if (name.bookName != false && name.price != false) {
        console.log(name)
        this.$store.dispatch('addBook', name)
        this.$Message.success('添加成功!')
        this.$router.push('/product')
      } else {
        this.$Message.error('添加失败!')
      }
    }
  }
}
</script>

<style>

</style>
