function handleResponseFromAPI(promise) {
  const myPromise = new Promise(((myResolve, myReject) => {
    if (promise === true) {
      myResolve({
        status: 200,
        body: 'Success',
      });
    } else {
      myReject(new Error());
    }
  }));

  /*eslint-disable*/
    myPromise.then(
      (value) => { console.log("Got a response from the API") },
      (error) => { console.log("Got a response from the API") },
    );
    return myPromise;
  }
  
  export default handleResponseFromAPI;
