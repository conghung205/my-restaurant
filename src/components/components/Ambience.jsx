import React from "react";
import imgAbience from "../../assets/images/section2.png";
import Button from "../common/Button";
import { GrFormNextLink } from "react-icons/gr";

const Ambience = () => {
    return (
        <section className="bg-bg-footer pb-10 md:p8 md:p-12">
            <div className="flex flex-col md:flex-row gap-12 items-center px-6 lg:px-0 mx-auto container max-w-full w-7xl">
                <img
                    className="w-full md:w-1/2 max-h-[600px] rounded"
                    src={imgAbience}
                    alt=""
                />
                <div className="flex-1 pr-10">
                    <p className="uppercase text-xs md:text-sm tracking-widest md:mb-6 text-secondary">
                        không gian
                    </p>
                    <h2 className="text-3xl leading-[1.2] md:text-5xl mb-6 text-txt-title font-extrabold capitalize">
                        MỘT BẢN GIAO HƯỞNG CỦA LỬA
                    </h2>
                    <p className="text-sm md:text-[16px] mb-8 text-third">
                        Tại Sizzle, chúng tôi không chỉ phục vụ bữa ăn. Chúng
                        tôi kiến tạo một không gian nơi ngọn lửa nướng và nồi
                        lẩu sôi sục trở thành tâm điểm của những cuộc hội ngộ ấm
                        cúng. Từng chi tiết trong nội thất được thiết kế để tôn
                        vinh nghệ thuật ẩm thực tối giản.
                    </p>
                    <a
                        href="#"
                        className="uppercase mt-4 md:mt-6 hover:opacity-90 flex gap-2 group items-center text-xs md:text-sm text-secondary"
                    >
                        Khám phá không gian
                        <GrFormNextLink className="text-[24px] group-hover:translate-x-2 transition-all duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Ambience;
