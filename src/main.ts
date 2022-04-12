import { createApp } from 'vue'
import App from './App.vue'
import '../public/reset.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import './page-designer'

const app = createApp(App);
app.use(Antd)

app.config.performance = true
app.mount('#app')
