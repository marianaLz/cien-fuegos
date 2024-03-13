import entradasImage from './images/entradas.jpeg';
import comidaImage from './images/comida.jpeg';
import postresImage from './images/postres.jpeg';
import bebidasImage from './images/bebidas.jpeg';
import vinosImage from './images/vinos.jpeg';

import photoImage1 from './images/cien-fuegos-sma-1.jpeg';
import photoImage2 from './images/cien-fuegos-sma-2.jpeg';
import photoImage3 from './images/cien-fuegos-sma-3.jpeg';
import photoImage4 from './images/cien-fuegos-sma-4.jpeg';
import photoImage5 from './images/cien-fuegos-sma-5.jpeg';
import photoImage6 from './images/cien-fuegos-sma-6.jpeg';
import photoImage7 from './images/cien-fuegos-sma-7.jpeg';
import photoImage8 from './images/cien-fuegos-sma-8.jpeg';
import photoImage9 from './images/cien-fuegos-sma-9.jpeg';

export const menu = {
  ENTRADAS: {
    image: entradasImage,
    categories: {
      entradas: [
        {
          name: 'Ensalada de Betabel Coliflor y Lechugas',
          description: 'Beetroot / Cauliflower / Lettuce Salad',
          price: 210,
        },
        {
          name: 'Ceviche Vegano',
          description: 'Vegan Ceviche',
          price: 195,
        },
        {
          name: 'Mejillones al Vino Blanco',
          description: 'Mussels in White Wine',
          price: 330,
        },
        {
          name: 'Brocheta de Res Y Chorizo',
          description: 'Beef and Chorizo Kebab',
          price: 240,
        },
      ],
    },
  },
  COMIDA: {
    image: comidaImage,
    categories: {
      pastas: [
        {
          name: 'Lasagna alla Bolognese',
          price: 290,
        },
        {
          name: 'Tagliolini alla Matriciana',
          price: 290,
        },
        {
          name: 'Fettuccine al Ragu',
          price: 290,
        },
        {
          name: 'Ravioli de Espinaca y Ricota al burro',
          price: 290,
        },
      ],
      'parrilla-grill': [
        {
          name: 'Trucha salmonada Al Carbon',
          description: 'Rainbow Trount on the grill',
          price: 350,
        },
        {
          name: 'Chuleton De Cerdo',
          description: 'Grilled Porck Chop',
          price: 360,
        },
        {
          name: 'New York Steake',
          price: 460,
        },
        {
          name: 'Hamburguesa de res',
          price: 230,
        },
      ],
      'pizza clásica': [
        {
          name: 'Margherita',
          price: 250,
        },
        {
          name: 'Prosciutto e Funghi',
          price: 300,
        },
        {
          name: 'Chorizo / Arugula / Parmesano',
          price: 300,
        },
        {
          name: '4 Stagioni',
          price: 290,
        },
        {
          name: 'Vegetariana',
          price: 260,
        },
        {
          name: 'Salame',
          price: 300,
        },
        {
          name: 'Marinara',
          price: 220,
        },
      ],
      'pizzas blancas': [
        {
          name: '4 Quesos',
          price: 310,
        },
        {
          name: 'Carbonara',
          price: 320,
        },
        {
          name: 'Prosciutto de Parma',
          price: 320,
        },
      ],
      'pizzas destacadas': [
        {
          name: 'Calzone',
          price: 330,
        },
        {
          name: 'Focaccia Rellena',
          price: 300,
        },
      ],
    },
  },
  POSTRES: {
    image: postresImage,
    categories: {
      postres: [
        {
          name: 'Tartaleta de chocolate',
          price: 180,
        },
        {
          name: 'Parfait De Zabayon',
          price: 150,
        },
        {
          name: 'Tiramisu',
          price: 150,
        },
      ],
    },
  },
  BEBIDAS: {
    image: bebidasImage,
    categories: {
      'cerveza artesanal': [
        {
          name: 'Monopolio, Lager',
          description: 'San Luis Postosí',
          price: 110,
        },
        {
          name: 'Monopolio, I.P.A.',
          description: 'San Luis Postosí',
          price: 120,
        },
        {
          name: 'Hercules, Pilsner',
          description: 'Querétaro',
          price: 120,
        },
        {
          name: 'Ginger Beer, 0% alcohol',
          description: 'Querétaro',
          price: 100,
        },
        {
          name: 'Dos Aves, APA',
          description: 'San Miguel de Allende',
          price: 110,
        },
        {
          name: 'Dos Aves, Stout',
          description: 'San Miguel de Allende',
          price: 110,
        },
      ],
      spritz: [
        {
          name: 'Aperol Spritz',
          price: 170,
        },
        {
          name: 'American Spritz',
          price: 180,
        },
        {
          name: 'Sicilian Spritz',
          price: 170,
        },
      ],
      more: [
        {
          name: 'Gin Tonic',
          price: 170,
        },
        {
          name: 'Mexican Mule',
          price: 180,
        },
        {
          name: 'Very Beery Gin',
          price: 180,
        },
        {
          name: 'Negroni',
          price: 170,
        },
      ],
    },
  },
  VINOS: {
    image: vinosImage,
    categories: {
      'espumoso/sparkling': [
        {
          name: 'Flor de Rime brut',
          price: 850,
        },
      ],
      'blanco/white': [
        {
          name: 'Chardonay, Magoni, México',
          price: 770,
        },
        {
          name: 'Pinot Grigio, Chiaro, Italia',
          price: 750,
        },
        {
          name: 'Sauvignon Blanc, Lágrimas, México',
          price: 750,
        },
      ],
      'rosado/rosse': [
        {
          name: 'Magoni Bland, México',
          price: 730,
        },
      ],
      'tinto/red': [
        {
          name: 'House, Blend, México',
          price: 750,
        },
        {
          name: 'La Casona, CbS / Merlot, México',
          price: 1000,
        },
        {
          name: 'Malbec, Altovilero, Argentina',
          price: 780,
        },
        {
          name: '12 Lunas, Blend, España',
          price: 1000,
        },
        {
          name: 'Viceversa Roble, Blend, España',
          price: 750,
        },
      ],
      'copa/glass': [
        {
          name: 'Blanco / withe',
          price: 150,
        },
        {
          name: 'Rosado / Rosse',
          price: 150,
        },
        {
          name: 'Tinto / Red',
          price: 165,
        },
      ],
    },
  },
};

export const photos = [
  photoImage1,
  photoImage2,
  photoImage3,
  photoImage4,
  photoImage5,
  photoImage6,
  photoImage7,
  photoImage8,
  photoImage9,
];
