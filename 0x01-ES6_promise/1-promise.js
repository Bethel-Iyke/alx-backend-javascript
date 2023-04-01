const trueBool = { status: 200, body: 'Success' };
const falseBool = 'The fake API is not working currently';

export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line no-constant-condition
    if (success) {
      resolve(trueBool);
    } else {
      reject(new Error(falseBool));
    }
  });
}
