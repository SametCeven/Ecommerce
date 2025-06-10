import { useState } from "react"
import OrderSummary from "../components/OrderSummary"
import { useSelector } from "react-redux"

const optionsMap = {
    address: "address",
    payment: "payment",
}

export default function CreateOrderPage() {

    const [option, setOption] = useState("")
    const { deliveryAmount, discountAmount, totalAmount, totalAmountFinal } = useSelector(store => store.shoppingCart)



    function handleOption(e) {
        console.log(e.target.value)
        setOption(e.target.value)
    }

    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="flex justify-between items-center gap-5 px-5 font-bold text-secondText">
                <button
                    className="px-5 py-3 border rounded-md border-primary hover:cursor-pointer"
                    value={optionsMap.address}
                    onClick={handleOption}>
                    Address Information
                </button>
                <button
                    className="px-5 py-3 border rounded-md border-primary hover:cursor-pointer"
                    value={optionsMap.payment}
                    onClick={handleOption}>
                    Payment Information
                </button>
            </div>


            {option === optionsMap.address &&

                <div>
                    address
                </div>
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