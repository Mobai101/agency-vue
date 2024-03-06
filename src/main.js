import "./main.css";
import Vue3TouchEvents from "vue3-touch-events";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).use(Vue3TouchEvents).mount("#app");
