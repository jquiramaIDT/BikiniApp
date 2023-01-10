import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes";
import VCalendar from "v-calendar";
import store from "./store";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

app.use(VCalendar, {
  screens: {
    mobile: "480px",
    laptop: "720px",
    desktop: "1100px",
  },
});




