import { c as create_ssr_component, d as each, e as escape, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
const DashboardForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let allPlacemarks = [];
  return `${each(allPlacemarks, (placemark) => {
    return `<div class="columns mt-6"><div class="box box-link-hover-shadow"><h2 class="title">${escape(placemark.name)}
                    <i class="fas fa-map-pin" style="color:rgb(196,14,21)"></i></h2>
                <p>${escape(placemark.description)}</p>
                <p class="has-text-weight-bold">Lat. ${escape(placemark.latitude)} Lgt. ${escape(placemark.longitude)}</p></div>
        </div>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns is-vcentered"><div class="column box has-text-centered"><h1 class="title is-4">Welcome! Categorization implemented in the Hapi/Handlebars Version!</h1>
        <h2>Just showing all Placemarks</h2>
        ${validate_component(DashboardForm, "DashboardForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
