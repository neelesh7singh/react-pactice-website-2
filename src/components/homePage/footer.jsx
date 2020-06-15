import React, { useRef, useState } from "react"

import { Container, Flex } from "../../styles/globalStyles"
import { Instagram, Facebook, Vimeo } from "../../assets/svg/social-icons"
import {
  FooterNav,
  FooterContent,
  FooterSocial,
} from "../../styles/footerStyles"

const Footer = ({ onCursor }) => {
  return (
    <FooterNav>
      <Container>
        <Flex>
          <FooterContent>
            <p>9902.315.1234</p>
            <p>info@furrow.studio</p>
          </FooterContent>
          <FooterContent>
            <p>15 Cam at Unit B</p>
            <p>University, PE C32 0E2</p>
          </FooterContent>
          <FooterSocial>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Instagram />
            </a>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Facebook />
            </a>
            <a
              href=""
              onMouseEnter={() => onCursor("hovered")}
              onMouseLeave={onCursor}
            >
              <Vimeo />
            </a>
          </FooterSocial>
        </Flex>
      </Container>
    </FooterNav>
  )
}

export default Footer
