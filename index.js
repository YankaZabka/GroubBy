const groupBy = (arr, key) => {
    if (!arr || !key) {
        throw new Error("Missing input")
    } else if (arr.filter(obj => key in obj).length !== arr.length) {
        return {}
    }

    const outputObject = {}

    arr.forEach(obj => {
        const keyName = obj[key]

        if (keyName in outputObject) {
            outputObject[keyName].push(obj)
        } else {
            outputObject[keyName] = []
            outputObject[keyName].push(obj)
        }
    })
    console.log(arr)
    return outputObject
}

const defaultArray = [
    { id: 1, universe: "marvel", name: "Spider Man" },
    { id: 2, universe: "marvel", name: "Iron Man" },
    { id: 3, universe: "dc", name: "Aqua Man" },
    { id: 4, universe: "dc", name: "Bat Man" },
    { id: 5, universe: "marvel", name: "Hulk" }
]

// console.log(defaultArray.filter(obj => 'universe' in obj))
// console.log(!![])

console.log(groupBy(defaultArray, "universe"));
