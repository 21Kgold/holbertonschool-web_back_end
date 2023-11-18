import handleResponseFromAPI from "./2-then";

const successPromise = Promise.resolve();
const failurePromise = Promise.reject();
  
handleResponseFromAPI(successPromise);
handleResponseFromAPI(failurePromise);
