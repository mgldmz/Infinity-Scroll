const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

/* Unsplash API */
const count = 10;
const apiKey = 'datgKQPrI6T4jVzdz1MMZH8s1qDrM-vC4N47-MBx5Uw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


/* Create Elements for links and photos, add to DOM*/
function displayPhotos(){
    //  Run photos for  each object in photosArray
    photosArray.forEach((photo) =>{
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //Create <img> for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.description);
        img.setAttribute('title', photo.description);
        //Put <img> inside <a>, then both inside imageContainer
        item.appendChild(img);
        imageContainer.appendChild(item);
    });
}

/* Get photos from unspash API */

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    }catch(error){
        //Catch error here
        console.log(error);
    }
}

/* On load */

getPhotos();

