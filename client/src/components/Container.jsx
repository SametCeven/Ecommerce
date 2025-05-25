const image = ["https://images.placeholders.dev/450x400"]

export default function Container() {

    return (
        <div className="flex flex-col items-center justify-center gap-5 text-center xl1440:flex-row-reverse xl1440:text-left xl1440:gap-40">

            <div className="flex flex-col items-center gap-5 w-60 xl1440:w-120 xl1440:items-baseline">
                <h5 className="text-muted"> SUMMER 2020 </h5>
                <h2> Part of the Neural Universe </h2>
                <h4 className="text-secondText"> We know how large, objects will act, but things on a small scale. </h4>
                <div className="flex flex-col gap-5 xl1440:flex-row">
                    <button className="px-10 py-3 rounded-md text-white bg-primary btn-text"> BUY NOW </button>
                    <button className="px-10 py-3 rounded-md text-primary bg-white btn-text border border-primary"> Learn More </button>
                </div>
            </div>

            <div>
                <img src={image} alt={image} />
            </div>

        </div>
    )
}