<template>
  <div class="main" v-loading.fullscreen.lock="fullscreenLoading">
    <section class="breadcrumb-area overlay-dark d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content text-center">
              <h2 class="m-0">Item Details</h2>
              <!-- <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item active">Item Details</li>
              </ol> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="item-details-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-12 col-lg-5">
            <div class="item-info">
              <div class="item-thumb text-center">
                <img class="nftImg" :src="nftDetail?.uri" alt="" />
              </div>
              <div style="margin-top: 1.5rem">description:</div>
              <div
                style="margin-top: 0.3rem !important; padding-left: 10px !important;"
                class="card no-hover countdown-times my-4"
                v-if="nftDetail?.description"
              >
                <!-- {{ nftDetail?.description ? nftDetail?.description : "" }} -->
                <div class="">
                  <div
                    v-html="
                      nftDetail?.description ? nftDetail?.description : ''
                    "
                  ></div>
                  <!-- {{ nftDetail?.description ? nftDetail?.description : "" }} -->
                  <!-- <div class="oop">{{ nftDetail?.category ? nftDetail?.category : ""}}</div> -->
                </div>
              </div>

              <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
                <li>
                  <a
                    class="active"
                    id="nav-home-tab"
                    data-toggle="pill"
                    href="#nav-home"
                  >
                    <h5 class="m-0">History</h5>
                  </a>
                </li>
              </ul>
              <!-- Tab Content -->
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home">
                  <ul class="list-unstyled">
                    <li
                      class="single-tab-list d-flex align-items-center"
                      v-for="item in activityList"
                      :key="item.id"
                    >
                      <div class="activity-content ml-4">
                        <a>
                          <!-- <h5 class="mt-0 mb-2">Walking On Air?</h5> -->
                        </a>
                        <p class="m-0" v-if="item.type == 'Mint'">
                          Minted {{ timeago(item.ctime) }} by
                          <span class="peopleName">@{{ item.to }}</span>
                        </p>
                        <p class="m-0" v-if="item.type == 'List'">
                          Listed for
                          <strong style="color: #000 !important"
                            >{{ item.price }} BNB</strong
                          >
                          {{ timeago(item.ctime) }} by
                          <span class="peopleName">@{{ item.from }}</span>
                        </p>
                        <p class="m-0" v-if="item.type == 'Transfer'">
                          Transfered {{ timeago(item.ctime) }} by
                          <span class="peopleName">@{{ item.from }}</span> to
                          <span class="peopleName">@{{ item.to }}</span>
                        </p>
                        <p class="m-0" v-if="item.type == 'Sale'">
                          Purchased at price of
                          <strong style="color: #000 !important"
                            >{{ item.price }} BNB</strong
                          >
                          {{ timeago(item.ctime) }} by
                          <span class="peopleName">@{{ item.from }}</span> to
                          <span class="peopleName">@{{ item.to }}</span>
                        </p>
                      </div>
                    </li>

                    <li
                      v-if="activityList.length == 0"
                      style="margin-top: 50px"
                    >
                      There are no records now.
                    </li>
                  </ul>
                </div>
              </div>

              <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[5, 10, 20, 100]"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                v-model:currentPage="currentPage"
                v-model:pageSize="pageSize"
              >
              </el-pagination>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="content mt-5 mt-lg-0">
              <div class="product__right">
                <h3 class="author">
                  <!-- <span>name: </span> -->
                  <!-- {{ sellDetail?.seller ? sellDetail?.seller : "author" }} -->
                  {{ nftDetail?.name ? nftDetail?.name : "nftName" }}
                </h3>
                <!-- <p>{{ nftDetail?.description ? nftDetail?.description : "" }}</p> -->
                <div class="owner-meta d-flex align-items-center mt-3">
                  <span>author:</span>
                  <a
                    class="owner d-flex align-items-center ml-2"
                    style="cursor: pointer"
                    @click="touserindex"
                  >
                    <el-image
                      style="width: 48px; height: 48px; border-radius: 50%"
                      :src="sellerInfo?.avatar ? sellerInfo?.avatar : ''"
                      fit="cover"
                    >
                      <template #error>
                        <div
                          class="image-slot"
                          style="cursor: pointer"
                          @click="touserindex"
                        >
                          <img
                            class="avatar-sm rounded-circle"
                            src="../../assets/images/avatar1.png"
                          />
                        </div>
                      </template>
                    </el-image>
                    <h6 class="ml-2">
                      <!-- {{ sellDetail?.seller ? sellDetail?.seller : "author" }} -->
                      {{
                        sellerInfo?.nickname
                          ? sellerInfo?.nickname
                          : sellDetail?.seller
                          ? sellDetail?.seller
                          : "author"
                      }}
                    </h6>
                  </a>
                </div>
                <!-- <div class="nameWrap">
                  <h4 class="name">
                    (Royalties: 1%)
                  </h4>
                </div> -->

                <div class="item-info-list mt-4">
                  <ul class="list-unstyled">
                    <div class="label__item">
                      <div class="circle"></div>
                      <!-- <span class="lableText">Royalties：1%</span> -->
                    </div>
                    <!-- <div class="label__item">
                      <div class="circle"></div>
                      <span class="lableText">owner：0</span>
                    </div>
                    <div class="label__item">
                      <div class="circle"></div>
                      <span class="lableText"
                        >amount：{{
                          sellDetail?.amount ? sellDetail?.amount : 0
                        }}</span
                      >
                    </div>
                    <div class="label__item">
                      <div class="circle"></div>
                      <span class="lableText">collect：0</span>
                    </div> -->
                  </ul>
                </div>

                <!-- <div class="item-info-list mt-4">
                    <ul class="list-unstyled">
                        <li class="price d-flex justify-content-between">
                            <span>Current Price {{sellDetail?.price ? sellDetail?.price : ''}} ETH</span>
                            <span>$000.00</span>
                            <span>0 of 0</span>
                        </li>
                        <li>
                            <span>Size</span>
                            <span>00000 x 00000 px</span>
                        </li>
                        <li>
                            <span>Volume Traded</span>
                            <span>00.0</span>
                        </li>
                    </ul>
                </div> -->

                <div class="desc">
                  <div class="desc-ss">
                    <h4 class="desc__title">price:</h4>
                    <span>{{ sellDetail?.price }} BNB</span>
                  </div>

                  <el-form
                    ref="formEle"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="80px"
                    class="demo-ruleForm"
                  >
                    <!-- prop="amount" -->
                    <el-form-item label="amount:">
                      <!-- <el-input-number    原来的 
                        v-model="ruleForm.amount"
                        :min="1"
                        :max="sellDetail?.amount ? sellDetail?.amount : 1"
                      /> -->
                      {{ ruleForm.amount }}
                    </el-form-item>

                    <el-form-item label="Class:">
                      {{ !nftDetail.category ? "" : nftDetail.category }}
                      <i v-if="!!nftDetail.category2">|</i>
                      {{ !nftDetail.category2 ? "" : nftDetail.category2 }}
                      <!-- {{ nftDetail?.category ? nftDetail?.category : "" }} -->
                    </el-form-item>
                    <!-- <el-form-item label="Collection:">
                      {{ nftDetail?.category ? nftDetail?.category : "" }}
                    </el-form-item> -->
                  </el-form>
                </div>
                <div style="margin-top: 25px" @click="handelBuyBtuClick">
                  <a class="d-block btn btn-bordered-white mt-4 widths"
                    >Purchase</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <el-dialog
      v-model="showDialog__buy"
      title="Checkout"
      width="500px"
      top="200px"
    >
      <div class="dialog">
        <div class="dialog__product">
          <img class="dialog__product__img" :src="nftDetail?.uri" />
          <div class="dialog__product__right">
            <p class="dialog__product__author">
              {{ sellDetail?.seller ? sellDetail?.seller : "" }}
            </p>
            <p class="dialog__product__name">
              {{ nftDetail?.name ? nftDetail?.name : "" }}
            </p>
          </div>
        </div>
        <div class="dialog__kv">
          <!-- <span class="dialog__kv__k">Royalties：1%</span> -->
        </div>
        <div class="dialog__kv">
          <span class="dialog__kv__k">Pay price：{{ paymentPrice }} BNB</span>
          <!-- <span class="dialog__kv__v">({{cnyToUsd(paymentPrice)}}美元)</span> -->
        </div>
        <div class="dialog__buyBtn" @click="buyNft">Confirm purchase</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { post, get } from "@/utils/request.js";
import { getNftContract, getTradeContract } from "@/utils/contractHelpers";
import Web3 from "web3";
import { ElMessage } from "element-plus";
// import { adrContract } from "@/utils/config";
import commonEffect from "./effects/commonEffect";

//表单
const useFormEffect = (sellDetail) => {
  let ruleForm = ref({
    amount: 1,
  });
  const rules = ref({
    amount: [
      {
        required: true,
        message: "Please input amount",
        trigger: "blur",
      },
    ],
  });
  //支付价格
  const paymentPrice = computed(() => {
    let sum = ruleForm.value.amount * sellDetail.value.price;
    console.log("支付价格：");
    console.log(sellDetail.value.price);
    return sum;
  });
  return { ruleForm, rules, paymentPrice };
};

// 展示隐藏弹出框
const useDialogEffect = () => {
  const showDialog = ref(false);
  const store = useStore();
  const router = useRouter();

  const showDialog__buy = ref(false);
  const handelBuyBtuClick = () => {
    console.log("--------------------------", store.state.ConnectWalletID);
    if (store.state.ConnectWalletID) {
      showDialog__buy.value = true;
    } else {
      router.push({ name: "connect" });
    }
  };

  let fullscreenLoading = ref(false); //整页加载
  const loading = ref(false); //局部加载

  const showTip = (message = "success", state = "success") => {
    if (state != "success") {
      state = "error";
    }
    ElMessage({
      message: message,
      type: state,
      center: true,
      duration: 3000,
    });
  };

  return {
    showDialog,
    handelBuyBtuClick,
    showDialog__buy,
    fullscreenLoading,
    loading,
    showTip,
  };
};

//出售详情逻辑
const useSellDetailEffect = (fullscreenLoading, sellId, getUserInfo, price) => {
  const content = reactive({ sellDetail: {}, nftDetail: {}, sellerInfo: {} });
  //获取出售详情
  const getSellDetail = async (sellId) => {
    if (fullscreenLoading.value) {
      return;
    }
    fullscreenLoading.value = true;

    try {
      let res = await get("/api/sales/info?salesid=" + sellId);
      console.log("sales info", res);
      content.sellDetail = res.data;
      getSellerInfo(res.data.seller);
    } catch (error) {
      console.log("获取出售详情失败");
      console.log(error);
    }
    fullscreenLoading.value = false;
  };
  const { sellDetail } = toRefs(content);

  //获取nft详情
  const getNftDetail = async (nftId) => {
    try {
      let res = await get(`/api/token/${nftId}.json`);
      content.nftDetail = res;
      console.log("NFT详情：", res);
      console.log(res);
    } catch (error) {
      console.log(error);
      console.log("获取nft详情失败");
    }
  };
  const { nftDetail } = toRefs(content);

  //获取出售者的用户信息
  const getSellerInfo = async (addr) => {
    getUserInfo(addr).then((res) => {
      content.sellerInfo = res;
      localStorage.setItem("address", res.address);
    });
  };
  const { sellerInfo } = toRefs(content);

  return { sellDetail, getSellDetail, getNftDetail, nftDetail, sellerInfo };
};

// 购买nft
const useBuyEffect = (
  nftId,
  contract_addr,
  ruleForm,
  paymentPrice,
  loading,
  showTip,
  sellDetail,
  sellId,
  fullscreenLoading
) => {
  const router = useRouter();
  const store = useStore();

  //获取出售列表(不管) id=29
  const getSellList = async () => {
    try {
      let res = await get("/api/sales/list/allsales");
      console.log("res:");
      console.log(res);
    } catch (error) {
      console.log("请求出售列表失败");
    }
  };
  //购买nft
  const buyNft = async () => {
    fullscreenLoading.value = true
    if (sellDetail.value.seller == store.state.ConnectWalletID) {
      showTip("Unable to buy NFT sold by yourselves", "error");
      return;
    }

    if (loading.value) {
      return;
    }
    loading.value = true;
    console.log("buy nft details", sellDetail.value);

    try {
      let salesInstance = getTradeContract(
        sellDetail.value.contract_addr,
        sellDetail.value.contract_type
      );
      let price = Web3.utils.toWei(paymentPrice.value.toString());
      console.log("价格*数量", ruleForm.value.amount, sellId, price);

      console.log(
        "价格*34数量wwwww",
        sellId,
        ruleForm.value.amount,
        store.state.ConnectWalletID
      );

      //var dd= localStorage.getItem('allsales')

      // console.log("contract_addr", contract_addr);
      let res = await salesInstance.methods
        .bid(sellId, ruleForm.value.amount)
        .send({ from: store.state.ConnectWalletID, value: price });

      console.log("价格*34数量", res);

      showTip("purchase succeeded");
      setTimeout(() => {
        router.replace("/myNft"); //进入我的nft
      }, 500);
    } catch (error) {
      fullscreenLoading.value = false
      console.log("购买nft失败:");
      console.log(error);
      // showTip(error, "error");
      showTip("purchase failed", "error");
    }
    loading.value = false;
  };
  return { buyNft };
};

//获取nft交易记录
const recordEffect = (nftId) => {
  const data = reactive({ currentPage: 1, pageSize: 5, total: 0 });
  let { currentPage, pageSize, total } = toRefs(data);

  //每页显示多少条数据
  const handleSizeChange = (val) => {
    console.log(`${val} items per page`);
    getActivityList();
  };
  const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`);
    getActivityList();
  };

  let activityList = ref([]);
  //获取列表
  const getActivityList = async () => {
    try {
      let params = {
        tokenid: nftId,
        page: currentPage.value,
        count: pageSize.value,
      };
      let res = await get("/api/user/oplog", params);
      console.log("记录：");
      console.log(res);
      if (res?.data?.data?.length) {
        activityList.value = res.data.data;
        total.value = res?.data?.total;
      } else {
        activityList.value = [];
        total.value = 0;
      }
    } catch (error) {
      console.log("请求错误");
    }
  };

  //时间展示格式
  const timeago = computed(() => {
    return (value) => {
      // value格式：'2021-07-13 18:55:40'
      let dateTimeStamp = Date.parse(new Date(value));
      let result = "";
      //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
      var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime(); //获取当前时间毫秒
      console.log(now);
      var diffValue = now - dateTimeStamp; //时间差

      if (diffValue < 0) {
        return;
      }
      var minC = diffValue / minute; //计算时间差的分，时，天，周，月
      var hourC = diffValue / hour;
      var dayC = diffValue / day;
      var weekC = diffValue / week;
      var monthC = diffValue / month;
      //此处考虑小数情况，感谢 情非得已https://blog.csdn.net/weixin_48495574 指正
      if (monthC >= 1 && monthC < 4) {
        result = " " + parseInt(monthC) + " months ago";
      } else if (weekC >= 1 && weekC < 4) {
        result = " " + parseInt(weekC) + " weeks ago";
      } else if (dayC >= 1 && dayC < 7) {
        result = " " + parseInt(dayC) + " days ago";
      } else if (hourC >= 1 && hourC < 24) {
        result = " " + parseInt(hourC) + " hours ago";
      } else if (minC >= 1 && minC < 60) {
        result = " " + parseInt(minC) + " minutes ago";
      } else if (diffValue >= 0 && diffValue <= minute) {
        result = "just";
      } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth =
          datetime.getMonth() + 1 < 10
            ? "0" + (datetime.getMonth() + 1)
            : datetime.getMonth() + 1;
        var Ndate =
          datetime.getDate() < 10
            ? "0" + datetime.getDate()
            : datetime.getDate();
        var Nhour =
          datetime.getHours() < 10
            ? "0" + datetime.getHours()
            : datetime.getHours();
        var Nminute =
          datetime.getMinutes() < 10
            ? "0" + datetime.getMinutes()
            : datetime.getMinutes();
        var Nsecond =
          datetime.getSeconds() < 10
            ? "0" + datetime.getSeconds()
            : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate;
      }
      return result;
    };
  });

  return {
    handleSizeChange,
    handleCurrentChange,
    currentPage,
    pageSize,
    total,
    activityList,
    getActivityList,
    timeago,
  };
};

export default {
  name: "Buy",
  setup() {
    const router = useRouter();
    const route = useRoute();
    const nftId = route.query.token_id;
    const sellId = route.query.sales_id;
    const token_ids = route.query.token_id;
    const contract_addr = route.query.contract_addr;
    console.log("nftId:---" + nftId + "," + "sellId:---" + sellId);

    const price = route.query.price;

    const {
      showDialog,
      handelBuyBtuClick,
      showDialog__buy,
      fullscreenLoading,
      loading,
      showTip,
    } = useDialogEffect();

    const { getUserInfo } = commonEffect();

    const { getSellDetail, sellDetail, getNftDetail, nftDetail, sellerInfo } =
      useSellDetailEffect(fullscreenLoading, sellId, getUserInfo, price);

    getSellDetail(sellId);
    getNftDetail(nftId);

    const { ruleForm, rules, paymentPrice } = useFormEffect(sellDetail);
    const touserindex = () => {
      console.log(1, sellerInfo.address);
      router.push({
        name: "otherNft",
        query: {
          id: nftId,
          seller: localStorage.getItem("address"),
          token_id: token_ids,
        },
      });
    };
    const { buyNft } = useBuyEffect(
      nftId,
      contract_addr,
      ruleForm,
      paymentPrice,
      loading,
      showTip,
      sellDetail,
      sellId,
      fullscreenLoading
    );

    //交易记录
    const {
      handleSizeChange,
      handleCurrentChange,
      currentPage,
      pageSize,
      total,
      activityList,
      getActivityList,
      timeago,
    } = recordEffect(nftId);
    getActivityList();

    return {
      showDialog,
      handelBuyBtuClick,
      touserindex,
      showDialog__buy,
      fullscreenLoading,
      loading,
      ruleForm,
      rules,
      paymentPrice,
      sellDetail,
      buyNft,
      nftDetail,
      sellerInfo,
      // adrContract,
      handleSizeChange,
      handleCurrentChange,
      currentPage,
      pageSize,
      total,
      activityList,
      timeago,
      price,
    };
  },
};
</script>

<style scoped>
.widths {
  width: 48% !important;
}
.el-input__inner {
  background-color: #09080d !important;
}
.el-input-number__increase,
.el-input-number__decrease {
  background-color: #09080d !important;
}
</style>

<style lang='scss' scoped>
::v-deep {
  .el-pagination span,
  .el-pagination ul {
    margin-bottom: 0.5rem;
  }
  .el-dialog {
    max-width: 400px !important;
    width: 84% !important;
  }
}
.dialog {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: auto !important;
  }
  &__title {
    font-size: 25px;
    color: #161516;
    line-height: 50px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 20px;
  }
  &__subTitle {
    font-size: 16px;
    color: #161516;
    line-height: 50px;
    text-align: center;
    font-weight: 600;
    margin-bottom: 60px;
  }
  &__img {
    width: 90px;
    height: 90px;
    margin-bottom: 80px;
  }
  &__bottomP {
    font-size: 26px;
    color: #999999;
    font-weight: 600;
  }
  &__product {
    width: 100%;
    background: #fff;
    border-radius: 14px;
    box-sizing: border-box;

    margin-bottom: 19px;
    display: flex;
    &__img {
      width: 90px;
      height: 90px;
      margin-right: 14px;
    }
    &__right {
      flex: 1;
      .dialog__product__author {
        font-size: 14px;
        color: #161516;
        margin-bottom: 6px;
      }
      .dialog__product__name {
        font-size: 20px;
        color: #161516;
        // line-height: 72px;
        font-weight: 600;
      }
      .dialog__product__money {
        font-size: 13px;
        color: #161516;
        line-height: 2;
        text-align: right;
      }
      .dialog__product__ChMoney {
        font-size: 13px;
        color: #161516;
        text-align: right;
      }
    }
  }
  &__kv {
    display: flex;
    width: 100%;

    align-items: center;
    &__k {
      font-size: 16px;
      color: #161516;
      font-weight: 600;
      // line-height: 64px;
      margin-bottom: 14px;
      flex: 1;
    }
    &__v {
      font-size: 16px;
      color: #6c6c6c;
      // line-height: 64px;
    }
  }
  &__buyBtn {
    width: 170px;
    height: 40px;
    border-radius: 6px;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    margin-top: 30px;
    cursor: pointer;
  }
}
.activity-content {
  width: calc(100% - 100px);
}
.strong {
  color: #000 !important;
}

.peopleName {
  color: #000;
  font-size: 16px;
  font-weight: 500;
  &:hover {
    color: #4528dc;
  }
}
::v-deep {
  .el-pagination {
    display: flex;
    flex-wrap: wrap;
  }
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #4528dc;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4528dc;
    color: #fff;
  }
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
  .desc__title {
    font-size: var(--el-form-label-font-size) !important;
    color: var(--el-text-color-regular) !important;
  }
  .el-form-item__label {
    text-align: left;
  }
  .desc-ss span,
  .desc .el-form-item__content,
  .desc .el-form-item__content {
    font-family: var(--primary-font) !important;
    color: var(--primary-t-color) !important;
  }
}
@media only screen and (min-width: 320px) and (max-width: 750px) {
  .widths {
    width: 78% !important;
  }
}
.desc-ss {
  display: flex;
  align-items: center;
  justify-content: start;
  span {
    margin-left: 1rem;
  }
}
.breadcrumb-area {
    background: none;
    padding: 0;
    height: 300px;
    h2 {
        background: linear-gradient(90deg, #1F94FA 0%, #815CF6 50%, #F64E88 60%) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
    }
}
.item-details-area {
    padding-top: 0;
}
</style>
