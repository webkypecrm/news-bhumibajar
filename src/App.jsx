import { Fragment } from "react";
import "./App.css";
import "./assets/css/main.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import "./assets/wp-content/themes/jannah/assets/css/helpers.min.css"
import "./assets/wp-content/themes/jannah/assets/css/print.css"
import "./assets/wp-content/themes/jannah/assets/css/single.min.css"
import "./assets/wp-content/themes/jannah/assets/css/style.min.css"
import "./assets/wp-content/themes/jannah/assets/css/widgets.min.css"
import "./assets/wp-content/themes/jannah/assets/css/plugins/shortcodes.min.css"

import 'bootstrap/dist/js/bootstrap.bundle.min';
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <Fragment>
      <MainPage />
    </Fragment>
  );
}

export default App;
