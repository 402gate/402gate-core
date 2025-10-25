export const PAYMENT_PROOF_HEADER = 'Payment-Proof';

export type AcceptedMint = '402G' | 'USDC' | 'SOL';

export const build402Body = (m:{
  requestId:string; amount:number; currency:AcceptedMint;
  recipient:string; acceptedMints:AcceptedMint[];
  ttlSec?:number; instructions?:string;
}) => ({
  status:402,
  ...m
});
