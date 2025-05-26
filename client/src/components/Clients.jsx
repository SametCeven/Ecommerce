
const clients = [
    "https://images.placeholders.dev/150x150",
    "https://images.placeholders.dev/200x50",
    "https://images.placeholders.dev/350x400",
    "https://images.placeholders.dev/350x400",
    "https://images.placeholders.dev/350x400",
    "https://images.placeholders.dev/350x400",
]

export default function Clients() {

    return (
        <div className="flex flex-col gap-5 items-center text-secondText xl1440:flex-row">
            {clients.map((client, index) =>
                <div className="w-40" key={index}>
                    <img className="w-full" src={client} alt={client} key={index} />
                </div>
            )}
        </div>
    )
}