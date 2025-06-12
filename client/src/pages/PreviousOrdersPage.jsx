import { useEffect, useState } from "react"
import axiosInstance from "../services/api"
import { useSelector } from "react-redux"
import Spinner from "../components/Spinner"
import Table from "../components/Table"

export default function PreviousOrdersPage() {

    const { user } = useSelector(store => store.client)
    const [previousOrders, setPreviousOrders] = useState([])
    const [previousOrdersLoading, setPreviousOrdersLoading] = useState(false)

    async function getPreviousOrders() {
        setPreviousOrdersLoading(true)
        try {
            const res = await axiosInstance.get("/order", {
                headers: {
                    Authorization: user.token,
                }
            })
            const formattedData = res.data.map(order => ({
                ...order,
                price: (Math.round(order.price * 100) / 100).toFixed(2),
                order_date: new Date(order.order_date).toLocaleString(),
            }))

            setPreviousOrders(formattedData)
            setPreviousOrdersLoading(false)
        }
        catch (err) {
            setPreviousOrdersLoading(false)
            console.error("Failed to get orders", err)
        }
    }

    useEffect(() => {
        getPreviousOrders()
    }, [])


    console.log(previousOrders)



    return (
        <div className="flex flex-col gap-5 items-center">
            <h2 className="text-text"> Previous Orders </h2>

            {previousOrders.length === 0 ?
                <div>
                    <span> Loading ... </span>
                    <Spinner></Spinner>
                </div>
                :
                <Table
                    columns={[
                        { label: "Order Id", accessor: "id" },
                        { label: "Order Date", accessor: "order_date" },
                        { label: "Price", accessor: "price" },
                    ]}
                    data={previousOrders}
                ></Table>
            }



        </div>
    )
}