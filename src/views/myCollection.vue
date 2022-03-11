<template>
<section class="box">
    <p>My collections</p>
    <section class="tag_section">
        <section :class="{active: index == activeindex}" @click="clickList(item.contract_addr, index)" v-for="(item, index) in collectionList" :key="index">{{ item.name }}</section>
    </section>
    <section class="cart_section">
        <section class="cart_1">
            <img :src="bannerImageUrl ? bannerImageUrl : defaultbanner" alt="">
            <section class="pic">
                <img :src="headPortraitUrl ? headPortraitUrl : defaultavatar" alt="">
            </section>
        </section>
        <section class="cart_2">
            <p>{{ collectionName }}</p>
            <p v-html="collectionIntroduction"></p>
        </section>
        <section class="cart_3">
            <button @click="jumpCreat">Add an NFT</button>
        </section>
        <section class="cart_4">
            <section v-for="(item, index) in showList" :key="index" class="card csrd_item">
                <section class="cart_item_head">
                    <img :src="item.uri" alt="">
                </section>
                <section class="cart_item_tex">
                    <span>{{ item.name }}</span>
                    <span>1/1</span>
                </section>
                <div class="seller d-flex align-items-center my-3 ppcc">
                      <span v-html="$encryptionEnd(item.description)"></span>
                      <!-- <a>
                        <h6 class="ml-2 mb-0">Richard</h6>
                      </a> -->
                </div>
                <section class="cart_item_foot">
                    <span class="bnbcolor">{{ item.price ? item.price + 'BNB' : '' }}</span>
                    <section @click="jump(item)">{{ item.price ? 'Cancel' : 'Sell' }}</section>
                </section>
            </section>
        </section>
        <el-pagination background layout="prev, pager, next" @current-change='changeSize' :page-count="totalNum"></el-pagination>
    </section>
</section>
<footoption />
<section class="foot_section"></section>
</template>
<script lang='TS'>
import { ref, toRefs, reactive, onMounted } from 'vue'
import { useRouter } from "vue-router"
import footoption from "@/components/footoptions/footoption.vue"
import { selCollectionInfo, selUserCollectionList } from "@/utils/api"
import { useStore } from "vuex"

import defaultavatar from '@/assets/afantImage/images/defaultavatar.png'
import defaultbanner from '@/assets/afantImage/images/defaultbanner.png'
export default {
    components: {
        footoption
    },
    setup() {
        const router = useRouter()
        const store = useStore()
        let state = reactive({
            collectionList: [],
            nftList: [],
            activeindex: 0,
            totalNum: 0,
            showList: [],
            bannerImageUrl: '',
            headPortraitUrl: '',
            collectionName: '',
            collectionIntroduction: '',
        })
        onMounted(async () => {
            let res = await selUserCollectionList({
                addr: store.state.ConnectWalletID
            })
            state.collectionList = res.data
            if (res.data[0]) {
                let info = await selCollectionInfo({
                    addr: res.data[0].contract_addr
                })
                state.bannerImageUrl = info.data.collections_info.banner
                state.headPortraitUrl = info.data.collections_info.cover
                state.collectionName = info.data.collections_info.name
                state.collectionIntroduction = info.data.collections_info.description
                state.nftList = info.data.tokens ? info.data.tokens : []

                state.nftList.map((item, index) => {
                    for (var i = 0; i < info.data.on_sales.length; i++) {
                        if (info.data.on_sales[i].token_id == item.tokenid) {
                            item.salesid = info.data.on_sales[i].salesid
                            item.price = info.data.on_sales[i].price
                            return item
                        }
                    }
                })

                state.showList = info.data.tokens.slice(0, 8)
                state.totalNum = info.data.tokens.length ? Math.floor(info.data.tokens.length/8) + 1 : 0
            }
        })
        // 查询nft列表
        const selList = async (res) => {
            let info = await selCollectionInfo({
                addr: res
            })
            state.bannerImageUrl = info.data.collections_info.banner
            state.headPortraitUrl = info.data.collections_info.cover
            state.collectionName = info.data.collections_info.name
            state.collectionIntroduction = info.data.collections_info.description
            if (info.data.tokens) {
                state.nftList = info.data.tokens
                state.nftList.map((item, index) => {
                    for (var i = 0; i < info.data.on_sales.length; i++) {
                        if (info.data.on_sales[i].token_id == item.tokenid) {
                            item.salesid = info.data.on_sales[i].salesid
                            item.price = info.data.on_sales[i].price
                            return item
                        }
                    }
                })

                state.showList = info.data.tokens.slice(0, 8)
                state.totalNum = info.data.tokens.length ? Math.floor(info.data.tokens.length/8) + 1 : 0
            } else {
                state.showList = []
            }
        }
        // 跳转页面
        const jumpCreat = () => {
            router.push({ path: "/create"});
        }
        // 跳转出售页面
        const jump = (items) => {
            router.push({
                name: "Sell",
                query: {
                sales_id: items.salesid,
                token_id:
                    items.token_id == undefined ? items.tokenid : items.token_id,
                category1: items.category,
                category2: items.category2,
                type: items.contract_type
                },
            })
        }
        // 点击集合
        const clickList = (res, index) => {
            state.activeindex = index
            selList(res)
        }
        // 变换页数
        const changeSize = (num) => {
            state.showList = state.nftList.slice(num*8 - 8, num*8)
        }
        return {
            ...toRefs(state),
            jumpCreat,
            jump,
            clickList,
            changeSize,
            defaultavatar,
            defaultbanner
        }
    }
}
</script>
<style lang='scss' scoped>
section {
    padding: 0;
}
.box {
    max-width: 1140px;
    margin: 0 auto;
    text-align: center;
    &>p {
        margin: 45px !important;
        font-size: 45px !important;
        font-weight: 700 !important;
        background: linear-gradient(131deg, #1998FA 0%, #775DFF 40%, #FC4D83 70%);
        -webkit-background-clip: text !important;
        color: transparent !important;
    }
    .tag_section {
        width: 100%;
        height: 43px;
        section {
            width: 125px;
            height: 43px;
            float: left;
            background: #D3D4D8;
            color: #fff;
            line-height: 43px;
            margin-right: 50px;
            margin-bottom: 20px;
            border-radius: 50px;
            font-size: 20px;
            cursor: pointer;
        }
        .active {
            background: linear-gradient(53deg, #7047FD 0%, #646ECD 100%);
        }
    }
    .cart_section {
        height: 1388px;
        background: red;
        margin-top: 75px;
        background: #fff;
        border-radius: 5px;
        margin-bottom: 45px;
    }
    .cart_1 {
        height: 250px;
        position: relative;
        .pic {
            width: 135px;
            height: 135px;
            border-radius: 20px;
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translateX(-50%);
            overflow: hidden;
            img {
                width: 100%;
                height: 100%;
            }
        }
        img {
            width: 100%;
            height: 100%;
        }
    }
    .cart_2 {
        margin-top: 80px;
        p {
            margin: 0 !important;
        }
        p:first-child {
            font-size: 24px !important;
            color: #040167;
            font-weight: 600 !important;
        }
        p:last-child {
            font-size: 14px !important;
            color: #707A83;
            margin-top: 10px !important;
        }
    }
    .cart_3 {
        margin-top: 50px;
        button {
            width: 183px;
            height: 60px;
            outline: none;
            background-image: linear-gradient(to right, #7045FF, #646fcc);
            color: #fff;
            font-size: 18px !important;
            border: none;
            border-radius: 10px;
        }
    }
    .cart_4 {
        height: auto;
        margin-top: 40px;
        // display: flex;
        // justify-content: space-between;
        // flex-wrap: wrap;
        height: 750px;
        margin-bottom: 20px;
        .csrd_item {
            width: 270px;
            height: 350px;
            float: left;
            margin-right: 20px;
            margin-bottom: 20px;
            .cart_item_head {
                height: 220px;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .cart_item_tex {
                margin-top: 25px;
                span:first-child {
                    float: left;
                    margin-left: 16px;
                    font-size: 16px !important;
                    color: #000;
                    font-weight: 500;
                }   
                span:last-child {
                    float: right;
                    margin-right: 30px;
                    font-size: 14px !important;
                    color: #040167;
                }
            }
            .cart_item_foot {
                section {
                    display: inline-block;
                    width: 120px;
                    height: 30px;
                    border: 1px solid #6474D0;
                    color: #6474D0;
                    border-radius: 50px;
                    line-height: 30px;
                    margin-left: 16px;
                    margin-bottom: 20px;
                    cursor: pointer;
                }
                section:hover {
                    background: #6474D0;
                    color: #fff;
                }
            }
        }
        .csrd_item:nth-child(4), .csrd_item:nth-child(8) {
            margin-right: 0;
        }
    }
}
.foot_section {
    height: 100px;
}
.active {
    background: #6474D0;
}
.seller {
    padding-left: 16px;
}
</style>