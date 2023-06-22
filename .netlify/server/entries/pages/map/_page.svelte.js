import { c as create_ssr_component, b as add_attribute, d as each, v as validate_component, e as escape } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
const leaflet = "";
const PlacemarkMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box" id="placemark-map" style="height:75vh"></div>`;
});
const Coordinates = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { latitude = 0 } = $$props;
  let { longitude = 0 } = $$props;
  if ($$props.latitude === void 0 && $$bindings.latitude && latitude !== void 0)
    $$bindings.latitude(latitude);
  if ($$props.longitude === void 0 && $$bindings.longitude && longitude !== void 0)
    $$bindings.longitude(longitude);
  return `<div class="box field is-horizontal"><div class="field-label is-normal"><label for="lng" class="label">Lat</label></div>
    <div class="field-body"><div class="field"><p class="control is-expanded"><input id="lng" class="input" type="float"${add_attribute("value", latitude, 0)}></p></div>
        <div class="field-label is-normal"><label for="lat" class="label">Lng</label></div>
        <div class="field"><p class="control is-expanded "><input id="lat" class="input" type="float"${add_attribute("value", longitude, 0)}></p></div></div></div>`;
});
const AddPlacemarkForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let placemark_name;
  let description;
  let latitude;
  let longitude;
  let categories = [];
  let message = "Fill out this form to create your Placemark";
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><div class="field"><label class="label" for="placemark_name">Enter Name</label>
        <input class="input" id="placemark_name" name="placemark_name" type="text"${add_attribute("value", placemark_name, 0)}></div>
    <div class="field"><label class="label" for="description">Enter Description</label>
        <input class="input" id="description" name="descriptipn" type="text"${add_attribute("value", description, 0)}></div>

    <div class="field"><div class="select"><select>${each(categories, (category) => {
      return `<option${add_attribute("value", category.title, 0)}>${escape(category.title)}</option>`;
    })}</select></div></div>

    ${validate_component(Coordinates, "Coordinates").$$render(
      $$result,
      { latitude, longitude },
      {
        latitude: ($$value) => {
          latitude = $$value;
          $$settled = false;
        },
        longitude: ($$value) => {
          longitude = $$value;
          $$settled = false;
        }
      },
      {}
    )}

    <div class="box">${escape(message)}</div>

    <div class="field"><div class="control"><button class="button is-link is-light">Create Placemark</button></div></div></form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}
<div class="columns"><div class="column">${validate_component(PlacemarkMap, "PlacemarkMap").$$render($$result, {}, {}, {})}</div>

    <div class="column">${validate_component(AddPlacemarkForm, "AddPlacemarkForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
