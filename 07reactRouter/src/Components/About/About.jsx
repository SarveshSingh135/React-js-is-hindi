import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="Remote3.jpg"
                            alt="image3"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-xl text-gray-900 font-bold  font-serif md:text-l">
                             We are passionate developers dedicated to building modern, 
                             fast, and user-friendly web applications. Our focus is on 
                             creating responsive and scalable solutions using the latest 
                             technologies like React. We believe in clean design, smooth user experience, 
                             and writing efficient code that solves real-world problems.
                        </h2>
                        <p className="mt-6 font-serif text-gray-950 md: text-ellipsis">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="font-serif text-gray-950">
                              Our mission is to continuously learn, innovate, and deliver high-quality digital products that make a meaningful impact.
                             We strive to combine creativity with technology to build applications that are both powerful and easy to use.
.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}