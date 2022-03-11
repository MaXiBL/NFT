<template>
  <div class="create">
    <section class="author-area">
      <div class="container flexNft">
        <div class="row justify-content-between">
          <div class="col-12 col-md-4">
            <v-userInfo />
          </div>
          <div class="col-12 col-md-8">
            <section class="item-details-area">
              <div class="container">
                <!-- 简介 -->
                <div class="row" style="margin-bottom: 40px">
                  <div class="col-12">
                    <div
                      class="
                        intro
                        d-flex
                        justify-content-between
                        align-items-end
                        m-0
                      "
                    >
                      <div class="intro-content">
                        <!-- <span>Exclusive Assets</span> -->
                        <h3 class="mt-3 mb-0">My NFT</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Netstorm Tab -->
                <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
                  <li>
                    <a
                      class="active"
                      id="nav-home-tab"
                      @click="activeIndex = 0"
                      style="cursor: pointer"
                      data-toggle="pill"
                    >
                      <h5 class="m-0">NFT works</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-profile-tab"
                      @click="activeIndex = 1"
                      style="cursor: pointer"
                      data-toggle="pill"
                    >
                      <h5 class="m-0">Own NFT</h5>
                    </a>
                  </li>
                  <li>
                    <a
                      id="nav-contact-tab"
                      @click="activeIndex = 2"
                      style="cursor: pointer"
                      data-toggle="pill"
                    >
                      <h5 class="m-0">On sale</h5>
                    </a>
                  </li>
                </ul>
                <div class="row items">
                  <div
                    class="col-12 col-sm-6 col-lg-3 item"
                    v-show="getstatusings && activeIndex == 0"
                  >
                    <!-- <div class="card cardback">
                      <div class="image-over ccvf loadnftbg"></div>
                      <div class="card-caption col-12 p-0" style="z-index: 99">
                        This FT is being created. Check the wallet record to
                        understand the progress of the uplink.
                      </div>
                    </div> -->
                  </div>

                  <div
                    class="col-12 col-sm-6 col-lg-3 item"
                    v-for="(item, index) in endArray"
                    :key="index"
                  >
                    <div class="card nftstatus">
                      <!-- <div class="sellstatus" v-if="item.stus == true">
                        This NFT is being on cancelling list, you can check the
                        latest status on chain
                      </div> -->
                      <!-- <div class="sellstatus">ddd</div>
                  <div class="sellstatus">ddd</div> -->

                      <div class="image-over ccvf">
                        <a>
                          <img class="card-img-top" :src="item.uri" alt="" />
                        </a>
                      </div>
                      <div class="card-caption col-12 p-0" style="z-index: 99">
                        <div class="card-body">
                          <a>
                            <h5 class="mb-0">
                              {{ $encryptionEnd(item.name) }}
                            </h5>
                          </a>
                          <div
                            class="
                              seller
                              d-flex
                              align-items-center
                              my-3
                              fuwenbs
                            "
                          >
                            <span
                              v-html="$encryptionEnd(item.description)"
                            ></span>
                            <!-- <span>{{ $encryptionEnd(item.description) }}</span> -->
                          </div>
                          <div
                            class="card-bottom d-flex justify-content-between"
                          >
                            <span class="bnbcolor" v-if="activeIndex == 2"
                              >{{ item.price }} BNB</span
                            >
                            <!-- <span>{{ item.amount }} BNB</span> -->
                            <span v-if="activeIndex == 2"
                              >{{ item.available }} of
                              {{ item.total_amount }}</span
                            >
                            <!-- <span v-if="item">number:{{ item.amount }}</span> -->
                          </div>
                          <a
                            class="btn btn-bordered-white btn-smaller mt-3"
                            @click="jump(item.id, item)"
                            ><i class="icon-handbag mr-2"></i
                            >{{ activeIndex == 2 ? "Cancel" : "Sell" }}</a
                          >
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
 <script>
import {
  defineComponent,
  watch,
  reactive,
  toRefs,
  computed,
  onMounted,
  nextTick,
} from "vue";
import { useStore } from "vuex";
import { get } from "../utils/request";
import { getNftList, getSellList } from "../utils/api";
import { useRouter, useRoute } from "vue-router";
import userInfo from "../components/userInfo";

export default defineComponent({
  components: {
    "v-userInfo": userInfo,
  },
  setup() {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      activeIndex: 0,
      endArray: [],
      getstatusings: false, // 获取上链状态
      endOneArray: [],
      endTwoArray: [],
      loading: true,
      tokens: {},
      mysales: {},
    });

    const fetchMyToken = async () => {
      console.log("fetch my tokens");
      let data = await get("/api/user/tokens?is_created=0", {});
      console.log("my tokens", data);
      state.endOneArray = data.data;
      nextTick(() => {
        state.loading = false;
        if (state.activeIndex == 0) state.endArray = data.data;
      });
    };
    const fetchCreatedToken = async () => {
      console.log("fetch my created tokens");
      let data = await get("/api/user/tokens?is_created=1", {});
      console.log("my created tokens", data);
      state.endTwoArray = data.data;
      nextTick(() => {
        state.loading = false;
        if (state.activeIndex == 1) state.endArray = data.data;
      });
    };
    const fetchData = async () => {
      let res = await getNftList();
      res.data.forEach((item) => {
        state.tokens[item.tokenid] = item;
      });
      console.log("state.tokens", state.tokens);
      res = await getSellList();
      res.data.forEach((item) => {
        let token = state.tokens[item.token_id];
        Object.keys(token).forEach((k) => {
          if (item[k] == undefined) {
            item[k] = token[k];
          }
        });
      });
      var data = res.data;
      nextTick(() => {
        state.mysales = res.data;
        if (state.activeIndex == 2) state.endArray = data;
      });
    };

    // request data every time when tab changed
    watch(
      () => state.activeIndex,
      (count) => {
        switch (count) {
          case 0:
            fetchMyToken();
            break;
          case 1:
            fetchCreatedToken();
            break;
          case 2:
            fetchData();
            break;
        }
      },
      { immediate: true }
    );

    const jump = (id, items) => {
      console.log("9+*-", items, "9+*-");

      router.push({
        name: "Sell",
        query: {
          sales_id: items.salesid,
          token_id:
            items.token_id == undefined ? items.tokenid : items.token_id,
          category1: items.category,
          category2: items.category2,
          type: items.contract_type
        },
      });
    };

    onMounted(() => {
      fetchData();
      fetchMyToken();
      fetchCreatedToken();
    });
    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });

    return {
      ...toRefs(state),
      ConnectWalletID,
      jump,
    };
  },
});
</script>

<style   lang="scss" scoped>
@media only screen and (max-width: 320px) and (max-width: 720px) {
  .ccvf {
    height: 17rem !important;
  }
}
@media (min-width: 320px) {
  .ccvf {
    height: 12rem !important;
  }
}
@media (min-width: 360px) {
  .ccvf {
    height: 13rem !important;
  }
}
@media (min-width: 375px) {
  .ccvf {
    height: 13rem !important;
  }
}
@media (min-width: 411px) {
  .ccvf {
    height: 14rem !important;
  }
}
@media (min-width: 414px) {
  .ccvf {
    height: 14rem !important;
  }
}
@media (min-width: 640px) {
  .ccvf {
    height: 100px !important;
  }
}
@media (min-width: 720px) {
}
@media (min-width: 768px) {
  .ccvf {
    height: 100px;
  }
}
@media (min-width: 800px) {
}
@media (min-width: 1024px) {
  .ccvf {
    height: 100px;
  }
}
@media (min-width: 1100px) {
  .ccvf {
    height: 100px;
  }

  @media (min-width: 1280px) {
    .ccvf {
      height: 100px;
    }
  }
  @media (min-width: 1366px) {
    .ccvf {
      height: 100px;
    }
  }
  @media (min-width: 1440px) {
    .ccvf {
      height: 100px;
    }
  }
  @media (min-width: 1680px) {
    .ccvf {
      height: 100px;
    }
  }
}
@media (min-width: 1920px) {
  .ccvf {
    height: 100px;
  }
}

@media (min-width: 1200px) {
  .container {
    // max-width: 1200px !important;
  }
}
.autor {
  margin-top: 100px;
}
.author .el-upload--picture-card {
  border: 0px dashed #c0ccda !important;
}
.ccvf {
  // height: 100px;
  overflow: hidden !important;
}
.loadnftbg {
  background-image: url("../assets/img/bg/conetbg.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.cardback {
  position: relative;
}
.cardbackbgs,
.sellstatus {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgb(175, 175, 177, 0.5);
  z-index: 100;
}
.nftstatus {
  position: relative;
}
.sellstatus {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.intro-content {
     h3 {
        background: linear-gradient(90deg, #1F94FA 0%, #815CF6 30%, #F64E88 80%) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
        font-size: 36px ;
        font-weight: 700;
     }
 }
</style>