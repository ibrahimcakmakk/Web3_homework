import * as dotenv from "dotenv";
dotenv.config();

import bs58 from "bs58"
const secretKeyBase58 = process.env.SECRET_KEY;

if (!secretKeyBase58) {
    throw new Error("SECRET_KEY çevresel değişkeni ayarlanmamış.");
  }
  const secretKeyUint8Array = bs58.decode(secretKeyBase58);

  console.log(`my secret key: ${secretKeyUint8Array}`);