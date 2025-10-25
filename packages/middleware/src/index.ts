import { build402Body } from '@402gate/core';

export function create402Middleware(opts:{
  price:number; token:'402G'|'USDC'|'SOL'; recipient:string; ttlSec?:number;
}) {
  return function(_req:any, res:any, next:any){
    const body = build402Body({
      requestId: crypto.randomUUID(),
      amount: opts.price,
      currency: opts.token,
      recipient: opts.recipient,
      acceptedMints: ['402G','USDC','SOL'],
      ttlSec: opts.ttlSec ?? 120,
      instructions: 'Pay and resend with Payment-Proof header'
    });
    return res?.status ? res.status(402).json(body) : body;
  };
}
