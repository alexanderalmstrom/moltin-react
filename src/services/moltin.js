import { gateway as MoltinGateway } from '@moltin/sdk'

export const Moltin = MoltinGateway({
  client_id: process.env.MOLTIN_CLIENT_ID
})
