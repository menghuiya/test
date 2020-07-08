<template>
  <div>
    <div class="head">
      <div class="return"><i class="el-icon-arrow-left"></i></div>
      <div class="my">购物车</div>
      <div class="set">
        <i class="el-icon-more-outline"></i>
      </div>
    </div>
    <div class="map">
      <div class="mapbox">
        <i class="el-icon-location"></i>
        <span class="mapmsg">成都市高新西区</span>
      </div>
      <div class="edit">编辑商品</div>
    </div>
    <div class="shop">
      <el-card class="box-card" v-for="i in 10" :key="i">
        <div slot="header" class="clearfix">
          <span>商品名称:xxxxxxxxx</span>
          <el-button style="float: right; padding: 3px 0" type="text"
            >结算</el-button
          >
        </div>
        <div v-for="o in 2" :key="o" class="text item">
          {{ '列表内容 ' + o }}
        </div>
      </el-card>
    </div>
    <div class="resolve">
      <div class="total">总计: <span style="color:red;">$00.00</span></div>
      <div class="resbtn">
        <el-button type="danger" round>去结算</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
};
</script>

<style scoped>
.head {
  height: 47px;
  display: flex;
  font-size: 20px;
  background-color: #fff;
}
.head div {
  width: 50px;
  line-height: 47px;
}
.return {
  margin-left: 20px;
}
.my {
  flex: 1;
  text-align: center;
}
.set {
  text-align: right;
  margin-right: 20px;
}
.map {
  display: flex;
  font-size: 18px;
  height: 47px;
  background-color: #fff;
  border-top: 1px solid rgb(155, 154, 154);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  line-height: 47px;
}
.mapbox {
  margin-left: 15px;
}
.mapmsg {
  font-size: 14px;
  margin-left: 15px;
  color: #d4d0d0;
}
.edit {
  flex: 1;
  text-align: right;
  margin-right: 10px;
  font-size: 16px;
}
.shop {
  margin-top: 10px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  border-radius: 10px;
}
.resolve {
  background: hsla(0, 0%, 100%, 0.95);
  height: 100px;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
}
.total {
  flex: 1;
  margin-left: 20px;
  font-size: 25px;
}
.resbtn {
  margin-right: 20px;
}
</style>
