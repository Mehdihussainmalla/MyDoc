import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native';
import React from 'react';

const Banner = () => {
  const names = [
    {
      key: '1',
      name: 'Women Lead',
      image:
        'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80',
      description:
        'all leading fashion designs clothes women wearing! modern looking', rate:'From ₹3000   72% off  '
    },
    {
      key: '2',
      name: 'Ladies & Gents',
      image:
      'https://i0.wp.com/hespokestyle.com/wp-content/uploads/2017/04/trad-ivy-style-clothes-with-style-magazine-ad-advertisement-history-mens-fashion-style.jpg?resize=800%2C533&ssl=1',
      description: 'Amazing! would be attracted glown!!',rate:'From ₹3000   72% off  '
    },
    {
      key: '3',
      name: 'Beautiful Creations',
      image:
        'https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg',
      description: 'Unexpected! goergous looking & smart!!',rate:'From ₹3000   72% off  '
    },
    {
      key: '4',
      name: 'Kids Wear',
      image:
        'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80',
      description: 'Warm and desirable suits!!',rate:'From ₹3000   72% off  '},
    {
      key: '5',
      name: 'Women Printed shades',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLIPyAJOehgYxxOG5-GxKvb6iSO8p9jEt9g&usqp=CAU',
      description: 'Printed!! team workable auction !! treat',rate:'From ₹3000',discount:'72% off'
    },
    {
      key: '6',
      name: 'Men Suits',
      image:
        'https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?s=170667a',
      description: 'all Party Dress codes bearable and more comfortable',rate:'From ₹3000   72% off  '
    },
    {
      key: '7',
      name: "Men's Showroom",
      image:
        'https://thumbs.dreamstime.com/z/men-s-fashion-clothes-shop-21702063.jpg',
      description:
        'Plenty of varities available in this show room available at every drop',rate:'From ₹3000   72% off  '
    },
    {
      key: '8',
      name: "Poly Cotton for Men's",
      image: 'https://m.media-amazon.com/images/I/61utFQXP8GL._AC_UL320_.jpg',
      description: 'Unstitched Polycotton Shirt Fabric Printed  (Unstitched)',rate:'From ₹3000   72% off  '
    },
  ];

  return (
    <>
      <FlatList>



        
      </FlatList>
        </>
  )
}

export default Banner;
