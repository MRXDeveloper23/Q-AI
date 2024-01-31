import { createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import themeConfig from "../theme.config";

const defaultState = {
  animation: "",
  navbar: "navbar-sticky",
  sidebar: false,
};

const initialState = {
  animation: localStorage.getItem("animation") || themeConfig.animation,
  navbar: localStorage.getItem("navbar") || themeConfig.navbar,
  sidebar: localStorage.getItem("sidebar") || defaultState.sidebar,
};

const themeConfigSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {},
});

export default themeConfigSlice.reducer;
