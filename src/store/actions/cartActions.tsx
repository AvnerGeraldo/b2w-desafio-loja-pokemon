import { OPEN_CLOSE_CART } from "../constants/cartConstants";

export interface OpenCloseCart {
    type: OPEN_CLOSE_CART
    payload: boolean
}

export type CartActions = OpenCloseCart

export const openCloseCart = (status: boolean): OpenCloseCart => ({
    type: OPEN_CLOSE_CART,
    payload: status
})