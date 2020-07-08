<template>
  <div>
    <div class="headerfather">
      <common-header></common-header>
      <div class="warapper">
        <el-carousel height="180px">
          <el-carousel-item v-for="(item, index) in imgs" :key="index">
            <img :src="item" class="img" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="ad">
      <home-ad v-for="(item, index) in ads" :key="index" :src="item"></home-ad>
    </div>
    <div class="newad">
      <new-person-ad
        v-for="(item, index) in newPerson"
        :key="index"
        :src="item"
      ></new-person-ad>
    </div>
    <img src="@/recomm.jpg" alt="" height="100%" width="100%" />
    <div class="productfather">
      <similar-product
        v-for="(item, index) in products"
        :key="index"
        v-bind="item"
      ></similar-product>
    </div>
  </div>
</template>

<script>
import commonHeader from '../../components/home/commonHeader';
import homeAd from '../../components/home/homeAd';
import newPersonAd from '../../components/home/newPersonAd';
import similarProduct from '../../components/home/similarProduct';
export default {
  data() {
    return {
      imgs: [
        require('@/warpper1.jpg'),
        require('@/warpper2.jpg'),
        require('@/warpper3.jpg'),
      ],
      ads: [require('@/ad1.jpg'), require('@/ad2.jpg'), require('@/ad3.jpg')],
      newPerson: [require('@/new1.jpg'), require('@/new2.jpg')],
      products: [
        {
          src: require('@/product1.jpg'),
          title:
            '统帅（Leader）海尔出品 12升燃气热水器天然气 变频恒温 智能分段燃烧',
          price: 699,
        },
        {
          src: require('@/product2.jpg'),
          title:
            '美国Beakid海绵宝宝米饼入口即化磨牙棒饼干不添加糖和食盐零食54g 原味',
          price: 25,
        },
      ],
    };
  },
  created() {
    window.document.title = '首页';
  },
  components: {
    commonHeader,
    homeAd,
    newPersonAd,
    similarProduct,
  },
};
</script>

<style scoped>
.img {
  width: 100%;
  height: 180px;
}
.warapper {
  width: 95%;
  background-position: center;
  margin: auto;
}
.headerfather {
  background-color: #fc5b27;
  overflow: hidden;
}
.el-carousel img {
  border-radius: 15px;
}
.ad {
  height: 110px;
}
.newad {
  height: 132px;
  width: 94%;
  padding: 3%;
}
.productfather {
  padding: 3%;
  padding-left: 4%;
  width: 93%;
}
</style>
