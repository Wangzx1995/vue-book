<template>
  <div>
    <Table border
      :columns="columns7"
      :data="buybooks"></Table>
    <p>总价：{{all}}元</p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      columns7: [
        {
          title: '商品',
          key: 'bookName',
          align: 'center'
        },
        {
          title: '单价',
          key: 'price',
          align: 'center'
        },
        {
          title: '数量',
          key: 'num',
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'span',
                {
                  style: {
                    marginLeft: '5px',
                    marginRight: '5px'
                  }
                },
                params.row.num
              )
            ])
          }
        },
        {
          title: '合计',
          key: 'sum1',
          align: 'center',
          render: (h, params) => {
            return h('span', params.row.price * params.row.num)
          }
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h(
                'Button',
                {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(
                        params.row.id,
                        params.row.num,
                        params.row.price
                      )
                    }
                  }
                },
                '删除'
              )
            ])
          }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['added', 'allMoney']),
    buybooks() {
      return this.added
    },
    all() {
      return this.allMoney
    }
  },
  methods: {
    remove: function(id, num, price) {
      this.$store.dispatch('cancelBook', id, num, price)
      this.$store.state.allMoney = this.$store.state.allMoney - num * price
      this.$Message.error('删除商品成功!')
    }
  }
}
</script>
