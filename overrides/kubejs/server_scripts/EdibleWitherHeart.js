
ItemEvents.modification(event => {
    event.modify("butcher:witheredheart", item => {
        item.foodProperties = food => {
            food.hunger(2);
            food.saturation(0.2);
            food.alwaysEdible(); // Required so KubeJS can override vanilla
        };
    });
});