import { c as create_ssr_component, o as onDestroy, b as add_attribute, v as validate_component, d as each, e as escape } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "frappe-charts";
const Base = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {
    labels: [],
    datasets: [{ values: [] }],
    yMarkers: {},
    yRegions: []
  } } = $$props;
  let { title = "" } = $$props;
  let { type = "line" } = $$props;
  let { height = 300 } = $$props;
  let { animate = true } = $$props;
  let { axisOptions = {} } = $$props;
  let { barOptions = {} } = $$props;
  let { lineOptions = {} } = $$props;
  let { tooltipOptions = {} } = $$props;
  let { colors = [] } = $$props;
  let { valuesOverPoints = 0 } = $$props;
  let { isNavigable = false } = $$props;
  let { maxSlices = 3 } = $$props;
  let chart = null;
  let chartRef;
  function ifChartThen(fn) {
    return function ifChart(...args) {
      if (chart) {
        return fn(...args);
      }
    };
  }
  const addDataPoint = ifChartThen((label, valueFromEachDataset, index) => chart.addDataPoint(label, valueFromEachDataset, index));
  const removeDataPoint = ifChartThen((index) => chart.removeDataPoint(index));
  const exportChart = ifChartThen(() => chart.export());
  const updateChart = ifChartThen((newData) => chart.update(newData));
  onDestroy(() => {
    chart = null;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.axisOptions === void 0 && $$bindings.axisOptions && axisOptions !== void 0)
    $$bindings.axisOptions(axisOptions);
  if ($$props.barOptions === void 0 && $$bindings.barOptions && barOptions !== void 0)
    $$bindings.barOptions(barOptions);
  if ($$props.lineOptions === void 0 && $$bindings.lineOptions && lineOptions !== void 0)
    $$bindings.lineOptions(lineOptions);
  if ($$props.tooltipOptions === void 0 && $$bindings.tooltipOptions && tooltipOptions !== void 0)
    $$bindings.tooltipOptions(tooltipOptions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.valuesOverPoints === void 0 && $$bindings.valuesOverPoints && valuesOverPoints !== void 0)
    $$bindings.valuesOverPoints(valuesOverPoints);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0)
    $$bindings.isNavigable(isNavigable);
  if ($$props.maxSlices === void 0 && $$bindings.maxSlices && maxSlices !== void 0)
    $$bindings.maxSlices(maxSlices);
  if ($$props.addDataPoint === void 0 && $$bindings.addDataPoint && addDataPoint !== void 0)
    $$bindings.addDataPoint(addDataPoint);
  if ($$props.removeDataPoint === void 0 && $$bindings.removeDataPoint && removeDataPoint !== void 0)
    $$bindings.removeDataPoint(removeDataPoint);
  if ($$props.exportChart === void 0 && $$bindings.exportChart && exportChart !== void 0)
    $$bindings.exportChart(exportChart);
  {
    updateChart(data);
  }
  return `<div${add_attribute("this", chartRef, 0)}></div>`;
});
const Base$1 = Base;
const AnalyticsForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentUsers = [];
  let allRegisteredAmount;
  let placemarkAnalytics;
  let allCategories = [];
  let placemarkCount = [];
  let userVsAdminAmount = {
    labels: ["Normal User", "Admin"],
    datasets: [{ values: [0, 0] }]
  };
  return `<h1 class="is-size-5">User Analytics</h1>
<div class="columns is-vcentered"><div class="column">${validate_component(Base$1, "Chart").$$render($$result, { data: allRegisteredAmount, type: "bar" }, {}, {})}</div>

        <div class="column"><table class="table is-striped is-fullwidth"><thead><tr><th></th>
                    <th>Nr.</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Emailadress</th></tr></thead>
                <tbody>${{ currentUsers } ? `${each(currentUsers, (user, i) => {
    return `<tr><th><i class="fas fa-user"></i></th>
                            <th>${escape(i + 1)}</th>
                            <td>${escape(user.firstName)}</td>
                            <td>${escape(user.lastName)}</td>
                            <td>${escape(user.email)}</td>
                        </tr>`;
  })}` : ``}</tbody></table></div>

    <div class="column">${validate_component(Base$1, "Chart").$$render($$result, { data: userVsAdminAmount, type: "pie" }, {}, {})}</div></div>

<h1 class="is-size-5">Placemark Analytics</h1>
<div class="columns is-vcentered"><div class="column">${validate_component(Base$1, "Chart").$$render($$result, { data: placemarkAnalytics, type: "pie" }, {}, {})}</div>

    <div class="column"><table class="table is-striped is-fullwidth"><thead><tr><th>Nr.</th>
                <th>Title</th>
                <th>Placemarks in Category</th></tr></thead>
            <tbody>${{ allCategories } ? `${each(allCategories, (category, i) => {
    return `<tr><th>${escape(i + 1)}</th>
                        <td>${escape(category.title)}</td>
                        <td>${escape(placemarkCount[i])}</td>
                    </tr>`;
  })}` : ``}</tbody></table></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns is-vcentered"><div class="column box has-text-centered">${validate_component(AnalyticsForm, "AnalyticsForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
