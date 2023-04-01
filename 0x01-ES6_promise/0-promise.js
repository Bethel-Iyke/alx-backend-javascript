const promise = new Promise((resolve, reject) => {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    resolve('true');
  } else {
    reject(new Error('false'));
  }
});

export default function getResponseFromAPI() {
  return promise;
}
