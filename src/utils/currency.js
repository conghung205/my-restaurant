const formatCurrency = (amount) => {
    if (typeof amount !== "number") return "0 VND";

    return new Intl.NumberFormat("vi-VN").format(amount) + " VND";
};

export default formatCurrency;
