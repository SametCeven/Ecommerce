const categories = [
    { url: "https://images.placeholders.dev/350x300", title: "CLOTHS", numberOfItems: 5 },
    { url: "https://images.placeholders.dev/350x300", title: "CLOTHS", numberOfItems: 5 },
    { url: "https://images.placeholders.dev/350x300", title: "CLOTHS", numberOfItems: 5 },
    { url: "https://images.placeholders.dev/350x300", title: "CLOTHS", numberOfItems: 5 },
    { url: "https://images.placeholders.dev/350x300", title: "CLOTHS", numberOfItems: 5 }
]

export default function Categories() {

    return (
        <div className="flex flex-col gap-5 w-80 xl1440:w-full xl1440:flex-row">
            {categories.map((category, index) =>
                <div className="flex flex-col items-center relative" key={index}>
                    <img className="w-full" src={category.url} alt={category.title} key={index}></img>
                    <h5 className="text-lightGray absolute top-1/2 -translate-y-1/2"> {category.title} </h5>
                    <h6 className="text-lightGray absolute top-2/3 -translate-y-2/3"> {category.numberOfItems} Items </h6>
                </div>
            )}
        </div>
    )
}