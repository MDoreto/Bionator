export const classes = [
    {
        name: "vertebrados", features: ["caracteristica vertebrado"],
        children: [{
            name: "mamifero", features: ["caracteristica mamifero"]
        }, {
            name: "repteis", features: ["caracteristica reptil"],
            children: [{ name: "crocodilia", features: ["caracteristica crocodilo"] }]
        }]
    }
]