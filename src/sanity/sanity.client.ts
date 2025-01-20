
import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '8by0rgq', 
  dataset: 'production', 
  useCdn: true, // Use CDN for fast responses
});

export const fetchProducts = async () => {
  const query = '*[_type == "products"]';
  const products = await client.fetch(query);
  return products;
};
