<template>
  <div class="home">
      <div class="main">
       
        <section class="breadcrumb-area overlay-dark d-flex align-items-center">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <!-- Breamcrumb Content -->
                        <div class="breadcrumb-content text-center">
                            <h2 class="m-0">Contact</h2>
                            <ol class="breadcrumb d-flex justify-content-center">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active">Contact</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- ***** Breadcrumb Area End ***** -->

        <!-- ***** Contact Area Start ***** -->
        <section class="author-area">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-8 col-lg-7">
                        <!-- Intro -->
                        <div class="intro text-center">
                            <span>Contact</span>
                            <h3 class="mt-3 mb-0">Get In Touch</h3>
                            <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.</p> -->
                        </div>
                        <!-- Item Form -->
                        <form id="contact-form" class="item-form card no-hover" method="POST" action="assets/php/mail.php">
                            <div class="row rowsde">
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="name" placeholder="Name" required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="email" class="form-control" name="email" placeholder="Email" required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control" name="subject" placeholder="Subject" required="required">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mt-3">
                                        <textarea class="form-control" name="message" placeholder="Message" cols="30" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="btn w-100 mt-3 mt-sm-4" type="submit"><i class="icon-paper-plane mr-2"></i>Send Message</div>
                                </div>
                            </div>
                        </form>
                        <p class="form-message"></p>
                    </div>
                </div>
            </div>
        </section>
     

    </div>
  </div>
</template>

<script>
import {
  defineComponent
} from "vue";


export default defineComponent({
  setup() {
 
    return {
 
    };
  },
})
</script>
<style lang="scss" scoped>
    .rowsde{
        width: 95%;
        margin: 3rem auto;
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
.author-area {
    padding-top: 0;
}
.btn {
    background: #6474D0;
}
</style>