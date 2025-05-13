import { it, expect, describe } from "vitest";
import { encryptMessage, encryptMessagePromise } from "./async";
import CryptoJs from "crypto-js";

describe("encryptMessage()", () => {
  it("should encrypt a message", async () => {
    const message = "KJ";
    const secretKey = "abcdefg";
    const encryptedMessage = await new Promise((resolve, reject) => {
      encryptMessage(message, secretKey, (encryptMessage) =>
        resolve(encryptMessage)
      );
    });
    expect(encryptedMessage).toBeDefined();
  });
});

describe("encryptMessagePromise()", () => {
  it("should just pass", async () => {
    const message = "KJ";
    const secretKey = "123456";
    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();
  });

  it("should encrypt the message currectly", async () => {
    const message = "KJ";
    const secretKey = "123456";
    const encryptedData = await encryptMessagePromise(message, secretKey);
    expect(encryptedData).toBeDefined();

    const decryptedMessage = CryptoJs.AES.decrypt(
      encryptedData,
      secretKey
    ).toString(CryptoJs.enc.Utf8);
    expect(decryptedMessage).toBe;
    message;
  });
});
