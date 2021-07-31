import {
    CART_ADD_ITEM,
    CART_REMOVE_ITEM,
    CART_CLEAN_ALL
} from "../constants/cartConstants"

export const cartReducer = (state = { cartItems: [] }, action) => {


    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload
            console.log("cart reducer item", item);
            const existItem = state.cartItems.find(el => el.id === item.id)
            console.log("existItem", existItem);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(el =>
                        el.id === existItem.id ? item : el
                    )
                }

            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state, cartItems: state.cartItems.filter(el =>
                    el.id !== action.payload
                )
            }
        case CART_CLEAN_ALL:
            return {
                ...state, cartItems: []
            }
        default:
            return state
    }
}