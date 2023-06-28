import { c as create_ssr_component, e as escape, v as validate_component } from "./index2.js";
const Titlebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  return `<div class="box has-text-centered columns m-2"><div class="column"><img src="/map-icon.png" width="60" alt="img"></div>
    <div class="column"><div class="title is-5">${escape(title)}</div>
        <div class="subtitle is-5">${escape(subTitle)}</div></div></div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(Titlebar, "Titlebar").$$render(
    $$result,
    {
      title: "Placemark",
      subTitle: "Explore the World"
    },
    {},
    {}
  )}</div>
    <div class="column">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
