//Give me the sum of the prices (try chaining methods) [{price: 10.99}, {price: 5.99}, {price: 29.99}]
const items = [
    {price: 10.99},
    {price: 5.99},
    {price: 29.99}
];

const total = items
    .map(item => item.price)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(total);    