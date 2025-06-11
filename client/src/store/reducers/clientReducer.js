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
    editAddressLoading: false,
    editAddressError: null,

    cardLoading: false,
    cardError: null,
    addCardLoading: false,
    addCardError: null,
    deleteCardLoading: false,
    deleteCardError: null,
    editCardLoading: false,
    editCardError: null,
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


        case (clientActions.editAddressStarted):
            return { ...state, editAddressLoading: true, editAddressError: null }
        case (clientActions.editAddressFailed):
            return { ...state, editAddressLoading: false, editAddressError: action.payload }
        case (clientActions.editAddress):
            const updatedAddressList2 = state.addressList.filter((item) => item.id !== action.payload.id)
            return { ...state, addressList: [updatedAddressList2, action.payload] }


        case (clientActions.getCardStarted):
            return { ...state, cardLoading: true, cardError: null }
        case (clientActions.getCardFailed):
            return { ...state, cardLoading: false, cardError: action.paylaod }
        case (clientActions.setCardList):
            return { ...state, creditCards: action.payload, cardLoading: false, cardError: null }

        case (clientActions.addCardStarted):
            return { ...state, addCardLoading: true, addCardError: null }
        case (clientActions.addCardFailed):
            return { ...state, addCardLoading: false, addCardError: action.payload }
        case (clientActions.addCard):
            return {
                ...state,
                creditCards: [...state.creditCards, action.payload],
                addCardLoading: false
            }

        case (clientActions.deleteCardStarted):
            return { ...state, deleteCardLoading: true, deleteCardError: null }
        case (clientActions.deleteCardError):
            return { ...state, deleteCardLoading: false, deleteCardError: action.payload }
        case (clientActions.deleteCard):
            const updatedCreditCards = state.creditCards.filter((item) => item.id !== action.payload)
            return { ...state, creditCards: updatedCreditCards }

        case (clientActions.editCardStarted):
            return { ...state, editCardLoading: true, editCardError: null }
        case (clientActions.editCardFailed):
            return { ...state, editCardLoading: false, editCardError: action.payload }
        case (clientActions.editCard):
            const updatedCreditCards2 = state.creditCards.filter((item) => item.id !== action.payload.id)
            return { ...state, creditCards: [updatedCreditCards2, action.payload] }
         

        default:
            return state
    }

}