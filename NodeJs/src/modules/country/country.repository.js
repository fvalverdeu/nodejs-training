const countries = [
    {
        id: 1,
        name: "Peru"
    },
    {
        id: 2,
        name: "Bolivia"
    },
    {
        id: 3,
        name: "Panama"
    }
];

export default class{
    async list(){
        return new Promise(resolve => {
            resolve(countries);
        });
    }

    async find(id) {
        return countries.find(c => c.id === id);
    }
}