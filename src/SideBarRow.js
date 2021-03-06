import { Avatar } from '@material-ui/core';
import React from 'react';
import './SideBarRow.css';

function SideBarRow({src,Icon,title}) {
    return (
        <div className="sideBarRow">
          {src&& <Avatar/>}
          {Icon && <Icon/>}
          <h4>{title}</h4>
        </div>
    )
}

export default SideBarRow
