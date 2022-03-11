import { createApp, Directive } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index'
import '@/assets/style/global.scss'
import { loadAllPlugins } from './plugins'
import { encryption, encryptionEnd } from './filters/index'
import 'element-plus/dist/index.css'
import * as directives from '@/directives'
import '@/assets/style/element-variables.scss'
import "./assets/css/style.css";
import "./assets/js/vendor/shuffle.min.js";
import "./assets/js/vendor/jquery.min.js";
import "./assets/js/vendor/popper.min.js";
import "./assets/js/vendor/slider.min.js";
import "./assets/js/vendor/all.min.js";
import "./assets/js/vendor/ethers.js";

import "./assets/js/vendor/bootstrap.min.js";
import "./assets/js/main.js";
import "font-awesome/css/font-awesome.css"

const app = createApp(App)

// 加载所有插件
loadAllPlugins(app)

// 自定义指令
Object.keys(directives).forEach(key => {
  app.directive(key, (directives as { [key: string]: Directive })[key])
})

// filter被移除
app.config.globalProperties.$encryption = encryption
app.config.globalProperties.$encryptionEnd = encryptionEnd

app.use(store).use(router).mount('#app')
