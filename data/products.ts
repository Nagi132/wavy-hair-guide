export const products = {
  shampoos: [
    {
      id: 'redken-frizz-dismiss',
      name: 'Redken Frizz Dismiss Shampoo',
      brand: 'Redken',
      price: 24.99,
      size: '300ml',
      description: 'Sulfate-free shampoo for frizzy, unmanageable hair',
      benefits: [
        'Controls frizz',
        'Gentle cleansing',
        'Adds moisture'
      ],
      bestFor: [
        '2B waves',
        '2C waves',
        'Frizzy hair'
      ],
      rating: 4.5,
      reviews: 128,
      image: '/images/products/redken-shampoo.jpg',
      category: 'Shampoo',
      priceCategory: 'Premium'
    },
    {
      id: 'not-your-mothers',
      name: 'Not Your Mother\'s Beach Babe Shampoo',
      brand: 'Not Your Mother\'s',
      price: 8.99,
      size: '250ml',
      description: 'Texturizing clean shampoo for beachy waves',
      benefits: [
        'Enhances waves',
        'Adds texture',
        'Affordable'
      ],
      bestFor: [
        '2A waves',
        '2B waves',
        'Fine hair'
      ],
      rating: 4.3,
      reviews: 256,
      image: '/images/products/nym-shampoo.jpg',
      category: 'Shampoo',
      priceCategory: 'Budget'
    }
  ],
  conditioners: [
    {
      id: 'briogeo-repair',
      name: 'Briogeo Don\'t Despair, Repair!',
      brand: 'Briogeo',
      price: 36.00,
      size: '240ml',
      description: 'Deep conditioning mask for damaged hair',
      benefits: [
        'Deep conditioning',
        'Repairs damage',
        'Strengthens hair'
      ],
      bestFor: [
        'Damaged hair',
        'Dry hair',
        'All wave types'
      ],
      rating: 4.7,
      reviews: 342,
      image: '/images/products/briogeo-mask.jpg',
      category: 'Conditioner',
      priceCategory: 'Premium'
    }
  ],
  stylingProducts: [
    {
      id: 'harrys-putty',
      name: 'Harry\'s Texturizing Putty',
      brand: 'Harry\'s',
      price: 12.99,
      size: '150ml',
      description: 'Lightweight styling putty for natural-looking waves',
      benefits: [
        'Natural hold',
        'Enhances texture',
        'Non-greasy'
      ],
      bestFor: [
        '2A waves',
        '2B waves',
        'Fine hair'
      ],
      rating: 4.4,
      reviews: 89,
      image: '/images/products/harrys-putty.jpg',
      category: 'Styling',
      priceCategory: 'Budget'
    }
  ]
};

export type Product = typeof products.shampoos[0];

export const categories = [
  'Shampoo',
  'Conditioner',
  'Styling',
  'Treatment',
  'Oil'
] as const;

export const priceCategories = [
  'Budget',
  'Mid-range',
  'Premium'
] as const;

export const waveTypes = [
  '2A',
  '2B',
  '2C'
] as const;