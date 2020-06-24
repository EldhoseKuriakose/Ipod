//Importing required packages
import React from 'react';
import MenuList from './MenuList';
import Control from './Control';
import ZingTouch from 'zingtouch';

class App extends React.Component {
  //Function for handling color of menus
  handleColor = () => {
    let photos = document.getElementById('photos');
    photos.style.backgroundColor = 'white';
    photos.style.color = 'black';
    let videos = document.getElementById('videos');
    videos.style.backgroundColor = 'white';
    videos.style.color = 'black';
    let songs = document.getElementById('songs');
    songs.style.backgroundColor = 'white';
    songs.style.color = 'black';
    let playlists = document.getElementById('playlists');
    playlists.style.backgroundColor = 'white';
    playlists.style.color = 'black';
    let settings = document.getElementById('settings');
    settings.style.backgroundColor = 'white';
    settings.style.color = 'black';
  }

  //Function for handling selection of menus by rotation across wheel
  handleRotation = () => {
    let angle = 0;
    const target = document.getElementById('outer-wheel');
    const region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', (e) => {
      angle += e.detail.distanceFromLast;

      if((Math.abs(angle)>0 && Math.abs(angle)<15)) {
        this.handleColor();
        let selection = document.getElementById('photos');
        selection.style.backgroundColor = 'blue';
        selection.style.color = 'white';
      }
      if(Math.abs(angle)>15 && Math.abs(angle)<30) {
        this.handleColor();
        let selection = document.getElementById('videos');
        selection.style.backgroundColor = 'blue';
        selection.style.color = 'white';
      }
      if(Math.abs(angle)>30 && Math.abs(angle)<45) {
        this.handleColor();
        let selection = document.getElementById('songs');
        selection.style.backgroundColor = 'blue';
        selection.style.color = 'white';
      }
      if(Math.abs(angle)>45 && Math.abs(angle)<60) {
        this.handleColor();
        let selection = document.getElementById('playlists');
        selection.style.backgroundColor = 'blue';
        selection.style.color = 'white';
      }
      if(Math.abs(angle)>60 && Math.abs(angle)<75) {
        this.handleColor();
        let selection = document.getElementById('settings');
        selection.style.backgroundColor = 'blue';
        selection.style.color = 'white';
      }
      if(Math.abs(angle)>75) {
        angle = 0;
      }
    });
  }

  //Function for homeScreen
  homeScreen = () => {
    let curr = document.getElementsByClassName('display');
    let currentDisplay = "";

    for(currentDisplay of curr) {
      if(currentDisplay.style.visibility==="visible") {
        break;
      }
    }

    currentDisplay.style.visibility = "hidden";
    currentDisplay.style.height = "0";
    currentDisplay.style.width = "0";

    let home = document.getElementById('screen');
    home.style.visibility = "visible";
    home.style.height="45%";
    home.style.width="90%";
    home.style.borderTopLeftRadius="3%";
    home.style.borderTopRightRadius="5%";
  }

  //Function to switch screens according to menu options selected
  switchScreen = (e) => {
    let home = document.getElementById('screen');
    home.style.visibility="hidden";
    home.style.height="0";
    home.style.width="0";
    let screen = document.getElementById(e.id+'-display');
    if(document.getElementById("title") != null){
      document.getElementById("title").remove();
    }

    let img = document.createElement('img');
    if(e.id==='photos') {
      img.setAttribute("src", 'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg');
    }else if(e.id==='videos') {
      img.setAttribute("src", 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/03/YouTube-Dark-796x417.jpg');
    }else if(e.id==='songs') {
      img.setAttribute("src", 'https://www.androidpolice.com/wp-content/uploads/2019/02/Poweramp-Android-Auto.jpg');
    }else if(e.id==='playlists') {
      img.setAttribute("src", 'https://i.ytimg.com/vi/UIyoZgkCp6E/maxresdefault.jpg');
    }else if(e.id==='settings') {
      img.setAttribute("src", 'https://image.winudf.com/v2/image/ZHhpZGV2Lm9wZW5oaWRkZW5zZXR0aW5nc19zY3JlZW5zaG90c18xXzg3ZjI0NjEy/screen-1.jpg?fakeurl=1&type=.jpg');
    }
    img.id="title";
    img.style.height="100%";
    img.style.width="100%";
    screen.appendChild(img);
    screen.style.alignmentBaseline="center";
    screen.style.position="absolute";
    screen.style.visibility="visible";
    screen.style.height="45%";
    screen.style.width="85%" ;
    screen.style.borderRadius="3%";
    screen.style.marginLeft="15px";
  }

  handleClick= () => {
    let elements = document.getElementsByClassName('options');
    let el;
    for(el of elements) {
      if(el.style.backgroundColor==="blue") {
        break;
      }
    }
    this.switchScreen(el);
  }

  render() {
    return(
      <div className="App">
        <div className="ipod">
          <MenuList />
          <Control 
            rotate={this.handleRotation}
            homeScreen={this.homeScreen}
            option={this.handleClick} 
          />
        </div>
      </div>
    );
  }
}

//Exporting App
export default App;
