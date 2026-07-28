"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


const templates = [

  {
    id:1,
    title:"Heart of Memories",
    category:"Love",
    premium:true,
    available:true,
    image:"/templates/heart.jpg",
    description:"Open heartfelt letters before discovering your bouquet."
  },

  {
    id:2,
    title:"Simple Bouquet",
    category:"Free",
    premium:false,
    available:false,
    image:"/templates/free.jpg",
    description:"A simple free digital bouquet."
  },

  {
    id:3,
    title:"Orbit of Memories",
    category:"Love",
    premium:true,
    available:false,
    image:"/templates/orbit.jpg",
    description:"Memories revolve beautifully before blooming."
  }

];

export default function TemplatesPage(){

    const router = useRouter();

    const [search,setSearch]=useState("");

    const [category, setCategory] = useState("All");

    const filteredTemplates = templates.filter((template) => {

        const matchSearch =
            template.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchCategory =
            category === "All" ||
            template.category === category;

        return matchSearch && matchCategory;

    });

    return(

        <main className="templatesPage">

            <div className="templatesHero">

                <h1>Choose Your Template</h1>

                <p>
                    Find the perfect experience for someone special.
                </p>

                <input

                    placeholder="Search templates..."

                    value={search}

                    onChange={(e)=>setSearch(e.target.value)}

                />

                <div className="categoryButtons">

                    <button onClick={() => setCategory("All")}>
                        All
                    </button>

                    <button onClick={() => setCategory("Love")}>
                        Love
                    </button>

                    <button onClick={() => setCategory("Free")}>
                        Free
                    </button>

                </div>

            </div>

            <div className="templatesGrid">

                {filteredTemplates.map(template=>(

                    <div
                        className="templateCard"
                        key={template.id}
                    >

                        <img src={template.image}/>

                        <span>

                            {template.available

                            ? template.premium

                            ? "Premium"

                            : "Free"

                            : "Coming Soon"}

                        </span>

                        <h2>{template.title}</h2>

                        <p>{template.description}</p>

                        <div className="templateButtons">

                            <button
                                className="previewButton"
                                onClick={() => router.push("/gift/demo")}
                            >
                                Preview
                            </button>

                            <button
                                className="useButton"
                                 disabled={!template.available}
                                 onClick={() => router.push("/create/heart-of-memories")}
                            >
                                {template.available
                                    ? "Use Template"
                                    : "Coming Soon"}
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </main>

    );

}