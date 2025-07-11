import React from "react";
import Image from "next/image";
import placeholder from "../../public/img/placeholder.png";

const About = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-gray-100 p-8">
			<div className="bg-slate-200 p-4 rounded-lg shadow-md mb-8 w-full">
				<h1 className="text-3xl font-bold text-center my-2">About Us</h1>
				<p className="text-center text-gray-600 mb-2">Pelajari lebih lanjut tentang kami disini</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div>
					<Image src={placeholder} alt="skibidi"></Image>
				</div>
				<div className="max-w-2xl mx-auto p-4">
					<p className="text-justify">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa sunt explicabo molestias ducimus eius repudiandae modi, maiores eum itaque vel nesciunt similique magni libero repellat
						doloremque aspernatur ipsum recusandae, voluptatum, excepturi illum ut perspiciatis! Ipsum consequuntur maiores delectus! Nemo, tempore. Rerum iure rem consectetur eius velit incidunt
						nulla temporibus minima minus cum animi exercitationem veniam, quos tenetur placeat provident excepturi omnis fugit consequuntur corrupti quis quidem beatae deserunt adipisci?
					</p>
					<br />
					<p className="text-justify">
						Deleniti et suscipit hic dolore amet harum sit nam corporis culpa, aspernatur expedita, debitis pariatur? Tempore enim molestias nesciunt et praesentium dolorem, quasi, earum minima beatae
						possimus consectetur sapiente consequuntur autem mollitia aliquid aspernatur numquam accusamus a ducimus sit. Illum error adipisci ut quae ipsam quod autem sunt quo non blanditiis.
					</p>
				</div>
			</div>
			<div className="mt-8">
				<p className="text-center text-sm text-gray-600">© 2025 Jendela Tekno Dunia</p>
			</div>
		</div>
	);
};

export default About;
