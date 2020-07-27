import { StateCart } from "../types/cartTypes"
import { CartActions } from "../actions/cartActions"
import { OPEN_CLOSE_CART, UPDATE_CART, REMOVE_ITEM_CART, CHECKOUT_CART } from "../constants/cartConstants"
import { PokemonData } from "../types/pokemonDataTypes"

const initialState: StateCart = {
    isOpen: false,
    cartList: []
}

const reducer = (state: StateCart = initialState, action: CartActions): StateCart => {
    switch(action.type) {
        case OPEN_CLOSE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            }
            
        case UPDATE_CART:
            const newCartList: Array<PokemonData> = [...state.cartList, action.payload]

            return {
                ...state,
                cartList: newCartList
            }
            break;
        
        case REMOVE_ITEM_CART:
            return {
                ...state,
                cartList: state.cartList.filter(item => item.id !== action.payload)
            }

        case CHECKOUT_CART:
            return {
                ...state,
                cartList: []
            }
    }

    return state
}

export default reducer