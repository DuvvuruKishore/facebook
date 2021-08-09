import React from 'react'
import './Sidebar.css';
import SideBarRow from './SideBarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StoreIcon from '@material-ui/icons/Store';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className="sidebar">
          <SideBarRow src="" title="kishore"/> 
          <SideBarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
          <SideBarRow Icon={EmojiFlagsIcon} title="pages" />
          <SideBarRow Icon={PeopleIcon} title="friends"/>
          <SideBarRow Icon={ChatIcon} title="messengers"/>
          <SideBarRow Icon={StoreIcon} title="marketplace"/>
          <SideBarRow Icon={VideoLibraryIcon} title="videos"/>
          <SideBarRow Icon={ExpandMoreIcon} title="marketplace"/>
        </div>
    )
}

export default Sidebar
