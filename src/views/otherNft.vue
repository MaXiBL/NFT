<template>
  <div class="create">
    <section class="author-area">
      <div class="container flexNft">
        <div class="row justify-content-between">
          <div class="col-12 col-md-4">
            <v-userInfo otherUser="otherUser" :userData="userData" />
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
                        <span>Exclusive Assets</span>
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
                </ul>
                <div class="row items">
                  <div
                    class="col-12 col-sm-6 col-lg-3 item"
                    v-for="(item, index) in getSellList"
                    :key="index"
                  >
                    <div class="card">
                      <div class="image-over image-over-other">
                        <a>
                          <img class="card-img-top" :src="item.uri" alt="" />
                        </a>
                      </div>
                      <div class="card-caption col-12 p-0">
                        <div class="card-body">
                          <a class="saw">
                            <h5 class="mb-0">{{ item.name }}</h5>
                            <span>1 of 1</span>
                          </a>
                          <div
                            class="seller d-flex align-items-center my-3 ppcc"
                          >
                            <span
                              v-html="$encryptionEnd(item.description)"
                            ></span>
                          </div>
                          <div
                            class="
                              card-bottom
                              d-flex
                              justify-content-between
                              ccok
                            "
                          >
                            <span class="bnbcolor">{{ item.price }} BNB</span>
                          </div>
                          <a
                            class="btn btn-bordered-white btn-smaller mt-3 olos"
                            @click="jump(item)"
                            ><i class="icon-handbag mr-2"></i>Buy</a
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
import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { getNftList, getOther } from "../utils/api";
import { useRouter, useRoute } from "vue-router";
import userInfo from "../components/userInfo";

export default defineComponent({
  components: {
    "v-userInfo": userInfo,
  },

  setup(props, contex) {
    const route = useRoute();
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      userData: [],
      seller: "",
      activeIndex: 0,
      getSellList: [],
      loading: true,
    });

    const fetchData = async () => {
      let res = await getOther({ addr: state.seller });
      let tokens = await getNftList();
      let _tokens = {};
      tokens.data.forEach((item) => {
        _tokens[item.tokenid] = item;
      });
      res.data.forEach((item) => {
        let token = _tokens[item.token_id];
        Object.keys(token).forEach((k) => {
          if (item[k] == undefined) {
            item[k] = token[k];
          }
        });
      });
      state.getSellList = res.data;
      console.log("array", res.data);
    };

    const jump = (item) => {
      console.log("click ", item);
      router.push({
        name: "Buy",
        query: { sales_id: item.salesid, token_id: item.token_id },
      });
    };

    onMounted(() => {
      state.seller = route.query.seller;
      console.log(
        route.query.seller,
        "route.params.sellerroute.params.sellerroute.params.seller"
      );
      console.log(
        state.seller,
        "route.params.sellerroute.params.sellerroute.params.seller"
      );
      fetchData();
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

<style   lang="scss">
@media (min-width: 1200px) {
  .container {
    // max-width: 1200px !important;
  }
}
.autor {
  margin-top: 100px;
}
.el-input.is-disabled .el-input__inner {
  background-color: transparent;
}
.image-over-other {
  height: auto !important;
}
</style>