import "tailwindcss/tailwind.css";
import "../styles/global.css";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../app/store";

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
