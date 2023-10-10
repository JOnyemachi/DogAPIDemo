import './App.css'
import React from 'react';
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

const get_random_dog_image = () => {

  url = ACCESS_KEY;

  fetch(url)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    display_image(data.message);
  })
  .catch(function(error){
    console.log("Error: " + error);
  });


}

const display_image = (image_url) => {
  document.getElementById("image").src = image_url;
}


function App() {
  <div id="container">
  <img id="image"/>
  <button id="button" onclick="get_random_dog_image"> Random </button>
</div>

}

export default App
