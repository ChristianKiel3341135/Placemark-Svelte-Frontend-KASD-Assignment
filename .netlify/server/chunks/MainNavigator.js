import { c as create_ssr_component } from "./index2.js";
const MainNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box has-text-centered columns m-2"><a href="/dashboard" class="column is-4"><i class="fas fa-home fa-3x" style="color:rgba(0,0,0,0.65)"></i></a>

    <a href="/analytics" class="column is-4"><i class="fas fa-th-list fa-3x" style="color:rgb(63, 122, 139)"></i></a>

    <a href="/map" class="column "><i class="fas fa-map-marked-alt fa-3x" style="color:rgb(102, 153, 255)"></i></a>

    <a href="/logout" class="column is04"><i class="fas fa-sign-out-alt fa-3x" style="color:rgb(213,16,24)"></i></a></div>`;
});
export {
  MainNavigator as M
};
