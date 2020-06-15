import React from "react";

import Layout from "./components/layout";
import HomeBanner from "./components/homePage/homeBanner";
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "./context/globalContex";
import HomeContent from "./components/homePage/homeContent";
import HomeFeature from "./components/homePage/homeFeature";
import HomeAbout from "./components/homePage/homeAbout";
import Footer from "./components/homePage/footer";

function App() {
  const { cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
      <HomeContent />
      <HomeFeature onCursor={onCursor} />
      <HomeAbout onCursor={onCursor} />
      <Footer onCursor={onCursor} />
    </Layout>
  );
}

export default App;
