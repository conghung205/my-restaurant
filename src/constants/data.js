import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
import productComboGrill from "../assets/images/product_combo_grill.png";
import productComboHotpot from "../assets/images/product_combo_hotpot.png";

export const MENU_ITEMS = [
    {
        id: 1,
        title: "Thực đơn",
        path: "/",
    },
    {
        id: 2,
        title: "Đặt bàn",
        path: "/",
    },
    {
        id: 3,
        title: "Thư viện",
        path: "/",
    },
    {
        id: 4,
        title: "Câu chuyện",
        path: "/",
    },
];

export const PRODUCT_ITEMS = [
    {
        id: 1,
        name: "bò mỹ nướng tảng",
        price: 599000,
        images: [product1],
        isFeatured: true,
        category: "grill",
        type: "single",
        tag: "Món đặc sản",
        description:
            "Thịt bò USDA Choice thượng hạng được tẩm ướp công phu và nướng chậm trên than củi trắng để giữ trọn độ mọng nước",
    },
    {
        id: 2,
        name: "lẩu thái hải sản",
        price: 450000,
        images: [product2],
        isFeatured: true,
        category: "hotpot",
        type: "single",
        tag: "",
        description:
            "Sự kết hợp hoàn hảo giữa vị chua cay nồng ấm và hải sản tươi rói",
    },
    {
        id: 3,
        name: "wagyu primeum",
        price: 1250000,
        images: [product3],
        isFeatured: true,
        category: "grill",
        type: "single",
        tag: "",
        description:
            "Những lát thị Wagyu vân mỡ tuyệt đẹp, tan chảy ngay đầu lưỡi",
    },
    {
        id: 4,
        name: "Combo nướng tổng hợp",
        price: 799000,
        images: [productComboGrill],
        isFeatured: true,
        category: "combo",
        type: "combo",
        tag: "Combo",
        description: "Combo nướng full toping",
    },
    {
        id: 5,
        name: "Combo lẩu tổng hợp",
        price: 999000,
        images: [productComboHotpot],
        isFeatured: true,
        category: "combo",
        type: "combo",
        tag: "Combo",
        description: "Combo lẩu full toping",
    },
];
