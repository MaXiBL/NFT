<template>
  <div class="user">
    <div class="card autor no-hover text-center">
      <div class="image-over ">
        <img
          class="card-img-top"
          src="../../assets/images/bg-avatar.jpeg"
          alt=""
        />
      
        <!-- </div> -->
      </div>
      <!-- Card Caption -->
      <div class="card-caption col-12 p-0" style="z-index:99; margin-top:3rem!important;">
          <div class="author">
          <div class="author-thumb1 avatar-lg ddcff" style="margin:0 auto;">
            <el-upload
              :disabled="otherUser == 'otherUser'"
              :action="baseUrl + '/api/upload'"
              :show-file-list="false"
              list-type="picture-card"
              :on-success="handlePictureSuccess"
            >
              <img
                v-if="userData.avatar"
                class="avatar-md rounded-circle headimgs"
                :src="userData.avatar"
                alt=""
              />

              <img
                v-else
                class="avatar-md rounded-circle headimgs"
                src="../../assets/images/avatar1.png"
                alt=""
              />
            </el-upload>
          </div>
        </div>
        <!-- Card Body -->
        <div class="card-body mt-4">
          <h5 class="mb-3 myNftName">
            <div class="rzxtt" v-if="userData.auth > 0">  
              <img src="../../assets/img/content/rzimg.png" alt="">
              <span>Certified</span>
            </div>
            <el-input
              :disabled="otherUser == 'otherUser'"
              @change="nicknameInput()"
              v-model="userData.nickname"
              placeholder="Input your name"
            />
          </h5>

          <p class="my-3 myNftBio">
            <el-input
              :disabled="otherUser == 'otherUser'"
              @change="nicknameInput()"
              v-model="userData.bio"
              placeholder="Input your discription"
            />
          </p>
          <div class="input-group form-control1">
            <div type="text" class="form-control2">
              {{ $encryption(userData.address) }}
            </div>
            <div class="input-group-append">
              <button
                v-clipboard:copy="userData.address"
                v-clipboard:success="userData.address"
              >
                <i class="icon-docs"></i>
              </button>
            </div>
          </div>
          <!-- Social Icons -->
          <div class="social-icons d-flex justify-content-center my-3">
            <a class="facebook">
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-facebook-f"></i>
            </a>
            <a class="twitter">
              <i class="fab fa-twitter"></i>
              <i class="fab fa-twitter"></i>
            </a>
            <a class="google-plus">
              <i class="fab fa-google-plus-g"></i>
              <i class="fab fa-google-plus-g"></i>
            </a>
            <a class="vine">
              <i class="fab fa-vine"></i>
              <i class="fab fa-vine"></i>
            </a>
          </div>
          <a class="btn btn-bordered-white-1 btn-smaller" href="#">Follow</a>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import { userinfoGet, userinfoUpdate } from "../../utils/api";
import { clipboardSuccess } from "../../utils/clipboard";
import { baseUrl } from "@/utils/config";
import { useStore } from "vuex";
import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
import { ChainId } from "@/utils/config";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  props: {
    otherUser: {
      type: String,
      default: "chart",
    },
  },
  setup(props) {
    const route = useRoute();

    const store = useStore();
    const state = reactive({
      clipboardSuccess: clipboardSuccess,
      userData: [],
    });

    const fetchUserinfo = async () => {
      if (props.otherUser == "otherUser") {
        console.log("otherssssssssssssssssssssssssssssssssssss")
        await userinfoGet({ addr: localStorage.getItem("seller") }).then(
          (res) => {
            state.userData = res.data;
          }
        );
      } else {
        if (store.state.ConnectWalletID) {
          await userinfoGet().then((res) => {
            state.userData = res.data;
          });
        }
      }
    };
    let getSign = async () => {
      // 拿签名
      const { ethers } = require("ethers");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      console.log("wallet address", await signer.getAddress());

      const domain = {
        name: "Update profile",
        version: "1",
        chainId: ChainId,
      };

      // The named list of all type definitions
      const types = {
        Msg: [{ name: "message", type: "string" }],
      };

      // The data to sign
      const value = {
        message:
          'You are going to update the profile, accept the terms of service by "sign" this message, this nerver cost any of your balance',
      };

      let signature = await signer._signTypedData(domain, types, value);
      console.log("signature", signature);

      let encoder = ethers.utils._TypedDataEncoder;
      let hash = encoder.hash(domain, types, value);
      store.dispatch("setHash", { signature, hash });
      sumbitData();
    };
    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });
    // 资源上传成功
    const nicknameInput = async () => {
      if (!localStorage.getItem("hash") && !localStorage.getItem("signature")) {
        getSign();
      } else {
        sumbitData();
      }
    };
    const sumbitData = async () => {
      var params = {
        nickname: state.userData.nickname,
        avatar: state.userData.avatar,
        bio: state.userData.bio,
      };
      await userinfoUpdate(params).then((res) => {
        console.log("我的结果", res);
      });
    };
    // 资源图片成功
    const handlePictureSuccess = (file) => {
      state.userData.avatar = file.data[0];
      nicknameInput();
    };

    onMounted(() => {
      fetchUserinfo();
    });

    return {
      ...toRefs(state),
      baseUrl,
      nicknameInput,
      ConnectWalletID,
      getSign,
      sumbitData,
      handlePictureSuccess,
    };
  },
});
</script>

<style lang="scss">
.form-control1 {
  height: 50px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  padding-left: 20px;
  border-radius: 6px;
  background-color: #191919;
  color: #6474D0 !important;

  border-radius: 100px;
  background-color: transparent;
  border: 2px solid #6474D0;
  // height: 40px;
  // padding: 1.5rem;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.input-group-append {
  cursor: pointer;
  i {
      color: #6474D0;
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
.user .el-upload--picture-card {
  width: 74px;
  height: 74px;
  z-index: 1111;
  line-height: 1;
  border-radius: 50%;
  overflow: hidden;
}
.user .el-input__inner,
.user .el-input {
  background-color: transparent;
  border: transparent;
  text-align: center;
  height: auto;
  line-height: 1;
}
.myNftName .el-input__inner {
  color: #040167 !important;
  font-size: 1.25rem;
}
.myNftBio .el-input__inner {
  font-size: 1rem;
}
.ddfe{padding: 2rem!important;}
.ddfe .card-img-top{
  border-radius: 10px!important;
}
.ddcff{
      margin-top: 3rem!important;
      // height: 0!important;
}
.social-icons {
    a {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        color: #6474D0 !important;
        background: #fff;
        border: 1px solid #6474D0;
    }
}
.btn-bordered-white-1 {
    border: 1px solid #6474D0 !important;
    background: none;
    color: #6474D0 !important;
}

</style>