const myPromise = new Promise((resolve, reject) => {
  // your logic

  throw new Error("My custom error");
  resolve("success");

  // reject('error');
});

// 1 then
// 2 catch
// 3 finally

myPromise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
