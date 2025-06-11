import { useEffect, useState } from "react"
import OrderSummary from "../components/OrderSummary"
import { useDispatch, useSelector } from "react-redux"
import { deleteAddress, getAddress } from "../store/actions/clientActions"
import Spinner from "../components/Spinner"
import { creatorActionAddress } from "../store/actions/shoppingCartActions"


import AddressEditForm from "../components/Forms/AddressEditForm"
import AddressInformation from "../components/AddressInformation"

const optionsMap = {
    address: "address",
    payment: "payment",
}



export default function CreateOrderPage() {

    const dispatch = useDispatch()
    const [option, setOption] = useState(optionsMap.address)
    const [addressSelected, setAddressSelected] = useState(false)
    const { deliveryAmount, discountAmount, totalAmount, totalAmountFinal, address: addressCart } = useSelector(store => store.shoppingCart)
    const { user, addressList, addressLoading } = useSelector(store => store.client)





    function handleOption(e) {
        setOption(e.target.value)
    }

    

    useEffect(() => {
        dispatch(getAddress(user.token))
    }, [])






    return (
        <div className="flex flex-col gap-20 px-5">

            <div className="flex justify-between items-center gap-5 font-bold text-text">
                <button
                    className={`px-5 py-3 border rounded-md border-text hover:cursor-pointer hover:bg-primary hover:text-white ${option === optionsMap.address ? "bg-primary text-white" : ""}`}
                    value={optionsMap.address}
                    onClick={handleOption}>
                    Address Information
                </button>
                <button
                    className={`px-5 py-3 border rounded-md border-text hover:cursor-pointer hover:bg-primary hover:text-white ${option === optionsMap.payment ? "bg-primary text-white" : ""}`}
                    value={optionsMap.payment}
                    onClick={handleOption}>
                    Payment Information
                </button>
            </div>


            {option === optionsMap.address &&
                <AddressInformation
                    addressSelected={addressSelected}
                    setAddressSelected={setAddressSelected}
                    addressLoading={addressLoading}
                    addressList={addressList}
                    optionsMap={optionsMap}
                    addressCart={addressCart}
                    user={user}

                ></AddressInformation>
            }


            {option === optionsMap.payment &&

                <div>
                    payment
                </div>

            }



            <OrderSummary
                totalAmount={totalAmount}
                deliveryAmount={deliveryAmount}
                discountAmount={discountAmount}
                totalAmountFinal={totalAmountFinal}
            ></OrderSummary>




        </div>
    )
}