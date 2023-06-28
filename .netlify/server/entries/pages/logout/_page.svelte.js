import { c as create_ssr_component } from "../../../chunks/index2.js";
import axios from "axios";
import { w as writable } from "../../../chunks/index.js";
const user = writable({
  email: "",
  token: ""
});
const latestPlacemark = writable(null);
const placemarkApiService = {
  //baseUrl: "http://localhost:4000",
  baseUrl: "https://placemark-christiankiel-kasd.onrender.com",
  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, { email, password });
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email,
          token: response.data.token
        });
        localStorage.placemarkUser = JSON.stringify({ email, token: response.data.token });
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async logout() {
    user.set({
      email: "",
      token: ""
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("placemarkUser");
  },
  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName,
        lastName,
        email,
        password
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  },
  reload() {
    const userCreds = localStorage.placemarkUser;
    if (userCreds) {
      const savedUser = JSON.parse(userCreds);
      user.set({
        email: savedUser.email,
        token: savedUser.token
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
    }
  },
  async getAllUsers() {
    try {
      const response = await axios.get(this.baseUrl + "/api/users");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getUserByEmail(email) {
    try {
      const response = await axios.get(this.baseUrl + "/api/users/email/" + email);
      return response.data;
    } catch (error) {
      return null;
    }
  },
  async getAllPlacemarks() {
    try {
      const response = await axios.get(this.baseUrl + "/api/placemarks");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async createPlacemark(id, placemark, userid) {
    try {
      const res = await axios.post(`${this.baseUrl}/api/categories/${id}/placemarks`, placemark, userid);
      latestPlacemark.set(res.data);
      return res.data;
    } catch (error) {
      return null;
    }
  },
  async getAllCategories() {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories");
      return response.data;
    } catch (error) {
      return [];
    }
  },
  async getCategory(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/categories/" + id);
      return response.data;
    } catch (error) {
      return [];
    }
  }
};
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  placemarkApiService.logout();
  goto("/");
  return ``;
});
export {
  Page as default
};
