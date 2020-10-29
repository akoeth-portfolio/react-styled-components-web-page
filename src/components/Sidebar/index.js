import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoutes,
} from "./SidebarElements";

const SidebarElements = () => {
  return (
    <SidebarContainer>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about">About</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="discover">Discover</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="services">Services</SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to="signup">Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoutes to="/singin">Sign In</SidebarRoutes>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default SidebarElements;
