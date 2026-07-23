RecipeViewerEvents.removeCategories(event => {
  //console.log(event.categoryIds) //log a list of all category ids to logs/kubejs/client.txt
  event.remove('mbd2:multiblock_info')
})
