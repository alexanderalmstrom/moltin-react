if (!process.env.MOLTIN_CLIENT_ID)
  throw new Error('Moltin client id is missing!');

import { gateway as MoltinGateway } from '@moltin/sdk';

const config = {
  client_id: process.env.MOLTIN_CLIENT_ID,
}

export const Moltin = MoltinGateway(config);
