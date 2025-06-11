import { Link } from "react-router-dom/cjs/react-router-dom.min"
import { ChevronRight } from 'lucide-react';

export default function OrderSummary(props) {

    const { totalAmount, deliveryAmount, discountAmount, totalAmountFinal } = props

    return (
        <div className="w-90 py-20">
            <div className="flex flex-col gap-5 p-5 border border-secondText rounded-md">

                <h4 className="text-primary mb-5"> Summary Of The Order </h4>

                <div className="flex justify-between">
                    <h6 className="text-secondText"> Total Amount </h6>
                    <span className="font-semibold"> ${(Math.round(totalAmount * 100) / 100).toFixed(2)} </span>
                </div>
                <div className="flex justify-between">
                    <h6 className="text-secondText">Delivery Amount </h6>
                    <span className="font-semibold"> ${(Math.round(deliveryAmount * 100) / 100).toFixed(2)} </span>
                </div>
                <div className="flex justify-between mb-5 border-b border-secondText pb-2">
                    <h6 className="text-secondText">Discount Amount </h6>
                    <span className="font-semibold"> -${(Math.round(discountAmount * 100) / 100).toFixed(2)} </span>
                </div>
                <div className="flex justify-between">
                    <h6 className="text-secondText"> Total Amount </h6>
                    <span className="font-semibold text-primary"> ${(Math.round(totalAmountFinal * 100) / 100).toFixed(2)} </span>
                </div>

                <Link to={"/createOrder"} className="block w-full">
                    <button className="btn-primary mt-5 flex justify-center items-center gap-1 hover:cursor-pointer w-full">
                        Confirm Order
                        <ChevronRight></ChevronRight>
                    </button>
                </Link>

            </div>
        </div>
    )
}