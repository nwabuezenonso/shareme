import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'

// use cdn allow to show images to our clients

export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2021-11-16',
    useCdn: true,
    token: process.env.REACT_APP_SANITY_TOKEN
})

// when working with image
const builder = imageUrlBuilder(client);

export const UrlFor = (source) => builder.image(source);