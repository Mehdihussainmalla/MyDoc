import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Listitems = () => {
  const names = [
    {
      key: '1', name: "Women Lead", image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhlcyUyMHNob3B8ZW58MHx8MHx8&w=1000&q=80",
      description: "all leading fashion designs clothes women wearing! modern looking"
    },
    {
      key: '2', name: "Ladies & Gents", image: "https://www.seekpng.com/png/full/943-9431746_fashion-ecommerce-solutions-mannequin.png",
      description: "Amazing! would be attracted glown!!"
    },
    {
      key: '3', name: "Beautiful Creations", image: "https://www.thoughtco.com/thmb/C7RiS4QG5TXcBG2d_Sh9i4hFpg0=/3620x2036/smart/filters:no_upscale()/close-up-of-clothes-hanging-in-row-739240657-5a78b11f8e1b6e003715c0ec.jpg",
      description: "Unexpected! goergous looking & smart!!"
    },
    {
      key: '4', name: "Kids Wear", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      description: "Warm and desirable suits!!"
    },
    {
      key: '5', name: "Women Printed shades", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLIPyAJOehgYxxOG5-GxKvb6iSO8p9jEt9g&usqp=CAU",
      description: "Printed!! team workable auction !! treat"
    },
    {
      key: '6', name: "Men Suits", image: "https://media.istockphoto.com/photos/mens-suits-on-hangers-in-different-colors-picture-id887360960?s=170667a",
      description: "all Party Dress codes bearable and more comfortable"
    },
    {
      key: '7', name: "Men's Showroom", image: "https://thumbs.dreamstime.com/z/men-s-fashion-clothes-shop-21702063.jpg",
      description: "Plenty of varities available in this show room available at every drop"
    },
    {
      key: '8', name: "Poly Cotton for Men's", image: "https://m.media-amazon.com/images/I/61utFQXP8GL._AC_UL320_.jpg",
      description: "Unstitched Polycotton Shirt Fabric Printed  (Unstitched)"
    },
    {
      key: '9', name: "mehdi", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '10', name: "hussain", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '11', name: "malla", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '12', name: "mehdi", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '13', name: "mehdi", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '14', name: "hussain", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
    {
      key: '15', name: "malla", image: "https://img.favpng.com/13/15/8/online-shopping-retail-e-commerce-discounts-and-allowances-png-favpng-6LBLuzHPUuLdYp7MBJyHPGCfZ.jpg",
      description: "all leading clothes"
    },
  ]

  return (
    <>

      <FlatList
        keyExtractor={(key) => {
          return key.key;
        }}


        numColumns={3}
        data={names}
        renderItem={({ item }) => {
          return (
            <View style={styles.card}>
              <TouchableOpacity>
                <View
                  style={styles.layout}>
                  <Image style={styles.images}
                    source={{ uri: item.image }} />

                  <Text style={styles.title}>{item.name}</Text>

                  <Text
                    style={styles.description}>{item.description}</Text>

                </View>
              </TouchableOpacity>
            </View>
          )
        }}
        // ListFooterComponent={() => {
        //   return (
        //     <View style={{ paddingBottom: 40 }} />
        //   )
        // }}
      />

    </>
  )

}

const styles = StyleSheet.create({


  card: {
    backgroundColor: 'lightgrey',
    height: 135,
    width: 95,
    margin: 12,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 1,
    padding: 10

  },
  title: {
    color: "#353d53",
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: "center"
  }
  ,
  images: {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 20
  },
  description: {
    color: "#5f4e31",
    fontSize: 8,

  }

})

export default Listitems