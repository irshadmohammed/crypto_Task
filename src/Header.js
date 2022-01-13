import React, { Component } from 'react';
import { ContainerDiv, HeaderImage, HeaderText, ImageDiv } from './styles';
import logo from "./images/Streamex.png"
import './Header.css'
import SettingsOutlinedIcon from '@mui/icons-material/Settings';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Avatar from '@mui/material/Avatar';

class Header extends Component {
  render() {
    return (
      <ContainerDiv>
        <ImageDiv
          className="header__icon"
          src={logo}
          alt=""
        />
        <HeaderText color="blue">Dashboard</HeaderText>
        <HeaderText>Exchange</HeaderText>
        <HeaderText>STE Bank</HeaderText>
        <HeaderText>Affiliate</HeaderText>
        <HeaderText>About</HeaderText>
        <div className="header__right">
          <SettingsOutlinedIcon />
          <NotificationsOutlinedIcon />
          <Avatar src={logo} />
        </div>
      </ContainerDiv>
    )
  }
}

export default Header