import CryptoJs from "crypto-js";
export function encryptMessage(message, key, callback) {
  const encryptMessage = CryptoJs.AES.encrypt(message, key).toString();
  callback(encryptMessage);
}

export function encryptMessagePromise(message, key) {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    const encryptMessage = CryptoJs.AES.encrypt(message, key).toString();
    if (encryptMessage) {
      resolve(encryptMessage);
    } else {
      reject(new Error("failed to encrypt message"));
    }
    // }, 2000);
  });
}

// const message = {
//   name: "KJ",
//   passsword: "123456",
// };
// const secretKey = "abcdefghijklmnopqrstuvwxyz";

// encryptMessage(message, secretKey, (encryptMessage) => {
//   console.log(encryptMessage);
// });

// encryptMessagePromise(JSON.stringify(message), secretKey).then(
//   (encryptMessage) => console.log(encryptMessage)
// );
