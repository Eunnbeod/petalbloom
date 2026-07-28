"use client";

import { useRouter } from "next/navigation";

export default function TemplateCard({ template }: any) {

    const router = useRouter();

    return (

        <div className="templateCard">

            <img
                src={template.image}
                alt={template.title}
            />

            <span
                className={`badge ${template.type.replace(/\s/g,"")}`}
            >

                {template.type}

            </span>

            <h3>{template.title}</h3>

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
                    {template.available ? "Use Template" : "Coming Soon"}
                </button>

            </div>

        </div>

    );

}