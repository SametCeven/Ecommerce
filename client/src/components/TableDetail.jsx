export default function TableDetail(props) {

    const { data } = props

    console.log(data)

    return (
        <div className="flex flex-col gap-10 text-xs">

            {data.products.map((product, index) =>

                <div className="flex justify-between " key={index}>
                    <span className="w-40"> Product: {product.name} </span>
                    <span> Price:  {product.price} </span>
                    <span> Count: {product.count} </span>
                </div>

            )}






        </div>
    )
}