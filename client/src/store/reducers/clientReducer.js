import { clientActions, deleteAddress } from "../actions/clientActions"

const clientIinital = {
    user: {},
    addressList: [],
    creditCards: [],
    roles: [],
    theme: "",
    language: "",
    loginLoading: false,
    loginError: null,
    rememberMe: false,
    addressLoading: false,
    addressError: null,
    addAddressLoading: false,
    addAdressError: null,
    deleteAddressLoading: false,
    deleteAddressError: null,
}

export function clientReducer(state = clientIinital, action) {
    switch (action.type) {
        case (clientActions.setUser):
            return { ...state, user: action.payload, loginLoading: false }
        case (clientActions.setRoles):
            return { ...state, roles: action.payload }
        case (clientActions.setTheme):
            return { ...state, theme: action.payload }
        case (clientActions.setLanguage):
            return { ...state, language: action.payload }

        case (clientActions.loginUserStarted):
            return { ...state, loginLoading: true, loginError: null }
        case (clientActions.loginUserFailed):
            return { ...state, loginLoading: false, loginError: action.payload }

        case (clientActions.getAddressStarted):
            return { ...state, addressLoading: true, addressError: null }
        case (clientActions.getAddressFailed):
            return { ...state, addressLoading: false, addressError: action.paylaod }
        case (clientActions.setAddressList):
            return { ...state, addressList: action.payload, addressLoading: false, addressError: null }

        case (clientActions.addAddressStarted):
            return { ...state, addAddressLoading: true, addAdressError: null }
        case (clientActions.addAddressFailed):
            return { ...state, addAddressLoading: false, addAdressError: action.payload }
        case (clientActions.addAddress):
            return {
                ...state,
                addressList: [...state.addressList, action.payload],
                addAddressLoading: false
            }

        case (clientActions.deleteAddressStarted):
            return { ...state, deleteAddressLoading: true, deleteAddressError: null }
        case (clientActions.deleteAddressFailed):
            return { ...state, deleteAddressLoading: false, deleteAddressError: action.payload }
        case (clientActions.deleteAddress):
            const updatedAddressList = state.addressList.filter((item) => item.id !== action.payload)
            return { ...state, addressList: updatedAddressList }




        default:
            return state
    }

}