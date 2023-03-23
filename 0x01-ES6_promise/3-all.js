import { uploadPhoto, createUser } from ./utils.js

function handleProfileSignup() { 
  promise.all([uploadphoto(), createUser()])
    .then(([photo, user]) => {
      console.log(`body ${user.firstName} ${user.lastName}');
    })
    .catch(() => {
      console.log('Signup system offline');
    });
 }
