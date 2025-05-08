const person = {
    'name':'govinda',
    'age':27,
    'city':'banglore'
};
for (const key in person ){
    if (person.hasOwnProperty(key)) {
        console.log(key,person[key]);
    }
}

