import { Keypair } from "@solana/web3.js";

const kp = Keypair.generate();

console.log(`wallet generate: ${kp.publicKey.toBase58()}`)

console.log(`secret key is: ${kp.secretKey}`)