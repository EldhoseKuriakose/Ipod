//Importing required packages
import React from 'react';

//Creating list of menus
const MenuList = () => {
    return(
        <div>
            <div id="screen" className="menu-container" unselectable="off">
                <ul>
                    <li className="options" id="photos">
                        Photos
                    </li>
                    <li className="options" id="videos">
                        Videos
                    </li>
                    <li className="options" id="songs">
                        Songs
                    </li>
                    <li className="options" id="playlists">
                        Playlists
                    </li>
                    <li className="options" id="settings">
                        Settings
                    </li>
                </ul>
            </div>
            <div id="photos-display" className="display"></div>
            <div id="videos-display" className="display"></div>
            <div id="songs-display" className="display"></div>
            <div id="playlists-display" className="display"></div>
            <div id="settings-display" className="display"></div>
        </div>
    );
}

//Exporting MenuList
export default MenuList;