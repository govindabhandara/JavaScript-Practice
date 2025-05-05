const person = {
    "name":"govinda",
    "age":"25",
    "city":"banglore"
};
for (const key in person) {
    console.log(`${key}:${person[key]}`);
}
