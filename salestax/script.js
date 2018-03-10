const numFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

const price = Number(prompt("Enter the item's price:"));
const tax = price * 0.095;

alert(`Item Price: ${numFormat.format(price)}
Tax (9.5%): ${numFormat.format(tax)}
Total Price: ${numFormat.format(price + tax)}`);
