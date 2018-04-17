<template>
    <div id="tabbarContainer">
        <mt-tabbar v-model="selected" fixed>
          <mt-tab-item id="外卖">
            <img slot="icon" src="../../assets/logo.png" height="200" width="200">
            外卖
          </mt-tab-item>
          <mt-tab-item id="订单">
            <img slot="icon" src="../../assets/logo.png" height="200" width="200">
            订单
          </mt-tab-item>
          <mt-tab-item id="发现">
            <img slot="icon" src="../../assets/logo.png" height="200" width="200">
            发现
          </mt-tab-item>
          <mt-tab-item id="我的">
            <img slot="icon" src="../../assets/logo.png" height="200" width="200">
            我的
          </mt-tab-item>
        </mt-tabbar>
    </div>  
</template>

<script>
export default {
    name: 'Tabbar',
    data(){
        return{
            "selected": "外卖"
        }
    },
    created(){
        
    }
}
</script>

<style>
    
</style>