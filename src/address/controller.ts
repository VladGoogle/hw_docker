import { Context } from 'koa';

interface Address {
  street: string;
  house: number;
  city: string;
}

const Addresses = new Map<number, Address>();
Addresses.set(1, { street: 'Soborniy', house: 166, city: 'Zaporizhzhya' });

export function getAddress(ctx: Context) {
  const { id } = ctx.params;

  ctx.body = Addresses.get(parseInt(id)) || null;
}
