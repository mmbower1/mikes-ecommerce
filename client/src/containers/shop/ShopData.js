const SHOP_DATA = [
  {
    id: 1,
    title: 'Tinctures',
    routeName: 'tinctures',
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1562782567-a8e7809893bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imageUrl: 'https://images.unsplash.com/flagged/photo-1564833125683-b9fde4516274?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imageUrl: '',
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imageUrl: 'https://images.unsplash.com/photo-1560877241-1dc5569c06a8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 16
      }
    ]
  },
  {
    id: 2,
    title: 'Edibles',
    routeName: 'edibles',
    items: [
      {
        id: 1,
        name: 'Adidas NMD',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 220
      },
      {
        id: 2,
        name: 'Adidas Yeezy',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 280
      },
      {
        id: 3,
        name: 'Black Converse',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 110
      },
      {
        id: 4,
        name: 'Nike White AirForce',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 160
      },
      {
        id: 5,
        name: 'Nike Red High Tops',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 160
      },
      {
        id: 6,
        name: 'Nike Brown High Tops',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 160
      },
      {
        id: 7,
        name: 'Air Jordan Limited',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 190
      },
      {
        id: 8,
        name: 'Timberlands',
        imageUrl: 'https://images.unsplash.com/photo-1580750882617-9ee40463d9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 200
      }
    ]
  },
  {
    id: 3,
    title: 'Topicals',
    routeName: 'topicals',
    items: [
      {
        id: 1,
        name: 'Black Jean Shearling',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 125
      },
      {
        id: 2,
        name: 'Blue Jean Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 90
      },
      {
        id: 3,
        name: 'Grey Jean Jacket',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 90
      },
      {
        id: 4,
        name: 'Brown Shearling',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 165
      },
      {
        id: 5,
        name: 'Tan Trench',
        imageUrl: 'https://images.unsplash.com/photo-1559856668-d3e666959b28?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        price: 185
      }
    ]
  },
  {
    id: 4,
    title: 'Capsules',
    routeName: 'capsules',
    items: [
      {
        id: 1,
        name: 'Blue Tanktop',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 2,
        name: 'Floral Blouse',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 20
      },
      {
        id: 3,
        name: 'Floral Dress',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 80
      },
      {
        id: 4,
        name: 'Red Dots Dress',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 80
      },
      {
        id: 5,
        name: 'Striped Sweater',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 45
      },
      {
        id: 6,
        name: 'Yellow Track Suit',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 135
      },
      {
        id: 7,
        name: 'White Blouse',
        imageUrl: 'https://images.unsplash.com/photo-1563483783066-9c82a0daaaf3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 20
      }
    ]
  },
  {
    id: 5,
    title: 'Pets',
    routeName: 'pets',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: 'https://images.unsplash.com/photo-1573461217066-9413a9627ccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1571170685445-94f230d55140?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://images.unsplash.com/photo-1571941727012-783f3768de46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1566240234333-c562bad01181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
        price: 25
      }
    ]
  },
  {
    id: 6,
    title: 'Sleep',
    routeName: 'sleep',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: '',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      }
    ]
  },
  {
    id: 7,
    title: 'Bundles',
    routeName: 'bundles',
    items: [
      {
        id: 1,
        name: 'Camo Down Vest',
        imageUrl: '',
        price: 325
      },
      {
        id: 2,
        name: 'Floral T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1557934866-261e8b45f102?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
        price: 20
      },
      {
        id: 3,
        name: 'Black & White Longsleeve',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 4,
        name: 'Pink T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      },
      {
        id: 5,
        name: 'Jean Long Sleeve',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 40
      },
      {
        id: 6,
        name: 'Burgundy T-shirt',
        imageUrl: 'https://images.unsplash.com/photo-1565913163055-810fb688349b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        price: 25
      }
    ]
  }
]

export default SHOP_DATA;