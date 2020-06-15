import React, { useState } from "react";
import PropTypes from "prop-types";
// import { useStaticQuery, graphql } from "gatsby"

// styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { normalize } from "styled-normalize";

// components
import Header from "./header";
import Cursor from "./customCursor";
import Navigation from "../components/navigation";

// context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../context/globalContex";

const GlobalStyles = createGlobalStyle`
${normalize}
*{
  text-decoration: none;
  cursor:none;
}

html{
  box-sizing: border-box;
  -webkit-font-smoothing: antialised;
  font-size:16px;
}

body{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',sans-serif;
  background: ${(props) => props.theme.background};
  overscroll-behavior:none;
  overflow-x:hidden;
}
`;

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });

  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
    left: `${hamburgerPosition.x - 33}px`,
    top: `${hamburgerPosition.y + 9}px`,
  };

  const lightTheme = {
    background: "#fff",
    text: "#000",
    red: "#ea291e",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
  };

  const { currentTheme, cursorStyles } = useGlobalStateContext();
  const dispatch = useGlobalDispatchContext();

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Cursor toggleMenu={toggleMenu} />
      <Header
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
        hamburgerPosition={hamburgerPosition}
        setHamburgerPosition={setHamburgerPosition}
      />
      <Navigation
        onCursor={onCursor}
        toggleMenu={toggleMenu}
        setToggleMenu={setToggleMenu}
      />
      <main>{children}</main>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
