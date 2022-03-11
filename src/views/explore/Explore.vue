<template>
  <div class="home">
    <div class="main">
      <section :style="{ height: route.query.title == 'collections' ? '250px' : '450px'}" class="breadcrumb-area overlay-dark d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Breamcrumb Content -->
              <div class="breadcrumb-content text-center">
                <h2 class="m-0">{{ title }}</h2>
                <!-- <ol class="breadcrumb d-flex justify-content-center">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active">Explore</li>
                </ol> -->
              </div>
            </div>
          </div>
        </div>
        <div v-if="route.query.title != 'collections'" class="cate-a">
            <div
              class="cattes"
              :class="item.color1 == true ? 'fontwhite-pc-fuk' : ''"
              v-for="(item, index) in cateList"
              :key="index"
              @mouseover="mouserhovers(index)"
            >
                <img :src="iconList[index]" alt="">
              {{ item.display }}
            </div>
        </div>
        <div class="xiamiande" v-if="cateindex !== '' && route.query.title != 'collections'">
            <div
              class="xim"
              :class="
                cateList[cateindex].color == false ? 'ximnocheck' : 'ximcheck'
              "
              @click="checkoption(cateList[cateindex].name)"
            >
              {{ cateList[cateindex].display }}
            </div>
            <div class="shuxiana"></div>
            <div
              class="xim"
              @click="checkoption(it.name)"
              v-for="(it, inx) in cateList[cateindex].subcategories"
              :key="inx"
              :class="it.color == false ? 'ximnocheck' : 'ximcheck'"
            >
              {{ it.display }}
            </div>
          </div>
      </section>

      <!-- 分类 -->
      <section style="padding: 0 !important" class="femcate">
        <!-- pc端 -->
        <!-- <div class="cate-pc">
          <div class="cate-a">
            <div
              class="cattes"
              v-for="(item, index) in cateList"
              :key="index"
              :class="item.color == false ? 'fontwhite-pc' : 'fontred-pc'"
              @click="getoneCate(item)"
            >
              {{ item.display }}
            </div>
          </div>
        </div> -->

        <!-- <div class="cate-pc" @mouseleave="close">
          <div class="cate-a">
            <div
              class="cattes"
              :class="item.color1 == true ? 'fontwhite-pc-fuk' : ''"
              v-for="(item, index) in cateList"
              :key="index"
              @mouseover="mouserhovers(index)"
            >
              {{ item.display }}
            </div>
          </div>
          <div class="xiamiande" v-if="cateindex !== ''">
            <div
              class="xim"
              :class="
                cateList[cateindex].color == false ? 'ximnocheck' : 'ximcheck'
              "
              @click="checkoption(cateList[cateindex].name)"
            >
              {{ cateList[cateindex].display }}
            </div>
            <div class="shuxiana"></div>
            <div
              class="xim"
              @click="checkoption(it.name)"
              v-for="(it, inx) in cateList[cateindex].subcategories"
              :key="inx"
              :class="it.color == false ? 'ximnocheck' : 'ximcheck'"
            >
              {{ it.display }}
            </div>
          </div>
        </div> -->

        <div class="cate-phone" @mouseleave="close">
          <div class="cate-a">
            <div
              class="cattes"
              :class="
                item.color == true || item.color1 == true
                  ? 'fontwhite-pc-fuk'
                  : ''
              "
              v-for="(item, index) in cateList"
              :key="index"
              @mouseover="mouserhovers(index)"
            >
              {{ item.display }}
            </div>
          </div>
          <div class="xiamiande" v-if="cateindex !== ''" @mouseleave="close">
            <div
              class="xim"
              :class="
                cateList[cateindex].color == false ? 'ximnocheck' : 'ximcheck'
              "
              @click="checkoption(cateList[cateindex].name)"
            >
              {{ cateList[cateindex].display }}
            </div>
            <div class="shuxiana"></div>
            <div
              class="xim"
              @click="checkoption(it.name)"
              v-for="(it, inx) in cateList[cateindex].subcategories"
              :key="inx"
              :class="it.color == false ? 'ximnocheck' : 'ximcheck'"
            >
              {{ it.display }}
            </div>
          </div>
        </div>
      </section>

      <section class="explore-area load-more p-0" style="margin-top: 0rem">
        <div class="container">
          <!-- 简介 -->
          <!-- <div class="row">
            <div class="col-12">
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                  <span>Exclusive Assets</span>
                  <h3 class="mt-3 mb-0">Explore</h3>
                </div>
                <div class="intro-btn">
                  <a class="btn content-btn" href="explore-1.html"
                    >Explore More</a
                  >
                </div>
              </div>
            </div>
          </div> -->

          <section v-if="route.query.title == 'collections'" class="popular-collections-area" style="padding: 0rem 0rem 2rem">
        <div class="container">
          <div class="row items">
            <div
              class="col-12 col-sm-6 col-lg-3 item"
              v-for="item in getList"
              :key="item"
            >
              <div class="card no-hover text-center">
                <div class="image-over">
                  <a
                    @click="jumpothers(item)"
                    style="
                      display: inline-block;
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                    "
                  >
                    <img style="" class="card-img-top" :src="item.banner" alt="" />
                  </a>
                  <!-- Seller -->
                  <a class="seller" @click="jumpothers(item)">
                    <div class="seller-thumb avatar-lg">
                      <img class="rounded-circle" :src="item.cover" alt="" />
                    </div>
                  </a>
                </div>
                <!-- Card Caption -->
                <div class="card-caption col-12 p-0" style="z-index: 99">
                  <!-- Card Body -->
                  <div class="card-body mt-4">
                    <a @click="jumpothers(item)">
                      <h5 class="mb-2">{{ item.name }}</h5>
                    </a>
                    <span v-html="$encryptionEnd(item.description)"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

          <div v-if="route.query.title != 'collections'" class="row items">
            <div
              class="col-12 col-sm-6 col-lg-3 item"
              v-for="(item, index) in getList"
              :key="index"
            >
              <div class="card">
                <div class="image-over">
                  <a>
                    <img class="card-img-top" :src="item.uri" alt="" />
                  </a>
                </div>
                <div class="card-caption col-12 p-0">
                  <!-- Card Body -->
                  <div class="card-body">
                    <a class="saw">
                      <!-- <a class="saw" href="item-details.html"> -->
                      <h5 class="mb-0" @click="jump(item)">{{ item.name }}</h5>
                      <span>1 of 1</span>
                    </a>
                    <div class="seller d-flex align-items-center my-3 ppcc">
                      <span v-html="$encryptionEnd(item.description)"></span>
                      <a>
                        <!-- <h6 class="ml-2 mb-0">Richard</h6> -->
                      </a>
                    </div>
                    <div
                      class="card-bottom d-flex justify-content-between ccok"
                    >
                      <span class="bnbcolor">{{ item.price }} BNB</span>
                      <a
                        @click="jump(item)"
                        class="btn btn-bordered-white btn-smaller mt-3 olos"
                        ><i class="icon-handbag mr-2"></i>
                        {{
                          item.seller == ConnectWalletID ? "sell" : "Purchase"
                        }}</a
                      >
                    </div>

                    <!-- <a
                      @click="jump(item.id)"
                      class="btn btn-bordered-white btn-smaller mt-3"
                      ><i class="icon-handbag mr-2"></i>Purchase</a
                    > -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12 text-center">
              <div
                id="load-btn"
                @click="more"
                class="btn btn-bordered-white mt-5"
              >
                Load More
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***** Work Area Start ***** -->
      <footoption />
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  toRefs,
  computed,
  onMounted,
  nextTick,
  watch,
  ref
} from "vue";
import { useStore } from "vuex";
import {
  getNftHomeList,
  getNftList,
  searchExplore,
  getSearchCateList,
  selUserCollectionList
} from "../../utils/api";
import { useRouter, useRoute } from "vue-router";
import footoption from "@/components/footoptions/footoption.vue"
import dizzy2 from "@/assets/afantImage/icon/dizzy-palette-2.png"
import bonbonbluegame from "@/assets/afantImage/icon/bonbon-blue-game-joystick-with-colored-buttons.png"
import polarcubetoy from "@/assets/afantImage/icon/polar-cube-toy.png"

export default defineComponent({
  components: {
      footoption
  },
  setup() {
    const title = ref('Explore NFTs')
    const router = useRouter();
    const route = useRoute();
    const store = useStore();
    const state = reactive({
      activeIndex: 0,
      getList: [],
      getNftHomeList: [],
      cateindex: 0,
      checkname: "",
      cateList: [],
      tokens: {},
      screenWidthAll: document.body.clientWidth - 100,
      screenWidth: (document.body.clientWidth - 100) / 6 - 10,
    });
    const iconList = reactive({
        0: dizzy2,
        1: bonbonbluegame,
        2: polarcubetoy
    })
    const fetchData = async () => {
      let tokens = await getNftList();
      let sales
      if (route.query.title == 'collections') {
           sales = await selUserCollectionList();
      } else {
           sales = await getNftHomeList();
      }
      let _tokens = {};

      tokens.data.forEach((item) => {
        _tokens[item.tokenid] = item;
      });
      state.tokens = _tokens;
      if (route.query.title != 'collections') {
        sales.data.forEach((item) => {
            let token = _tokens[item.token_id];
            Object.keys(token).forEach((k) => {
            if (item[k] == undefined) {
                item[k] = token[k];
            }
            });
        });
      }
      state.sales = sales.data;
      console.log("tokens", _tokens);
      console.log("sales", sales);
      state.getList = sales.data;

      nextTick(() => {
        $(".load-more .item:hidden").slice(0, 8).slideDown();
        $(".blog-area.load-more .item:hidden").slice(0, 8).slideDown();
      });
    };
    const jump = (item) => {
      router.push({
        name: item.seller == store.state.ConnectWalletID ? "Sell" : "Buy",
        query: {
          sales_id: item.salesid,
          token_id: item.token_id,
          price: item.price,
          category1: item.category,
          category2: item.category2,
        },
      });
    };
    // 还原其他的

    const resert = () => {
      for (var i = 0; i < state.cateList.length; i++) {
        if (i != state.cateindex) {
          state.cateList[i].color = false;
          state.cateList[i].color1 = false;
          for (var j = 0; j < state.cateList[i].subcategories.length; j++) {
            state.cateList[i].subcategories[j].color = false;
          }
        }
      }
    };

    const checkoption = (checkname) => {
      console.log(checkname, "--checkname");
      if (state.cateList[state.cateindex].name == checkname) {
        resert();
        state.cateList[state.cateindex].color = true;
        for (
          let i = 0;
          i < state.cateList[state.cateindex].subcategories.length;
          i++
        ) {
          state.cateList[state.cateindex].subcategories[i].color = false;
          state.cateList[state.cateindex].subcategories[i].color1 = false;
        }
        getSearchCateLists(checkname);
      } else {
        console.log("zouzheli");
        state.cateList[state.cateindex].color = false;
        state.cateList[state.cateindex].color1 = true;

        resert();

        for (
          let i = 0;
          i < state.cateList[state.cateindex].subcategories.length;
          i++
        ) {
          if (
            state.cateList[state.cateindex].subcategories[i].name == checkname
          ) {
            if (
              state.cateList[state.cateindex].subcategories[i].color == true
            ) {
              state.cateList[state.cateindex].subcategories[i].color = false;
            } else {
              state.cateList[state.cateindex].subcategories[i].color = true;
            }
          }
        }
        let catearr = "";
        for (
          let i = 0;
          i < state.cateList[state.cateindex].subcategories.length;
          i++
        ) {
          if (state.cateList[state.cateindex].subcategories[i].color == true) {
            catearr +=
              state.cateList[state.cateindex].subcategories[i].name + "+";
          }
        }
        console.log(state.cateList[state.cateindex]);

        getSearchCateLists(catearr.substring(0, catearr.length - 1));
      }
    };
    const close = () => {
      console.log("out");
      for (let i = 0; i < state.cateList.length; i++) {
        state.cateList[i].color = false;
        state.cateList[i].color1 = false;
      }
    //   state.cateindex = "";
    };
    const mouserhovers = (index) => {
      state.cateList[index].color1 = true;
      for (var i = 0; i < state.cateList.length; i++) {
        if (i != index) {
          // state.cateList[i].color = false;
          state.cateList[i].color1 = false;
        }
      }
      state.cateindex = index;
      console.log(state.cateList[index].subcategories);
      console.log(state.cateindex, "hover", state.cateindex);
    };

    const getoneCate = (item) => {
      state.cateList.map((i) => {
        if (i.name == item.name) {
          i.color = true;
        } else {
          i.color = false;
        }
      });
      console.log(state.cateList);
      getSearchCateLists(item.name);
    };
    // 点击显示分类数据
    const getSearchCateLists = (name) => {
      console.log(name, "//*");
      var ids = [];
      var array = [];
      getSearchCateList(name).then((res) => {
        let _tokens = state.tokens;
        res.data.forEach((item) => {
          let token = _tokens[item.token_id];
          Object.keys(token).forEach((k) => {
            if (item[k] == undefined) {
              item[k] = token[k];
            }
          });
        });
        state.getList = res.data;
        nextTick(() => {
          $(".load-more .item:hidden").slice(0, 4).slideDown();
          $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();
        });
      });
      console.log(state.getList);
    //   state.cateindex = "";
    };

    const more = () => {
      nextTick(() => {
        $(".load-more .item:hidden").slice(0, 8).slideDown();
        $(".blog-area.load-more .item:hidden").slice(0, 8).slideDown();

        if ($(".load-more .item:hidden").length == 0) {
        //   $("#load-btn").fadeOut("slow");
        }
      });
    };

    const Create = () => {
      router.push({ name: store.state.ConnectWalletID ? "Create" : "connect" });
    };

    state.cateList = JSON.parse(localStorage.getItem("allcates"));
    // 查询出售列表
    onMounted(() => {
      if (route.query.title == 'collections') {
          title.value = 'Explore Collections'
      }
      // 外部页面首次进入explore页

      // 搜索关键字为空时执行
      console.log(route.query.class, "-");
      if (route.query.class != undefined) {
        getSearchCateLists(route.query.class);
      } else if (route.query.keyword == undefined) {
        console.log("*6* 空 ");
        fetchData();
      } else if (route.query.keyword) {
        console.log("*8*");
        clSearch();
      }

      console.log();

      // $(".load-more .item").slice(0, 4).show();
      // $(".blog-area.load-more .item").slice(0, 6).show();
      console.log("查询出售列表", process.env.VUE_APP_CURENV);
      // empower(); //授权 zhushi 11-27
      // store.dispatch("getAllNftList");
      // getCatefunc();

      console.log(route.query.indexs);

      console.log(route.query.class, ";;;class");
      if (!!route.query.class) {
        state.cateindex = route.query.indexs;
        state.cateList[route.query.indexs].color1 = true;

        for (var i = 0; i < state.cateList.length; i++) {
          if (i == route.query.indexs) {
            if (state.cateList[i].name == route.query.class) {
              state.cateList[i].color = true;
              state.cateList[i].color1 = true;
            } else {
              for (var j = 0; j < state.cateList[i].subcategories.length; j++) {
                if (
                  state.cateList[i].subcategories[j].name == route.query.class
                ) {
                  state.cateList[i].subcategories[j].color = true;
                }
              }
            }
          }
        }
      }
    });

    // 搜索nft 关键字
    watch(route, () => {
      clSearch();
    });
    let clSearch = async () => {
        if (route.query.title == 'collections') {
            title.value = 'Explore Collections'
            await fetchData()
            return
        } else {
            title.value = 'Explore NFTs'
            await fetchData()
        }
        if (!route.query.keyword) return
      searchExplore({
        key: route.query.keyword,
      }).then((res) => {
        $("#load-btn").slideDown("slow");
        console.log("搜索到的数据", res.data);

        let _tokens = state.tokens;
        res.data.forEach((item) => {
          let token = _tokens[item.token_id];
          Object.keys(token).forEach((k) => {
            if (item[k] == undefined) {
              item[k] = token[k];
            }
          });
        });
        state.getList = res.data;
        nextTick(() => {
          $(".load-more .item:hidden").slice(0, 8).slideDown();
          $(".blog-area.load-more .item:hidden").slice(0, 8).slideDown();
        });
      });
    };
    const jumpothers = (res) => {
        console.log(res)
        router.push({name: 'othersCollection', params: { addr: res.contract_addr}})
    }

    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });
    //进入详情
    return {
      ...toRefs(state),
      ConnectWalletID,
      jump,
      Create,
      more,
      getoneCate,
      mouserhovers,
      checkoption,
      resert,
      close,
      iconList,
      title,
      route,
      jumpothers
    };
  },
});
</script>
<style lang="scss" scoped>
.popular-collections-area {
  padding-top: 0;
}
.cate-phone {
  display: none;
}
.cate-pc {
  background: #1d1b26;
}
@media only screen and (min-width: 768px) and (max-width: 1920px) {
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .btn-bordered-white {
    font-size: 0.7rem;
  }
}
/* @media (min-width: 320px) {} */
@media only screen and (min-width: 270px) and (max-width: 767px) {
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }
  .btn-bordered-white {
    font-size: 0.8rem;
  }
}
.breadcrumb-area {
    background: #fff !important;
    padding: 0;
    display: block !important;
    .container {
        padding-top: 75px;
        margin-bottom: 75px;
    }
    h2 {
        background: linear-gradient(to right, #1998FA, #775DFF, #FC4D83) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
        font-size: 45px !important;
    }
    .cate-a {
        background: none;
        display: flex;
        justify-content:space-between;
        width: 600px;
        margin: 0 auto;
        margin-bottom: 25px;
    }
    .cattes {
        width: 120px;
        height: 120px;
        font-size: 16px !important;
        border-radius: 5px;
        background: #F1F4F9;
        color: #6474D0;
        img {
            display: block;
            margin: 0 auto;
            margin-top: 18px;
            margin-bottom: 10px;
        }
    }
    .fontwhite-pc-fuk{
        color: #fff !important; 
        /* border-bottom:1px solid #7201B1  !important; */
        background: #6474D0 !important;
    }
    .xiamiande {
        background: #fff !important;
        border-top: 1px solid #D3D4D8;
        .xim {
            background: #fff;
            border: 1px solid #707A83;
            color: #707A83;
        }
    }
}

#load-btn {
    color: #6474D0;
    font-size: 16px;
    border: none;
}
</style>
