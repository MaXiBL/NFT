<template>
<section class="box" v-loading.fullscreen.lock="fullscreenLoading">
    <div class="item1">
        <el-upload
        class="avatar-uploader"
        :action="baseUrl + '/api/upload'"
        :show-file-list="false"
        :on-success="handleAvatarSuccess">
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
        <div v-if="!imageUrl" class="jiahao">+</div>
        </el-upload>
        <span>Please upload the collection background image</span>
    </div>
    <div class="item4">
        <el-upload
        class="avatar-uploader_1"
        :action="baseUrl + '/api/upload'"
        :show-file-list="false"
        :on-success="handleAvatarSuccess1">
        <img v-if="imageUrl1" :src="imageUrl1" class="avatar_1" />
        <el-icon v-else class="avatar-uploader-icon"><plus /></el-icon>
        <div v-if="!imageUrl1" class="jiahao">+</div>
        </el-upload>
        <span>Please upload the collection head portrait</span>
    </div>
    <span>Name</span>
    <div class="item2">
        <input v-model="name" type="text">
    </div>
    <span>Description</span>
    <div class="item2">
        <Tinymce v-model:value="description" />
    </div>
    <div class="item3">
        <button @click="clickCreate">Create Collection</button>
    </div>
    <footoption />
</section>
</template>
<script lang='TS'>
import { ref, toRefs, reactive, onBeforeMount } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Plus } from '@element-plus/icons'
import { baseUrl } from "@/utils/config";
import Tinymce from "@/components/Tinymce";
import footoption from "@/components/footoptions/footoption.vue"
import { ElMessage } from 'element-plus'
import { createCollection, selSetPermissions } from '@/utils/api'
import { getNftContract } from "@/utils/contractHelpers";
import { get } from "@/utils/request.js";
export default {
    components: {
        Tinymce,
        footoption
    },
    setup() {
        let fullscreenLoading = ref(false)
        const router = useRouter()
        onBeforeMount(async () => {
            var res = await selSetPermissions()
            if (res.data.hasPendingRequest) {
                ElMessage({
                message: "正在处理申请",
                type: "warning",
                })
                router.push('/')
                return
            } else if (!res.data.canCreateCollection){
                router.push('/applyfor')
                return
            }
        })
        const store = useStore()
        let imageUrl = ref('')
        let imageUrl1 = ref('')
        let fromdata = reactive({
            banner: '',
            cover: '',
            name: '',
            description: ''
        })
        // 图片上传成功
        const handleAvatarSuccess = (res) => {
            fromdata.banner = res.data[0]
            imageUrl.value = baseUrl + res.data[0]
        }
        const handleAvatarSuccess1 = (res) => {
            fromdata.cover = res.data[0]
            imageUrl1.value = baseUrl + res.data[0]
        }
        // 点击长传
        const clickCreate = async () => {
            try {
                let { banner, name, description, cover } = fromdata
                if (!banner || !name || !description || !cover) {
                    ElMessage({
                        message: "You still have content not submitted!",
                        type: "error"
                    })
                    return
                }
                fullscreenLoading.value = true
                let config = await get("/media/config.json");
                let { owner, impl } = config.collections;
                let tokenInstance = await getNftContract({
                    owner,
                    impl,
                    name: fromdata.name
                }, "PROXY")
                console.log('tokenInstance', tokenInstance)
                let res = await createCollection({
                    banner, 
                    contract_addr: tokenInstance, 
                    name, 
                    description,
                    cover
                })
                console.log(res)
                ElMessage({
                    message: "Created successfully",
                    type: "success"
                })
                router.push('/')
            } catch(error) {
                    fullscreenLoading.value = false
                    ElMessage({
                        message: "Creation failed",
                        type: "error"
                    })
            }
        }

        return {
            handleAvatarSuccess,
            handleAvatarSuccess1,
            baseUrl,
            imageUrl,
            imageUrl1,
            ...toRefs(fromdata),
            clickCreate,
            fullscreenLoading
        }
    }
}
</script>
<style lang='scss' scoped>
.box {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    &> span {
        color: #646FCC;
        font-weight: 600;
    }
    .item1, .item4 {
        background: #fff;
        height: 235px;
        margin-top: 50px;
        text-align: center;
        // padding-top: 20px;
        margin-bottom: 95px;
        position: relative;
        span {
            color: #646FCC;
        }
        .smallImage {
            position: absolute;
            top: 80%;
            left: 20%;
        }
    }
    .item4 {
        padding-top: 20px;
    }
    .item2 {
        margin-bottom: 95px;
        input {
            outline: none;
            border: none;
            box-shadow: 0px 3px 6px #ccc;
            background: #fff;
        }
    }
    .item3 {
        text-align: center;
        button {
            width: 300px;
            height: 60px;
            margin-bottom: 90px;
            border-radius: 5px;
            color: #fff;
            background-image: linear-gradient(to right, #7045FF, #646FCC);
            border: none;
            outline: none;
        }
    }
}
.avatar-uploader {
    width: 100% !important;
    height: 100% !important;
    border: 1px dashed #ccc;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    .el-icon {
       padding-left: 1200px;
       padding-top: 235px;
    }
}
.avatar-uploader_1 {
    width: 150px !important;
    height: 150px !important;
    border: 1px dashed #ccc;
    margin: 0 auto;
    margin-bottom: 20px;
    position: relative;
    .el-icon {
       padding: 50px;
    }
}
.avatar {
    height: 235px;
    width: 1200px;
}
.avatar_1 {
    width: 150px;
    height: 150px;
}
.jiahao {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>