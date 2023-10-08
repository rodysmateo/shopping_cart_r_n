import React, { useEffect } from 'react'
import { Observer } from 'mobx-react-lite';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import RenderProduct from './components/RenderProduct';
import { productsStore } from '../../../store/mobx';
import { COLOURS } from '../../../Database.js/Database';
import { StyleSheet } from 'react-native';

const MyCart = ({ navigation }) => {

    useEffect(() => {
       if (productsStore.productsCart.length === 0){
            navigation.navigate('Home');
       }
    }, [productsStore.productsCart]);

    return (
    <Observer>{() =>
        <View style={{ width: '100%', height: '100%', backgroundColor: COLOURS.white, position:'relative',}}>
            <View style={styles.c_container1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name='chevron-left' style={styles.c_icon1} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: COLOURS.black, fontWeight: '400', }}>Order Details</Text>
            </View>
            <View style={{paddingHorizontal:10,}}>
                <View style={{backgroundColor:COLOURS.green, borderRadius:40, alignItems:'center',}}>
                    <Text style={styles.c_text1}>My Cart</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{paddingHorizontal: 10,}}>
                    {productsStore.productsCart
                        ? productsStore.productsCart.map((data) =>{
                            return (<RenderProduct {...data}/>) }
                            )
                        : null
                    }
                </View>
            </ScrollView>
            <View>
                <View style={{paddingHorizontal:10, marginTop:20, marginBottom:80,}}>
                    <View style={{backgroundColor:COLOURS.green, borderRadius:40, alignItems:'center'}}>
                        <Text style={styles.c_text2}>Order Info</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <Text style={{fontSize:18, fontWeight:'500', maxWidth:'80%', color:COLOURS.black}}>Total</Text>
                        <Text style={{fontSize:18, fontWeight:'500', color:COLOURS.black,}}>${productsStore.totalCart}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.c_container_3}>
            <TouchableOpacity style={styles.c_container2}>
                <Text style={styles.c_text3}>CHECKOUT (${productsStore.totalCart})</Text>
            </TouchableOpacity>
            </View>
        </View>
    }</Observer>
    );
}
export default MyCart

const styles = StyleSheet.create({
    c_container1: {
        width: '100%', 
        flexDirection: 'row', 
        paddingTop: 16, 
        paddingHorizontal: 16, 
        justifyContent: 'space-between',
        alignItems: 'center'
},
    c_icon1:{fontSize: 18, 
        color: COLOURS.backgroundDark, 
        padding: 12,
        backgroundColor: COLOURS.backgroundLigth, 
        borderRadius: 12,
    },
    c_container2:{
        width:'70%',
        height:'70%',
        backgroundColor:COLOURS.blue,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
    },
    c_container_3:{
        position:'absolute', 
        bottom:10, height:'8%', 
        width:'100%', 
        justifyContent:'center', 
        alignItems:'center'
    },
    c_text1: {
        fontSize: 16, 
        color: COLOURS.white, 
        fontWeight: '500', 
        letterSpacing: 1, 
        marginBottom: 5
    },
    c_text2:{
        fontSize: 16, 
        color: COLOURS.white, 
        fontWeight: '500', 
        letterSpacing: 1, 
        marginBottom: 5
    },
    c_text3:{
        fontSize:12, 
        fontWeight:'500', 
        letterSpacing:1, 
        color:COLOURS.white, 
        textTransform:'uppercase',
    }
  })
