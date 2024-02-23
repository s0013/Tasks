
function fetchDataWithCallback(callback) {
  setTimeout(() => {
    const data = 'Some data';
    callback(null, data); 
  }, 2000);
}


function processData(error, data) {
  if (error) {
    console.error('An error occurred with callback:', error);
  } else {
    console.log('Data processed with callback:', data);
  }
}


fetchDataWithCallback(processData);


function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = 'Some data';
      resolve(data); 
    }, 2000);
  });
}


fetchDataWithPromise()
  .then(data => {
    console.log('Data processed with promise:', data);
  })
  .catch(error => {
    console.error('An error occurred with promise:', error);
  });
