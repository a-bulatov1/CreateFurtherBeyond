StartupEvents.registry("item", event => {
    let mechanism = (name, rarity) => {
            let id = name.toLowerCase()
            event.create(id + "_mechanism").texture("furtherbeyond:item/" + id + "_mechanism").displayName(name + " Mechanism").rarity(rarity ? rarity : "common")
            event.create("incomplete_" + id + "_mechanism","create:sequenced_assembly").texture("furtherbeyond:item/incomplete_" + id + "_mechanism").displayName("Incomplete " + name + " Mechanism")
    }
    
    mechanism("Kinetic")
})
