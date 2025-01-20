import { client } from "@/sanity/lib/client";
export const dynamic = 'force-static'
export async function GET() {
  try {
    const products = await client.fetch(`*[_type == "products"] {
 

[
  {
    "_id": "2P4ew3n0aFKlAn3Aum9jzF",
    "title": "SleekSpin",
    "priceWithoutDiscount": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "tags": [
      "gallery"
    ],
    "price": 20,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/81a5b7de166f930870a82f8f3e661b38a70de9f4-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10
  },
  {
    "inventory": 20,
    "tags": [
      "featured",
      "instagram",
      "gallery"
    ],
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/4cd62915914fb385550532c3d1f0c4d64c1f8cca-312x312.png",
    "price": 20,
    "priceWithoutDiscount": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "_id": "3lfjJc6xfJVyGl3sMldeD4",
    "title": "Citrus Edge"
  },
  {
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/af6865cccbcd12d2183f8090324d0e5c5732e57f-312x312.png",
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 40,
    "_id": "3lfjJc6xfJVyGl3sMldeKI",
    "title": "Rose Luxe Armchair",
    "price": 20,
    "priceWithoutDiscount": 30,
    "badge": "Sales",
    "tags": [
      "featured",
      "instagram"
    ]
  },
  {
    "price": 20,
    "badge": "New",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/da30e4081507761b5b7558807735f8f17756c9c3-624x624.png",
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "title": "Library Stool Chair",
    "priceWithoutDiscount": null,
    "inventory": 20,
    "tags": [
      "featured",
      "instagram",
      "gallery"
    ],
    "_id": "3lfjJc6xfJVyGl3sMldeaY"
  },
  {
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "tags": [
      "instagram"
    ],
    "_id": "7uWMcA2njGzrktIbr3a7dX",
    "price": 20,
    "priceWithoutDiscount": null,
    "badge": null,
    "title": "Modern Cozy",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/384113dbb404b90828b52ffca9c3ccca7a4f626b-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10
  },
  {
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "priceWithoutDiscount": null,
    "badge": null,
    "price": 40,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/f49ec164e3b62fbf8ad5d3b7cf0e5622478ee0ba-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10,
    "tags": [
      "gallery"
    ],
    "_id": "7uWMcA2njGzrktIbr3a7oH",
    "title": "Scandi Dip Set"
  },
  {
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/4cd62915914fb385550532c3d1f0c4d64c1f8cca-312x312.png",
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "inventory": 20,
    "_id": "Q9AwUxhBwTUyc7vQiJB9Jw",
    "title": "Citrus Edge",
    "priceWithoutDiscount": null,
    "badge": null,
    "price": 20,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "tags": [
      "featured",
      "instagram",
      "gallery"
    ]
  },
  {
    "_id": "Q9AwUxhBwTUyc7vQiJB9be",
    "title": "Rose Luxe Armchair",
    "price": 20,
    "badge": "Sales",
    "inventory": 40,
    "tags": [
      "featured",
      "instagram"
    ],
    "priceWithoutDiscount": 30,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/af6865cccbcd12d2183f8090324d0e5c5732e57f-312x312.png",
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing"
  },
  {
    "priceWithoutDiscount": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/81a5b7de166f930870a82f8f3e661b38a70de9f4-312x312.png",
    "tags": [
      "gallery"
    ],
    "inventory": 10,
    "_id": "R7xmE9AiRKRe00DDqr0ALt",
    "title": "SleekSpin",
    "price": 20,
    "badge": null,
    "category": {
      "_id": "b5710116-09af-4d0e-aa9a-dcd02fe919a9",
      "title": "Desk Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing"
  },
  {
    "_id": "R7xmE9AiRKRe00DDqr0AUV",
    "title": "Library Stool Chair",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/da30e4081507761b5b7558807735f8f17756c9c3-624x624.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "tags": [
      "featured",
      "instagram",
      "gallery"
    ],
    "price": 20,
    "priceWithoutDiscount": null,
    "badge": "New",
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "inventory": 20
  },
  {
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10,
    "tags": [
      "instagram"
    ],
    "price": 20,
    "title": "Modern Cozy",
    "priceWithoutDiscount": null,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/384113dbb404b90828b52ffca9c3ccca7a4f626b-312x312.png",
    "_id": "TWryEU74aunIsETY7w9EJy"
  },
  {
    "_id": "d1LLwGDBi6Z6C84AFNiu0V",
    "title": "Scandi Dip Set",
    "price": 40,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/f49ec164e3b62fbf8ad5d3b7cf0e5622478ee0ba-312x312.png",
    "category": {
      "_id": "407a8583-6203-4f61-becf-8e8b4c5461b6",
      "title": "Wooden Chair"
    },
    "priceWithoutDiscount": null,
    "badge": null,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "inventory": 10,
    "tags": [
      "gallery"
    ]
  },
  {
    "_id": "inT1LwHvdDi1C4OTM2Fxsf",
    "badge": "New",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/0625575b88f2a2479f9d194dca7322fa5b3fb29d-312x312.png",
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "inventory": 20,
    "title": "Nordic Spin",
    "price": 30,
    "priceWithoutDiscount": null,
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "tags": [
      "instagram"
    ]
  },
  {
    "price": 8,
    "priceWithoutDiscount": null,
    "badge": "Sales",
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "_id": "j0PI7rji2yNsxVPmbWP8YS",
    "title": "Gray Elegance",
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/e284d160de43302fabbd063072c1fd021396094b-312x312.png",
    "inventory": 20,
    "tags": [
      "instagram",
      "gallery"
    ]
  },
  {
    "title": "Ivory Charm",
    "price": 20,
    "category": {
      "_id": "26fd7176-3c4d-40fc-a73a-3b85a9b5e15f",
      "title": "Wing Chair"
    },
    "inventory": 20,
    "_id": "weGqyVtgmPprLJmgHOvDLp",
    "priceWithoutDiscount": null,
    "badge": null,
    "imageUrl": "https://cdn.sanity.io/images/5x47y4y0/production/7e3a3a9ca8b3003aa2733bdf94db7ea4345f5bf4-312x312.png",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    "tags": [
      "featured",
      "gallery"
    ]
  }
]
`);

    return new Response(JSON.stringify(products), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}