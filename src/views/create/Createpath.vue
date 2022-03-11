<template>
  <div>
    <section class="pc">
      <div class="mains">
        <div class="lefts">
          <div class="left-bg shous"></div>
          <div class="sac shous">
            <div class="maintit">Mint an NFTn</div>
            <div class="contxt">{{ content.leftc }}</div>
          </div>
        </div>
        <div class="rights">
          <div class="right-bg shous"></div>
          <div class="sac shous">
            <div class="maintit">Create a New Collection</div>
            <div class="contxt">{{ content.rightc }}</div>
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
    const content = reactive({
      leftc:
        "Mint an NFT on Binance Smart Chain into the Avanti Community Collection or into a Collection you've created. You can mint an NFT without putting it up for sale",
      rightc:
        "Collections are groups of NFT that are controlled  by the same contract.NFTs within a Collection can be different.You cannot change the Collection an NFT is minted in.",
    });
    return {
      content,
    };
  },
});
</script>

<style lang="scss" scoped>
.mains {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1100px; flex-wrap: wrap;
  .lefts,
  .rights {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;width: 491px;
  }
  .left-bg {
    margin: 0 auto;
  width: 22rem;
    height: 14.97rem;
    background-image: url("../../assets/images/create_collection.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .right-bg {
    margin: 0 auto;
   width: 22rem;
    height: 14.97rem;
    background-image: url("../../assets/images/mint_nft.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .sac {
    width: 71%;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    box-shadow: 2px 11px 21px 6px #1c1c1a;
    background: #16151A;
    border-radius: 0px 0px 20px 20px;
    .maintit {
      font-size: 1.4rem;
      font-family: DIN;
      font-weight: bold;
      line-height: 29px;
      color: #ffffff;
      opacity: 1;
    }
    .contxt {
      font-size: 1rem;
      font-family: DIN;
      font-weight: 400;
      line-height: 1.8rem;
    }
  }
}
.shous{
    cursor: pointer;
}
</style>