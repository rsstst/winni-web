import React from 'react';

async function loader(id: string) {
	const path = '/api/posts??filters[postSlug][$eq]=' + id + '&populate=*';
	const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
	const url = new URL(path, BASE_URL);

	const response = await fetch(url.href);
	const data = await response.json();
	// console.log(data);

	// Assuming the latest data is the first item in the list
	const post = data.data[0];
	return { ...post };

    

    
}

const DetailPage = async (props: {params: Promise<{id: string}>}) => {
    const params = await props.params;
    const data = await loader(params.id);
    return (
        
        <div className="detail-page">
            <h1>TESTSET</h1>
            <h1>{data.postTitle}</h1>
        </div>
    );
};

export default DetailPage;