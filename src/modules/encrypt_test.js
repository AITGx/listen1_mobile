// /* eslint-disable no-shadow */
// /* eslint-disable no-unused-vars */
// const crypto = require('crypto');
//
// const iv = Buffer.from('0102030405060708');
// const presetKey = Buffer.from('0CoJUm6Qyw8W8jud');
// const linuxapiKey = Buffer.from('rFgB&h#%2?^eDg:Q');
// const base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// const publicKey =
//   '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----';
// const eapiKey = 'e82ckenh8dichen8';
//
// const aesEncrypt = (buffer, mode, key, iv) => {
//   const cipher = crypto.createCipheriv(`aes-128-${mode}`, key, iv);
//
//   return Buffer.concat([cipher.update(buffer), cipher.final()]);
// };
//
// const rsaEncrypt = (buffer, key) => {1
//   buffer = Buffer.concat([Buffer.alloc(128 - buffer.length), buffer]);
//
//   return crypto.publicEncrypt(
//     {key, padding: crypto.constants.RSA_NO_PADDING},
//     buffer,
//   );
// };
//
// const weapi = (object) => {
//   const text = JSON.stringify(object);
//   const secretKey = crypto
//     .randomBytes(16)
//     .map((n) => base62.charAt(n % 62).charCodeAt());
//
//   // const secretKey = Buffer.from('1234123412341234');
//   return {
//     params: aesEncrypt(
//       Buffer.from(
//         aesEncrypt(Buffer.from(text), 'cbc', presetKey, iv).toString('base64'),
//       ),
//       'cbc',
//       secretKey,
//       iv,
//     ).toString('base64'),
//     encSecKey: rsaEncrypt(secretKey.reverse(), publicKey).toString('hex'),
//   };
// };
//
// function f1(text) {
//   // console.log(weapi({name: 'secret'}))
//   const result = aesEncrypt(Buffer.from(text), 'cbc', presetKey, iv).toString(
//     'hex',
//   );
//
//   console.log(result);
//
//   return result;
// }
//
// function f2(text) {
//   const CryptoJS = require('../../vendor/cryptojs_aes');
//   const key = '0CoJUm6Qyw8W8jud';
//   const keyutf = CryptoJS.enc.Utf8.parse(key);
//   const iv = CryptoJS.enc.Utf8.parse('0102030405060708');
//   const enc = CryptoJS.AES.encrypt(text, keyutf, {
//     iv,
//     mode: CryptoJS.mode.CBC,
//   });
//   const encStr = enc.toString();
//
//   console.log(CryptoJS.enc.Hex.stringify(CryptoJS.enc.Base64.parse(encStr)));
// }
//
// function f11(text) {
//   const result = rsaEncrypt(Buffer.from(text), publicKey).toString('hex');
//
//   console.log(result);
// }
//
// function f22(text) {
//   const CryptoJS = require('../../vendor/cryptojs_aes');
//   const JSEncrypt = require('../../vendor/jsencrypt');
//   const k = text;
//   const rsaEncrypt = new JSEncrypt({padding: 'RSA_ZERO_PADDING'});
//   const publicKey =
//     '-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDgtQn2JZ34ZC28NWYpAUd98iZ37BUrX/aKzmFbt7clFSs6sXqHauqKWqdtLkF2KexO40H1YTX8z2lSgBBOAxLsvaklV8k4cBFK9snQXE9/DDaFt6Rr7iVZMldczhC0JNgTz+SHXT6CBHuX3e9SdB1Ua44oncaTWz7OBGLbCiK45wIDAQAB\n-----END PUBLIC KEY-----';
//
//   rsaEncrypt.setPublicKey(publicKey);
//   const secKey = rsaEncrypt.encrypt(k);
//   // console.log(secKey);
//   const buf = CryptoJS.enc.Base64.parse(secKey);
//
//   console.log(CryptoJS.enc.Hex.stringify(buf));
// }
//
// // f1('test');
// // f2('test');
// // f11('test');
// // f22('test');
// console.log('weapi');
// console.log(weapi({name: 'secret'}));
// const weapi2 = require('./crypto');
//
// console.log('weapi2');
// console.log(weapi2({name: 'secret'}));
