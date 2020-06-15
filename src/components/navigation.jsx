import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Container, Flex } from "../styles/globalStyles";
import {
  Nav,
  NavHeader,
  CloseNav,
  NavList,
  NavFooter,
  NavVideos,
} from "../styles/navigation";
import { Instagram, Facebook, Vimeo } from "../assets/svg/social-icons";
import { FooterNav, FooterContent, FooterSocial } from "../styles/footerStyles";

const navRoutes = [
  {
    id: 0,
    title: "NOT HUMBLE",
    path: "/not-humble",
    video: "featured-video.mp4",
  },
  {
    id: 1,
    title: "bleeping easy",
    path: "/bleeping-easy",
    video: "easy.mp4",
  },
  {
    id: 2,
    title: "make it zero",
    path: "/make-it-zero",
    video: "make-it-zero.mp4",
  },
  {
    id: 3,
    title: "it takes an island",
    path: "/it-takes-an-island",
    video: "it-takes-an-island.mp4",
  },
  {
    id: 4,
    title: "50 beaches",
    path: "/50-beaches",
    video: "50-beaches.mp4",
  },
];

const Naviation = ({ toggleMenu, setToggleMenu, onCursor }) => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: "featured-video.mp4",
    key: "0",
  });
  useEffect(() => {
    setTimeout(() => {
      if (document.getElementById("abc")) {
        document.getElementById("abc").play();
      }
    }, 500);
  }, [revealVideo.show, revealVideo.video]);

  return (
    <>
      <AnimatePresence>
        {toggleMenu ? (
          <Nav
            initial={{ x: "-100%" }}
            exit={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100% " }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <Container>
              <NavHeader>
                <Flex spaceBetween noHeight>
                  <h2>Projects</h2>
                  <CloseNav
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                    onClick={() => {
                      setToggleMenu(!toggleMenu);
                    }}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      key={route.id}
                      onHoverStart={() =>
                        setRevealVideo({
                          video: route.video,
                          key: route.id,
                          show: true,
                        })
                      }
                      onHoverEnd={() =>
                        setRevealVideo({
                          video: route.video,
                          key: route.id,
                          show: false,
                        })
                      }
                    >
                      <a to={route.path}>
                        <motion.div
                          className="link"
                          initial={{ x: -108 }}
                          whileHover={{
                            x: -40,
                            transition: {
                              durtion: 0.4,
                              ease: [0.6, 0.05, -0.01, 0.9],
                            },
                          }}
                        >
                          <span className="arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 101 57"
                            >
                              <path
                                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                                fill="#FFF"
                                fillRule="evenodd"
                              ></path>
                            </svg>
                          </span>
                          {route.title}
                        </motion.div>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter>
                <Flex spaceBetween>
                  <FooterContent>
                    <p>info@furrow.studio</p>
                  </FooterContent>
                  <FooterContent wider>
                    <p>902.315.1234</p>
                  </FooterContent>
                  <FooterSocial>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Instagram />
                    </a>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Facebook />
                    </a>
                    <a
                      href=""
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                    >
                      <Vimeo />
                    </a>
                  </FooterSocial>
                </Flex>
              </NavFooter>
              <NavVideos>
                <motion.div
                  className="reveal"
                  animate={{ width: revealVideo.show ? 0 : "100%" }}
                ></motion.div>
                <div className="video">
                  <AnimatePresence initial={false} exitBeforeEnter>
                    <motion.video
                      key={revealVideo.key}
                      id="abc"
                      src={require(`../assets/video/${revealVideo.video}`)}
                      initial={{ opacity: 0 }}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      loop
                      muted
                      autoplay
                    ></motion.video>
                  </AnimatePresence>
                </div>
              </NavVideos>
            </Container>
          </Nav>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Naviation;
