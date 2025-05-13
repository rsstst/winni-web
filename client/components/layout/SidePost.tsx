import React from "react";
import Image from "next/image";
import placeholder from "../../public/img/placeholder.png";

async function loader() {
    const path = "/api/posts/";
    const BASE_URL = "http://localhost:1337";
    const url = new URL(path, BASE_URL);

    const response = await fetch(url.href);
    const data = await response.json();
    // console.log(data);

    // Assuming the latest data is the first item in the list
    const latestPost = data.data[0];
    return { ...latestPost };
}

export default async function Post() {
    const data = await loader();
    return (
        <div className="container">
            <div className="flex flex-col space-y-4">
                <h2>Artikel Lainnya</h2>
                <Image src={placeholder} alt="placeholder" width={160}></Image>
                <Image src={placeholder} alt="placeholder" width={160}></Image>
                <Image src={placeholder} alt="placeholder" width={160}></Image>
                <Image src={placeholder} alt="placeholder" width={160}></Image>
            </div>
        </div>
    );
}
