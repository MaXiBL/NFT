<template>
        <footer class="footer-area">
            <!-- Footer Top -->
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-sm-6 col-lg-3 res-margin res-margin_1">
                            <!-- Footer Items -->
                            <div class="footer-items">
                                <!-- Logo -->
                                <a class="navbar-brand" href="index.html">
                                    <img src="@/assets/afantImage/icon/logo.png" alt="">
                                </a>
                                <p>The world's most potential digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.</p>
                                <!-- Social Icons -->
                                <div class="social-icons d-flex">
                                    <!-- <a class="facebook" href="#">
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="fab fa-facebook-f"></i>
                                    </a> -->
                                    <a class="telegram" href="#">
                                        <i class="fab fa-telegram"></i>
                                        <i class="fab fa-telegram"></i>
                                    </a>
                                    <a class="twitter" href="#">
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-twitter"></i>
                                    </a>
                                    <a class="envelope" href="#">
                                        <i class="fa fa-envelope"></i>
                                        <i class="fa fa-envelope"></i>
                                    </a>
                                    <!-- <a class="google-plus" href="#">
                                        <i class="fab fa-google-plus-g"></i>
                                        <i class="fab fa-google-plus-g"></i>
                                    </a>
                                    <a class="vine" href="#">
                                        <i class="fab fa-vine"></i>
                                        <i class="fab fa-vine"></i>
                                    </a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 res-margin">
                            <!-- Footer Items -->
                            <div class="footer-items">
                                <!-- Footer Title -->
                                <h4 class="footer-title">Useful Links</h4>
                                <ul>
                                    <li><a href="#">All NFTs</a></li>
                                    <li><a href="#">How It Works</a></li>
                                    <li><a href="#">Create</a></li>
                                    <li><a href="#">Explore</a></li>
                                    <li><a href="#">Privacy &amp; Terms</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3 res-margin">
                            <!-- Footer Items -->
                            <div class="footer-items">
                                <!-- Footer Title -->
                                <h4 class="footer-title">Community</h4>
                                <ul>
                                    <li><a href="#">twitter</a></li>
                                    <li><a href="#">telegram</a></li>
                                    <!-- <li><a href="#">medium</a></li>
                                    <li><a href="#">discord</a></li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-3">
                            <!-- Footer Items -->
                            <div class="footer-items">
                                <!-- Footer Title -->
                                <h4 class="footer-title">Subscribe Us</h4>
                                <!-- Subscribe Form -->
                                <div class="subscribe-form d-flex align-items-center">
                                    <input type="email" class="form-control" placeholder="info@yourmail.com">
                                    <button type="submit" class="btn"><i class="icon-paper-plane"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <!-- Copyright Area -->
                            <div class="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                <!-- Copyright Left -->
                                <div class="copyright-left">&copy;2021 Avanti, All Rights Reserved.</div>
                                <!-- Copyright Right -->
                                <div class="copyright-right">Made with <i class="fas fa-heart"></i> By <a href="#">Themeland</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
</template>
<script>
import { defineComponent} from "vue";
export default defineComponent({});
</script>
<style lang='scss' scoped>
.navbar-brand {
    width: 145px;
    height: 32px;
}
.footer-items {
    width: 200px !important;
    p, a {
        color: #fff;
        font-size: 14px !important;
    }
    h4 {
        font-size: 16px !important;
    }
}
.res-margin_1 {
    margin-top: 24px;
}
.d-flex {
    a {
        background: none;
    }
    .btn {
        background: #4f62cf;
    }
}
.form-control {
    background: #6474D0 !important;
    border-radius: 50px !important;
    color: #fff !important;
}
.copyright-area {
    font-size: 12px !important;
}
</style>
