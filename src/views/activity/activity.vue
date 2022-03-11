<template>
  <div class="home">
    <div class="main">
      <section class="breadcrumb-area overlay-dark d-flex align-items-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Breamcrumb Content -->
              <div class="breadcrumb-content text-center">
                <h2 class="m-0">Activity</h2>
                <!-- <ol class="breadcrumb d-flex justify-content-center">
                  <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li class="breadcrumb-item active">Activity</li>
                </ol> -->
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ***** Activity Area Start ***** -->
      <section class="activity-area load-more">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Intro -->
              <div class="intro mb-4">
                <div class="intro-content">
                  <span>Creative</span>
                  <h3 class="mt-3 mb-0">Activity</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="row items">
            <div class="col-12 col-md-6 col-lg-8">
              <!-- Netstorm Tab -->
              <ul class="netstorm-tab nav nav-tabs" id="nav-tab">
                <li>
                  <a
                    class="active"
                    id="nav-home-tab"
                    data-toggle="pill"
                    href="#nav-home"
                  >
                    <h5 class="m-0">All</h5>
                  </a>
                </li>
              </ul>
              <!-- Tab Content -->
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home">
                  <ul class="list-unstyled">
                    <!-- <li class="single-tab-list d-flex align-items-center">
                      <a>
                        <img
                          class="avatar-lg"
                          src="../../assets/images/avatar1.png"
                          alt=""
                        />
                      </a>
                      <div class="activity-content ml-4">
                        <a>
                          <h5 class="mt-0 mb-2">Walking On Air</h5>
                        </a>
                        <p class="m-0">
                          Bid listed for <strong>14 ETH</strong> 4 hours ago
                          <br />by <a>@arham</a>
                        </p>
                      </div>
                    </li>

                    <li class="single-tab-list d-flex align-items-center">
                      <a>
                        <img
                          class="avatar-lg"
                          src="../../assets/images/avatar1.png"
                          alt=""
                        />
                      </a>
                      <div class="activity-content ml-4">
                        <a>
                          <h5 class="mt-0 mb-2">Walking On Air</h5>
                        </a>
                        <p class="m-0">
                          Bid listed for <strong>14 ETH</strong> 4 hours ago
                          <br />by <a>@arham</a>
                        </p>
                      </div>
                    </li>

                    <li class="single-tab-list d-flex align-items-center">
                      <a>
                        <img
                          class="avatar-lg"
                          src="../../assets/images/avatar1.png"
                          alt=""
                        />
                      </a>
                      <div class="activity-content ml-4">
                        <a>
                          <h5 class="mt-0 mb-2">Walking On Air</h5>
                        </a>
                        <p class="m-0">
                          Bid listed for <strong>14 ETH</strong> 4 hours ago
                          <br />by <a>@arham</a>
                        </p>
                      </div>
                    </li>

                    <li class="single-tab-list d-flex align-items-center">
                      <a>
                        <img
                          class="avatar-lg"
                          src="../../assets/images/avatar1.png"
                          alt=""
                        />
                      </a>
                      <div class="activity-content ml-4">
                        <a>
                          <h5 class="mt-0 mb-2">Walking On Air</h5>
                        </a>
                        <p class="m-0">
                          Bid listed for <strong>14 ETH</strong> 4 hours ago
                          <br />by <a>@arham</a>
                        </p>
                      </div>
                    </li> -->

                    <!-- type: 类型 Mint, List, Transfer, Sale -->
                    <li
                      class="single-tab-list d-flex align-items-center"
                      v-for="item in activityList"
                      :key="item.id"
                    >
                      <!-- <a>
                        <img
                          class="avatar-lg"
                          src="../../assets/images/bg-avatar.jpeg"
                          alt=""
                        />
                      </a> -->
                      <a>
                        <!-- <img
                          class="avatar-lg"
                          :src="matchNft(item.tokenid)?.uri"
                          alt=""
                        /> -->
                        <div class="avatar-lg"
                          :style="{backgroundImage: 'url(' + (matchNft(item.tokenid)?.uri) +  ')'}">
                        </div>
                      </a>
                      <!-- {{matchNft(item.tokenid)?.name}} -->
                      <div class="activity-content ml-4">
                        <a>
                          <!-- <h5 class="mt-0 mb-2">Walking On Air?</h5> -->
                          <h5 class="mt-0 mb-2">{{matchNft(item.tokenid)?.name}}</h5>
                        </a>
                        <p class="m-0" v-if="item.type=='Mint'">
                          Minted {{timeago(item.ctime)}}
                          by <span class="peopleName">@{{item.to}}</span>
                        </p>
                        <p class="m-0" v-if="item.type=='List'">
                          Listed for <strong style="color: #6474D0 !important;">{{item.price}} BNB</strong> {{timeago(item.ctime)}}
                          by <span class="peopleName">@{{item.from}}</span>
                        </p>
                        <p class="m-0" v-if="item.type=='Transfer'">
                          Transfered {{timeago(item.ctime)}} by <span class="peopleName">@{{item.from}}</span> to <span class="peopleName">@{{item.to}}</span>
                        </p>
                        <p class="m-0" v-if="item.type=='Sale'">
                          Purchased at price of <strong style="color: #6474D0 !important;">{{item.price}} BNB</strong> {{timeago(item.ctime)}}
                          by <span class="peopleName">@{{item.from}}</span> to <span class="peopleName">@{{item.to}}</span>
                        </p>
                      </div>
                    </li>

                    <li
                      v-if="activityList.length == 0"
                      style="margin-top: 50px"
                    >
                      There are no records now.
                    </li>
                  </ul>
                </div>
              </div>

              <el-pagination
                background
                layout="total, sizes, prev, pager, next, jumper"
                :total="total"
                :page-sizes="[5, 10, 20, 100]"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                v-model:currentPage="currentPage"
                v-model:pageSize="pageSize"
              >
              </el-pagination>

              <!-- <div class="demo-pagination-block">
                <el-pagination
                  v-model:currentPage="currentPage4"
                  :page-sizes="[100, 200, 300, 400]"
                  :page-size="100"
                  layout="total, sizes, prev, pager, next, jumper"
                  :total="400"
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                >
                </el-pagination>
              </div> -->
            </div>
            <div class="col-12 col-md-6 col-lg-4">
              <!-- Activity Content -->
              <div class="activity-content mt-5 mt-lg-0">
                <!-- Single Widget -->
                <div class="single-widget">
                  <!-- Search Widget -->
                  <div class="widget-content search-widget">
                    <!-- <form action="#">
                      <input type="text" placeholder="Enter your keywords" />
                    </form> -->
                  </div>
                </div>
                <!-- Single Widget -->
                <div class="single-widget">
                  <!-- Filter Widget -->
                  <div class="widget filter-widget">
                    <h4 class="title">Filters</h4>
                    <!-- Filter Widget Content -->
                    <div class="widget-content">
                      <!-- Tags Widget Items -->
                      <div class="widget-content filter-widget-items mt-3">
                        <a class="badge tag" :class="{'badge__active': type=='List'}" @click="()=>handleTypeChange('List')">Listing</a>
                        <a class="badge tag" :class="{'badge__active': type=='Mint'}" @click="()=>handleTypeChange('Mint')">Minted</a>
                        <a class="badge tag" :class="{'badge__active': type=='Sale'}" @click="()=>handleTypeChange('Sale')">Purchase</a>
                        <a class="badge tag" :class="{'badge__active': type=='Transfer'}" @click="()=>handleTypeChange('Transfer')">Transfer</a>
                        <a class="badge tag" :class="{'badge__active': type==''}" @click="()=>handleTypeChange('')">All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ***** Activity Area End ***** -->
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, computed } from "vue";
import { post, get } from "@/utils/request.js";
import { forEach } from 'lodash';

// Activity列表逻辑
const activityListEffect = () => {
  const data = reactive({ currentPage: 1, pageSize: 5, total: 0 });
  let { currentPage, pageSize, total } = toRefs(data);

  //每页显示多少条数据
  const handleSizeChange = (val) => {
    console.log(`${val} items per page`);
    getActivityList()
  };
  const handleCurrentChange = (val) => {
    console.log(`current page: ${val}`);
    console.log(data.currentPage);
    getActivityList()
  };

  let activityList = ref([]);
  //获取列表
  const getActivityList = async () => {
    try {
      let params = {
        page: currentPage.value,
        count: pageSize.value,
        filter: type.value  //类型过滤
      }
      let res = await get("/api/user/oplog", params);
      console.log("记录：");
      console.log(res);
      if (res?.data?.data?.length) {
        activityList.value = res.data.data;
        total.value = res?.data?.total
      }else{
        activityList.value = []
        total.value = 0
      }

    } catch (error) {
      console.log("获取Activity列表-请求错误");
    }
  };

  //类型过滤
  const type = ref('');
  const handleTypeChange = (value) => {
    if(value==type.value){
      return
    }
    type.value = value
    getActivityList()
  }

  //时间展示格式
  const timeago = computed(() => {
    return (value) => {
      // value格式：'2021-07-13 18:55:40'
      let dateTimeStamp = Date.parse(new Date(value));
      let result = "";
      //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
      var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
      var hour = minute * 60;
      var day = hour * 24;
      var week = day * 7;
      var halfamonth = day * 15;
      var month = day * 30;
      var now = new Date().getTime(); //获取当前时间毫秒
      console.log(now);
      var diffValue = now - dateTimeStamp; //时间差

      if (diffValue < 0) {
        return;
      }
      var minC = diffValue / minute; //计算时间差的分，时，天，周，月
      var hourC = diffValue / hour;
      var dayC = diffValue / day;
      var weekC = diffValue / week;
      var monthC = diffValue / month;
      //此处考虑小数情况，感谢 情非得已https://blog.csdn.net/weixin_48495574 指正
      if (monthC >= 1 && monthC < 4) {
        result = " " + parseInt(monthC) + " months ago";
      } else if (weekC >= 1 && weekC < 4) {
        result = " " + parseInt(weekC) + " weeks ago";
      } else if (dayC >= 1 && dayC < 7) {
        result = " " + parseInt(dayC) + " days ago";
      } else if (hourC >= 1 && hourC < 24) {
        result = " " + parseInt(hourC) + " hours ago";
      } else if (minC >= 1 && minC < 60) {
        result = " " + parseInt(minC) + " minutes ago";
      } else if (diffValue >= 0 && diffValue <= minute) {
        result = "just";
      } else {
        var datetime = new Date();
        datetime.setTime(dateTimeStamp);
        var Nyear = datetime.getFullYear();
        var Nmonth =
          datetime.getMonth() + 1 < 10
            ? "0" + (datetime.getMonth() + 1)
            : datetime.getMonth() + 1;
        var Ndate =
          datetime.getDate() < 10
            ? "0" + datetime.getDate()
            : datetime.getDate();
        var Nhour =
          datetime.getHours() < 10
            ? "0" + datetime.getHours()
            : datetime.getHours();
        var Nminute =
          datetime.getMinutes() < 10
            ? "0" + datetime.getMinutes()
            : datetime.getMinutes();
        var Nsecond =
          datetime.getSeconds() < 10
            ? "0" + datetime.getSeconds()
            : datetime.getSeconds();
        result = Nyear + "-" + Nmonth + "-" + Ndate;
      }
      return result;
    };
  });

  //获取所有nft列表
  //（那个获取activity的接口没有返回nft的图片和名字，需要获取全部nft列表，然后自己去匹配相同的tokenid，用于获取Nft的图片和名字）
  let nftsList = ref([])
  const getAllNftList = async () => {
    try {
      let res = await get("/api/list/tokens");
      console.log('全部nft：')
      console.log(res)
      if(res?.data?.length){
        nftsList.value = res.data
      }
    } catch (error) {
      console.log('获取全部nft列表失败')
    }
  }
  const matchNft = computed(() => {
    return (tokenId) => {
      if(nftsList.value?.length==0){
        return ""
      }
      let result = ""
      for(let i=0; i<nftsList.value.length; i++){
        if(nftsList.value[i].id == tokenId){
          result = nftsList.value[i]
          break
        }
      }
      return result
    }
  })

  return {
    handleSizeChange,
    handleCurrentChange,
    currentPage,
    pageSize,
    total,
    activityList,
    getActivityList,
    timeago,
    type,
    handleTypeChange,
    nftsList,
    getAllNftList,
    matchNft
  };
};

export default {
  name: "Activity",
  setup() {
    const {
      handleSizeChange,
      handleCurrentChange,
      currentPage,
      pageSize,
      total,
      activityList,
      getActivityList,
      timeago,
      type,
      handleTypeChange,
      nftsList,
      getAllNftList,
      matchNft
    } = activityListEffect();
    getAllNftList() //获取全部nft列表
    setTimeout(()=>{
      getActivityList();
    },100)
    // getActivityList();
    return {
      handleSizeChange,
      handleCurrentChange,
      currentPage,
      pageSize,
      total,
      activityList,
      timeago,
      type,
      handleTypeChange,
      nftsList,
      matchNft
    };
  },
};
</script>

<style lang='scss' scoped>
/* .popular-collections-area {
  padding-top: 0;
} */
::v-deep {
  .el-pagination.is-background .el-pager li:not(.disabled) {
    background-color: #fff;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #4528dc;
  }
  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #4528dc;
    color: #fff;
  }
  .demo-pagination-block + .demo-pagination-block {
    margin-top: 10px;
  }
}
.badge{
  cursor: pointer;
}
.badge__active{
  color: #4528DC !important;
}

.activity-content{
  width: calc(100% - 80px);
}
.peopleName{
  // color: #fff;
  font-size: 16px;
  font-weight: 500;
  &:hover{
    color: #4528DC;
  }
}

.avatar-lg{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.breadcrumb-area {
    background: none;
    padding: 0;
    height: 300px;
    h2 {
        background: linear-gradient(90deg, #1F94FA 0%, #815CF6 50%, #F64E88 60%) !important;
        -webkit-background-clip: text !important;
        color: transparent !important;
    }
}
.activity-area {
    padding-top: 0;
}
</style>
