import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../app/store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
NProgress.configure({ showSpinner: false });
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AnimatePresence>
  );
}

export default MyApp;
