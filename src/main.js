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

const app = createApp(App);

const pinia = createPinia();

app.component("v-icon", OhVueIcon);
app.use(router);
app.use(pinia);
app.mount("#app");
