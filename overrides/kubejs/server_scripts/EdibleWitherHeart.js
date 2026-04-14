// CONFIGURE THIS:
const REQUIRED_POWER = "mystbound:banshee-origin/man-eater"; 
// ^ Replace with the power players must have to eat the heart

// Make the item behave like food ONLY for players with the required power
ItemEvents.canEat(event => {
    const { item, player } = event;

    if (item.id !== "butcher:witheredheart") return;

    // Read Origins ForgeCaps
    let caps = player.persistentData?.ForgeCaps;
    let origins = caps?.["origins:origins"]?.Origins;

    // Check if the player has the required power
    let hasPower = origins?.[REQUIRED_POWER] === true;

    if (hasPower) {
        // Allow eating even though the item is normally not food
        event.allowed = true;
    } else {
        // Block eating for everyone else
        event.allowed = false;
    }
});

// Define the food stats (only applied if canEat allowed it)
ItemEvents.modification(event => {
    event.modify("butcher:witheredheart", item => {
        item.foodProperties = food => {
            food.hunger(2);
            food.saturation(0.2);
            food.alwaysEdible(); // Required so KubeJS can override vanilla
        };
    });
});