ServerEvents.recipes(event => {
    let strainerPattern = ["SSS", "MAM", "SSS"]
    event.shaped("kubejs:strainer_filter", strainerPattern,
        { A: "farmersdelight:canvas", M: "farmersdelight:canvas", S: "minecraft:stick" }).id("kubejs:sediment_strainer")
})
