import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Observer} from 'mobx-react-lite';

import {COLOURS, productFamily} from '../../../Database.js/Database';
import Item from './components/Item';
import { useProducts } from '../../../store/mobx';

const Home = ({route, navigation}) => {
  const [selectedId, setSelectedId] = useState([]);
  const [selectProduct, setSelectProduct] = useState(0);
  const productsStore = useProducts();

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let possition = Animated.divide(scrollX, width / 2);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      productsStore.currentProductList;
    });

    return unsubscribe;
  }, [selectProduct, navigation, productsStore.currentProductList]);

  // get family of products
  const renderItem = ({item}) => {
    const backgroundColor = COLOURS.backgroundDark;
    const opacity = item.id === selectedId[0] ? 1 : 0.5;
    const color = 'white';
    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId([item.id, item.familyName]);
          getDataFromDB(item.id);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
        opacity={opacity}
      />
    );
  };

  const getDataFromDB = id => {
    productsStore.producstListFilter(id);
  };

  const MyCart = () => {
    if (productsStore.countProductCart) {
      navigation.navigate('MyCart');
    }
  };

  const adProduct = data => {
    if (productsStore.selected(data) === true) {
      productsStore.delProduct(data);
    } else {
      productsStore.addProduct(data);
    }
    selectProduct === 0 ? setSelectProduct(1) : setSelectProduct(0);
  };
  // create a product reusable card

  const ProductCard = ({data}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', {productID: data})}
        style={{width: '48%', marginVertical: 8}}>
        <View style={styles.pc_container1}>
          <View style={styles.pc_container2}>
            <Text
              style={{
                fontSize: 12,
                color: COLOURS.white,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              {data.saldo}
            </Text>
          </View>
          <View style={styles.pc_container3}>
            <TouchableOpacity onPress={() => adProduct(data)}>
              <MaterialCommunityIcons
                name="cart"
                style={{
                  fontSize: 12,
                  color: COLOURS.white,
                  padding: 5,
                  borderRadius: 100,
                  backgroundColor:
                    data.selected === true ? COLOURS.red : COLOURS.green,
                }}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={data.productImage}
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: COLOURS.black,
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        <Text>${data.productPrice}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Observer>
      {() => (
        <View
          style={{
            width: width,
            height: '100%',
            backgroundColor: COLOURS.white,
          }}>
          <StatusBar
            backgroundColor={COLOURS.white}
            barStyle={'dark-content'}
          />
          <View style={styles.c_container1}>
            <TouchableOpacity>
              <Entypo name="shopping-bag" style={styles.c_icon1} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => MyCart()}>
              <MaterialCommunityIcons name="cart" style={styles.c_icon2} />
              <View style={styles.c_container2}>
                <Text style={{fontSize: 12, color: COLOURS.white}}>
                  {productsStore.countProductCart}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.c_container_3}>
            <Text style={styles.c_text1}>Familia de Productos</Text>
            <View
              style={{
                width: width,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <FlatList
                data={productFamily}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                extraData={selectedId}
                horizontal
                showsHorizontalScrollIndicator={false}
                decelerationRate={0.8}
                snapToInterval={width}
                bounces={false}
                onScroll={Animated.event(
                  [{nativeEvent: {contentOffset: {x: scrollX}}}],
                  {useNativeDriver: false},
                )}
              />
            </View>
            <View style={styles.c_container_4} width={width / 2}>
              {productFamily
                ? productFamily.map((data, index) => {
                    let opacity = possition.interpolate({
                      inputRange: [index - 2, index, index + 2],
                      outputRange: [0.2, 1, 0.2],
                      extrapolate: 'clamp',
                    });
                    return (
                      <Animated.View
                        key={index}
                        style={styles.c_animate}
                        opacity={opacity}
                      />
                    );
                  })
                : null}
            </View>
          </View>
          <View style={styles.c_container_5}>
            <Text
              style={{
                fontSize: 18,
                color: COLOURS.black,
                fontWeight: '400',
                letterSpacing: 1,
              }}>
              {selectedId[1]}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: COLOURS.black,
                fontWeight: '400',
                opacity: 0.5,
                marginLeft: 10,
              }}>
              {productsStore.countProductList} Productos
            </Text>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{marginBottom: 5, padding: 5}}>
              <View style={{padding: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                  {productsStore.productsList.map(data => {
                    return <ProductCard data={data} key={data.id} />;
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      )}
    </Observer>
  );
};

export default Home;

const styles = StyleSheet.create({
  pc_container1: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundDark,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  pc_container2: {
    position: 'absolute',
    width: '20%',
    height: '24%',
    backgroundColor: COLOURS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pc_container3: {
    position: 'absolute',
    width: '18%',
    height: '30%',
    backgroundColor: COLOURS.backgroundDark,
    top: 0,
    right: 0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  c_container1: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 16,
  },
  c_icon1: {
    fontSize: 18,
    color: COLOURS.backgroundMedium,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.backgroundLigth,
  },
  c_icon2: {
    fontSize: 18,
    color: COLOURS.white,
    padding: 12,
    borderRadius: 10,
    backgroundColor: COLOURS.green,
  },
  c_container2: {
    position: 'absolute',
    width: '40%',
    height: '40%',
    backgroundColor: COLOURS.red,
    top: -4,
    right: -4,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  c_container_3: {
    width: '100%',
    height: 140,
    backgroundColor: COLOURS.backgroundLigth,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  c_container_4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  c_animate: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLOURS.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
  text: {
    fontSize: 14,
    color: COLOURS.black,
    fontWeight: 500,
    letterSpacing: 1,
    lineHeight: 15,
    marginBottom: 5,
  },
  c_container_5: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
