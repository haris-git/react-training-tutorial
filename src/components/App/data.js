export default [
  {
    name: 'Lion',
    scientificName: 'Panthero leo',
    order: 'Carnivora',
    size: 140,
    diet: ['meat'],
  },
  {
    name: 'Gorilla',
    scientificName: 'Gorilla beringei',
    order: 'Primates',
    size: 205,
    diet: ['plants', 'insects'],
    additional: {
      notes: 'This is the eastern gorilla. There is also a western gorilla that is a different species.'
    }
  },
  {
    name: 'Zebra',
    scientificName: 'Equus quagga',
    order: 'Perissodactyla',
    size: 322,
    diet: ['plants'],
    additional: {
      notes: 'There are three different species of zebra.',
      link: 'https://en.wikipedia.org/wiki/Zebra'
    }
  }
]