const data = require('./data.json');

const task11Result = (animals) => {
    const result = {
        cat: 0,
        dogs: 0,
        avgage: 0,
    };
    animals.forEach(item => {
        item.type === 'cat' ? ++result.cat : ++result.dogs;
        result.avgage = result.avgage + item.age;
    });
    result.avgage = Math.trunc(result.avgage / animals.length)
    // your code here
    return result;
};

console.log(task11Result(data));

const task12Result = (animals) => {
    let result = 0;
    animals.forEach(blackDog = (item) => {
        if (item.type === 'dog' && item.breed) {
            for (id in item.features) {
                if (item.features[id] === 'black') {
                    ++result;
                }
            }
        }
    });
    return result;
};



console.log(task12Result(data));

const task13Result = (animals) => {
    let result = [];
    result = animals.filter(function (animal) {
        return ((animal.type === 'cat' && animal.features[0] === 'black')
            ||
            (animal.type === 'dog' && animal.features[0] === 'white'));
    })
    // your code here
    return result;
};

console.log(task13Result(data));

const task14Result = (animals) => {
    let result = [];
    result = animals.sort((a, b) => a.age < b.age ? 1 : -1);
    result = result.sort((a, b) => a.type > b.type ? 1 : -1);
    return result;
};

console.log(task14Result(data));

const myPowFunc = (number, n) => {
    let result = number;
    if (n === 0) {
        return 1;
    }
    else for (let i = 1; i < n; i++)
        result = result * number;
    return result;
};

console.log(myPowFunc(3, 9));

const myFlatFunc = (...inputArray) => {
    const result = [];
    for (let i = 0; i < inputArray.length; i++) {
        const currentEl = inputArray[i];
        if (Array.isArray(currentEl)) {
            result.push(...myFlatFunc(...currentEl))
        } else {
            result.push(currentEl)
        }
    }
    return result;
};

console.log(myFlatFunc([1, 3, 5, [1, [4,5], 'asdf', [76, [56, [66, 59]]]]]));
// result 1, 3, 5, 1, 4, 5, 'asdf', 76, 56, 66, 59
