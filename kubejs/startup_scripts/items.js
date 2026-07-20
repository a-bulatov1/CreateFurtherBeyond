// priority: 0

const BlockStateProperties = Java.loadClass("net.minecraft.world.level.block.state.properties.BlockStateProperties");

// Textures must use the 'kubejs' namespace to avoid a bug involving kubejs loading textures from resource packs.
// Textures must also be stored in a resource pack since the kubejs assets folder cannot be overridden using resource packs for whatever reason
StartupEvents.registry("item", event => {
    //event.create("alchemical_laser").parentModel("kubejs:item/alchemical_laser").displayName("Alchemical Laser (Ponder Entry)").unstackable()

    let types = ["Certus", "Fluix"]
    types.forEach(e => {
        let id = e.toLowerCase()
        event.create(id + "_crystal_seed").texture("kubejs:item/crystal_seed_" + id).displayName(e + " Quartz Seed")
        event.create("growing_" + id + "_seed","create:sequenced_assembly").texture("kubejs:item/crystal_seed_" + id).displayName(e + " Quartz Seed")
        event.create("tiny_" + id + "_crystal").texture("kubejs:item/crystal_seed_" + id + "2").displayName("Tiny " + e + " Quartz Crystal")
        event.create("growing_tiny_" + id + "_crystal","create:sequenced_assembly").texture("kubejs:item/crystal_seed_" + id + "2").displayName("Tiny " + e + " Quartz Crystal")
        event.create("small_" + id + "_crystal").texture("kubejs:item/crystal_seed_" + id + "3").displayName("Small " + e + " Quartz Crystal")
        event.create("growing_small_" + id + "_crystal","create:sequenced_assembly").texture("kubejs:item/crystal_seed_" + id + "3").displayName("Small " + e + " Quartz Crystal")
    });

    let processors = ["Calculation", "Logic", "Engineering"]
    processors.forEach(name => {
        let e = name.toLowerCase()
        event.create("incomplete_" + e + "_processor","create:sequenced_assembly").texture("kubejs:item/incomplete_" + e + "_processor").displayName("Incomplete " + name + " Processor")
    })

    //event.create("incomplete_gravity_normalizer","create:sequenced_assembly").modelJson({parent: "ad_astra:block/gravity_normalizer"}).displayName("Incomplete Gravity Normalizer")

    let number = (name) => {
        let id = name.toLowerCase()
        event.create(id).texture("kubejs:item/" + id).glow(true).displayName(name)
    }

    number("Zero")
    number("One")
    number("Two")
    number("Three")
    number("Four")
    number("Five")
    number("Six")
    number("Seven")
    number("Eight")
    number("Nine")
    number("Plus")
    number("Minus")
    number("Multiply")
    number("Divide")

    let mechanism = (name, rarity) => {
        let id = name.toLowerCase()
        event.create(id + "_mechanism").texture("kubejs:item/" + id + "_mechanism").displayName(name + " Mechanism").rarity(rarity ? rarity : "common")
        event.create("incomplete_" + id + "_mechanism","create:sequenced_assembly").texture("kubejs:item/incomplete_" + id + "_mechanism").displayName("Incomplete " + name + " Mechanism")
    }

    event.create("radiant_coil").glow(true).texture("kubejs:item/radiant_coil").displayName("Radiant Induction Coil")
    event.create("radiant_sheet").glow(true).texture("kubejs:item/radiant_sheet").displayName("Radiant Sheet")

    mechanism("Kinetic")
    mechanism("Sealed")
    mechanism("Reinforced")
    mechanism("Infernal", "uncommon")
    mechanism("Logistic", "uncommon")
    mechanism("Inductive", "uncommon")
    mechanism("Abstruse", "rare")
    mechanism("Calculation", "rare")

    let slime_types = ["Earth", "Sky", "Ender"]
    let slime_colours = [0x8FDB84, 0x00F9DE, 0xAC2EFC]

    for (let i = 0; i < slime_types.length; i++) {
        let name = slime_types[i]
        let id = name.toLowerCase()
        event.create(`${id}_slimy_fern_leaf`)
            .color(0, slime_colours[i])
            .texture("kubejs:item/slimy_fern_leaf")
            .displayName("Slimy Fern Leaf")
        event.create(`${id}_slime_fern_paste`)
            .color(0, slime_colours[i])
            .texture("kubejs:item/ground_slimy_fern")
            .displayName("Slimy Fern Blend")
    }

    // Misc / Integration
    event.create("pipe_module_utility").texture("kubejs:item/pipe_module_utility").displayName("Utility Pipe Module")
    event.create("pipe_module_tier_1").texture("kubejs:item/pipe_module_tier_1").displayName("Brass Pipe Module")
    event.create("pipe_module_tier_2").texture("kubejs:item/pipe_module_tier_2").displayName("Invar Pipe Module")
    event.create("pipe_module_tier_3").texture("kubejs:item/pipe_module_tier_3").displayName("Enderium Pipe Module")

    event.create("circuit_scrap").texture("kubejs:item/circuit_scrap").displayName("Circuit Scrap")
    // event.create('charged_calculator').texture("kubejs:item/charged_calculator").displayName('Calculator').maxDamage(64)
    event.create("missingno").texture("kubejs:item/missingno").displayName("∄")
    event.create("zinc_dust").texture("kubejs:item/zinc_dust").displayName("Zinc Dust").tag("forge:dusts/zinc").tag("forge:dusts")
    // event.create('creosote_pellet').texture("kubejs:item/creosote_pellet").displayName('Creosote Pellet')
    event.create("sand_ball").texture("kubejs:item/sand_ball").displayName("Ball of Sand").unstackable()
    event.create("rough_sand").texture("kubejs:item/rough_sand").displayName("Sand Chunks")
    event.create("purified_sand").texture("kubejs:item/purified_sand").displayName("Purified Sand")
    event.create("silicon_compound").texture("kubejs:item/silicon_compound").displayName("Silicon Compound")
    event.create("incomplete_coke_chunk","create:sequenced_assembly").texture("kubejs:item/incomplete_coke_chunk").displayName("Cut Coke")
    event.create("coke_chunk").texture("kubejs:item/coke_chunk").displayName("Coke Chunks")
    // event.create('smoke_mote').texture("kubejs:item/smoke_mote").displayName('Tiny Smoke Cloud')

    event.create("matter_plastics").texture("kubejs:item/matter_plastics").displayName("Matter Plastics")
    event.create("nickel_compound").texture("kubejs:item/nickel_compound").displayName("Nickel Compound").unstackable()
    event.create("invar_compound","create:sequenced_assembly").texture("kubejs:item/invar_compound").displayName("Unprocessed Invar Ingot")
    event.create("dye_entangled_singularity").texture("kubejs:item/dye_entangled_singularity").unstackable().displayName("Chromatic Singularity")

    event.create("strainer_filter").texture("kubejs:block/strainer_survivalist").displayName("Strainer Filter").maxDamage(384)
    event.create("chromatic_resonator").texture("kubejs:item/chromatic_resonator").displayName("Chromatic Resonator").maxDamage(512)
    event.create("flash_drive").texture("kubejs:item/boot_medium").displayName("Flash Drive").maxDamage(512)

    event.create("thermal_cast").texture("kubejs:item/thermal_cast").displayName("Thermal Cast").unstackable()
    event.create("three_cast").texture("kubejs:item/three_cast").displayName("Integer Cast (3)").unstackable()
    event.create("eight_cast").texture("kubejs:item/eight_cast").displayName("Integer Cast (8)").unstackable()
    event.create("plus_cast").texture("kubejs:item/plus_cast").displayName("Operator Cast (+)").unstackable()
    event.create("minus_cast").texture("kubejs:item/minus_cast").displayName("Operator Cast (-)").unstackable()
    event.create("multiply_cast").texture("kubejs:item/multiply_cast").displayName("Operator Cast (x)").unstackable()
    event.create("divide_cast").texture("kubejs:item/divide_cast").displayName("Operator Cast (/)").unstackable()
    event.create("attachment_base").texture("kubejs:item/attachment_base").displayName("Attachment Base")
    event.create("silver_coin").texture("kubejs:item/silver_coin").displayName("Silver Coin Stack Icon")
    event.create("gold_coin").texture("kubejs:item/gold_coin").displayName("Gold Coin Stack Icon")

})

StartupEvents.registry("block", event => {

    event.create("enderium_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(4.0).displayName("Ender Casing")
    event.create("lead_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Lead Casing")
    event.create("zinc_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Zinc Casing")
    event.create("invar_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Invar Casing")
    event.create("fluix_casing").soundType("metal").tagBlock("mineable/pickaxe").tagBlock("create:wrench_pickup").requiresTool(true).hardness(3.0).displayName("Fluix Casing")

    event.create("fluid_drawer_casing").soundType("stone").tagBlock("mineable/pickaxe").hardness(3.0).requiresTool(true).displayName("Fluid Drawer (Casing)")

    event.create("computation_matrix").soundType("lantern").hardness(0.1).displayName("Computation Matrix").fullBlock(false).notSolid().box(1,1,1,15,15,15).waterlogged().opaque(false).lightLevel(7).renderType("translucent")
        .item(i=>{i.rarity("uncommon")})

    let machine = (name, layer) => {
        let id = name.toLowerCase()
        return event.create(id + "_machine", "cardinal")
            .soundType("lantern")
            .hardness(3.0)
            .tagBlock("mineable/pickaxe")
            .requiresTool(true)
            .displayName(name + " Machine")
            .notSolid()
            .renderType(layer)
            .redstoneConductor(false)
            .tagBlock("create:wrench_pickup")
            .defaultState(blockState =>{
                blockState.set(BlockStateProperties.HORIZONTAL_FACING, "south")
            })
    }

    machine("Andesite", "solid").tagBlock("mineable/axe").box(0, 0, 3, 16, 16, 16).box(3, 14, 3, 13, 18, 17)
    machine("Brass", "translucent").tagBlock("mineable/axe").box(0, 0, 0, 16, 4, 16).box(0, 0, 3, 16, 10, 13).box(8, 3, 4, 16, 16, 16).box(1, 10, 5, 7, 21, 11)
    machine("Copper", "cutout").tagBlock("mineable/axe").box(0, 0, 0, 16, 4, 16).box(1.9, 2, -2, 14.9, 10, 10).box(6, 4, 6, 16, 20, 16).box(0, 4, 6, 10, 24, 16)
    machine("Gold", "cutout").tagBlock("mineable/axe").box(0, 0, 0, 16, 3, 16).box(0, 3, 0, 12, 16, 8).box(0, 3, 8, 10, 14, 16).box(12, 3, 1, 16, 10, 16)
    machine("Lead", "translucent").box(0, 0, 1, 16, 2, 15).box(1, 2, 7, 14, 14, 15).box(0, 2, 0, 7, 9, 12).box(10, 0, 8, 16, 11, 16).box(7.5, 14, 8.5, 12.5, 21, 13.5)
    machine("Zinc", "cutout")
    machine("Enderium", "cutout")
})

StartupEvents.registry("fluid", event => {
    let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
})

ItemEvents.modification(event => {
    let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
    colors.forEach(element => {
        event.modify("ae2:" + element + "_paint_ball", item => {
            item.maxStackSize = 1
        })
    });

    //event.modify("projectred_core:screwdriver", item => {
    //    item.maxDamage = 512
    //})
})

StartupEvents.registry("potion", (event) => {
    let createCustomPotion = (name, effect, duration, long_duration, strong_duration) => {
        event.create(name).effect(
            effect,
            20 * duration,
            0
        )

        event.create("long_" + name).effect(
            effect,
            20 * long_duration,
            0
        )

        if (strong_duration != undefined)
            event.create("strong_" + name).effect(
                effect,
                20 * strong_duration,
                1
            )
    }

    createCustomPotion("haste", "minecraft:haste", 180, 480, 90)
})
