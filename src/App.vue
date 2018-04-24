<style scoped>

</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal"
                    theme="dark"
                    active-name="1">
                    <div class="layout-logo"></div>
                    <div class="layout-nav">
                        <router-link to="/">
                            <MenuItem name="1">
                            <Icon type="ios-home"></Icon>
                            首页
                            </MenuItem>
                        </router-link>
                        <router-link to="/product">
                            <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            商品列表
                            </MenuItem>
                        </router-link>
                        <router-link to="/add">
                            <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            商品增删
                            </MenuItem>
                        </router-link>
                        <router-link to="/cart">
                            <MenuItem name="4">
                            <Icon type="ios-cart"></Icon>
                            购物车
                            </MenuItem>
                        </router-link>

                    </div>
                </Menu>
            </Header>

            <br>
            <Content :style="{padding: '0 50px'}">
                <Card>
                    <div style="min-height: 400px;">
                        <router-view></router-view>
                    </div>
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
export default {}
</script>
