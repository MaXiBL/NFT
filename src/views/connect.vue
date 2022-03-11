<template>
  <!-- ***** Breadcrumb Area Start ***** -->
  <!-- <section class="breadcrumb-area overlay-dark d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-12"> -->
          <!-- Breamcrumb Content -->
          <!-- <div class="breadcrumb-content text-center">
            <h2 class="m-0">Wallet Connect</h2> -->
            <!-- <ol class="breadcrumb d-flex justify-content-center">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li> -->
              <!-- <li class="breadcrumb-item"><a href="#">Pages</a></li> -->
              <!-- <li class="breadcrumb-item active">Wallet Connect</li>
            </ol> -->
          <!-- </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- ***** Breadcrumb Area End ***** -->

  <!-- ***** Wallet Connect Area Start ***** -->
  <section class="wallet-connect-area">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-8 col-lg-7">
          <!-- Intro -->
          <div class="intro text-center">
            <!-- <span>Wallet Connect</span> -->
            <h3 class="mt-3 mb-0">Wallet Connect</h3>
            <p>
              Connect with one of our available wallet info providers or create a new one.
            </p>
          </div>
        </div>
      </div>
      <div class="row justify-content-center items">
        <div class="col-12 col-md-6 col-lg-4 item">
          <!-- Single Wallet -->
          <div class="card single-wallet" @click="connect('MetaMask')">
            <a class="d-block text-center">
              <img
                class="avatar-lg"
                src="../assets/img/content/metamask.png"
                alt=""
              />
              <h4 class="mb-0">MetaMask</h4>
              <p>
                A browser extension 
              
               with great<br> flexibility. The web's most<br>
                popular wallet</p>
            </a>
          </div>
        </div>

        <div class="col-12 col-md-6 col-lg-4 item">
          <!-- Single Wallet -->
          <div class="card single-wallet" @click="connect('walletconnect')">
            <a class="d-block text-center">
              <img
                class="avatar-lg"
                src="../assets/img/content/walletconnect.png"
                alt=""
              />
              <h4 class="mb-0">WalletConnect</h4>
              <p>
                Pair with Trust, Argent, MetaMask &amp; more. Works from any
                browser, without an extension
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  defineComponent
} from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { walletConnect } from "@/utils/connectWallet";
import { webConnect } from "@/utils/connectWallet";
export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const connect = async (name) => {
      if (name == "MetaMask") {
        if (window.ethereum) {
          // 没有链接说连接上了
          const web3 = webConnect;
          var a = await window.ethereum.enable();
          console.log("我的链接", a);
          var b = await window.ethereum.isConnected();
          console.log("检查", b);
          web3.eth.getAccounts((err, accs) => {
            var address = accs[0].toString();
            store.dispatch("connectWallet", { address, name });
          });
          ElMessage({
            message: "connect Success",
            type: "success",
          });
          setTimeout(function () {
            router.push({ path: "/" });
          }, 1200);
          return;
        } else {
          ElMessage({
            message: "请下载MetaMask插件或连接其他钱包",
            type: "error",
          });
          return;
        }
      } else {
        walletConnect(name);
        ElMessage({
          message: "connect Success",
          type: "success",
        });
        setTimeout(function () {
          router.push({ path: "/" });
        }, 1200);
        return;
      }
    };
    return {
      connect,
    };
  },
});
</script>
<style>
.single-wallet {
  cursor: pointer;
}
.breadcrumb-area {
    background: none;
}
.text-center h3 {
    font-size: 50px;
    margin-bottom: 100px !important;
}
</style>
