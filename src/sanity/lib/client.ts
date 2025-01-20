import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


// lib/sanityClient.js
export const fetchProducts = async (categoryId?: string) => {
  const query = categoryId
    ? `*[_type == "products" && references("${categoryId}")]`
    : '*[_type == "products"]';  // Fetch all products if no category filter is applied

  const products = await client.fetch(query);
  return products;
};

