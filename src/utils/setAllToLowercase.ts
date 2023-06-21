const returnLowercased = ([...params]: string[]) => {
    const lowercasedItems: string[] = []

    for (let param of params) {
        lowercasedItems.push(param)
    }

    return lowercasedItems
}

export default returnLowercased