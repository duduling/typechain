const name = "Duduling",
    age = 28,
    gender = "male";

const sayHi = (name, age, gender?) => {
    console.log(
        `Hello ${name}, you are ${age}${gender ? `, you are a ${gender}` : ""}`
    );
};

sayHi(name, age);

export {};
