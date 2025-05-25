import Blog from "./Blog";

const blogs = [
    { image: "https://images.placeholders.dev/330x300", tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
    { image: "https://images.placeholders.dev/330x300", tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 },
    { image: "https://images.placeholders.dev/330x300", tags: ["Google", "Trending", "New"], title: "Loudest à la Madison #1 (L'integral)", description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date: "22 April 2021", comments: 10 }
]


export default function Blogs() {

    return (
        <div className="flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-5 items-center text-center pb-10">
                <h6 className="text-primary"> Practive Advice </h6>
                <h2 className="text-text"> Featured Products </h2>
                <p className="text-secondText w-60"> Problems trying to resolve the conflict between the two major </p>
            </div>

            {blogs.map((blog, index) =>
                <Blog
                    key={index}
                    image={blog.image}
                    tags={blog.tags}
                    title={blog.title}
                    description={blog.description}
                    date={blog.date}
                    comments={blog.comments}
                ></Blog>
            )}
        </div>
    )
}