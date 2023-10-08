import React from 'react'
import { Observer } from 'mobx-react-lite';
import { 
    Image, 
    View, 
    Text, 
    StatusBar, 
    TouchableOpacity, 
    ScrollView,
    Dimensions,
} from 'react-native';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import { productsStore } from '../../../store/mobx';
import { COLOURS } from '../../../Database.js/Database';
import { StyleSheet } from 'react-native';

const ProductInfo = ({route, navigation}) => {
    const {productID} = route.params;

    const width = Dimensions.get('window').width;

    // Add to cart

    const addProduct = (productID) => {
        productsStore.addProduct(productID);
        navigation.navigate('Home', {state: 1} );
    }

    return (
            <Observer>{() =>
                <View style={{width:'100%', height: '100%', backgroundColor:COLOURS.white, position: 'relative' }}>
                    <StatusBar backgroundColor={COLOURS.backgroundLigth} barStyle="dark-content"/>
                    <ScrollView>
                        <View style={styles.c_container1}>
                            <View style={styles.c_container2}>
                                <TouchableOpacity onPress={() => navigation.goBack('Home')} >
                                    <Entypo name='chevron-left' style={styles.c_icon1}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{width: width, height:240, alignItems:'center', justifyContent:'center' }}>
                                <Image source={productID.productImage} style={{ width:'100%', height:'100%', resizeMode:'contain' }}/>
                            </View>
                        </View>
                        <View style={{ paddingHorizontal:16, marginTop:6 }}>
                            <View style={{ flexDirection:'row', alignItems:'center', marginVertical:14 }}>
                                <Entypo name="shopping-cart" style={{ fontSize:18, color:COLOURS.blue,marginRight:6 }}/>
                                    <Text style={{ fontSize:12, color:COLOURS.black }}>Shopping</Text> 
                            </View>
                            <View style={{flexDirection:'row', marginVertical:4, alignItems:'center', justifyContent:'space-between'}}>
                                <Text style={styles.text1}>{productID.productName}</Text>
                                <Ionicons name='link-outline'style={styles.c_icon2}/>
                            </View>
                            <Text style={styles.text2}>{productID.description}</Text>
                            <View style={styles.c_container_3}>
                                <View style={{flexDirection:'row', width:'80%', alignItems:'center' }}>
                                    <View style={styles.c_container_4}>
                                        <Entypo name='location-pin' style={{ fontSize:16, color:COLOURS.blue }}/>
                                    </View>
                                    <Text>El Indio Cifuentes</Text>
                                </View>
                                <Entypo name='chevron-right' style={{ fontSize:22, color:COLOURS.backgroundDark }}/>
                            </View>
                            <View style={{paddingHorizontal:16 }}>
                                <Text style={styles.text2}>${productID.productPrice}</Text>
                            </View>
                        </View>
                    </ScrollView> 
                <View style={styles.c_container_5}>
                    <TouchableOpacity onPress={() => addProduct(productID)} style={styles.c_touch1}>
                        <Text style={styles.c_text3}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        }</Observer>
    );
}

export default ProductInfo

const styles = StyleSheet.create({
    c_container1: {
        width:'100%',
        backgroundColor:COLOURS.backgroundLigth,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        position:'relative',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:4 
    },
    c_icon1:{ 
        fontSize:18,
        color:COLOURS.backgroundDark,
        padding:12,
        backgroundColor:COLOURS.white,
        borderRadius:10 
    },
    c_icon2:{
        fontSize:24,
        color:COLOURS.blue,
        backgroundColor:COLOURS.blue + 10,
        padding:8,
        borderRadius:100 
    },
    c_container2:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:16,
        paddingLeft:16 
    },
    c_container_3:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginVertical:14,
        borderBottomColor:COLOURS.backgroundLigth,
        borderBottomWidth:1,
        paddingBottom:20 
    },
    c_container_4:{
        color:COLOURS.blue,
        backgroundColor:COLOURS.backgroundLigth,
        alignItems:'center',
        justifyContent:'center',
        padding:12,
        borderRadius:100,
        marginRight:10 
    },
    c_animate:{
      width:'16%',
      height:2.4,
      backgroundColor:COLOURS.black,
      marginHorizontal:4,
      borderRadius: 100 
    },
    text1: {
        fontSize:24,
        fontWeight:'600',
        letterSpacing:0.5,
        marginVertical:4,
        color:COLOURS.black,
        maxWidth:'84%' 
    },
    text2:{
        fontSize:18, 
        fontWeight:'500', 
        maxWidth:'85%', 
        color:COLOURS.black, 
        marginBottom:4 
    },
    c_container_5:{
        position:'absolute',
        bottom:10,
        height:'8%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center' 
    },
    c_touch1:{
        width:'86%',
        height:'90%',
        backgroundColor:COLOURS.blue,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center' 
    },
    c_text3:{
        fontSize:12,
        fontWeight:'500',
        letterSpacing:1, 
        color:COLOURS.white,
        textTransform:'uppercase' 
    }
  })