const collectAnimals = (...animals) => animals;

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))




const combineFruit = (fruit, sweets, vegetables) => ({
    fruit: fruit,
    sweets: sweets,
    vegetables: vegetables
  });

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))





const parseSentence = (info) => {
const { location, duration } = info;
return `We're going to have a good time in ${location} for ${duration}`;
};

console.log(parseSentence({
location: "Burly Idaho",
duration: "2 weeks"
}))





const returnFirst = ([firstItem]) => firstItem





const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const returnFavorites = (arr) => {
    const [firstFav, secondFav, thirdFav] = arr;
    return `My top three favorite activities are ${firstFav}, ${secondFav}, and ${thirdFav}`
  }

console.log(returnFavorites(favoriteActivities))





const combineAnimals = (...arrays) => [].concat(...arrays);

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))





const product = (...numbers) => numbers.reduce((acc, number) => acc * number, 1)





const unshift = (array, ...elements) => [...elements, ...array]





const populatePeople = names => names.map(name => {
    const [firstName, lastName] = name.split(" ")
        return {
            firstName: firstName,
            lastName: lastName
        }
    })

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))


