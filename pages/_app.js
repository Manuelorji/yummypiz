import "../styles/globals.scss";
import { AppContextProvider } from "../utils/AppContext";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  );
}

export default MyApp;
