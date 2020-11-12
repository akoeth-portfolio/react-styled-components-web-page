import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const SidebarElements = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper id="sidebar_wrapper">
        <SidebarMenu>
          <SidebarLink to="about_me" onClick={toggle}>
            About
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="web_shop" onClick={toggle}>
            Web Shop
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="sliding_puzzle" onClick={toggle}>
            Sliding Puzzle
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="tic_tac_toe" onClick={toggle}>
            Tic Tac Toe
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="blockchain" onClick={toggle}>
            Blockchain
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarElements;
