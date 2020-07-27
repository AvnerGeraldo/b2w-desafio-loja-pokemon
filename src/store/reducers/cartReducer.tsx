import { StateCart } from "../types/cartTypes"
import { CartActions } from "../actions/cartActions"
import { OPEN_CLOSE_CART } from "../constants/cartConstants"

const initialState: StateCart = {
    isOpen: true
}

const reducer = (state: StateCart = initialState, action: CartActions): StateCart => {
    switch(action.type) {
        case OPEN_CLOSE_CART:
            return {
                ...state,
                isOpen: !state.isOpen
            }
    }

    return state
}

export default reducer