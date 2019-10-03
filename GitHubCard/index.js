/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/J2Macwilliams')
.then(response => {
  console.log(response);
  // response.data.message.forEach(item => {
  //   const newDog = DogCard(item);
  //   entryPoint.appendChild(newDog);
  // })
})
.catch(error => {
console.log("The data was not returned", error);
});
// https://github.com/J2Macwilliams
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
const cards = document.querySelector('.cards');

function GitHubCard(handle){
  const newCard = document.createElement('div'),
        newImg = document.createElement('img'),
        newCardInfo = document.createElement('div'),
        newName = document.createElement('h3'),
        newUserName = document.createElement('p'),
        newLocation = document.createElement('p'),
        newProfile = document.createElement('p'),
        newAnchor = document.createElement('a'),
        newFollowers = document.createElement('p'),
        newFollowing = document.createElement('p'),
        newBio = document.createElement('p');

  //set content
  newImg.src = 'handle.src';
  newName.textContent = 'handle.name';
  newUserName.textContent = 'handle.login';
  newLocation.textContent = 'handle.location';
  newAnchor.textContent = 'handle.url';
  newFollowers.textContent = 'handle.followers';
  newFollowing.textContent = 'handle.following';
  newBio.textContent = 'handle.bio';


  //add Class
  newCard.classList.add(card);
  newCardInfo.classList.add(card-info);
  newName.classList.add(name);
  newUserName.classList.add(username);

  //Set up structure of elements 
  newCard.appendChild(newImg);
  newCard.appendChild(newCardInfo);
  newCardInfo.appendChild(newName);
  newCardInfo.appendChild(newUserName);
  newCardInfo.appendChild(newLocation);
  newCardInfo.appendChild(newFollowers);
  newCardInfo.appendChild(newFollowing);
  newCardInfo.appendChild(newBio);
  newCardInfo.appendChild(newProfile);
  newProfile.appendChild(newAnchor);



  return newCard
}

cards.appendChild(GitHubCard(handle));
/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
