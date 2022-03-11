<template>
  <header id="header">
    <!-- Navbar -->
    <nav data-aos="zoom-out" data-aos-delay="800" class="navbar navbar-expand" style="padding-top: 0.3rem;">
      <div class="container header">
        <!-- Navbar Brand-->
        <a class="navbar-brand"  @click="jumpPage('/')">
          <img 
            class="navbar-brand-sticky"
            src="@/assets/afantImage/icon/logo.png"
            alt="sticky brand-logo"
          />
        </a>
        <div class="ml-auto"></div>
        <!-- Navbar -->
        <ul class="navbar-nav items mx-auto">
          <!-- <li class="nav-item dropdown">
            <router-link class="nav-link" to="/">Home</router-link>
          </li> -->
          <li class="nav-item dropdown">
            <a class="nav-link"
              >Explore
              <i class="fas fa-angle-down ml-1"></i>
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a @click="jumpPage('/explore')" class="nav-link">NFTs</a>
              </li>
              <li class="nav-item">
                <a @click="jumpPage('/explore?title=collections')" class="nav-link">Collections</a>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link"
              >Create
              <i class="fas fa-angle-down ml-1"></i>
            </a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a @click="jumpPage('/create')" class="nav-link">NFT</a>
              </li>
              <li class="nav-item">
                <a @click="jumpPage('/createCollection')" class="nav-link">Collection</a>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/activity" class="nav-link">Activity</router-link>
          </li>
          <li class="nav-item dropdown">
            <router-link class="nav-link" to="Help"> HelpCenter </router-link>
            <!-- <a class="nav-link" href="#">
              Community
              <i class="fas fa-angle-down ml-1"></i>
            </a> -->
            <!-- <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="javascript:;" class="nav-link">twitter</a>
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="nav-link">telegram</a>
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="nav-link">medium</a>
              </li>
              <li class="nav-item">
                <a href="javascript:;" class="nav-link">discord</a>
              </li>
            </ul> -->
          </li>
          <!-- <li class="nav-item dropdown">
            <a class="nav-link" href="#"
              >Pages <i class="fas fa-angle-down ml-1"></i
            ></a>
            <ul class="dropdown-menu">
              <li class="nav-item">
                <a href="authors.html" class="nav-link">Authors</a>
              </li>
              <li class="nav-item">
                <a href="author.html" class="nav-link">Author</a>
              </li>
              <li class="nav-item">
                <a href="wallet-connect.html" class="nav-link"
                  >Wallet Connect</a
                >
              </li>
              <li class="nav-item">
                <a href="create.html" class="nav-link">Create</a>
              </li>
              <li class="nav-item">
                <a href="login.html" class="nav-link">Login</a>
              </li>
              <li class="nav-item">
                <a href="signup.html" class="nav-link">Signup</a>
              </li>
            </ul>
          </li> -->
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }">
              <a  class="nav-link">Contact</a>
            </router-link>
          </li>
        </ul>
        <!-- Navbar Icons -->
        <ul class="navbar-nav icons">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-toggle="modal"
              data-target="#search"
            >
              <i class="fas fa-search"></i>
            </a>
          </li>
        </ul>

        <!-- Navbar Toggler -->
        <ul class="navbar-nav toggle">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
              data-toggle="modal"
              data-target="#menu"
            >
              <i class="fas fa-bars toggle-icon m-0"></i>
            </a>
          </li>
        </ul>

        <!-- Navbar Action Button -->
        <ul class="navbar-nav action">
          <li class="nav-item ml-3" v-if="!ConnectWalletID">
            <router-link :to="{ name: 'connect' }">
              <a
                class="ml-lg-auto btn-bordered-white"
                style="padding: .4rem 1.5rem"
                ><i class="icon-wallet mr-md-2"></i>Wallet Connect</a
              >
            </router-link>
          </li>
          <div
            v-else
            class="ml-lg-auto btn-bordered-white"
            @click="seeWallet()"
          >
            {{ $encryption(ConnectWalletID) }}
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
import { useStore, mapState } from "vuex";
import { defineComponent, reactive, toRefs, computed, onMounted } from "vue";
import { useRouter } from 'vue-router'
export default defineComponent({

  setup(props, contex) {
    const store = useStore()
    const router = useRouter()
    const state = reactive({
      input: "",
    });
    const ConnectWallet = () => {
      contex.emit("ConnectWallet");
    };
    const seeWallet = () => {
      contex.emit("seeWallet");
    };
    const ConnectWalletID = computed(() => {
      return store.state.ConnectWalletID;
    });
    // 跳转页面
    const jumpPage = (val) => {
        router.push(val)
    }
    return {
      ...toRefs(state),
      ConnectWallet,
      ConnectWalletID,
      seeWallet,
      jumpPage
    };
  },
});
</script>
<style lang="scss" scoped>
 
   @media only screen and (min-width: 270px) and (max-width: 767px){
    .navbar-brand{
      margin-left: 0%!important;
    }
    // @media only screen and (min-width: 1920px) and (max-width: 2200px){
    //   .navbar-brand{
    //     margin-left: 10%!important;
    //   }
    // }
 }

 #header .navbar-brand-sticky {
   width: 145px;
   height: 32px;
   cursor: pointer;
 }
 .items {
   margin-left: 0 !important;
 }
 .nav-item {
     cursor: pointer;
 }
 .ml-3 {
     a {
        //  border: 1px solid #7045FF;
         border-radius: 7px !important;
         background-image: linear-gradient(90deg, #7045FF 0%, #646FCC 100%);
         color: #fff !important;
         i {
             color: #fff !important;
         }
     }
     a:hover {
         background: none !important;
         color: #000 !important;
         i {
             color: #000 !important;
         }
     }
 }
 .btn-bordered-white {
     font-size: 17px;
     padding-top: 5px;
 }

</style>