import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  OiArrowLeft,
  HiSolidArrowNarrowRight,
  HiSolidCheck,
  IoSearch,
  BiBook,
  HiSolidPlus,
  BiXLg,
  MdLogoutRound,
} from "oh-vue-icons/icons";

addIcons(
  OiArrowLeft,
  HiSolidArrowNarrowRight,
  HiSolidPlus,
  HiSolidCheck,
  IoSearch,
  BiBook,
  BiXLg,
  MdLogoutRound
);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");
