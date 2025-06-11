import { useEffect, useState } from "react"
import OrderSummary from "../components/OrderSummary"
import { useDispatch, useSelector } from "react-redux"
import { getAddress, getCard } from "../store/actions/clientActions"
import AddressInformation from "../components/AddressInformation"
import PaymentInformation from "../components/PaymentInformation"
import { createOrder } from "../store/actions/shoppingCartActions"
import { ToastContainer, toast } from "react-toastify"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const optionsMap = {
    address: "address",
    payment: "payment",
}



export default function CreateOrderPage() {

    const history = useHistory()
    const dispatch = useDispatch()
    const [option, setOption] = useState(optionsMap.address)

    const { deliveryAmount, discountAmount, totalAmount, totalAmountFinal, address: addressCart, payment: paymentCart, cart } = useSelector(store => store.shoppingCart)
    const { user, addressList, addressLoading, creditCards, cardLoading } = useSelector(store => store.client)

    function handleOption(e) {
        setOption(e.target.value)
    }

    useEffect(() => {
        dispatch(getAddress(user.token))
        dispatch(getCard(user.token))
    }, [])


    async function submitOrder(e) {
        const orderDate = (new Date()).toISOString().slice(0, 19)
        const selectedCard = creditCards.filter((card) => card.id === Number(paymentCart))[0]
        const products = []
        cart.map((item) => {
            products.push({
                product_id: item.product.id,
                count: item.count,
                detail: item.product.name,
            })
        })

        const order = {
            address_id: Number(addressCart),
            order_date: orderDate,
            card_no: selectedCard.card_no,
            card_name: selectedCard.name_on_card,
            card_expire_month: selectedCard.expire_month,
            card_expire_year: selectedCard.expire_year,
            card_ccv: "",
            price: totalAmountFinal,
            products: products,
        }


        try {
            const data = await dispatch(createOrder(order, user.token))
            toast.success("Order Received", {
                autoClose: 1500,
            })
            setTimeout(()=>{
                history.push("/")
            },1800)
        } catch (error) {
            toast.error("Failed to Order ... ", {
                autoClose: 1500,
            })
        }

    }




    return (
        <div className="flex flex-col gap-20 items-center xl1440:flex-row xl1440:items-baseline">

            <ToastContainer></ToastContainer>

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
                handleButton={submitOrder}
            ></OrderSummary>




        </div>
    )
}