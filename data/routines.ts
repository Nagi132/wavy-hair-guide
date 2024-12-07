export const routines = {
  basic: {
    title: 'Basic Wavy Hair Routine',
    description: 'A simple, effective routine for beginners',
    steps: [
      {
        id: 1,
        title: 'Cleanse',
        description: 'Use a sulfate-free shampoo, focusing on the scalp',
        duration: '5 minutes',
        products: ['redken-frizz-dismiss', 'not-your-mothers']
      },
      {
        id: 2,
        title: 'Condition',
        description: 'Apply conditioner from mid-lengths to ends, detangle gently',
        duration: '3-5 minutes',
        products: ['briogeo-repair']
      },
      {
        id: 3,
        title: 'Style',
        description: 'Apply styling products to soaking wet hair, scrunch to enhance waves',
        duration: '5-10 minutes',
        products: ['harrys-putty']
      }
    ],
    frequency: '2-3 times per week',
    totalTime: '15-20 minutes'
  },
  intermediate: {
    title: 'Enhanced Wavy Hair Routine',
    description: 'A more detailed routine for those looking to maximize their waves',
    steps: [
      {
        id: 1,
        title: 'Pre-poo Treatment',
        description: 'Apply hair oil to dry hair before washing',
        duration: '10 minutes',
        optional: true
      },
      {
        id: 2,
        title: 'Cleanse',
        description: 'Double cleanse if needed, focus on scalp',
        duration: '5-7 minutes'
      },
      {
        id: 3,
        title: 'Deep Condition',
        description: 'Apply deep conditioner, use heat cap if available',
        duration: '15-30 minutes'
      },
      {
        id: 4,
        title: 'Style',
        description: 'Layer products, use denman brush, scrunch',
        duration: '10-15 minutes'
      }
    ],
    frequency: 'Once per week',
    totalTime: '40-60 minutes'
  }
};