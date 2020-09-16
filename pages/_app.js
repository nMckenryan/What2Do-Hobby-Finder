//Handles Global Styling

import React from "react";
import App from "next/app";
import "../styles/globals.scss";
import {
  AnimatePresence
} from "framer-motion";

function MyApp({
  Component,
  pageProps,
  router
}) {
  //const { Component, pageProps, router } = this.props; //HAndles routing, so it can track prescene of child components in tree
  return (
    // Allows parent component to handle animation
    <
    AnimatePresence exitBeforeEnter >
    <
    Component {
      ...pageProps
    }
    key = {
      router.route
    }
    /> <
    /AnimatePresence>
  );
}

export default MyApp;