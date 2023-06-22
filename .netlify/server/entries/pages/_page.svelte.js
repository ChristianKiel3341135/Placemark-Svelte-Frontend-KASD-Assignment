import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns is-vcentered content"><div class="column has-text-centered"><img width="300" src="/poi-icon.png" alt="poi-icon"></div>
    <div class="column"><h1 class="title">Find your next Point of Interest</h1>
        <p>PlaceMark helps you to find out what there is to see and experience out in the wide World!</p></div></div>`;
});
export {
  Page as default
};
