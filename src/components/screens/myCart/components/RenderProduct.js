import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Image } from 'react-native-elements';

import { productsStore } from '../../../../store/mobx';
import { COLOURS } from '../../../../Database.js/Database';
import { Observer } from 'mobx-react-lite';
import { StyleSheet } from 'react-native';

const RenderProducts = (data) => {

    const delProduct = (data) => {
        data ? productsStore.delProduct(data) : null
    }

    return (
            <Observer>{()=>
                <View key={data.id} 
                        style={styles.c_container1}>
                    <View style={{ width: '25%', height: '99%'}}>
                        <Image source={data.productImage} style={{width: '100%', height: '100%', resizeMode: 'contain', margin:2}}/>
                    </View>
                    <View style={styles.c_container2}>
                        <Text style={styles.c_text1}>{data.productName}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center',}}>
                            <Text style={{fontSize: 14, fontWeight: '400', maxWidth: '85%', marginRight: 4}}>${data.productPrice}</Text>
                        </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                        <View style={{flexDirection: 'row', alignContent:'center', alignItems:'center'}}>
                            <TouchableOpacity style={styles.c_icon1} onPress={()=> productsStore.decrementQuantity(data)}>
                                <View style={styles.c_container_3}>
                                    <MaterialCommunityIcons name='minus' style={styles.c_container_4}/>
                                </View>
                            </TouchableOpacity>   
                            <Text style={{marginLeft:20, marginRight:20}}>{data.quantity}</Text>
                            <TouchableOpacity style={styles.c_icon2} onPress={()=> productsStore.incrementQuantity(data)}>
                                <View style={styles.c_container_5}>
                                    <MaterialCommunityIcons name='plus' style={styles.c_icon2}/>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() =>delProduct(data)} style={styles.c_icon3}>
                    <View style={styles.c_container_6}>
                        <MaterialCommunityIcons name='delete' style={styles.c_icon4}/>
                    </View>
                </TouchableOpacity>
            </View>
        }</Observer>
    )
}

export default RenderProducts;

const styles = StyleSheet.create({
    c_container1:{
        width: '100%',
        height: 100,
        padding:6,
        flexDirection: 'row',
        alignItems: 'center',
        position:'relative',
        borderBottomWidth:1,
        borderColor:COLOURS.backgroundDark
    },
    c_icon1:{
        color: COLOURS.backgroundDark, 
        backgroundColor: COLOURS.backgroundLigth,
        borderRadius: 100,
    },
    c_container2:{
        flex: 1,
        height: '100%',
        justifyContent:'space-between',
        alignContent:'center',
        alignItems:'center'
    },
    c_container_3:{
        width:50,
        height:30,
        borderRadius: 100,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        alignContent:'center',
        alignItems: 'center'
    },
    c_text1:{
        fontSize: 14, 
        maxWidth: '100%', 
        color: COLOURS.black, 
        fontWeight: '600', 
        letterSpacing: 1
    },
    c_container_4:{                                        
        fontSize: 20,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLigth,
        borderRadius: 100,
},
    c_icon2:{                                width:50,
        height:30,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLigth,
        borderRadius: 100,
    },
    c_container_5:{
        borderRadius: 100,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.backgroundMedium,
        alignContent:'center',
        alignItems: 'center'
    },
    c_icon2:{
        fontSize: 20,
        color: COLOURS.backgroundDark,
        backgroundColor: COLOURS.backgroundLigth,
        borderRadius: 100,
    },
    c_icon3:{
        color: COLOURS.backgroundDark, 
        backgroundColor: COLOURS.backgroundLigth,
    },
    c_container_6:{
        borderRadius: 100,
        padding: 4,
        borderWidth: 1,
        borderColor: COLOURS.red,
        alignContent:'center',
        alignItems: 'center'
    },
    c_icon4:{
        fontSize: 20,
        color: COLOURS.red,
        backgroundColor: COLOURS.backgroundLigth,
        borderRadius: 100,
    },
})