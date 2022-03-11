<template>
  <div class="main" v-loading.fullscreen.lock="fullscreenLoading">
    <section class="breadcrumb-area overlay-dark d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content text-center">
              <h2 class="m-0">Item Details</h2>
              <!-- <ol class="breadcrumb d-flex justify-content-center">
                <li class="breadcrumb-item">
                  <router-link :to="{ name: 'myNft' }">
                    <a>myNft</a>
                  </router-link>
                </li>
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

                <!-- <img src="../../assets/img/content/auction_2.jpg" alt="" /> -->
              </div>
              <div style="margin-top: 1.5rem">description:</div>
              <div
                class="card no-hover countdown-times my-4"
                style="margin-top: 0.3rem !important; padding-left: 10px;"
              >
                <div class="mmcc">
                  <div
                    v-html="
                      nftDetail?.description ? nftDetail?.description : ''
                    "
                  ></div>
                  <!-- {{ nftDetail?.description ? nftDetail?.description : "" }} -->

                  <!-- <div class="oop">{{ nftDetail?.category ? nftDetail?.category : ""}}</div> -->
                </div>
              </div>

              <!-- <div class="desc">
                <h3 class="desc__title">Connected attribute</h3>
                <div class="desc__kv">
                  <span class="desc__kv__k">Contract address</span>
                  <div class="desc__kv__v">
                    <div class="v">{{ adrContract.ivp }}</div>
                  </div>
                </div>
                <div class="desc__kv">
                  <span class="desc__kv__k"></span>
                  <div class="desc__kv__v">
                    <div class="v">Token standard: ERC-1155</div>
                  </div>
                </div>
                <div class="desc__kv">
                  <span class="desc__kv__k"></span>
                  <div class="desc__kv__v">
                    <div class="v">Blockchain: Ethereum</div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <div class="content mt-5 mt-lg-0">
              <div class="product__right">
                <!-- <h3 class="author">
                  {{ sellDetail?.seller ? sellDetail?.seller : "" }}
                </h3>
                <div class="nameWrap">
                  <h4 class="name">
                    {{ nftDetail?.name ? nftDetail?.name : "" }} (Royalties1%)
                  </h4>
                </div> -->

                <h3 class="author author2">
                  <!-- <span>name: </span> -->
                  {{ nftDetail?.name ? nftDetail?.name : "nftName" }}
                </h3>
                <div class="owner-meta d-flex align-items-center mt-3">
                  <span>author:</span>
                  <a
                    class="owner d-flex align-items-center ml-2"
                    style="cursor: pointer"
                    @click="tomynft"
                  >
                    <el-image
                      style="width: 48px; height: 48px; border-radius: 50%"
                      :src="creatorInfo?.avatar ? creatorInfo?.avatar : ''"
                      fit="cover"
                    >
                      <template #error>
                        <div class="image-slot">
                          <img
                            class="avatar-sm rounded-circle"
                            src="../../assets/images/avatar1.png"
                          />
                        </div>
                      </template>
                    </el-image>
                    <h6 class="ml-2">
                      <!-- {{ nftDetail?.creator ? nftDetail?.creator : "author" }} -->
                      {{
                        creatorInfo?.nickname
                          ? creatorInfo?.nickname
                          : nftDetail?.creator
                          ? nftDetail?.creator
                          : "author"
                      }}
                    </h6>
                  </a>
                </div>

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
                          nftDetail?.amount ? nftDetail?.amount : 0
                        }}</span
                      >
                    </div>
                    <div class="label__item">
                      <div class="circle"></div>
                      <span class="lableText">collect：0</span>
                    </div> -->
                  </ul>
                </div>

                <!-- 售卖与取消售卖 -->
                <div class="desc">
                  <!-- 已出售显示 -->
                  <template v-if="sold">
                    <div class="diop">
                      <h4 class="desc__title">price:</h4>
                      <span>{{ sellDetail.price }} BNB</span>
                    </div>
                    <div class="diop">
                      <h4 class="desc__title">amount:</h4>
                      <span>{{ sellDetail.available }}</span>
                    </div>
                    <div class="diop">
                      <h4 class="desc__title">class:</h4>
                      <span>
                        {{
                          sellDetail.category == undefined
                            ? ""
                            : sellDetail.category
                        }}
                        <i v-if="!!sellDetail.category2">|</i>
                        {{
                          sellDetail.category2 == undefined
                            ? ""
                            : sellDetail.category2
                        }}
                      </span>
                    </div>
                    <div class="scol">
                      <!-- <el-form-item label="Collection:"> -->
                      <!-- {{ sellDetail?.category ? sellDetail?.category : "" }}   -->
                      <!-- </el-form-item> -->
                    </div>
                    <div class="ddafw" @click="cancelSell">
                      <a class="d-block btn btn-bordered-white mt-4"
                        >Cancel sell</a
                      >
                    </div>
                  </template>
                  <!-- 未出售显示 -->
                  <el-form
                    ref="formEle"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="80px"
                    class="demo-ruleForm"
                    v-if="!sold"
                  >
                    <span class="oopa">
                      <el-form-item label="price(BNB)" prop="price">
                        <el-input v-model="ruleForm.price" />
                      </el-form-item>
                    </span>
                    <el-form-item label="amount" prop="amount">
                      <!-- <el-input-number
                        v-model="ruleForm.amount"
                        :min="1"
                        :max="nftDetail?.amount ? nftDetail?.amount : 1"
                      /> -->

                      <el-input v-model="ruleForm.amount" disabled />
                    </el-form-item>
                    <div class="scol">
                      <el-form-item label="class:">
                        <span>
                          {{ !nftDetail.category ? "" : nftDetail.category }}
                          <i v-if="!!nftDetail.category2">|</i>
                          {{ !nftDetail.category2 ? "" : nftDetail.category2 }}
                        </span>
                      </el-form-item>
                    </div>
                    <!-- <div class="scol">
                      <el-form-item label="Collection:">
                        {{ nftDetail?.category ? nftDetail?.category : "" }}
                      </el-form-item>
                    </div> -->

                    <div class="ddafw" @click="submitForm">
                      <a class="d-block btn btn-bordered-white mt-4">Sell</a>
                    </div>
                  </el-form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <el-dialog v-model="showDialog">
      <div class="dialog">
        <p class="dialog__title">Complete the<br />transaction</p>
        <p class="dialog__subTitle">
          Topurchase this ltem for 66 USDT,complete<br />this final trnsaction
        </p>
        <img class="dialog__img" src="@/assets/images/avter.png" />
        <p class="dialog__bottomP">WAITNG FOR BLOCKCHAIN CONFIMATION</p>
      </div>
    </el-dialog> -->
    <!-- 出售确认弹窗 -->
    <el-dialog
      v-model="showDialog_sell"
      title="Checkout"
      width="80%"
      max-width="400px"
      top="200px"
    >
      <div class="dialog">
        <div class="dialog__product">
          <img class="dialog__product__img" :src="nftDetail?.uri" />
          <div class="dialog__product__right">
            <p class="dialog__product__author">
              {{ nftDetail?.seller ? nftDetail?.seller : "" }}
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
          <span class="dialog__kv__k"
            >Single price：{{ ruleForm?.price }} BNB</span
          >
        </div>
        <div class="dialog__buyBtn" @click="sellNft(nftDetail)">
          Confirm sell
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import { post, get } from "@/utils/request.js";
import { getNftContract, getTradeContract } from "@/utils/contractHelpers";
import Web3 from "web3";
import { ElMessage } from "element-plus";

import commonEffect from "../buy/effects/commonEffect";

//表单
const useFormEffect = (formEle, showDialog_sell) => {
  let ruleForm = ref({
    price: "",
    amount: "1",
  });
  const rules = ref({
    price: [
      {
        required: true,
        message: "Please input price",
        trigger: "blur",
      },
    ],
    amount: [
      {
        required: true,
        message: "Please input amount",
        trigger: "blur",
      },
    ],
  });
  const submitForm = () => {
    formEle.value.validate((valid) => {
      if (valid) {
        // sellNft(ruleForm);
        showDialog_sell.value = true;
        console.log(showDialog_sell.value, "2235");
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  };

  return {
    ruleForm,
    rules,
    submitForm,
  };
};

//信息提示
const useTipEffect = () => {
  const loading = ref(false);
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

  //隐藏显示确认出售弹窗
  const showDialog_sell = ref(false);

  return { loading, showTip, showDialog_sell };
};

//获取nft详情
const useDetailEffect = (nftId, getUserInfo) => {
  const content = reactive({ nftDetail: {}, creatorInfo: {} });
  const getDetail = async () => {
    let res = await get(`/api/token/${nftId}.json`);
    content.nftDetail = res;
    content.nftDetail.cate1 = localStorage.getItem("cate1");
    content.nftDetail.cate2 = localStorage.getItem("cate2");

    console.log("详情：");
    console.log(res);
    if (res?.creator) {
      getCreatorInfo(res.creator);
    }
  };
  const { nftDetail } = toRefs(content);

  //获取当前用户详情
  const getCreatorInfo = async (addr) => {
    getUserInfo(addr).then((res) => {
      content.creatorInfo = res;
    });
  };
  const { creatorInfo } = toRefs(content);

  return { getDetail, nftDetail, creatorInfo };
};

//是否已经是出售的
const useSoldEffect = (nftId, nftDetail, loading, showTip, sellId, fullscreenLoading) => {
  const store = useStore();
  const router = useRouter();

  const existAmount = ref(0); //现存数量

  const content = reactive({ sellDetail: {} }); //出售详情

  //获取出售详情（如果是已出售的，就去获取出售详情）
  const getSellDetail = async () => {
    try {
      let res = await get("/api/sales/info?salesid=" + sellId);
      console.log("sell item info", res);
      content.sellDetail = res.data;

      console.log("content.sellDetailcontent.sellDetail", content.sellDetail);
    } catch (error) {
      console.log("获取出售详情失败:");
      console.log(error);
    }
  };

  const sold = ref(false);
  watchEffect(() => {
    if (sellId && existAmount.value < nftDetail.value?.amount) {
      sold.value = true;
      getSellDetail(); //获取出售详情
    } else {
      sold.value = false;
    }
  });

  const { sellDetail } = toRefs(content);

  //取消出售
  const cancelSell = async () => {
      fullscreenLoading.value = true
    loading.value = true;
    try {
      console.log("content", content.sellDetail);
      let salesInstance = getTradeContract(
        content.sellDetail.contract_addr,
        content.sellDetail.contract_type
      );
      console.log("要取消的sellid：", sellId);
      console.log("sells", content.sellDetail);
      let cancelSellRes = await salesInstance.methods
        .cancelSales(sellId)
        .send({ from: store.state.ConnectWalletID });
      console.log("成功取消出售");
      console.log(cancelSellRes);
      loading.value = false;
      showTip("Successfully cancelled");
      setTimeout(() => {
        // router.replace("/myNft"); //返回我的nft

        router.push({
          name: "myNft",
          params: {
            backtype: "cancelsell",
            hash: cancelSellRes.transactionHash,
          },
        });
      }, 500);
    } catch (error) {
        fullscreenLoading.value = false
      console.log(error);
      console.log("取消出售失败");
      showTip("The cancellation of the sale failed", "error");
      loading.value = false;
    }
  };
  return { sellDetail, existAmount, sold, cancelSell };
};

//出售nft
const useSellNftEffect = (nftId, loading, showTip, ruleForm, fullscreenLoading) => {
  const store = useStore();
  const router = useRouter();
  const route = useRoute()
  //出售nft
  const sellNft = async (nftDetail) => {
    fullscreenLoading.value = true
    let config = await get("/media/config.json");
    //let tokenContract = config.contracts.ERC1155.tokenContract;
    let contractType = nftDetail.contract_type;
    let tokenContract = nftDetail.contract_addr;
    let salesContract = config.contracts.salesContract;
    console.log("contract type ", contractType);
    console.log("ntf contract ", tokenContract);
    console.log("sales contract ", salesContract);
    let salesInstance = await getTradeContract(salesContract, contractType);
    let tokenInstance = await getNftContract(tokenContract, contractType);
    var value = store.state.ConnectWalletID;
    if (value) {
      var result = await tokenInstance.methods
        .isApprovedForAll(value, salesContract)
        .call();
      console.log("授权查询", result);

      if (result) {
        if (loading.value) {
          return;
        }
        loading.value = true;
        console.log(typeof ruleForm.value.price);
        try {
          let data = {
            // token_id: 45, //NFT的ID
            token_id: parseInt(nftId),
            amount: parseInt(ruleForm.value.amount),
            price: ruleForm.value.price.toString(),
            fee: (ruleForm.value.price * 0.0).toString(),
            contract_addr: salesContract,
            contract_type: route.query.type,
          };
          console.log(data);
          let res = await post("/api/sales/new", data);
          if (res?.code == 0) {
            try {
              let id = res?.data;

              console.log(
                id,
                data.token_id,
                data.amount,
                Web3.utils.toWei(data.price),
                Web3.utils.toWei(data.fee),
                "**--**"
              );
              let sellRes
              if (route.query.type == 'ERC721') {
                  sellRes = await salesInstance.methods
                .startSales(
                  id,
                  data.token_id,
                  tokenContract,
                  721,
                  data.amount,
                  Web3.utils.toWei(data.price),
                  Web3.utils.toWei(data.fee),
                  0,
                  tokenContract
                )
                .send({ from: store.state.ConnectWalletID });
              } else {
                sellRes = await salesInstance.methods
                .startSales(
                  id,
                  data.token_id,
                  tokenContract,
                  1155,
                  data.amount,
                  Web3.utils.toWei(data.price),
                  Web3.utils.toWei(data.fee),
                  0,
                  tokenContract
                )
                .send({ from: store.state.ConnectWalletID });
              }
              showTip("Sold successfully");
              console.log("出售成功");
              console.log(sellRes);
              setTimeout(() => {
                setTimeout(() => {
                  // router.replace("/myNft"); //返回我的nft
                  router.push({
                    name: "myNft",
                    params: {
                      backtype: "sell",
                      hash: sellRes.transactionHash,
                    },
                  });
                }, 500);
              }, 500);
            } catch (error) {
              fullscreenLoading.value = false
              showTip("Failed to sell", "error");
              console.log("出售nft失败");
              console.log(error);
            }
          }
        } catch (error) {
          showTip("Request error", "error");
          console.log("请求失败");
          console.log(error);
        }
        loading.value = false;
      } else {
        console.log("授权", salesInstance, store.state.ConnectWalletID);
        var bb = await tokenInstance.methods
          .setApprovalForAll(salesContract, true)
          .send({ from: store.state.ConnectWalletID });
        console.log("授权", bb);
        var a = await tokenInstance.methods
          .isApprovedForAll(store.state.ConnectWalletID, salesContract)
          .call();
        console.log("授权成功", a);
      }
    }
  };

  return { sellNft };
};

export default {
  name: "Sell",
  setup(props, context) {
    let fullscreenLoading = ref(false)
    const route = useRoute();
    const router = useRouter();
    const nftId = route.query.token_id;
    const sellId = route.query.sales_id;
    const store = useStore();
    console.log("nftId: " + nftId + "  sellId: " + sellId);
    const { getUserInfo } = commonEffect();

    const formEle = ref(null);
    const { loading, showTip, showDialog_sell } = useTipEffect();
    const { ruleForm, rules, submitForm } = useFormEffect(
      formEle,
      showDialog_sell
    );
    const { sellNft } = useSellNftEffect(nftId, loading, showTip, ruleForm, fullscreenLoading);

    const { getDetail, nftDetail, creatorInfo } = useDetailEffect(
      nftId,
      getUserInfo
    );

    getDetail();

    const back = () => {
      router.go(-1);
    };
    const tomynft = () => {
      router.push({ name: "myNft" });
    };
    const { sellDetail, sold, cancelSell } = useSoldEffect(
      nftId,
      nftDetail,
      loading,
      showTip,
      sellId,
      fullscreenLoading
    );
    onMounted(() => {
      localStorage.setItem("cate1", route.query.category1);
      localStorage.setItem("cate2", route.query.category2);
    });
    return {
      formEle,
      ruleForm,
      rules,
      submitForm,
      loading,
      showDialog_sell,
      nftDetail,
      creatorInfo,
      sellNft,
      tomynft,
      sellDetail,
      sold,
      cancelSell,
      fullscreenLoading
    };
  },
};
</script>
<style scoped>
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
  .el-message,
  .el-message--error {
    text-align: center !important;
  }

  .el-dialog {
    max-width: 400px;
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
      max-height: 90px;
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
  .author2 {
    color: red;
    // font-family: Arial, Helvetica, sans-serif;
  }
}
.ddafw {
  margin-top: 25px;
  width: 43%;
}
::v-deep {
  .scol .el-form-item__label::before {
    content: "";
    vertical-align: sub;
  }
  .el-form-item__label::before {
    content: "*";
    vertical-align: sub;
  }
  .el-input__inner {
    background: #fff;
    margin-left: 0.8em;
  }
  .el-input-number__increase,
  .el-input-number__decrease {
    background: #fff;
  }
  .el-form-item__label {
    text-align: left;
  }
  .el-input__inner {
    background: #fff !important;
    width: 30%;
  }
  .el-form-item__error {
    left: 3.9% !important;
  }
  @media (min-width: 414px) {
  }
  @media only screen and (min-width: 270px) and (max-width: 767px) {
    .el-input__inner {
      background: #fff !important;
      width: 89% !important;
    }
    .ddafw {
      margin: 0 auto !important;
    }
  }

  .oopa {
    .el-input-number {
      left: 1rem !important;
      .el-input__inner {
        width: 100% !important;
        margin: 0 !important;
      }
    }
  }
}
.mmcc {
  display: flex;
  justify-content: space-between;
  width: 94%;
  margin: 0 auto;
}
.dialog__buyBtn {
  margin: 2rem auto 0rem;
}
.diop {
  display: flex;
  display: flex;
  justify-content: start;
  align-items: center;
  .desc__title {
    font-size: var(--el-form-label-font-size) !important;
    color: var(--el-text-color-regular) !important;
    min-width: 4rem;
  }
  span {
    font-family: var(--primary-font) !important;
    color: var(--primary-t-color) !important;
    margin-left: 0.8rem;
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