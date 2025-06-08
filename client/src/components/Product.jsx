export default function Product(props) {

    const { url, title, description, price, discountedPrice, colorChart } = props

    return (
        <div className="flex flex-col items-center gap-5 w-60">
            <img src={url} alt={title} />
            <h5> {title} </h5>
            <p className="link-text"> {description} </p>
            <div className="flex gap-2">
                <h5 className="text-muted"> ${price} </h5>
                <h5 className="text-seconday1"> ${discountedPrice} </h5>
            </div>

            {colorChart ?
                <div className="flex gap-2">
                    {colorChart.map((color) =>
                        <span className={`p-2 border rounded-full`} style={{ backgroundColor: color, borderColor: color }} key={color}></span>
                    )}
                </div>
                : ""}

        </div>
    )
}