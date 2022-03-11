<template>
  <div>
    <section>
      <div class="mains">
        <div class="upload">
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
        </div>
        <div class="forms">
          <div class="ftit">Collection Name</div>
          <div class="fitem">
            <div class="cdiv">
              <el-input></el-input>
            </div>
            <span class="cspan">
              This name will appear on the collection page and will also be
              included in the contracts for the NFTs in this collection.
            </span>
          </div>
          <div class="ftit">Description</div>
          <div class="fitem">
            <div class="cdiv">
              <el-input type="textarea"></el-input>
            </div>
            <span class="cspan"
              >This description will be included on your collection page and can
              be changed. It will not be embedded into the NFTs in your
              collection.</span
            >
          </div>
             <div class="fitem">
            <div class="cdiv">
              <div class="fbtns">Create Collection</div>
            </div>
            <span class="cspan"> </span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const ruleForm = reactive({
      name: "",
      desc: "",
      amount: 1,
      singlePrice: "",
      royalties: "",
      collect: "",
      cataDropdown: {},
      cataDropdown_val: "",
      // fileUrl: ""
      fileUrl: "",
      hidd: "",
    });
    return {
      ruleForm,
    };
  },
});
</script>

<style lang="scss" scoped>
::v-deep {
  .upload {
    position: relative;
    .el-upload--picture-card {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      background: rgba(0, 0, 0, 0);
      position: absolute;
      left: 50%;
      top: 50%;
      margin-left: -2.5rem;
      margin-top: -2.5rem;
    }
  }
}
.mains {
  .upload {
    margin: 0 auto;
    background: #16151a;
    border: 1px solid #ffffff;
    width: 100%;
    height: 13rem;
    width: 100%;
    max-width: 1200px;
    min-width: 320px;
  }
}
.forms {
  margin: 0 auto 4rem;
  max-width: 1000px;
  width: 100%;
  .ftit {
    margin-top: 2.5rem;
    margin-bottom: 1.5rem;padding: 0 .8rem ;
  }
  .cdiv {
    width: 30rem;
    flex-grow: 1;padding: 1rem;
    .fbtns{
        width: 67%;text-align: center;
        color: #ffffff;margin: 0 auto;font-family: DIN;font-weight: 500;font-size: 1.125rem;
        padding: .7rem;
        border-radius: 2rem;
            background: linear-gradient(252deg, #5100EC 0%, #D31FFF 100%)
    }
  }
  .fitem {
    display: flex;
    align-items: self-start;
    flex-flow: wrap;
  }
  .cspan {
    width: 30rem;
    flex-grow: 1;padding: .8rem;
  }
}
::v-deep {
  .fitem .el-input__inner,
  .fitem .el-textarea__inner {
    width: 100%;
    background-color: var(--primary-bg-color) !important;
  }
  .fitem .el-textarea__inner{
      height: 10rem;
  }
}
</style>