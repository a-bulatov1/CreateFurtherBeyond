const removedItems = [
    // oritech
    'oritech:biosteel_ingot',
    'oritech:biosteel_block',
    'oritech:biosteel_dust',
    'oritech:steel_ingot',
    'oritech:steel_dust',
    'oritech:steel_block',

    // stellaris
    'stellaris:steel_ingot',
    'stellaris:steel_nugget',
    'stellaris:steel_block',
    'stellaris:raw_steel_block',
    'stellaris:raw_steel_ingot',
    'stellaris:steel_ore',
    'stellaris:deepslate_steel_ore',
    'stellaris:raw_uranium',
    'stellaris:raw_uranium_block',
    'stellaris:uranium_ingot',
    'stellaris:uranium_block',
    'stellaris:mercury_uranium_ore'

    // big cannons
    //'createbigcannons:steel_ingot'
    
];

const removedRecipes = [
    {id: 'oritech:foundry/alloy/biosteel'},
    {id: "createmetallurgy:bulk_melting/steel/raw_block"}
];

RecipeViewerEvents.removeEntriesCompletely('item', event => {
    event.remove(removedItems)     
})

ServerEvents.recipes(event => {
    // quick remove for the non-special recipes (non-oritech mostly)
    removedItems.forEach(item => event.remove({output: item}))
    //for (let i = 0; i < removedItems.length; i++) {
    //    event.remove({output: removedItems[i]})    
    //}
    // one off recipes that arent deleted normally
    event.remove(removedRecipes)
})

ServerEvents.tags("item", event => {
    event.removeAllTagsFrom(removedItems)
})
