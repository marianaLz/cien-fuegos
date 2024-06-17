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
          name: 'Coliflor cremoso al horno de leña',
          description: 'Wood oven creamy cauliflower',
        },
        {
          name: 'Ensalada verde y jitomate',
          description: 'Green salad and tomato',
        },
        {
          name: 'Guacamole roto con hierbas',
          description: 'Rustic guacamole with herbs',
        },
        {
          name: 'Ensalada de betabel, coliflor y lechugas',
          description: 'Beetroot / Cauliflower / Lettuce Salad',
        },
        {
          name: 'Ceviche vegano',
          description: 'Vegan ceviche',
        },
        {
          name: 'Mejillones al vino blanco',
          description: 'Mussels in white wine',
        },
        {
          name: 'Carpaccio de res a la brasa',
          description: 'Beef carpaccio',
        },
        {
          name: 'Brocheta de res y chorizo',
          description: 'Beef and chorizo Kebab',
        },
      ],
    },
  },
  COMIDA: {
    image: comidaImage,
    categories: {
      pasta: [
        {
          name: 'Tagliatelle al Pomodoro e Basilico',
        },
        {
          name: 'Pasta cremosa con queso y champiñón',
          description: 'Cream cheese and mushroom pasta',
        },
        {
          name: 'Lasagna a la Bolognese',
        },
        {
          name: 'Tagliolini a la Matriciana',
        },
        {
          name: 'Fettuccine al Ragu',
        },
        {
          name: 'Ravioli de Espinaca y Ricota al burro',
        },
      ],
      'parrilla-grill': [
        {
          name: 'Trucha salmonada Al Carbon',
          description: 'Rainbow Trount grilled',
        },
        {
          name: 'Chuleton De Cerdo',
          description: 'Grilled Pork Chop',
        },
        {
          name: 'New York Steak',
        },
        {
          name: 'Hamburguesa de res',
          description: 'Beef burger',
        },
      ],
      'pizza clásica': [
        {
          name: 'Margherita',
        },
        {
          name: 'Prosciutto e Funghi',
        },
        {
          name: 'Chorizo / Arugula / Parmesano',
        },
        {
          name: '4 Stagioni',
        },
        {
          name: 'Vegetariana',
        },
        {
          name: 'Salame',
        },
        {
          name: 'Marinara',
        },
      ],
      'pizza blanca': [
        {
          name: '4 Quesos',
        },
        {
          name: 'Carbonara',
        },
        {
          name: 'Prosciutto de Parma',
        },
      ],
      'pizza signature': [
        {
          name: 'Calzone',
        },
        {
          name: 'Focaccia Rellena',
        },
      ],
    },
  },
  POSTRES: {
    image: postresImage,
    categories: {
      postres: [
        {
          name: 'Panna Cotta y frutos rojos',
        },
        {
          name: 'Tartaleta de chocolate',
        },
        {
          name: 'Parfait De Zabayon',
        },
        {
          name: 'Tiramisú',
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
        },
        {
          name: 'Monopolio, I.P.A.',
          description: 'San Luis Postosí',
        },
        {
          name: 'Hercules, Pilsner',
          description: 'Querétaro',
        },
        {
          name: 'Ginger Beer, 0% alcohol',
          description: 'Querétaro',
        },
        {
          name: 'Dos Aves, APA',
          description: 'San Miguel de Allende',
        },
        {
          name: 'Dos Aves, Stout',
          description: 'San Miguel de Allende',
        },
      ],
      spritz: [
        {
          name: 'Aperol Spritz',
        },
        {
          name: 'American Spritz',
        },
        {
          name: 'Sicilian Spritz',
        },
      ],
      more: [
        {
          name: 'Gin Tonic',
        },
        {
          name: 'Mexican Mule',
        },
        {
          name: 'Very Beery Gin',
        },
        {
          name: 'Negroni',
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
        },
      ],
      'blanco/white': [
        {
          name: 'Chardonay, Magoni, México',
        },
        {
          name: 'Pinot Grigio, Chiaro, Italia',
        },
        {
          name: 'Sauvignon Blanc, Lágrimas, México',
        },
      ],
      'rosado/rosse': [
        {
          name: 'Magoni Bland, México',
        },
      ],
      'tinto/red': [
        {
          name: 'House, Blend, México',
        },
        {
          name: 'La Casona, CbS / Merlot, México',
        },
        {
          name: 'Malbec, Altovilero, Argentina',
        },
        {
          name: '12 Lunas, Blend, España',
        },
        {
          name: 'Viceversa Roble, Blend, España',
        },
      ],
      'copa/glass': [
        {
          name: 'Blanco / withe',
        },
        {
          name: 'Rosado / Rosse',
        },
        {
          name: 'Tinto / Red',
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
