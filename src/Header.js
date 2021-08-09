import React from 'react';
import facebooklogo from './facebooklogo.png';
import SearchIcon from '@material-ui/icons/Search';
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StoreIcon from '@material-ui/icons/Store';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
              <img src={facebooklogo} alt="facebook logo"></img>
              <div className="header__input">
              <SearchIcon/>
              <input type="text" />
              </div>
            </div>
            <div className="header__middle">
            <div className="header__option header__option--active">
            <HomeIcon fontSize="large"/>
            </div>
            <div className="header__option">
            <FlagIcon fontSize="large"/>
            </div>
            <div className="header__option">
            <SubscriptionsIcon fontSize="large"/>
            </div>
            <div className="header__option">
            <StoreIcon fontSize="large"/>
            </div>
            <div className="header__option">
            <SupervisedUserCircleIcon fontSize="large"/>
            </div>
            </div>
            <div className="header__right">
              <div className="header__info">
              <Avatar/>
              <h4>kisman</h4>
              </div>
              <IconButton>
              <AddIcon/>
              </IconButton>
              <IconButton>
              <ForumIcon/>
              </IconButton>
              <IconButton>
              <NotificationsActiveIcon/>
              </IconButton>
              <IconButton>
              <ExpandMoreIcon/>
              </IconButton>
             
             </div>
        </div>
    )
}

export default Header
