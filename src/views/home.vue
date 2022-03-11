<template>
  <div class="home">
    <div class="main">
      <section class="hero-section headers">
        <div class="block">
          <div class="container headsfont">
            <div class="row row1">
              <div class="col-12 col-md-6 col-lg-7 bgimgs">
                <span class="dddq">The open NFT <br> Marketplace on <br> Ethereum and solana</span>
                <!-- <h1 class="mt-4">
                  Discover, collect, and sell extraordinary NFTs
                </h1> -->
                <p class="dddw">
                  The first NFT marketplace that enables creators to choose and embed licenses when they mint NFTs. Creators know what they are selling, collectors know what they are buying. Join the revolution.
                </p>

                <div class="button-group" @click="pushExplore">
                  <div
                    class="btn btn-bordered-white btnExplore"
                    style="padding: 16px 34px"
                  >
                    <!-- <i class="icon-note mr-2"></i> -->
                    EXPLORE
                  </div>
                </div>
                <div class="button-group" @click="Create">
                  <div
                    class="btn btn-bordered-white btnCreate"
                    style="padding: 16px 34px"
                  >
                    <!-- <i class="icon-note mr-2"></i> -->
                    CREATE
                  </div>
                </div>
              </div>
              <div class="col-5 right_option">
                <section class="card" v-for="(item, index) in topsellerList" :key="index">
                  <div>
                    <img :src="item.avatar" alt="">
                  </div>
                  <p>{{item.nickname}}</p>
                </section>
              </div>
            </div>
          </div>
          <!-- 首页轮播 -->
          <!-- <div class="pcbanners">
            <el-carousel interval="300000" indicator-position="">
              <el-carousel-item>
                <img class="imgs" src="../assets/img/h5/a1.png" alt="" />
              </el-carousel-item>
              <el-carousel-item>
                <img class="imgs" src="../assets/img/h5/a2.png" alt="" />
              </el-carousel-item>
              <el-carousel-item>
                <img class="imgs" src="../assets/img/h5/a3.png" alt="" />
              </el-carousel-item>
            </el-carousel>
          </div> -->
          <!-- <div class="phonebanners">
            <el-carousel interval="3000" indicator-position="">
              <el-carousel-item>
                <div
                  class="ddd"
                  :style="{
                    backgroundImage: 'url(' + imgarr[0] + ')',
                    backgroundSize: 'contain',
                  }"
                ></div>
              </el-carousel-item>
              <el-carousel-item>
                <div
                  class="ddd"
                  :style="{
                    backgroundImage: 'url(' + imgarr[1] + ')',
                    backgroundSize: 'contain',
                  }"
                ></div>
              </el-carousel-item>
              <el-carousel-item>
                <div
                  class="ddd"
                  :style="{
                    backgroundImage: 'url(' + imgarr[2] + ')',
                    backgroundSize: 'contain',
                  }"
                ></div>
              </el-carousel-item>
            </el-carousel>
          </div> -->
        </div>
      </section>
      <!-- 分类 -->
      
      <!-- <section style="padding: 0 !important" class="femcate"> -->
        <!-- pc端 -->
        <!-- <div class="cate-pc" @mouseleave="close">
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
                cateList[cateindex].color1 == false ? 'ximnocheck' : 'ximcheck'
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

        <!-- 手机端 -->
        <!-- <div class="cate-phone" @mouseleave="close">
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
        </div> -->
      <!-- </section> -->

        <section class="Prompt">
            <section>
                <img src="@/assets/afantImage/icon/hook.png" alt="">
                <p>Minting NFTs with embedded licenses</p>
                <p>Avanti is the first minting platform that allows creators to embed copyright licenses in NFTs.</p>
            </section>
            <section>
                <img src="@/assets/afantImage/icon/hook.png" alt="">
                <p>Ultra-low cost and multi-currency support</p>
                <p>Avanti allows minting, listing and transactions at ultra - low fees in SOL, USDC, USDT.</p>
            </section><section>
                <img src="@/assets/afantImage/icon/hook.png" alt="">
                <p>Rarity rank and score for verified collections</p>
                <p>Avanti calculates rarity rank, score and traits statistics for every fully minted verified collection.</p>
            </section><section>
                <img src="@/assets/afantImage/icon/hook.png" alt="">
                <p>Public and private NFT listing</p>
                <p>Avanti allows creators to make their listed NFTs on sale visible to the public or only privately.</p>
            </section>
        </section>

        <section class="checkitout">
            <img src="@/assets/afantImage/images/checkitout.png" alt="">
        </section>

        <!-- ***** Explore Area Start ***** -->
      <section class="popular-collections-area" style="padding: 0rem 0rem 2rem">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Intro -->
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                    <img src="@/assets/afantImage/icon/homeufo.png" alt="">
                    <a>Popular Collections</a>
                </div>
                <div class="intro-btn">
                  <!-- <a class="btn content-btn text-left">Explore More</a> -->
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              class="col-12 col-sm-6 col-lg-3 item"
              v-for="item in PopularCollectionsList"
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
      <!-- ***** Explore Area End ***** -->
      <!-- ***** Explore Area Start ***** -->
      <section class="explore-area load-more_2" style="padding: 0rem 0rem 2rem">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Intro -->
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                    <img src="@/assets/afantImage/icon/homeufo.png" alt="">
                    <a>Popular NFTs</a>
                </div>
                <div class="intro-btn">
                  <!-- <router-link class="btn content-btn" to="/explore"
                    >View All</router-link
                  > -->
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              v-for="(item, index) in popolarList"
              :key="index"
              class="col-12 col-sm-6 col-lg-3 item"
            >
              <div class="card">
                <div class="image-over">
                  <a>
                    <img class="card-img-top" :src="item.uri" alt="" />
                  </a>
                </div>
                <!-- Card Caption -->
                <div class="card-caption col-12 p-0">
                  <!-- Card Body -->
                  <div class="card-body">
                    <a class="saw">
                      <h5 class="mb-0">{{ item.name }}</h5>
                      <span>1 of 1</span>
                    </a>
                    <div class="seller d-flex align-items-center my-3 ppcc">
                      <span v-html="$encryptionEnd(item.description)"></span>
                      <!-- <a>
                        <h6 class="ml-2 mb-0">Richard</h6>
                      </a> -->
                    </div>
                    <div
                      class="card-bottom d-flex justify-content-between ccok"
                    >
                      <span class="bnbcolor">{{ item.price }} BNB </span>
                      <a
                        @click="jump(item)"
                        class="btn btn-bordered-white btn-smaller mt-3 olos"
                      >
                        <i class="icon-handbag mr-2"></i>
                        {{
                          item.seller == ConnectWalletID ? "sell" : "Purchase"
                        }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Load_More">
            <div class="col-12 text-center">
              <router-link
                id="load-btn"
                to="/explore"
                >Load More</router-link
              >
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Explore Area End ***** -->
      <!-- ***** Explore Area Start ***** -->
      <section class="explore-area load-more_1" style="padding: 0rem 0rem 2rem">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Intro -->
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                    <img src="@/assets/afantImage/icon/homeufo.png" alt="">
                    <a>Explore NFTs</a>
                </div>
                <div class="intro-btn">
                  <!-- <router-link class="btn content-btn" to="/explore"
                    >View All</router-link
                  > -->
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              v-for="(item, index) in sales"
              :key="index"
              class="col-12 col-sm-6 col-lg-3 item"
            >
              <div class="card">
                <div class="image-over">
                  <a>
                    <img class="card-img-top" :src="item.uri" alt="" />
                  </a>
                </div>
                <!-- Card Caption -->
                <div class="card-caption col-12 p-0">
                  <!-- Card Body -->
                  <div class="card-body">
                    <a class="saw">
                      <h5 class="mb-0">{{ item.name }}</h5>
                      <span>1 of 1</span>
                    </a>
                    <div class="seller d-flex align-items-center my-3 ppcc">
                      <span v-html="$encryptionEnd(item.description)"></span>
                      <!-- <a>
                        <h6 class="ml-2 mb-0">Richard</h6>
                      </a> -->
                    </div>
                    <div
                      class="card-bottom d-flex justify-content-between ccok"
                    >
                      <span class="bnbcolor">{{ item.price }} BNB </span>
                      <a
                        @click="jump(item)"
                        class="btn btn-bordered-white btn-smaller mt-3 olos"
                      >
                        <i class="icon-handbag mr-2"></i>
                        {{
                          item.seller == ConnectWalletID ? "sell" : "Purchase"
                        }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Load_More">
            <div class="col-12 text-center">
              <router-link
                id="load-btn"
                to="/explore"
                >Load More</router-link
              >
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Explore Area End ***** -->
        <footoption></footoption>
      <!-- <section class="explore-area load-more" style="padding: 7rem 0rem 2rem">
        <div class="container">
          <div class="row">
            <div class="col-12">
              
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                    <span>Exclusive Assets</span>
                    <h3 class="mt-3 mb-0">Explore</h3>
                </div>
                <div class="intro-btn">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              v-for="(item, index) in sales"
              :key="index"
              class="col-12 col-sm-6 col-lg-3 item"
            >
              <div class="card">
                <div class="image-over">
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
                    <div class="seller d-flex align-items-center my-3 ppcc">
                      <span v-html="$encryptionEnd(item.description)"></span>
                      
                    </div>
                    <div
                      class="card-bottom d-flex justify-content-between ccok"
                    >
                      <span class="bnbcolor">{{ item.price }} BNB </span>
                      <a
                        @click="jump(item)"
                        class="btn btn-bordered-white btn-smaller mt-3 olos"
                      >
                        <i class="icon-handbag mr-2"></i>
                        {{
                          item.seller == ConnectWalletID ? "sell" : "Purchase"
                        }}</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 text-center">
              <router-link
                id="load-btn"
                class="btn btn-bordered-white mt-5"
                to="/explore"
                >Load More</router-link
              >
            </div>
          </div>
        </div>
      </section>
      
      <section class="top-seller-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              
              <div class="intro m-0">
                <div class="intro-content">
                  <span>Creative Artist</span>
                  <h3 class="mt-3 mb-0">Top Sellers</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              class="col-12 col-sm-6 col-lg-4 item"
              v-for="item in topsellerList"
              :key="item"
            >
              
              <div class="card no-hover">
                <div class="single-seller d-flex align-items-center">
                  <a @click="jump(item, 'otherPeople')">
                    <img
                      v-if="item.avatar"
                      class="avatar-md rounded-circle"
                      :src="item.avatar"
                      alt=""
                    />

                    <img
                      v-else
                      class="avatar-md rounded-circle"
                      src="../assets/images/avatar1.png"
                      alt=""
                    />
                  </a>

                  
                  <div class="seller-info ml-3">
                    <a
                      class="seller mb-2"
                      @click="jump(item, 'otherPeople')"
                      style="cursor: pointer"
                      >{{ $encryptionEnd(item.seller) }}</a
                    >
                    <span>{{ item.amount }} BNB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section class="popular-collections-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              
              <div
                class="intro d-flex justify-content-between align-items-end m-0"
              >
                <div class="intro-content">
                  <span>Most Popular</span>
                  <h3 class="mt-3 mb-0">Popular Collections</h3>
                </div>
                <div class="intro-btn">
                  
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div
              class="col-12 col-sm-6 col-lg-3 item"
              v-for="item in popolarList"
              :key="item"
            >
              <div class="card no-hover text-center">
                <div class="image-over">
                  <a
                    @click="jump(item)"
                    style="
                      display: inline-block;
                      width: 100%;
                      height: 100%;
                      overflow: hidden;
                    "
                  >
                    <img style="" class="card-img-top" :src="item.uri" alt="" />
                  </a>
                  
                  <a class="seller" @click="jump(item)">
                    <div class="seller-thumb avatar-lg">
                      <img class="rounded-circle" :src="item.uri" alt="" />
                    </div>
                  </a>
                </div>
               
                <div class="card-caption col-12 p-0" style="z-index: 99">
                 
                  <div class="card-body mt-4">
                    <a @click="jump(item)">
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

      <section class="work-area">
        <div class="container">
          <div class="row">
            <div class="col-12">
              
              <div class="intro mb-4">
                <div class="intro-content">
                  <span>How It Works</span>
                  <h3 class="mt-3 mb-0">Create and sell your NFTs</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div class="col-12 col-sm-6 col-lg-3 item">
              
              <div class="single-work">
                <i class="icons icon-wallet text-effect"></i>
                <h4>Set up your wallet</h4>
                <p>
                  Once you’ve set up your wallet of choice, connect it to by
                  clicking the NFT Marketplace in the top right corner. Learn
                  about the wallets we support.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 item">
              
              <div class="single-work">
                <i class="icons icon-grid text-effect"></i>
                <h4>Create your collection</h4>
                <p>
                  Click Create and set up your collection. Add social links, a
                  description, profile & banner images, and set a secondary
                  sales fee.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 item">
              
              <div class="single-work">
                <i class="icons icon-drawer text-effect"></i>
                <h4>Add your NFTs</h4>
                <p>
                  Upload your work (image, video, audio, or 3D art), add a title
                  and description, and customize your NFTs with properties,
                  stats, and unlockable content.
                </p>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-3 item">
              
              <div class="single-work">
                <i class="icons icon-bag text-effect"></i>
                <h4>List them for sale</h4>
                <p>
                  Choose between auctions, fixed-price listings, and
                  declining-price listings. You choose how you want to sell your
                  NFTs!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> -->
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
} from "vue";
import { useStore } from "vuex";
import {
  getNftHomeList,
  topseller,
  popolar,
  getCate,
  getSearchCateList,
  getNftList,
  getPopularCollections,
} from "../utils/api";
import { useRouter } from "vue-router";
import footoption from "@/components/footoptions/footoption.vue"

export default defineComponent({
    components: {
        footoption
    },
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive({
      imgarr: [
        require("../assets/img/h5/a1p.png"),
        require("../assets/img/h5/a2p.png"),
        require("../assets/img/h5/a3p.png"),
      ],

      activeIndex: 0,
      cateList: [],
      popolarList: [],
      topsellerList: [],
      cateindex: "",
      checkname: "",
      tokens: {},
      sales: {},
      PopularCollectionsList: [],   // 首页热门集合
      PopularNftsList: [],   // 首页热门NFT
      PopularNFTList: [],   // 首页普通NFT
    });
    const getCatefunc = async () => {
      await getCate().then((res) => {
        state.cateList = res.categories;

        for (var i = 0; i < state.cateList.length; i++) {
          state.cateList[i].color = false;
          state.cateList[i].color1 = false;
          if (state.cateList[i].subcategories.length != 0) {
            for (var j = 0; j < state.cateList[i].subcategories.length; j++) {
              state.cateList[i].subcategories[j].color = false;
            }
          }
        }
        localStorage.setItem("allcates", JSON.stringify(state.cateList));
        console.log("1222", state.cateList);

        localStorage.setItem("salesContract", state.cateList[0].salesContract);
        localStorage.setItem("tokenContract", state.cateList[0].tokenContract);
        console.log(
          localStorage.getItem("salesContract") +
            "*****" +
            localStorage.getItem("tokenContract")
        );
      });
    };

    const fetchData = async () => {
      let tokens = await getNftList();
      let sales = await getNftHomeList();
      let _tokens = {};

      tokens.data.forEach((item) => {
        _tokens[item.tokenid] = item;
      });
      state.tokens = _tokens;
      sales.data = sales.data.slice(0, 4)
      sales.data.forEach((item) => {
        let token = _tokens[item.token_id];
        Object.keys(token).forEach((k) => {
          if (item[k] == undefined) {
            item[k] = token[k];
          }
        });
      });
      state.sales = sales.data;
      console.log("tokens", _tokens);
      console.log("sales", sales);
      //state.getList = array;
      // console.log(array,'array')
      nextTick(() => {
        $(".load-more .item:hidden").slice(0, 4).slideDown();
        // $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();
      });

      let res = await topseller();
      state.topsellerList = res.data.slice(0, 6);

      res = await popolar();
      res.data.forEach((item) => {
        let token = _tokens[item.token_id];
        Object.keys(token).forEach((k) => {
          if (item[k] == undefined) {
            item[k] = token[k];
          }
        });
      });
      state.popolarList = res.data.slice(0, 4);

      /* --------------------afant--------------------- */

      res = await getPopularCollections()
      state.PopularCollectionsList = res.data
      console.log(state.PopularCollectionsList, '--------------------------------------------------------')

    };
    const getoneCate = (item) => {
      state.cateList.map((i) => {
        if (i.name == item.name) {
          i.color = true;
        } else {
          i.color = false;
        }
      });

      router.push({ name: "explore", query: { class: item.name } });

      //console.log(item);
      // getSearchCateLists(item.name)
    };
    const checkoption = (checkname) => {
      console.log(checkname, "--checkname");
      if (state.cateList[state.cateindex].name == checkname) {
        state.cateList[state.cateindex].color = true;
        for (
          let i = 0;
          i < state.cateList[state.cateindex].subcategories.length;
          i++
        ) {
          state.cateList[state.cateindex].subcategories[i].color = false;
        }
      } else {
        state.cateList[state.cateindex].color = false;
        state.cateList[state.cateindex].color1 = true;
        for (
          let i = 0;
          i < state.cateList[state.cateindex].subcategories.length;
          i++
        ) {
          if (
            state.cateList[state.cateindex].subcategories[i].name == checkname
          ) {
            state.cateList[state.cateindex].subcategories[i].color = true;
          }
        }
        console.log(state.cateList[state.cateindex]);
      }

      router.push({
        name: "explore",
        query: { class: checkname, indexs: state.cateindex },
      });
    };
    const close = () => {
      console.log("out");
      for (let i = 0; i < state.cateList.length; i++) {
        state.cateList[i].color = false;
        state.cateList[i].color1 = false;
      }
      state.cateindex = "";
    };

    const mouserhovers = (index) => {
      state.cateList[index].color = true;
      for (var i = 0; i < state.cateList.length; i++) {
        if (i != index) {
          state.cateList[i].color = false;
          state.cateList[i].color1 = false;
        }
      }

      state.cateindex = index;
      //console.log(state.cateList[index].subcategories);
      // console.log(state.cateindex, "hover", state.cateindex);
    };
    // 点击显示分类数据
    const getSearchCateLists = (name) => {
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
        state.sales = res.data;
        nextTick(() => {
          $(".load-more .item:hidden").slice(0, 4).slideDown();
          $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();
        });
      });
    };

    const jump = (item, otherPeople) => {
      if (otherPeople == "otherPeople") {
        router.push({
          name: "otherNft",
          query: {
            sales_id: item.salesid,
            seller: item.seller,
            token_id: item.token_id,
          },
        });
        localStorage.setItem("seller", item.seller);
      } else {
        console.log("item.price", item.price);
        router.push({
          name: item.seller == store.state.ConnectWalletID ? "Sell" : "Buy",
          query: {
            sales_id: item.salesid,
            token_id: item.token_id,
            price: item.price,
            seller: item.seller,
            contract_addr: item.contract_addr,
            category1: item.category,
            category2: item.category2,
          },
        });
      }
    };
    const jumpothers = (res) => {
        console.log(res)
        router.push({name: 'othersCollection', params: { addr: res.contract_addr}})
    }
    const more = () => {
      nextTick(() => {
        $(".load-more .item:hidden").slice(0, 4).slideDown();
        $(".blog-area.load-more .item:hidden").slice(0, 6).slideDown();
        if ($(".load-more .item:hidden").length == 0) {
          $("#load-btn").fadeOut("slow");
        }
      });
    };

    const Create = () => {
      router.push({ name: store.state.ConnectWalletID ? "Create" : "connect" });
    };
    const pushExplore = () => {
      router.push('/explore');
    };

    // 查询出售列表
    onMounted(() => {
      fetchData();
      getCatefunc();
    });
    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });
    //进入详情
    return {
      ...toRefs(state),
      ConnectWalletID,
      jump,
      jumpothers,
      Create,
      more,
      getoneCate,
      mouserhovers,
      close,
      checkoption,
      getSearchCateLists,
      pushExplore
    };
  },
});
</script>
<style lang='scss' scoped>
.headsfont {
  position: absolute;
  z-index: 99;
  top: 20%;
  left: 19.5%;
}
.ddd {
  // background:url(require('../assets/img/h5/a3.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.headers {
  // height: 846px;
  padding: 0px !important;
}
::v-deep {
  .el-carousel__container {
    width: 100%;
    height: 475px;
  }
}
.block {
  width: 100%;
  height: 475px !important;
  margin: 0 auto;
}

.button-group {
  margin-top: 0 !important;
  display: inline-block;
  margin-right: 48px;
}
.popular-collections-area {
  padding-bottom: 0;
  padding-top: 0;
}
.explore-area {
  padding-bottom: 0;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}
.imgs {
  width: 100%;
  // height: 100%;
}
.dddq {
  font-size: 2.25rem;
  // background-image: linear-gradient(150deg, #f8f9fa 0%, #e8e7eb 78%)!important;
}
/* @media screen and (min-width: 414px){
  .block{
    display: none;
  }
} */

/* 
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
.cate-pc {
  margin-top: 1rem;
  background: #1d1b26;
  position: relative;
}
.btn-homephone {
  padding: 0.4em 1.2em !important;
}
@media (min-width: 320px) {
  .imgs {
    width: 100%;
    height: 100%;
  }
  .block {
    // height: 237px !important;
  }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }
  .dddq {
    font-size: 1.2rem !important;
  }
  // .row1 {
  //   margin-top: 0.76rem;
  // }
  .row1,
  .row1 h1 {
    font-size: 1.2rem !important;
  }
  .headsfont {
    left: 4%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.2rem 0.7rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }

  .dddq {
    font-size: 0.8rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }
  .dddw {
    margin: 0.2rem !important;
    margin-left: 0 !important;
    font-size: 0.6rem !important;
  }
  .btn-bordered-white {
    font-size: 0.8rem;
  }
}
@media (min-width: 360px) {
  .imgs {
    width: 100%;
    height: 100%;
  }
  // .block {
  //   height: 300px !important;
  // }
  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }

  .headsfont {
    left: 4%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.18rem 0.45rem !important;
  }

  .dddq {
    font-size: 0.8rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }
  .dddw {
    margin: 0.2rem !important;
    margin-left: 0 !important;
  }
}
@media (min-width: 375px) {
  .imgs {
    width: 100%;
    height: 100%;
  }
  .block {
    // height: 237px !important;
  }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }

  .row1,
  .row1 h1 {
    font-size: 1.2rem !important;
  }
  .headsfont {
    left: 4%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.2rem 0.5rem !important;
    font-size: 0.5rem !important;
  }

  .dddq {
    font-size: 0.8rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }
  .dddw {
    margin: 0.5rem !important;
    margin-left: 0 !important;
  }
}
@media (min-width: 411px) {
  .imgs {
    width: 100%;
    height: 100%;
  }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }
  .dddq {
    // margin-top: 0.1rem;
    font-size: 1.2rem;
  }
  .dddw {
    margin: 0.5rem !important;
    margin-left: 0 !important;
    font-size: 1.2rem !important;
  }
  .block_create {
    bottom: 29% !important;
  }
  .row1,
  .row1 h1 {
    font-size: 1.2rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.1rem !important;
  }
  .headsfont {
    left: 3%;
  }
  .btn-bordered-white {
    padding: 0.3rem 0.9rem !important;
  }

  .dddq {
    font-size: 0.8rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }
  .dddw {
    margin: 0.2rem !important;
    margin-left: 0 !important;
  }
}
@media (min-width: 414px) {
  .imgs {
    width: 100%;
    height: 100%;
  }
  // .block {
  //   height: 300px !important;
  // }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }
  .dddq {
    // margin-top: 0.9rem;
    font-size: 1.2rem;
  }
  .dddw {
    margin: 0.5rem !important;
    margin-left: 0 !important;
    font-size: 0.9rem !important;
  }
  .block_create {
    bottom: 29% !important;
  }
  .row1,
  .row1 h1 {
    font-size: 1.2rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.9rem !important;
  }
  .headsfont {
    left: 3%;
  }
  .btn-bordered-white {
    padding: 0.3rem 0.9rem !important;
  }

  .dddq {
    font-size: 0.8rem !important;
  }
  .row1 .mt-4 {
    margin-top: 0.2rem !important;
  }
  .dddw {
    margin: 0.2rem !important;
    margin-left: 0 !important;
  }
}
// @media (max-width: 413px) {
//   .dddq {
//     margin-top: 0.9rem;
//   }
//   .dddw {
//     margin: 0.5rem !important; margin-left: 0!important;
//   }
//   .block_create {
//     bottom: 29% !important;
//   }
//   .row,
//   .row h1 {
//     font-size: 0.9rem !important;
//   }
//   .row .mt-4 {
//     margin-top: 0.9rem !important;
//   }
//   .headsfont {
//     left: 3%;
//   }
//   .btn-bordered-white {
//     padding: 0.3rem 0.9rem !important;
//   }
// }
::v-deep {
  .el-carousel__arrow--left,
  .el-carousel__arrow--right {
    z-index: 999;
  }
  @media (max-width: 640px) {
    .el-carousel__container {
      width: 100%;
      height: 237px;
    }
  }
}
@media (min-width: 640px) {
  .imgs {
    width: 100%;
    height: auto;
  }
  .block {
    // height: 237px !important;
  }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }

  .dddq {
    font-size: 1.2rem;
  }
  .row1,
  .row1 h1 {
    font-size: 0.9rem !important;
  }
  .headsfont {
    left: 19.5%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.3rem 0.9rem !important;
  }
  .row1 .mt-4 {
    margin-top: 1.5rem !important;
  }
  .dddw {
    margin: 0.5rem !important;
    margin-left: 0 !important;
  }
}
@media (min-width: 720px) {
  .block {
    // height: 300px !important;
  }

  .phonebanners {
    display: block;
  }
  .pcbanners {
    display: none;
  }
  .cate-pc {
    display: none;
  }
  .cate-phone {
    display: block;
  }
  .dddq {
    font-size: 1.5rem;
  }
  .row1,
  .row1 h1 {
    font-size: 2.9rem !important;
  }
  .headsfont {
    left: 2.5%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.3rem 0.9rem !important;
  }
  .row1 .mt-4 {
    margin-top: 1.5rem !important;
  }
  .dddw {
    margin: 0.5rem !important ;
    margin-left: 0 !important;
  }
}
@media (min-width: 750px) {
}
@media (min-width: 768px) {
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .dddq {
    font-size: 1.5rem !important;
  }

  .row1 .mt-4 {
    margin-top: 0.8rem !important;
    font-size: 1.5rem !important;
  }
}

@media (min-width: 800px) {
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .dddq {
    font-size: 1.6rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.4rem !important;
    margin-top: 1.9rem !important;
  }
}
@media (min-width: 1024px) {
  .imgs {
    width: 100%;
    height: auto !important;
  }
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }

  .dddq {
    font-size: 1.6rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.4rem !important;
    margin-top: 1.9rem !important;
  }
  .row1,
  .row1 h1 {
    font-size: 2.9rem !important;
  }
  .headsfont {
    left: 9.5%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    padding: 0.3rem 0.9rem !important;
  }
  .row1 .mt-4 {
    margin-top: 2.5rem !important;
  }
  .dddw {
    margin: 2.5rem !important;
    margin-left: 0 !important;
  }
}
@media (min-width: 1100px) {
  .dddq {
    font-size: 1.6rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.4rem !important;
    margin-top: 1.9rem !important;
  }
}
@media (min-width: 1280px) {
  .femcate {
    margin-top: 8.6rem;
  }
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .headsfont {
    left: 4%;
  }
  .dddq {
    font-size: 1.6rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.4rem !important;
    margin-top: 1.9rem !important;
  }
}
@media (min-width: 1366px) {
  .femcate {
    margin-top: 4rem;
  }
  .block {
    height: 450px !important;
  }

  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .headsfont {
    left: 7%;
  }
  .dddq {
    font-size: 1.4rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.2rem !important;
    margin-top: 1.9rem !important;
  }
}
@media (min-width: 1440px) {
  .femcate {
    margin-top: 4.7rem;
  }
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .headsfont {
    left: 10%;
  }
  .dddq {
    font-size: 1.6rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.4rem !important;
    margin-top: 1.9rem !important;
  }
}

@media (min-width: 1660px) {
  .femcate {
    margin-top: 4.7rem;
  }
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .headsfont {
    left: 19.3%;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .dddq {
    font-size: 1.8rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.6rem !important;
    margin-top: 1.9rem !important;
  }
}
@media (min-width: 1920px) {
  .block {
    // height: 643px !important;
  }
  .femcate {
    margin-top: 4.7rem;
  }
  .phonebanners {
    display: none;
  }
  .pcbanners {
    display: block;
  }
  .cate-pc {
    display: block;
  }
  .cate-phone {
    display: none;
  }
  .dddq {
    font-size: 2rem !important;
  }
  .row1,
  .row1 h1 {
    font-size: 2.9rem !important;
  }
  .headsfont {
    left: 19.5%;
  }
  .block_create {
    bottom: 29% !important;
  }
  .btn-bordered-white {
    // padding: .1rem 2rem !important;
  }
  .row1 .mt-4 {
    font-size: 2.8rem !important;
    margin-top: 1.9rem !important;
  }
  .dddw {
    margin: 2rem !important;
    margin-left: 0 !important;
  }
}
.dddw {
  color: #646FCC;
}

.cattes {
  padding: 1rem;
  margin: 0 1rem;
}
.fontred {
  color: #ffffff;
  background: linear-gradient(244deg, #5100ec 0%, #d31fff 100%);
}
.fontwhite {
  color: #c8c5cb;
}
.cattes-phones {
  border-radius: 28px;
  border: 2px solid #ffffff;
  padding: 0.1rem 0.1rem;
  margin-bottom: 0.8rem;
  /* margin-right: 1rem; */
  width: 29%;
  text-align: center;
}
// .cate-phone ,.cate-pc{display: flex;}
.ddd {
  width: 100%;
  height: 100%;
  background-size: 100% 100% !important;
}
// ----------------------------------------------------------
.btnExplore, .btnCreate {
  background: #6474D0;
  border-color: #6474D0;
  // border-radius: 8px !important;
  color: #fff !important;
  width: 190px;
  height: 40px;
  line-height: 40px;
  padding: 0 !important;
}
.btnCreate {
  background: #FB466D;
  border-color: #FB466D;
}
.right_option {
  display: flex;
  flex-wrap: wrap;
  section {
    padding: 0;
    flex: 30%;
    background: #fff;
    border-radius: 10px;
    margin: 0 10px 10px 0;
    cursor: pointer;
    div {
      height: 80%;
      text-align: center;
      img {
        margin-top: 15px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
    }
    p {
      height: 20%;
      margin: 0 !important;
      text-align: center;
      color: #040167;
    }
  }
}
@media (max-width: 750px) {
  .btnExplore, .btnCreate {
    width: 130px;
  }
  .right_option {
    display: none;
  }
}
</style>
<style lang="scss" scoped>
.Prompt {
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    padding: 0;
    height: 125px;
    &>section {
        position: relative;
        padding: 0;
        padding-left: 38px;
        img {
            width: 22px;
            height: 22px;
            position: absolute;
            top: 0;
            left: 0;
        }
        p {
            margin: 0 !important;
        }
        p:nth-child(2) {
            margin-bottom: 18px !important;
            font-family: 'Jost', sans-serif;
            font-size: 16px !important;
            font-weight: 700 !important;
            color: #000000 !important;
        }
        p:last-child {
            font-family: Ubuntu;
            font-size: 12px !important;
            color: #000000 !important;
        }
    }
}
.checkitout {
    max-width: 1140px;
    margin: 0 auto;
    height: 282px;
    padding: 0 ;
    margin-top: 30px;
    margin-bottom: 40px;
    img {
        width: 100%;
        height: 100%;
    }
}
.intro-content {
    img {
        width: 31px;
        height: 21px;
        margin-right: 7px;
    }
    a {
        font-size: 20px;
        color: #000;
        vertical-align: middle;
        font-weight: 600;
    }
}
.Load_More {
    margin-top: 50px;
    a {
        color: #6474D0;
        font-size: 16px;
    }
}
.creat_item_father {
    display: block;
    // margin-bottom: 135px;
    height: 300px;
    .creat_item {
        float: left;
        // border: 1px solid #000;
        width: 270px !important;
        box-sizing: border-box !important;
        height: 300px;
        margin-right: 20px;
        background: #fff;
        padding: 0 15px !important;
        cursor: pointer;
        .single-work {
            img {
                margin-top: 24px;
                width: 55px;
                height: 55px;
            }
            h4 {
                font-size: 16px;
                font-weight: 600px;
            }
            p {
                font-size: 14px !important;
                color: #1D1D1D;
            }
        }
    }
    .creat_item:last-child {
        margin-right: 0;
    }
}
.work-area {
    padding-top: 0 !important;
}
</style>