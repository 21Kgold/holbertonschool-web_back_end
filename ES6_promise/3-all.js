import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();

  return Promise.all([promise1, promise2]).then((result) => {
    /* console.log(result); */
    const { body } = result[0];
    const { firstName, lastName } = result[1];
    console.log(`${body} ${firstName} ${lastName}`);
  /*eslint-disable*/
  }).catch(() => {
    console.log('Signup system offline');
  });
}

export default handleProfileSignup;
