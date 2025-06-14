import React from "react";
import Image from "next/image";
import placeholder from "../../public/img/placeholder.png";

const Detail = () => {
	return (
		<div className="flex flex-col justify-center p-8 w-5/6">
			<div className="text-center space-y-1 mb-8">
				<h1>Ini title</h1>
				<h2>Ini author</h2>
				<p>Tanggal posting</p>
			</div>

			<div className="flex flex-col">
				<div className="self-center mb-8">
					<Image src={placeholder} alt="placeholder" />
					<h3>Asal gambar</h3>
				</div>
                <article className="prose max-w-none text-justify space-y-2">
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam nulla veritatis amet est mollitia rem harum ullam error hic, aspernatur, non, praesentium vero libero laborum illum.
                        Inventore ex placeat quidem, provident quis ipsam quaerat deserunt beatae id neque laborum sequi possimus tempore maiores obcaecati ea, nulla quibusdam recusandae numquam veniam nesciunt
                        magni.
                    </p>
                    
                    <p>
                        Accusamus autem quisquam, officiis eum, magni ducimus veniam voluptas odit assumenda sed ratione harum mollitia necessitatibus deserunt dolores quia possimus quis praesentium vel
                        cupiditate. Laboriosam, iure exercitationem ipsam doloribus sint voluptatum quaerat ducimus unde. Consequatur animi ab, quia ratione praesentium dolor temporibus, consectetur expedita
                        molestiae harum aut soluta dolorum sunt?
                    </p>
                    
                    <p>
                        Alias itaque dignissimos sed, provident voluptatum sunt minus, ullam aliquam optio error fugit nisi repellendus asperiores in assumenda aperiam, quia
                        enim. Illum repellat officiis est similique iure quasi ipsum aut molestiae, nobis omnis, consequuntur et, quibusdam adipisci reiciendis maiores placeat ipsam nihil accusantium hic facilis!
                        Necessitatibus quaerat inventore delectus dolorem libero.
                    </p>
                    
                    <p>
                        Laborum inventore fugit, hic dolorum suscipit iure dolores dolorem accusantium consectetur quo blanditiis repellendus ullam fugiat
                        quos. Laboriosam esse aut temporibus a? Eius ipsam earum, odit minima perspiciatis eaque, sapiente eos iure maiores quod, nihil hic? Reiciendis animi debitis deleniti, dolores quaerat
                        voluptatem error voluptate porro quisquam.
                    </p>
                </article>
			</div>
		</div>
	);
};

export default Detail;
