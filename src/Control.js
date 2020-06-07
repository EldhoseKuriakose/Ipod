//Importing required packages
import React from 'react';

const Control = (props) => {
    return(
        <div className="controls-container">
            <div id="outer-wheel" className="controls" unselectable="off" onClick={props.rotate}>
                <button className="menu" onClick={props.homeScreen}>
                    Menu
                </button>
                <img
                    alt="forward"
                    id="forward"
                    src="https://image.flaticon.com/icons/svg/106/106105.svg"    
                />
                <img
                    alt="backward"
                    id="backward"
                    src="https://image.flaticon.com/icons/svg/18/18603.svg"
                />
                <img
                    alt="play-pause"
                    id="play-pause"
                    src="https://image.flaticon.com/icons/svg/1792/1792864.svg"
                />
                <div className="inner-wheel" onClick={props.option}>
                    <button id="ok"></button>
                </div>
            </div>
        </div>
    );
}

//Exporting control
export default Control;