import { Contentful, Moltin } from "../services";

export const loadCampaigns = () => ({
  type: "GET_CAMPAIGNS",
  payload: Contentful.getEntries({
    content_type: "campaign"
  })
});

export const loadProducts = () => ({
  type: "GET_PRODUCTS",
  payload: Moltin.Products.All()
});

export const loadCart = () => ({
  type: "GET_CART",
  payload: Moltin.Cart().Items()
});
