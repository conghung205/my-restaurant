import React from "react";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { PRODUCT_ITEMS } from "../../constants/data";
import formatCurrency from "../../utils/currency";
import ProductItem from "./ProductItem";
import ProductItemCombo from "./ProductItemCombo";
import Button from "../common/Button";

const Featured = () => {
    const productSpecialty = PRODUCT_ITEMS.find(
        (product) => product.isFeatured,
    );
    return (
        <section className="bg-bg-main">
            <div className="container md:w-7xl md:mx-auto pt-14 px-6 md:px-0">
                <p className="text-accent-gold flex items-center gap-3 tracking-widest uppercase text-xs md:text-sm">
                    <TfiLayoutLineSolid /> Lựa chọn thượng hạng
                </p>
                {/* title */}
                <div className="flex justify-between items-start">
                    <h2 className="text-3xl w-1/3 md:text-5xl mt-3 text-txt-title font-bold capitalize">
                        Thực đơn nổi bật
                    </h2>
                    <p className="text-third w-1/4 text-xs md:text-sm">
                        Hành trình tuyển chọn những phần thịt thượng hạng và
                        nước dùng đậm đà, được chế biến tinh tế bởi các nghệ
                        nhân ẩm thực
                    </p>
                </div>

                {/* products */}
                <div className="flex gap-7 h-[700px] mt-8 md:mt-10">
                    <div className="flex-2 overflow-hidden relative h-full rounded group">
                        <img
                            className="w-full group-hover:scale-105 transition-all duration-300 object-cover h-full min-h-0 rounded"
                            src={productSpecialty.images[0]}
                            alt=""
                        />
                        {/* info */}
                        <div className="absolute left-7 group-hover:bottom-5 transition-all duration-300 backdrop-blur-sm rounded bottom-4 p-5 w-1/2 bg-bg-overlay">
                            <p className="text-secondary bg-secondary/30 inline py-1 px-2 rounded text-[10px] font-medium uppercase">
                                {productSpecialty.tag}
                            </p>
                            <h3 className="text-txt-title text-xl md:text-2xl mt-4 font-bold capitalize">
                                {productSpecialty.name}
                            </h3>
                            <p className="text-gray-300 text-xs md:text-sm mt-4">
                                {productSpecialty.description}
                            </p>
                            <p className="text-secondary mt-7 text-lg md:text-xl font-bold">
                                {formatCurrency(productSpecialty.price)}
                            </p>
                        </div>
                    </div>
                    {/* right */}
                    <div className="flex-1">
                        <div className="flex h-full gap-6 flex-col">
                            {PRODUCT_ITEMS.slice(1, 3)
                                .filter((product) => product.isFeatured)
                                .map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex-1 rounded min-h-0"
                                    >
                                        <ProductItem
                                            title={item.name}
                                            price={item.price}
                                            desc={item.description}
                                            image={item.images[0]}
                                        />
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>

                {/* combo */}
                <div className="flex gap-6 mt-9">
                    {PRODUCT_ITEMS.filter(
                        (product) => product.type === "combo",
                    ).map((item) => (
                        <ProductItemCombo
                            key={item.id}
                            title={item.name}
                            price={item.price}
                            desc={item.description}
                            image={item.images[0]}
                            tag={item.tag}
                        />
                    ))}
                </div>

                {/* button all */}
                <div className="py-16 flex justify-center">
                    <Button
                        text={"Khám phá toàn bộ thực đơn"}
                        className="border border-gray-500  hover:bg-white/20 text-txt-title text-xs md:text-sm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Featured;
