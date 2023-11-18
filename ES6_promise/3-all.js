import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {

  Promise.all([uploadPhoto(), createUser()]).then((value) => {
    /* console.log(value); */
    const { body } = value[0];
    const { firstName, lastName } = value[1];
    console.log(`${body} ${firstName} ${lastName}`);
  /*eslint-disable*/
  }).catch(() => {
    console.log('Signup system offline');
  });
}

export default handleProfileSignup;
