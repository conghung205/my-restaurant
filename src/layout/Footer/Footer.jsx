import React from "react";

const Footer = () => {
    return (
        <footer className="bg-bg-footer py-14 border-t border-third">
            <div className="md:w-7xl w-full flex px-6 lg:px-0 flex-col md:flex-row mx-auto gap-8 justify-center items-start container">
                <div className="flex-1 mr-8">
                    {/* logo */}
                    <h2 className="text-2xl md:text-3xl text-shadow-lg text-shadow-orange-800 font-bold text-txt-title cursor-pointer italic">
                        sizzle
                    </h2>
                    <p className="text-third mt-7 w-full text-xs md:text-sm">
                        Nghệ thuật ẩm thực nướng than hoa và lẩu truyền thống
                        trong không gian đương đại tối giản.
                    </p>
                </div>
                <div className="flex-1 flex flex-col">
                    <p className="uppercase text-xs md:text-sm text-txt-title">
                        Về Chúng Tôi
                    </p>
                    <a
                        href="#"
                        className="w-full hover:underline mt-7 text-third text-xs md:text-sm"
                    >
                        Câu Chuyện Thương Hiệu
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Đội Ngũ Đầu Bếp
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Tin Tức & Sự Kiện
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Tuyển Dụng
                    </a>
                </div>

                <div className="flex-1 flex flex-col">
                    <p className="uppercase text-xs md:text-sm text-txt-title">
                        Liên Hệ
                    </p>
                    <a
                        href="#"
                        className="w-full hover:underline mt-7 text-third text-xs md:text-sm"
                    >
                        123 Đường Ẩm Thực, Quận 1, TP. Hồ Chí Minh
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        +84 (0) 28 1234 5678
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        info@flamebroth.vn
                    </a>
                </div>

                <div className="flex-1 flex flex-col">
                    <p className="uppercase text-xs md:text-sm text-txt-title">
                        Chính Sách
                    </p>
                    <a
                        href="#"
                        className="w-full hover:underline mt-7 text-third text-xs md:text-sm"
                    >
                        Chính Sách Bảo Mật
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Điều Khoản Sử Dụng
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Chính Sách Đặt Bàn
                    </a>
                    <a
                        href="#"
                        className="w-full hover:underline mt-3 text-third text-xs md:text-sm"
                    >
                        Hỗ Trợ Khách Hàng
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
