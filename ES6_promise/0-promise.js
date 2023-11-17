function getResponseFromAPI() {
  const myPromise = new Promise(((myResolve, myReject) => {
    myResolve();
    myReject();
  }));

  myPromise.then(
    () => { /* code if successful */ },
    () => { /* code if some error */ },
  );
  return myPromise;
}

export default getResponseFromAPI;
