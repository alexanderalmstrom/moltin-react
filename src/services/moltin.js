if (!process.env.MOLTIN_CLIENT_ID)
  throw new Error('Moltin client id is missing!');

import { gateway as MoltinClient } from '@moltin/sdk';

const config = {
  client_id: process.env.MOLTIN_CLIENT_ID,
};

export const Moltin = MoltinClient(config);
