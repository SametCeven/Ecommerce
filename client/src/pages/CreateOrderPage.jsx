import { useEffect, useState } from "react"
import OrderSummary from "../components/OrderSummary"
import { useDispatch, useSelector } from "react-redux"
import { getAddress, getCard } from "../store/actions/clientActions"
import AddressInformation from "../components/AddressInformation"
import PaymentInformation from "../components/PaymentInformation"

const optionsMap = {
    address: "address",
    payment: "payment",
}



export default function CreateOrderPage() {

    const dispatch = useDispatch()
    const [option, setOption] = useState(optionsMap.address)

    const { deliveryAmount, discountAmount, totalAmount, totalAmountFinal, address: addressCart, payment: paymentCart } = useSelector(store => store.shoppingCart)
    const { user, addressList, addressLoading, creditCards, cardLoading } = useSelector(store => store.client)

    function handleOption(e) {
        setOption(e.target.value)
    }

    useEffect(() => {
        dispatch(getAddress(user.token))
        dispatch(getCard(user.token))
    }, [])






    return (
        <div className="flex flex-col gap-20 px-5 xl1440:flex-row">

            <div className="flex  flex-col gap-20 px-5 xl1440:py-20">

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
                        addressLoading={addressLoading}
                        addressList={addressList}
                        optionsMap={optionsMap}
                        addressCart={addressCart}
                        user={user}
                    ></AddressInformation>
                }


                {option === optionsMap.payment &&
                    <PaymentInformation
                        cardLoading={cardLoading}
                        creditCards={creditCards}
                        optionsMap={optionsMap}
                        paymentCart={paymentCart}
                        user={user}
                    ></PaymentInformation>
                }

            </div>

            <OrderSummary
                totalAmount={totalAmount}
                deliveryAmount={deliveryAmount}
                discountAmount={discountAmount}
                totalAmountFinal={totalAmountFinal}
                link={"/"}
            ></OrderSummary>




        </div>
    )
}