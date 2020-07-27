import { StateCart } from "../types/cartTypes"
import { CartActions } from "../actions/cartActions"
import { OPEN_CLOSE_CART, UPDATE_CART } from "../constants/cartConstants"
import { PokemonData } from "../types/pokemonDataTypes"

const initialState: StateCart = {
    isOpen: true,
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
    }

    return state
}

export default reducer