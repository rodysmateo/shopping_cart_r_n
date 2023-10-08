import React from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('window').width;

const Item = ({item, onPress, backgroundColor, textColor, opacity}) => {
  return (
    <View style={[styles.itemContainer]} opacity={opacity} width={width / 2}>
      <TouchableOpacity 
        onPress={onPress} style={{ backgroundColor, width:'100%', borderRadius:20, borderWidth:2 }}>
        <View style={{ alignItems:'center', justifyContent:'center' }}>
          <Image source={item.imageF} style={styles.imageItems} />
          <Text style={[styles.text, textColor]}>
            {item.familyName}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

  export default Item;

const styles = StyleSheet.create({
  itemContainer: {
    alignContent:'center',
    alignItems:'center',
    height:90,
    padding:2,
  },
  imageItems:{
    width:'80%', 
    height:'70%', 
    alignContent:'center', 
    alignItems:'center',
    resizeMode:'contain', 
    marginTop:5,
    borderTopLeftRadius:20, 
    borderTopRightRadius:20
  },
  text: {
    fontSize:14, 
    fontWeight:'bold', 
    textAlign:'center', 
    letterSpacing: 1
  }
})