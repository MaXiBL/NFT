<template>
<section class="work-area">
    <div class="container">
        <div class="row">
        <div class="col-12">
            <!-- Intro -->
            <div class="intro mb-4">
            <div class="intro-content">
                <img src="@/assets/afantImage/icon/homeufo.png" alt="">
                <a>Create and sell your NFTs</a>
            </div>
            </div>
        </div>
        </div>
        <div class="row items creat_item_father">
        <div @click="jump('/connect')" class="card col-12 col-sm-6 col-lg-3 item creat_item">
            <!-- Single Work -->
            <div class="single-work">
            <img src="@/assets/afantImage/icon/food_icon1.png" alt="">
            <h4>Set up your wallet</h4>
            <p>
                Once you’re set up your wallet of choice, connect it to by clicking the NFT Marketplace in the top right corner.Learn about the wallets we support.
            </p>
            </div>
        </div>
        <div @click="jump('/createCollection')" class="card col-12 col-sm-6 col-lg-3 item creat_item">
            <!-- Single Work -->
            <div class="single-work">
            <img src="@/assets/afantImage/icon/food_icon2.png" alt="">
            <h4>Create your collection</h4>
            <p>
                Click create and set up yourcollection. Add social links,a description,profile&banner images,and set a secondary sales fee.
            </p>
            </div>
        </div>
        <div @click="jump('/create')" class="card col-12 col-sm-6 col-lg-3 item creat_item">
            <!-- Single Work -->
            <div class="single-work">
            <img src="@/assets/afantImage/icon/food_icon3.png" alt="">
            <h4>Add your NFTS </h4>
            <p>
                Upload your work(image,video,audio,
Or 3D art),add a title and description,
and customize your NFTs with properties,stats,and unlockable content.
            </p>
            </div>
        </div>
        <div @click="jump('/myNft')" class="card col-12 col-sm-6 col-lg-3 item creat_item">
            <!-- Single Work -->
            <div class="single-work">
            <img src="@/assets/afantImage/icon/food_icon4.png" alt="">
            <h4>List them for sale</h4>
            <p>
                Choose between auctions,fixed-price listings,and declining-price listings. You choose how you want to sell your NFTs! 
            </p>
            </div>
        </div>
        </div>
    </div>
</section>
</template>
<script lang='TS'>
import { ref, toRefs, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
    components: {

    },
    setup() {
        const router = useRouter()
        const jump = (res) => {
            router.push(res)
        }
        return {
            jump
        }
    }
}
</script>
<style lang='scss' scoped>
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