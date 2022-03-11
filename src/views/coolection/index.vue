<template>
  <div>
    <section>
      <div class="mains">
        <div class="cates">
          <div class="cateindex">dddds</div>
          <div class="cateindex">dddds</div>
          <div class="cateindex">dddds</div>
        </div>
        <div class="bodys">
          <div class="b-head">
            <div class="headdimg"></div>
          </div>
          <div class="imgsarea">
            <div class="imgcont">
              <div>Good Art</div>
              <div>
                On figure art its crowd picture succeed especially, and figure
                describes also have other different characteristics.
              </div>
              <div>
                You’ll have the option to publish your collection once it
                contains at least one NFT.
              </div>
              <div>Add NFT to your collection</div>
            </div>
            <div class="imglist">
              <div class="ijes">
                <div class="items">
                  <div class="sssq">
                    <img src="../../assets/images/avatar1.png" alt="" />
                  </div>
                  <div class="itemssss">
                    <div class="name">Name</div>
                    <div class="disp">dsadasdsadas</div>
                    <div class="btns">
                      <i class="icon-handbag mr-2"></i>
                      Sell
                    </div>
                  </div>
                </div>
              </div>

              <div class="ijes">
                <div class="items">
                  <div class="sssq">
                    <img src="../../assets/images/avatar1.png" alt="" />
                  </div>
                  <div class="itemssss">
                    <div class="name">Name</div>
                    <div class="disp">dsadasdsadas</div>
                    <div class="btns">
                      <i class="icon-handbag mr-2"></i>
                      Sell
                    </div>
                  </div>
                </div>
              </div>

              <div class="ijes">
                <div class="items">
                  <div class="sssq">
                    <img src="../../assets/images/avatar1.png" alt="" />
                  </div>
                  <div class="itemssss">
                    <div class="name">Name</div>
                    <div class="disp">dsadasdsadas</div>
                    <div class="btns">
                      <i class="icon-handbag mr-2"></i>
                      Sell
                    </div>
                  </div>
                </div>
              </div>

              <div class="ijes">
                <div class="items">
                  <div class="sssq">
                    <img src="../../assets/images/avatar1.png" alt="" />
                  </div>
                  <div class="itemssss">
                    <div class="name">Name</div>
                    <div class="disp">dsadasdsadas</div>
                    <div class="btns">
                      <i class="icon-handbag mr-2"></i>
                      Sell
                    </div>
                  </div>
                </div>
              </div>

              <div class="ijes">
                <div class="items">
                  <div class="sssq">
                    <img src="../../assets/images/avatar1.png" alt="" />
                  </div>
                  <div class="itemssss">
                    <div class="name">Name</div>
                    <div class="disp">dsadasdsadas</div>
                    <div class="btns">
                      <i class="icon-handbag mr-2"></i>
                      Sell
                    </div>
                  </div>
                </div>
              </div>
              <div class="ijes">
                <div class="items"></div>
              </div>
            </div>
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
    const ruleForm = reactive({});
    return {
      ruleForm,
    };
  },
});
</script>

<style lang="scss" scoped>
.mains {
  max-width: 1200px;
  margin: 0 auto;
  .cates {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    .cateindex {
      font-size: 1rem;
      background-image: linear-gradient(53deg, #5100ec 0%, #d31fff 100%);
      border-radius: 22px;
      margin-right: 0.8rem;
      padding: 0.2rem 0.5rem;
      color: #ffffff;
    }
    margin-bottom: 1.9rem;
  }
  .bodys {
    .b-head {
      position: relative;
      width: 100%;
      height: 13rem;
      background: url("../../assets/images/oyal-Heath.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      .headdimg {
        position: absolute;
        bottom: -4rem;
        left: 50%;
        margin-left: -4rem;
        width: 8rem;
        height: 8rem;
        border-radius: 10px;
        background: url("../../assets/images/aaa21.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    }
    .imgsarea {
      padding: 1rem;
      background: #16151a;
      .imgcont div:first-child {
        padding-top: 5rem;
        font-size: 1.5rem;
        color: #ffffff !important;
      }
      .imgcont div:nth-child(2) {
        margin-bottom: 2rem;
      }
      .imgcont {
        margin: 0 auto;
        div {
          color: #cfc9c9;
          font-size: 1rem;
          text-align: center;
        }
      }
      .imglist {
        display: flex;
        flex-flow: wrap;
        margin-top: 2rem;
        .items {
          width: 100%;
        //   height: 13.75rem;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 1px 7px 9px 2px #000;
          .sssq {
            width: 100%;
            max-height: 20.375rem;
            overflow: hidden;
            img {
              width: 100%;
              height: auto;
            }
          }

          .itemssss {
            width: 95%;
            background: #16151a;
            margin: 0 auto;
            padding: 1rem 0.5rem;
            .name {
              font-size: 0.9;
              font-family: Arial;
              font-weight: 900;
              line-height: 1rem;
              color: #ffffff;
              margin-bottom: 0.9rem;
            }
            .disp {
              font-size: 0.4rem;
              font-family: Arial;
              font-weight: 400;
              line-height: 0.3rem;
              color: #ffffff;
              opacity: 1;
              margin-bottom: 0.9rem;
            }
            .btns {
              color: #d31fff;
              border: 1px solid rgba(211, 31, 255, 1);
              border-radius: 20px;
              display: inline-block;
              font-size: 0.5rem;
              font-weight: 400;
              padding: 0.2rem 1rem;
            }
          }
        }
      }
    }
  }
  .ijes{
      margin-bottom: 2rem;
  }
}
@media (min-width: 320px) {
  .ijes {
    padding: 0rem 1rem 0rem 1rem;
    flex: 0 0 100%;
    max-width: 100%;
  }
  .sssq{
      height: auto;;
  }
}

@media (min-width: 992px) {
  .ijes {
    padding: 0rem 1rem 0rem 1rem;
    flex: 0 0 20%;
    max-width: 25%;
  }
    .sssq{
      height: 10rem;;
  }
}
</style>