let cat1 = new Cat("kitzi", 10, "black")
cat1.display()
let bunny1 = new Bunny("bugs", 5, "male")
bunny1.display()
let bunny2 = new Bunny("bugsi", 8, "female")
bunny2.display()
let cat2 = new Cat("mitzi", 10, "black")
cat2.display()
let bunny3 = new Bunny("bobi", 5, "male")
bunny3.display()
let bunny4 = new Bunny("bob", 45, "male")
bunny4.display()
let cat3 = new Cat("roni", 5, "black")
cat3.display()
let dog1 = new Dogs("richard", 7)
dog1.display()
let dog2 = new Dogs("moti", 2)
dog2.display()


























/*
const SIZE = 100
let animals: Animals[]

const getRandomBetween0toMax = (max: number): number => {
    return Math.floor(Math.random() * max)
}

const loadAllAnimals = (animals: Animals[]): void => {
    let tableElement = document.getElementById("table-body")
    let rows: string = ''
    let animal: Animals[] = []

    for (let i in animals) {
        rows += `
                <tr>
                    <th scope="row">${+i + 1}</th>
                    <td>${animals[i].name}</td>
                    <td>${animals[i].age}</td>
                    <td>${animals[i].makeSound()}</td>
                </tr>
        `
    }
    tableElement.innerHTML = rows
}

for (let i = 0; i < SIZE; i++) {
    let randomAnimalId = getRandomBetween0toMax(1000)
    let randomAnimalAge = getRandomBetween0toMax(20)
    let randomAnimalGender = "male"
    let randomAnimalColor = "White"



    if (getRandomBetween0toMax(100) % 2 === 0) {
        randomAnimalGender = getRandomBetween0toMax(1000) % 2 === 0 ? "male" : "female"
        animals.push(new Bunny(`bags-${randomAnimalId}`, randomAnimalAge, randomAnimalGender))
    }else{
        randomAnimalColor = getRandomBetween0toMax(1000) % 2 === 0 ? "white" : "black"
        animals.push(new Cat(`bags-${randomAnimalId}`, randomAnimalAge, randomAnimalColor))
    }
}

loadAllAnimals(animals)
*/
