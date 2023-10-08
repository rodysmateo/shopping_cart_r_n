import { action, computed, makeAutoObservable, observable } from "mobx";

import { Items } from "../Database.js/Database";

class Products {
    productsCart = [];
    productsList = [];

    constructor(){
        makeAutoObservable(this,{
            productsCart:observable,
            addProduct:action,
            delProduct:action,
            totalCart:computed,
            incrementQuantity:action,
            decrementQuantity:action,
            selected:action,
            count:computed,
            clear:computed,
            productsList:observable,
            producstListFilter:action,
            countProductList:computed,
            currentProductList:computed
        })
    }

    producstListFilter(id) {
        if (this.productsCart.length) {
            this.productsList = Items.filter(items => items.idF === id);
            this.productsList.forEach((product) => {
                const productInCart = this.productsCart.find(item => item.id === product.id);
                if (!productInCart) {
                    return this.productsList
                }else{
                    const indexInProductList = this.productsList.findIndex(item => item.id === product.id);
                    this.productsList[indexInProductList] = productInCart;
                    return this.productsList;
                }
            })
        }else{
            this.productsList = Items.filter(items => items.idF === id);
        }
    }

    get countProductList() {
        return this.productsList.length;
    }

    get currentProductList() {
        return this.productsList;
    }

    addProduct(data) {
        if (this.productsCart.find(items => items.id === data.id)) {
            this.productsCart = [...this.productsCart]
            const index =  this.productsList.findIndex(items => items.id === data.id);
            data.selected = true;
            this.productsList[index] = data; 
            return this.productsList
        }else{
            this.productsCart = [...this.productsCart, {...data, ...data.quantity = 1, ...data.selected = true}];
            const index =  this.productsList.findIndex(item => item.id === data.id);
            data.selected = true;
            this.productsList[index] = data; 
            return this.productsList
            }
        };

    delProduct(data) {
        this.productsCart = this.productsCart.filter(items => items.id !== data.id)
        const index =  this.productsList.findIndex(items => items.id == data.id);
        data.selected = false;
        this.productsList[index] = data; 
        return this.productsList
    }

    selected(data){
        const select = this.productsCart.find(item => item.id == data.id);
        if (select) {
           return true
        };
    }

    incrementQuantity(data) {
        const index =  this.productsCart.findIndex(item => item.id === data.id) ;
        data.quantity++;
        this.productsCart[index] = data;
        return this.productsCart;
    }

    decrementQuantity(data){
        if (data.quantity !== 1) {
            const index =  this.productsCart.findIndex(item => item.id === data.id) ;
            data.quantity--;
            this.productsCart[index] = data;
            return this.productsCart;
        }
    }

    get totalCart() {
        let total = 0;
        for (let index = 0; index < this.productsCart.length; index++) {
            let productPrice = this.productsCart[index].productPrice * this.productsCart[index].quantity ;
            total = total + productPrice;
        };
        return total;
    }

    get countProductCart() {
        return this.productsCart.length;
    }
}

export const productsStore = new Products();