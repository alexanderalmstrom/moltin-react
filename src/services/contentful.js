import { createClient as ContentfulClient } from "contentful";

if (!process.env.CONTENTFUL_SPACE_ID) {
  throw new Error("Contentful space id is missing!");
}

if (!process.env.CONTENTFUL_ACCESS_TOKEN) {
  throw new Error("Contentful access token is missing!");
}

const config = {
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
};

if (process.env.NODE_ENV == "development") {
  if (!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN) {
    throw new Error("Contentful preview access token is missing!");
  }

  config.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
  config.host = "preview.contentful.com";
}

export const Contentful = ContentfulClient(config);
