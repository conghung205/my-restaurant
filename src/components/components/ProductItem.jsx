import React from "react";
import formatCurrency from "../../utils/currency";

const ProductItem = ({ title, desc, price, image }) => {
    return (
        <div className="flex cursor-pointer group rounded flex-col h-full">
            <div className="overflow-hidden">
                <img
                    className="w-full max-h-[250px] rounded hover:scale-105 transition-all duration-300 md:min-h-0 h-full object-cover"
                    src={image}
                    alt=""
                />
            </div>

            <div className="mt-3">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg group-hover:underline md:text-xl font-medium capitalize text-txt-title">
                        {title}
                    </h3>
                    <p className="text-lg font-medium text-secondary md:text-xl">
                        {formatCurrency(price)}
                    </p>
                </div>
                <p className="text-xs text-third mt-2">{desc}</p>
            </div>
        </div>
    );
};

export default ProductItem;
