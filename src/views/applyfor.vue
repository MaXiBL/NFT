<template>
<section class="box">
    <div v-if="show_option_1" class="option_1">
        <section class="issue_1">Wellcome to Avanti!</section>
        <section class="issue_2">
                  Avanti is an easy-to-use yet powerful web editor for you to make full use of our credential data network and plug-and<br>-play modules. Read our guide to Avanti 
                </section>
        <section class="issue_3">
            <button @click="button_1">Request for Beta Access</button>
        </section>
        <section class="issue_4">Already have access? Connect Wallet</section>
    </div>
    <div v-if="show_option_2" class="option_2">
        <section class="issue_1">Project Avanti Application</section>
        <section class="issue_2">Use this form to apply for the beta access to Avanti Dashboard</section>
        <section class="issue_3">YOUR ETHEREUM ADDRESS*</section>
        <section class="issue_4">
            <input type="text" disabled placeholder="Enter your ERC721 or ERC1155 contract address" :value="store.state.ConnectWalletID">
        </section>
        <section class="issue_5">
            WHAT FTATURES WOULD YOU LIKE TO TRY *
        </section>
        <section class="issue_6">
            <el-checkbox-group v-model="checkList">
                <el-checkbox label="Build loyalty campaigns on-chain for my community"></el-checkbox><br>
                <el-checkbox label="Create events with Avanti OAT"></el-checkbox><br>
                <el-checkbox label="Contribute credentials to Avanti Data Network"></el-checkbox><br>
                <el-checkbox label="Use Avanti to build NFT Campaigns"></el-checkbox>
            </el-checkbox-group>
        </section>
        <section class="issue_7">
            <button @click="button_2">Next</button>
        </section>
    </div>
    <div v-if="show_option_3" class="option_3">
        <section class="issue_1">Project Avanti Application</section>
        <section class="issue_2">Use this form to apply for the beta access to Avanti</section>
        <section class="issue_3">ORGANIZATION NAME *</section>
        <section class="issue_4">
            <input v-model="input_text_1" type="text">
        </section>
        <section class="issue_5">WEBSITE *</section>
        <section class="issue_6">
            <input v-model="input_text_2" type="text">
        </section>
        <section class="issue_7">TWITTER *</section>
        <section class="issue_8">
            <input v-model="input_text_3" type="text">
        </section>
        <section class="issue_9">ABOUTB THE PROJECT *</section>
        <section class="issue_10">
            <input v-model="input_text_4" type="text">
        </section>
        <section class="issue_11">
            <button @click="button_3">Previous</button>
            <button @click="button_4">Submit</button>
        </section>
    </div>
</section>
<footoption />
<section class="foot_section"></section>
</template>
<script lang='TS'>
import { ref, toRefs, reactive } from 'vue'
import footoption from "@/components/footoptions/footoption.vue"
import { ElMessage } from "element-plus";
import { submitApplication } from "@/utils/api"
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
    components: {
        footoption
    },
    setup() {
        const store = useStore()
        const router = useRouter()
        const checkList = ref([])
        const tmpData = reactive({
            show_option_1: true,
            show_option_2: false,
            show_option_3: false,
            input_text_1: '',
            input_text_2: '',
            input_text_3: '',
            input_text_4: ''
        })
        const button_1 = () => {
            tmpData.show_option_1 = false
            tmpData.show_option_3 = false
            tmpData.show_option_2 = true
        }
        const button_2 = () => {
            if (checkList.value.length < 1) {
                ElMessage({
                message: "请选择内同",
                type: "warning",
                })
                return
            }
            tmpData.show_option_1 = false
            tmpData.show_option_3 = true
            tmpData.show_option_2 = false
        }
        const button_3 = () => {
            tmpData.show_option_1 = false
            tmpData.show_option_3 = false
            tmpData.show_option_2 = true
        }
        const button_4 = async () => {
            if (checkList.value.length < 1 || !tmpData.input_text_1 || !tmpData.input_text_2 || !tmpData.input_text_3 || !tmpData.input_text_4) {
                ElMessage({
                message: "缺少内容",
                type: "warning",
                })
                return
            }
            let res = await submitApplication({
                address: store.state.ConnectWalletID,
                feature: checkList.value.join(' | '),
                organization: tmpData.input_text_1,
                website: tmpData.input_text_2,
                twitter: tmpData.input_text_3,
                project_desc: tmpData.input_text_4,
            })
            if (res.code == 0) {
                ElMessage({
                message: "提交成功",
                type: "success",
                })
                router.push('/')
            }
        }
        return {
            checkList,
            ...toRefs(tmpData),
            button_1,
            button_2,
            button_3,
            button_4,
            store
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
    background: #fff;
    height: auto;
    margin: 37px auto 114px;
    padding-top: 46px;
    padding-left: 42px;
    border-radius: 10px;
    .option_1  {
        height: 446px;
        .issue_1 {
            color: #000;
            font-size: 50px;
            font-weight: 700;
            margin: 0 0 46px 0;
        }
        .issue_2 {
            margin-bottom: 33px;
            font-size: 14px;
            color: #707A83;
        }
        .issue_3 {
            margin-bottom: 26px;
            button {
                width: 230px;
                height: 60px;
                color: #fff;
                font-size: 18px;
                outline: none;
                border: none;
                background-image: linear-gradient(to right, #7045FF, #646FCC);
                border-radius: 10px;
            }
        }
        .issue_4 {
            font-size: 18px;
            color: #6669D4;
        }
    }
    .option_2 {
        height: 656px;
        .issue_1 {
            color: #000;
            font-size: 50px;
            font-weight: 700;
            margin: 0 0 30px 0;
        }
        .issue_2 {
            margin-bottom: 27px;
            font-size: 16px;
            color: #707A83;
        }
        .issue_3 {
            margin-bottom: 10px;
            font-size: 14px;
            color: #707A83;
            font-weight: 700;
        }
        .issue_4 {
            margin-bottom: 30px;
            input {
                outline: none;
                border: none;
                box-shadow: 0px 3px 6px rgba(126, 128, 255, 0.16);
                width: 765px;
            }
        }
        .issue_5 {
            margin-bottom: 30px;
            font-size: 14px;
            color: #707A83;
            font-weight: 700;
        }
        .issue_6 {
            margin-bottom: 40px;
        }
        .issue_7 {
            button {
                width: 183px;
                height: 60px;
                color: #fff;
                font-size: 18px;
                outline: none;
                border: none;
                background-image: linear-gradient(to right, #7045FF, #646FCC);
                border-radius: 10px;
            }
        }
    }
    .option_3 {
        height: 937px;
        .issue_1 {
            color: #000;
            font-size: 50px;
            font-weight: 700;
            margin: 0 0 30px 0;
        }
        .issue_2 {
            margin-bottom: 27px;
            font-size: 16px;
            color: #707A83;
        }
        .issue_3, .issue_5, .issue_7, .issue_9 {
            margin-bottom: 10px;
            font-size: 14px;
            color: #707A83;
            font-weight: 700;
        }
        .issue_4, .issue_6, .issue_8, .issue_10 {
            margin-bottom: 30px;
            input {
                outline: none;
                border: none;
                box-shadow: 0px 3px 6px rgba(126, 128, 255, 0.16);
                width: 765px;
            }
        }
        .issue_11 {
            button {
                width: 315px;
                height: 60px;
                margin-right: 135px;
                outline: none;
                border: none;
                color: #fff;
                border-radius: 10px;
            }
            button:first-child {
                background: #646FCC;
            }
            button:last-child {
                background-image: linear-gradient(to right, #7045FF, #646FCC);
            }
        }
    }
}
.foot_section {
    height: 100px;
}
</style>