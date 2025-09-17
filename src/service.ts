import * as crypto from "crypto";

const algorithm = "aes-256-cbc";
// const key = crypto.randomBytes(32);
const key = process.env.KEY_SECRET;
// const iv = crypto.randomBytes(16);
const iv = process.env.IV_SECRET;

export const encode = (password) => {
    console.log(`---------------------------encode > `, Buffer.from(key), Buffer.from(iv));
    const encodeCipher = crypto.createCipheriv(algorithm, key, iv);
    // console.log("encodeCipher ", encodeCipher);
    const encrypted = encodeCipher.update(password, 'utf-8', 'base64');
    const final = encrypted + encodeCipher.final('base64');
    console.log("encrypted(final)", final, final.length);
    return final;
};
export const decode = (encryptedStr: any) => {
    console.log(`---------------------------decode > `, Buffer.from(key), Buffer.from(iv));
    const decodeCipher = crypto.createDecipheriv(algorithm, key, iv);
    // console.log("decodeCipher ", decodeCipher);
    const decrypted = decodeCipher.update(encryptedStr, 'base64', 'utf-8');
    const d_final = decrypted + decodeCipher.final('utf-8');
    console.log("decrypted(final) ", d_final);
    return d_final;
};