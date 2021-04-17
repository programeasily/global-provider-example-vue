// eslint-disable-next-line
const app = Vue.createApp({});
// Global Provider
app.provide("appProperties", {
  user: "admin",
  appVersion: "1.0.0"
});
// Page Component where contains content component
app.component("Page", {
  template: `<Content />`
});
// Content component where inject used to get
// global properties
app.component("Content", {
  inject: ["appProperties"],
  template: `
    <div>User Name : {{ appProperties.user }}</div>
    <div>Version : {{ appProperties.appVersion }}</div>
  `
});

app.mount("#app");
