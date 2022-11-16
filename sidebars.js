module.exports = {
  // Home Page sidebar
  docs: [
    {
      type: 'category',
      label: 'Overview', // Heading
      collapsed: false,
      items: ['index'], // Sub-heading (Heading of all files included )
    },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: ['Avyana_Software/installation', 'Avyana_Software/IsaacSim'],
    }
  ],
  docs2: [
    {
      type: 'category',
      label: 'Build Model',
      collapsed: false,
      items: ['model_index']
    }
  ],
  docs3: [
    {
      type: 'category',
      label: 'Studio',
      collapsed: false,
      items: ['studio_index']
    },
    {
      type: 'category',
      label: 'Connect',
      collapsed: false,
      items: ['Studio/connect/websocket']
    },
    {
      type: 'category',
      label: 'Custom Build',
      collapsed: false,
      items: ['Studio/custom_build/index']
    },
  ]
  
}
