var script = document.createElement("script");
var themeID = window.Shopify.theme.id;
script.setAttribute(
  "src",
  "http://airrobe.lvh.me:3000/plugin.js?themeId=" + themeId
);
document.head.appendChild(script);
