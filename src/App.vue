
<template>
  <div id="nav">
    <v-header
      v-show="visible"
      :account="account"
      :contactIcon="contactIcon"
      @signOut="signOut"
      @ConnectWallet="dialogVisible = true"
      @seeWallet="dialogVisibleDetail = true"
    />
    <v-tray></v-tray>
    <div class="width">
      <transition mode="out-in">
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </div>
    <v-footer />

    <div id="search" class="modal fade p-0">
      <div class="modal-dialog dialog-animated">
        <div class="modal-content h-100">
          <div class="modal-header" data-dismiss="modal">
            Search <i class="far fa-times-circle icon-close"></i>
          </div>
          <div class="modal-body">
            <form class="row">
              <div class="col-12 align-self-center">
                <div class="row">
                  <div class="col-12 pb-3">
                    <h2 class="search-title mt-0 mb-3">
                      What are you looking for?
                    </h2>
                    <p>
                      Search items, collections, and accounts

                      <!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. -->
                    </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 input-group mt-4">
                    <input
                      v-model="searchStr"
                      type="text"
                      placeholder="Enter your keywords"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 input-group align-self-center">
                    <button
                      @click="clSearch"
                      class="btn btn-bordered-white mt-3"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!--====== Modal Search Area End ======-->

    <!--====== Modal Responsive Menu Area Start ======-->
    <div id="menu" class="modal fade p-0">
      <div class="modal-dialog dialog-animated">
        <div class="modal-content h-100">
          <div class="modal-header" data-dismiss="modal">
            Menu <i class="far fa-times-circle icon-close"></i>
          </div>
          <div class="menu modal-body">
            <div class="row w-100">
              <div class="items p-0 col-12 text-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--====== Modal Responsive Menu Area End ======-->

    <!--====== Scroll To Top Area Start ======-->
    <div id="scroll-to-top" class="scroll-to-top">
      <a href="#header" class="smooth-anchor">
        <i class="fas fa-arrow-up"></i>
      </a>
    </div>

    <!-- 详情弹窗 -->
    <div class="wenwen">
      <el-dialog
        v-model="dialogVisibleDetail"
        width="440px"
        :before-close="handleClose"
      >
        <div class="boxFlex">
          <!-- <div class="a">Account details</div> -->
          <div class="flex">
            <div
              v-clipboard:copy="ConnectWalletID"
              v-clipboard:success="clipboardSuccess"
              class="connect detailBox"
              v-waves
            >
              <div>
                <img
                  class="icon"
                  style="width: 22px; height: 22px; margin-right: 10px"
                  :src="require(`./assets/images/个人信息@2x.png`)"
                />
                <p>{{ $encryption(ConnectWalletID) }}</p>
                <!-- <img
                  class="icon"
                  style="width: 14px; height: 14px; margin-left: 10px"
                  :src="require(`./assets/images/ic_sec0_press@2x.png`)"
                /> -->
              </div>
            </div>
            <div
              @click="otherHandel(item.name)"
              class="connect detailBox"
              v-waves
              v-for="(item, index) in detailLists"
              :key="index"
            >
              <div>
                <img
                  class="icon"
                  style="width: 22px; height: 22px; margin-right: 10px"
                  :src="require(`./assets/images/${item.leftImg}.png`)"
                />
                <p>{{ item.name }}</p>
              </div>
              <img
                class="back"
                v-if="index < 3"
                src="./assets/images/箭头@2x.png"
              />
            </div>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>


 <script >
import header from "./components/header";
import footer from "./components/footer";
import tray from "./components/tray";
import { ElMessage } from "element-plus";
import { clipboardSuccess } from "@/utils/clipboard";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ChainId } from "@/utils/config";
import { webConnect } from "@/utils/connectWallet";

import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
export default defineComponent({
  components: {
    "v-header": header,
    "v-footer": footer,
    "v-tray": tray
  },
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      searchStr: "", // 搜索关键字
      visible: true,
      dialogVisible: false,
      dialogVisibleDetail: false,
      clipboardSuccess: clipboardSuccess,
      detailLists: [
        {
          name: "My NFT",
          leftImg: "我的 (3)@2x",
        },
        //         {
        //   name: "My collection",
        //   leftImg: "ic_collection",
        // },
        {
          name: "My Collection",
          leftImg: "组 147@2x",
        },
        {
          name: "Logout",
          leftImg: "退出@2x",
        },
      ],
    });
    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });
    const otherHandel = async (name) => {
      if (name == "Logout") {
        store.dispatch("Logout");
        ElMessage({
          message: "Logout Success",
          type: "success",
        });
        state.dialogVisibleDetail = false;
        return;
      } else {
        router.replace(name == "My NFT" ? "/myNft" : "/myCollection");
        state.dialogVisibleDetail = false;
        return;
      }
    };

    const checkWeb = async () => {
      const web3 = webConnect;
      if ((await web3.eth.getChainId()) !== ChainId) {
        ElMessage({
          message: "Please switch user network",
          type: "error",
        });
      }
      return false;
    };

    // 搜索
    let clSearch = () => {
      console.log(state.searchStr)
      if(state.searchStr != ''){
        router.push({ path: "/explore", query: { keyword: state.searchStr } });
        state.searchStr = "";
      }

    };


  

    onMounted(() => {
      checkWeb();
     
    });
    return {
      ...toRefs(state),
      ConnectWalletID,
      otherHandel,
      clSearch,
    };
  },
});
</script>

<style  lang="scss">

@media only screen and (min-width: 320px) and (max-width: 750px){
  .wenwen {
    .el-dialog {
      width: 90%!important;    
    }
  }
  .wenwen {
    .el-dialog {
      .flex{
        width: 89%!important;
        margin: 0 auto;
      }
    }
  }
}


@import "./assets/css/style.css";
.wenwen {
  .el-dialog {
    // background-image: linear-gradient(
    //   135deg,
    //   var(--primary-color) 10%,
    //   var(--secondary-color)
    // ) !important;

    border-radius: 10px;
  }
}
.walletconnect-modal__base__row__h3 {
  color: #25292e !important;
}
.walletconnect-modal__mobile__toggle_selector a {
  color: #25292e !important;
}

.walletconnect-modal__header {
  img {
    width: 50px;
  }
}
.boxFlex {
  // width: 340px;
  margin: auto;
  .flex {
    .connect {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 28px;
      line-height: 50px;
      cursor: pointer;
      width: 100%;
      height: 50px;
      background: #ffffff;
      opacity: 1;
      border-radius: 4px;
      padding: 0 20px;
      box-sizing: border-box;
      font-size: 20px;
      font-weight: 600;
      color: #09080d;
      div {
        display: flex;
        align-items: center;
      }
      .icon {
        width: 24px;
        height: 24px;
        margin-right: 20px;
      }
      .back {
        width: 17px;
        height: 15px;
      }
    }
  }
  // .a {
  //   font-size: 36px;
  //   font-weight: 600;
  //   color: #161516;
  //   opacity: 1;
  //   margin-bottom: 10px;
  // }
  // .b {
  //   margin-bottom: 50px;
  //   font-size: 18px;
  //   color: #9d9d9d;
  //   opacity: 1;
  //   line-height: 32px;
  // }
}
// .fade-enter-active,
// .fade-leave-active {
//   transition: opacity 0.5s ease;
// }

// .fade-enter-from,
// .fade-leave-to {
//   opacity: 0;
// }
.detailBox {
    background: #5061C6 !important;
    color: #fff !important;
}
.search-title {
    color: #6474D0 !important; 
}
</style>
