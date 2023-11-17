function getFullResponseFromAPI(success) {
  const myPromise = new Promise(((myResolve, myReject) => {
    if (success === true) {
      myResolve({
        status: 200,
        body: 'Success',
      });
    } else {
      myReject(new Error('The fake API is not working currently'));
    }
  }));

  /*eslint-disable*/
    myPromise.then(
      (value) => { value; },
      (error) => { error; },
    ).finally(() => console.log('Got a response from the API'));
    return myPromise;
  }
  
  export default getFullResponseFromAPI;
  