import React from "react";
import formatCurrency from "../../utils/currency";

const ProductItemCombo = ({ title, price, desc, image, tag }) => {
    return (
        <section className="relative rounded cursor-pointer overflow-hidden group flex h-[250px] p-5 w-full flex-col justify-end">
            {/* image */}
            <img
                className="absolute group-hover:scale-105 transition-all duration-300 rounded inset-0 w-full h-full object-cover"
                src={image}
                alt=""
            />

            {/* overlay */}
            <div className="absolute rounded inset-0 backdrop-blur-xs bg-black/60"></div>

            {/* content */}
            <p className="z-10 absolute  left-2 top-2.5 text-secondary bg-secondary/50 inline py-1 px-2 rounded text-[10px] font-medium uppercase">
                {tag}
            </p>
            <div className="z-10">
                <h3 className="text-lg group-hover:underline md:text-xl font-medium capitalize text-txt-title">
                    {title}
                </h3>
                <div className="flex justify-between">
                    <span className="text-xs md:text-sm text-gray-300 mt-2">
                        {desc}
                    </span>
                    <span className="text-lg md:text-xl font-medium capitalize text-secondary">
                        {formatCurrency(price)}
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProductItemCombo;
