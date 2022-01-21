import React, { useState, useEffect } from "react";
import Preloader from "../components/Pre";
import Navbar from "../components/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Blogs from "../components/Projects/Blogs";
import BlogDetail from "../components/Projects/BlogDetail";

import Footer from "../components/Footer";
import Resume from "../components/Resume/ResumeNew";
// import { Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { createMemoryHistory } from "history";
import reportWebVitals from "../reportWebVitals";
import rootReducer from "../reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Head from "next/head";
import Layout from "../components/Layout";
import ScrollToTop from "../components/ScrollToTop";

const store = createStore(rootReducer);

const App = ({ Component, pageProps }) => {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Head>
        <title>Ngoc Dong Pham | Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Head>
        <link rel="icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="manifest" href="./manifest.json" />
        <link rel="stylesheet" href="./index.css" />
        <meta name="description" content="Ngoc Dong Pham | Portfolio" />

        <meta itemProp="name" content="Ngoc Dong Pham | Portfolio" />
        <meta itemProp="description" content=" Ngoc Dong Pham | Portfolio" />
        <meta
          itemProp="image"
          content="https://drive.google.com/file/d/18yOaZfJ7bDDiUF8vCOv4hxTZc4JMsbKZ/view?usp=sharing"
        />

        {/* <!-- <meta property="og:url" content="https://soumyajit.vercel.app"> --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ngoc Dong Pham | Portfolio" />
        <meta property="og:description" content="Ngoc Dong Pham | Portfolio" />
        <meta
          property="og:image"
          content="https://drive.google.com/file/d/18yOaZfJ7bDDiUF8vCOv4hxTZc4JMsbKZ/view?usp=sharing"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ngoc Dong Pham | Portfolio" />
        <meta name="twitter:description" content="Ngoc Dong Pham | Portfolio" />
        <meta
          name="twitter:image"
          content="https://drive.google.com/file/d/18yOaZfJ7bDDiUF8vCOv4hxTZc4JMsbKZ/view?usp=sharing"
        />
      </Head>
      <Provider store={store} suppressHydrationWarning>
        {/* <Router history={history}> */}
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Layout>
          <Component {...pageProps} />
          </Layout>
          <Footer suppressHydrationWarning />
        </div>
        {/* </Router> */}
      </Provider>
    </div>
  );
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
