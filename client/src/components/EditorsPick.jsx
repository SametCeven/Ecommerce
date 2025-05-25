

const imagesLg = [
    { url: "https://images.placeholders.dev/300x500", category: "MEN" },
    { url: "https://images.placeholders.dev/300x500", category: "WOMEN" },

];

const imagesSl = [
    { url: "https://images.placeholders.dev/325x242", category: "ACCESSORIES" },
    { url: "https://images.placeholders.dev/325x242", category: "KIDS" },

];

export default function EditorsPick() {

    return (
        <div className="flex flex-col items-center gap-5">

            <h3> EDITOR'S PICK </h3>
            <p className="text-secondText w-60 text-center xl1440:w-full"> Problems trying to resolve the conflict between  </p>

            <div className="flex flex-col gap-5 xl1440:flex-row">

                <div className="flex flex-col gap-5 w-80 xl1440:flex-row xl1440:flex-1/2 ">
                    {imagesLg.map((image, index) =>
                        <div className="relative" key={index}>
                            <img className="w-full object-center object-cover" src={image.url} alt={image} key={index} />
                            <span className="absolute bottom-5 left-5 border border-lightBg bg-lightBg px-15 py-2 font-bold text-[16px] " key={image.category}> {image.category} </span>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-5 w-80 xl1440:w-140 xl1440:justify-between xl1440:flex-2">
                    {imagesSl.map((image, index) =>
                        <div className="relative" key={index}>
                            <img className="w-full" src={image.url} alt={image} key={index} />
                            <span className="absolute bottom-5 left-5 border border-lightBg bg-lightBg text-center px-5 py-2 font-bold text-[16px] " key={image.category}> {image.category} </span>
                        </div>
                    )}
                </div>

            </div>

        </div>
    )
}