import Product from "./Product"

const products = [
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] },
    { url: "https://images.placeholders.dev/350x400", title: "title", description: "description", price: 20.00, discountedPrice: 10.00, colorChart: ["#23A6F0", "#23856D", "#E77C40", "#252B42"] }
]


export default function BestsellerProducts() {

    return (
        <div className="flex flex-col items-center gap-5">

            <div className="flex flex-col gap-5 w-60 text-center pb-10 xl1440:w-full">
                <h4 className="text-secondText"> Featured Products </h4>
                <h3 className="text-text"> BESTSELLER PRODUCTS </h3>
                <p className="text-secondText"> Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex flex-col gap-20 xl1440:px-20 xl1440:flex-row xl1440:justify-between xl1440:flex-wrap">
                {products.map((product, index) =>
                    index >= (products.length % 4) * 4 ? "" :
                    <Product
                        key={index}
                        url={product.url}
                        title={product.title}
                        description={product.description}
                        price={(Math.round(product.price * 100) / 100).toFixed(2)}
                        discountedPrice={(Math.round(product.discountedPrice * 100) / 100).toFixed(2)}
                        colorChart={product.colorChart}
                    >
                    </Product>
                )}
            </div>

        </div>

    )
}