import React from "react";
import "styles/global.scss";
import NavbarCustom from "components/NavbarCustom";
import Footer from "components/Footer";
import "util/analytics.js";
import { ProvideAuth } from "util/auth.js";

function MyApp({ Component, pageProps }) {
  return (
    <ProvideAuth>
      <>
        <NavbarCustom
          bg="primary"
          variant="dark"
          expand="md"
          logo="https://uploads.divjoy.com/logo-white.svg"
        ></NavbarCustom>

        <Component {...pageProps} />

        <Footer
          bg="white"
          textColor="dark"
          size="md"
          bgImage=""
          bgImageOpacity={1}
          description="A short description of what you do here"
          copyright="© 2019 Company"
          logo="https://uploads.divjoy.com/logo.svg"
        ></Footer>
      </>
    </ProvideAuth>
  );
}

export default MyApp;
