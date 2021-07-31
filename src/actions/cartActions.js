import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAN_ALL
} from "../constants/cartConstants"
import axios from "axios"
import booksDemo from "../booksDemo"


export const addToCart = (id, quantity) => async (dispatch, getState) => {
    // const { data } = await axios.get(`https://nubidus.com/api/books/${id}`)

    let demoBook = booksDemo.find(item => item.id === id)
    demoBook = { ...demoBook, quantity }

    dispatch({
        type: CART_ADD_ITEM,
        payload: demoBook
        // payload: {
        //     book: data.Id,
        //     name: data.Name,
        //     image: data.Image,
        //     price: data.Price,
        //     countInStock: data.countInStock,
        //     quantity: quantity
        // }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    console.log("state cart", getState().cart)

}

export const removeFromCart = (id) => async (dispatch, getState) => {
    // const { data } = await axios.get(`https://nubidus.com/api/books/${id}`)


    dispatch({
        type: CART_REMOVE_ITEM,
        payload: id
        // payload: {
        //     book: data.Id,
        //     name: data.Name,
        //     image: data.Image,
        //     price: data.Price,
        //     countInStock: data.countInStock,
        //     quantity: quantity
        // }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    console.log("state cart", getState().cart)

}

export const cleanCartAll = () => async (dispatch, getState) => {
    dispatch({
        type: CART_CLEAN_ALL
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
    console.log("state cart", getState().cart)
}