/* Unsplash API */
const count = 10;
const apiKey = 'datgKQPrI6T4jVzdz1MMZH8s1qDrM-vC4N47-MBx5Uw';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

/* Get photos from unspash API */

async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    }catch(error){
        //Catch error here
    }
}

/* On load */

getPhotos();