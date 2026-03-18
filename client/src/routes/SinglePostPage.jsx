import { Link } from "react-router-dom"
import PostMenuAction from "../components/PostMenuAction"
import Search from '../components/Search'
import Comments from "../components/Comments"

const SinglePostPage = () => {
    return (
        <div className="flex flex-col gap-8">
            {/* detail */}
            <div className="flex gap-8">
                <div className="lg:w-3/5 flex flex-col gap-8">
                    <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Isit voluptatum ducimus 
                        deserunt tempora incidunt eveniet accusantium doloribus.
                    </h1>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <span>Written by</span>
                        <Link className="text-blue-800">John Doe</Link>
                        <span>on</span>
                        <Link className="text-blue-800">Web Design</Link>
                        <span>2 days ago</span>
                    </div>
                    <p className="text-gray-500 font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At facilis pariatur 
                        quibusdam amet provident ad magni hic, iure quam! Numquam voluptates fugiat expedita 
                        provident delectus nobis suscipit dolores adipisci at.
                    </p>
                </div>
                <div className="hidden lg:block w-2/5">
                    <img src="postImg.jpeg" className="rounded-2xl" width="600"/>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-col md:flex-row gap-8">
                {/* text */}
                <div className="lg:text-lg flex flex-col gap-6 text-justify">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam expedita sunt veritatis adipisci 
                        consequuntur tempora distinctio modi nostrum consectetur qui deserunt dignissimos minima, 
                        tempore ex, a eos omnis obcaecati eligendi.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum eos ratione neque, 
                        fuga voluptates ab dolorem voluptas aut nihil a. Reprehenderit, sapiente ea aspernatur tempori
                        repellendus consectetur saepe.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum eos ratione neque, 
                        fuga voluptates ab dolorem voluptas aut nihil a. Reprehenderit, sapiente ea aspernatur tempori
                        repellendus consectetur saepe.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum eos ratione neque, 
                        fuga voluptates ab dolorem voluptas aut nihil a. Reprehenderit, sapiente ea aspernatur tempori
                        repellendus consectetur saepe.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo earum eos ratione neque, 
                        fuga voluptates ab dolorem voluptas aut nihil a. Reprehenderit, sapiente ea aspernatur tempori
                        repellendus consectetur saepe.
                    </p>
                </div>
                {/* menu */}
                <div className="px-4 h-max sticky top-8">
                    <h1 className="mb-4 text-sm font-medium">
                        Author
                    </h1>
                    <div className="flex items-center gap-8">
                        <img src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" width="48" height="48"/>
                        <Link>John Doe</Link>
                    </div>
                        <p className="mt-8 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div className="flex gap-2 mt-8">
                            <Link>
                                <img src="facebook.svg" />
                            </Link>
                            <Link>
                                <img src="instagram.svg" />
                            </Link>
                        </div>
                    <PostMenuAction/>
                    <h1 className="mt-8 mb-4 text-sm font-medium ">Categories</h1>
                    <div className="flex flex-col gap-2 text-sm">
                        <Link className="underline">All</Link>
                        <Link className="underline" to="/">
                            Web Design
                        </Link>
                        <Link className="underline" to="/">
                            Web Development
                        </Link>
                        <Link className="underline" to="/">
                             Databases
                        </Link>
                        <Link className="underline" to="/">
                            Search Engines
                        </Link>
                        <Link className="underline" to="/">
                            Marketing
                        </Link>
                    </div>
                    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
                    <Search />
                </div>
            </div>
                <Comments />
        </div>
    )
}

export default SinglePostPage