import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = uploadPhoto(fileName);
  const promise2 = signUpUser(firstName, lastName);

  return Promise.allSettled([promise2, promise1])
    .then((result) => { result })
    .catch(() => { Error(); });
}

export default handleProfileSignup;
