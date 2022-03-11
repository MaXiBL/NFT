<template>
  <div class="create" v-loading.fullscreen.lock="fullscreenLoading">
    <section class="author-area">
      <div class="container">
        <div class="row justify-content-between">
          <div class="col-12 col-md-4">
            <v-userInfo />
          </div>
          <div class="col-12 col-md-7">
            <!-- Intro -->
            <div
              class="intro mt-5 mt-lg-0 mb-4 mb-lg-5"
              style="margin-bottom: 1.7rem !important"
            >
              <div class="intro-content">
                <!-- <span>Get Started</span> -->
                <h3 class="mt-3 mb-0">Create Item</h3>
              </div>
            </div>
            <div class="item-form card no-hover dddwqz">
              <el-form
                ref="formEle"
                :model="ruleForm"
                :rules="rules"
                label-width="120px"
                class="demo-ruleForm"
              >
                <el-form-item prop="fileUrl">
                  <el-upload
                    :class="ruleForm.hidd"
                    :action="baseUrl + '/api/upload'"
                    limit="1"
                    list-type="picture-card"
                    :before-upload="beforeUpload"
                    :on-success="handlePictureSuccess"
                    :on-remove="handleRemove"
                  >
                    <i class="el-icon-plus"></i>
                  </el-upload>
                </el-form-item>

                <el-form-item label="Name" prop="name" class="form-group">
                  <el-input
                    v-model="ruleForm.name"
                    placeholder="Your NFT name"
                  ></el-input>
                </el-form-item>
                <el-form-item label="Describe" prop="desc" class="form-group">
                  <!-- <el-input
                    v-model="ruleForm.desc"
                    type="textarea"
                    placeholder="Your description..."
                  ></el-input> -->
                  <div class="fuwenb">
                    <Tinymce v-model:value="ruleForm.desc" />
                  </div>
                </el-form-item>
                <el-form-item
                  label="Amount"
                  prop="amount"
                  class="form-group"
                  disabled
                >
                  <el-input
                    v-model="ruleForm.amount"
                    type="number"
                    placeholder=" the amount"
                    :disabled="true"
                  ></el-input>
                </el-form-item>

                <el-form-item
                  label="classify"
                  prop="cataDropdown_val"
                  class="form-group"
                >
                  <el-select class="select_margin_class" v-model="ruleForm.cataDropdown_val">
                    <el-option
                      v-for="(item, index) in ruleForm.cataDropdown"
                      @click="selectChanged(item, index)"
                      :key="index"
                      :label="item.display"
                      :value="item.display"
                    ></el-option>
                  </el-select>

                  <span style="display: inline-block; margin-left: 2rem;">
                    <el-form-item
                      label=""
                      prop="cataDropdown_val"
                      class="form-group"
                    >
                      <el-select v-model="ruleForm.cataDropdown_val2">
                        <el-option
                          v-for="(item, index) in ruleForm.cataDropdown2"
                          @click="selectChanged2(item)"
                          :key="index"
                          :label="item.display"
                          :value="item.display"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </span>
                </el-form-item>

                <el-form-item>
                  <div
                    class="el-form-item__content__wrap"
                    style="display: none"
                  >
                    <el-col :span="11">
                      <el-form-item prop="collect" class="form-group">
                        <el-input
                          v-model="ruleForm.collect"
                          placeholder="Classified collection"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                    <el-col class="line" :span="2"></el-col>

                    <el-col :span="11">
                      <el-form-item prop="collect" class="form-group">
                        <el-input
                          v-model="ruleForm.collect"
                          placeholder="classification"
                        ></el-input>
                      </el-form-item>
                    </el-col>
                  </div>
                </el-form-item>
                
                <el-form-item
                  label="Collection"
                  prop=""
                  class="form-group"
                >
                  <el-select class="Collectionclass" v-model="Collectionvalue" placeholder="not collection">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.name"
                    :value="item.contract_addr"
                    :disabled="item.disabled"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <div class="btn w-100 mt-3 mt-sm-4" @click="submitForm()">
                    Create
                    <!-- <i class="fa fa-spinner" aria-hidden="true"></i> -->
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { baseUrl } from "@/utils/config";
import { post, get } from "@/utils/request.js";
import { getNftContract } from "@/utils/contractHelpers";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import userInfo from "../../components/userInfo";
import Tinymce from "../../components/Tinymce";
import { selUserCollectionList } from "@/utils/api"

//表单
const useFormEffect = (formEle, createNtf, showTip) => {
  let ruleForm = ref({
    name: "",
    desc: "",
    amount: 1,
    singlePrice: "",
    royalties: "",
    collect: "",
    cataDropdown: {},
    cataDropdown2: {},
    cataDropdown_val: "",
    cataDropdown_val2: "",
    // fileUrl: ""
    fileUrl: "",
    hidd: "",
  });
  const rules = ref({
    name: [
      {
        required: true,
        message: "Please input NFT name",
        trigger: "blur",
      },
      // {
      //   min: 3,
      //   max: 5,
      //   message: "Length should be 3 to 5",
      //   trigger: "blur",
      // },
    ],
    desc: [
      {
        required: true,
        message: "Please input description",
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
    fileUrl: [
      {
        required: true,
        message: "Please add nft",
        trigger: "blur",
      },
    ],
    singlePrice: [
      {
        required: false,
        message: "Please input activity form",
        trigger: "blur",
      },
    ],
    royalties: [
      {
        required: false,
        message: "Please input activity form",
        trigger: "blur",
      },
    ],
    collect: [
      {
        required: false,
        message: "Please input activity form",
        trigger: "blur",
      },
    ],
    cataDropdown_val: [
      {
        required: true,
        message: "Please select",
        trigger: "blur",
      },
    ],
  });
  // 文件类型大小限制
  const beforeUpload = (file) => {
    // console.log(file)
    //file.type  image/jpeg  video/mp4
    console.log(file.type.split("/")[1]);
    const imgtype =
      "jpeg,bmp,jpg,png,tif,gif,pcx,tga,exif,fpx,svg,psd,cdr,pcd,dxf,ufo,eps,ai,raw,WMF,webp,avif,apng";
    // console.log(imgtype.indexOf(file.type.split('/')[1]))
    if (imgtype.indexOf(file.type.split("/")[1]) == -1) {
      showTip("The picture format is incorrect", "error");
      ruleForm.value.fileUrl = "";
      return false;
    }

    const isLt50M = file.size / 1024 / 1024 < 50;
    if (!isLt50M) {
      showTip("The upload resource size cannot exceed 50MB", "error");
      return false;
    }
  };
  // 资源上传成功
  const handlePictureSuccess = (response, file, fileList) => {
    if (response?.data?.length) {
      ruleForm.value.fileUrl = response.data[0];
    }
    console.log(ruleForm.value.fileUrl);
    if (ruleForm.value.fileUrl != "") {
      ruleForm.value.hidd = "hidd-hide";
    } else {
      ruleForm.value.hidd = "hidd-show";
    }
    console.log(ruleForm.value.hidd, "hidd");
  };
  // 删除资源
  const handleRemove = (file, fileList) => {
    ruleForm.value.fileUrl = "";
    ruleForm.value.hidd = "hidd-show";
  };
  const router = useRouter();
  const submitForm = () => {
    formEle.value.validate((valid) => {
      if (valid) {
        createNtf(ruleForm);
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  };
  const resetForm = () => {
    formEle.value.resetFields();
  };
  const selectChanged = (value, index) => {
    ruleForm.value.cataDropdown_val2 = "";
    ruleForm.value.cataDropdown2 =
      ruleForm.value.cataDropdown[index].subcategories;

    console.log(ruleForm.value.cataDropdown2, "//.//");
  };
  const selectChanged2 = (value) => {
    console.log(value, "2220");
    // ruleForm.value.cataDropdown_val2 = value;
    // this.$refs.selectAppType.blur();
    //console.log(this.$refs,'//.//')
  };
  return {
    ruleForm,
    rules,
    submitForm,
    resetForm,
    beforeUpload,
    handlePictureSuccess,
    handleRemove,
    selectChanged,
    selectChanged2,
  };
};

//创建nft
const useCreateEffect = (fullscreenLoading, showTip, Collectionvalue) => {
  const store = useStore();
  const router = useRouter();
  const createNtf = async (formData) => {
      console.log(Collectionvalue.value, "--------------------------------------")
    if (fullscreenLoading.value) {
      return;
    }
    fullscreenLoading.value = true;

    try {
      let contractType = "ERC1155";
      let config = await get("/media/config.json");
      let tokenContract = config.contracts[contractType].tokenContract;
      console.log("token address", tokenContract);
      let tokenInstance
      if (Collectionvalue.value) {
          tokenInstance = await getNftContract(Collectionvalue.value, "ERC721");
      } else {
          tokenInstance = await getNftContract(tokenContract, contractType);
      }
      let data = {
        name: formData.value.name,
        url: formData.value.fileUrl,
        description: formData.value.desc,
        amount: parseInt(formData.value.amount),
        category: formData.value.cataDropdown_val,
        category2: formData.value.cataDropdown_val2,
        extra: {},
        contract_addr: Collectionvalue.value ? Collectionvalue.value : tokenContract,
        contract_type: Collectionvalue.value ? "ERC721" : "ERC1155",
      };
      let result = await post("/api/newtoken", data);
      console.log("result", result.data);
      if (result.code == 0) {
        let id = result.data;

        try {
          let createRes
          if (Collectionvalue.value) { 
               createRes = await tokenInstance.methods
            .safeMint(
              store.state.ConnectWalletID,
              id,
              ""
            )
            .send({ from: store.state.ConnectWalletID });
          } else {
               createRes = await tokenInstance.methods
            .mint(
              store.state.ConnectWalletID,
              id,
              parseInt(formData.value.amount),
              "0x00"
            )
            .send({ from: store.state.ConnectWalletID });
          }

          if (createRes) {
            showTip("Created successfully");
            console.log("成功创建nft", id);
            console.log("成功创建nft", createRes);
            console.log("成功创建nft", createRes.transactionHash);
            setTimeout(() => {
              router.push({
                name: "myNft",
                params: {
                  id: id,
                  backtype: "creates",
                  hash: createRes.transactionHash,
                },
              });
            }, 500);
          }
        } catch (error) {
          showTip("Creation failed", "error");
          // console.log('nft创建失败:')
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
      showTip("Request error");
      // console.log("请求失败");
    }

    fullscreenLoading.value = false;
  };
  return { createNtf };
};

//展示隐藏弹出框
const useDialogEffect = () => {
  const fullscreenLoading = ref(false); //整页加载提示
  //信息提示
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
  return { fullscreenLoading, showTip };
};

export default {
  name: "Create",
  // eslint-disable-next-line
  components: {
    "v-userInfo": userInfo,
    Tinymce,
  },
  setup() {
    const store = useStore()
    const Collectionvalue = ref('')
    const options = ref([])
    const val = ref("Welcome to Your Vue.js App");
    const isText = ref(true);
    const formEle = ref(null);
    onMounted(async () => {
      // console.log('rr:')
      // if (typeof window.ethereum !== 'undefined') {
      //   console.log('MetaMask is installed!');
      // }
      var a = localStorage.getItem("allcates");
      ruleForm.value.cataDropdown = JSON.parse(a);
      // console.log(ruleForm.value.cataDropdown,'pppp')
        let res = await selUserCollectionList({
            addr: store.state.ConnectWalletID
        })
        options.value = res.data
        options.value.push({
            value: null,
            name: "not collection"
        })
    });

    const { fullscreenLoading, showTip } = useDialogEffect();

    const { createNtf } = useCreateEffect(fullscreenLoading, showTip, Collectionvalue);
    const {
      ruleForm,
      rules,
      submitForm,
      resetForm,
      beforeUpload,
      handlePictureSuccess,
      selectChanged,
      selectChanged2,
      handleRemove,
    } = useFormEffect(formEle, createNtf, showTip);

    return {
      val,
      isText,
      baseUrl,
      formEle,
      ruleForm,
      rules,
      submitForm,
      resetForm,
      beforeUpload,
      handlePictureSuccess,
      handleRemove,
      createNtf,
      fullscreenLoading,
      showTip,
      selectChanged,
      selectChanged2,
      Collectionvalue,
      options
    };
  },
};
</script>

<style lang='scss' scoped>
.el-form-item__content__wrap {
  display: flex;
}
.el-upload--picture-card {
  background-color: #aca4ce;
}
::v-deep {
  // el-upload-list__item-preview
  .el-upload-list--picture-card
    .el-upload-list__item-actions:hover
    .el-upload-list__item-preview {
    display: none !important;
    background: pink;
  }
  .el-upload--picture-card {
    background-color: rgba(221, 150, 150, 0);
  }
  .el-form-item__label {
    text-align: left;
    font-size: 1.2rem;
    padding-left: 10px;
    color: #646FCC;
  }
  .el-form-item__label:before {
    display: inline-block;
    vertical-align: middle;
    margin-top: 4px;
  }
  .hidd-show .el-upload--picture-card {
    display: inline-block !important;
  }
  .hidd-hide .el-upload--picture-card {
    display: none !important;
  }
}
.dddwqz {
  padding-right: 1rem !important;
  padding-top: 2rem !important;
}
.mt-sm-4 {
    background-image: linear-gradient(to right, #7045FF, #646FCC);
}
 .intro-content {
     h3 {
        background: linear-gradient(90deg, #1F94FA 0%, #815CF6 10%, #F64E88 30%) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
        font-size: 36px ;
        font-weight: 700;
     }
 }
</style>
