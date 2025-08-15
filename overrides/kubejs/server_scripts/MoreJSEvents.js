MoreJSEvents.villagerTrades((event) => {
    event.removeVanillaTrades(["minecraft:armorer","minecraft:toolsmith","minecraft:weaponsmith"], 4);
    event.removeVanillaTrades(["minecraft:armorer","minecraft:toolsmith","minecraft:weaponsmith"], 5);
    event.removeVanillaTrades(["minecraft:fisherman","minecraft:fletcher"], 1);
    event.addTrade("minecraft:fisherman", 1, [TradeItem.of("minecraft:cod", 1, 5)], "minecraft:emerald");
    event.addTrade("minecraft:fletcher", 1, ["minecraft:emerald"], "minecraft:string");
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("minecraft:emerald", 21, 35),TradeItem.of("minecraft:diamond", 4, 5)], "minecraft:diamond_chestplate");
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("minecraft:emerald", 13, 33),TradeItem.of("minecraft:diamond", 2, 3)], "minecraft:diamond_boots");
    event.addTrade("minecraft:armorer", 5, [TradeItem.of("minecraft:emerald", 13, 33),TradeItem.of("minecraft:diamond", 2, 4)], "minecraft:diamond_helmet");
    event.addTrade("minecraft:armorer", 4, [TradeItem.of("minecraft:emerald", 19, 33),TradeItem.of("minecraft:diamond", 3, 5)], "minecraft:diamond_leggings");
    event.addTrade("minecraft:toolsmith", 4, [TradeItem.of("minecraft:emerald", 17, 31),TradeItem.of("minecraft:diamond", 1, 2)], "minecraft:diamond_axe");
    event.addTrade("minecraft:toolsmith", 4, [TradeItem.of("minecraft:emerald", 10, 27),"minecraft:diamond"], "minecraft:diamond_shovel");
    event.addTrade("minecraft:toolsmith", 5, [TradeItem.of("minecraft:emerald", 18, 32),TradeItem.of("minecraft:diamond", 1, 2)], "minecraft:diamond_pickaxe");
    event.addTrade("minecraft:weaponsmith", 4, [TradeItem.of("minecraft:emerald", 17, 31),TradeItem.of("minecraft:diamond", 1, 2)], "minecraft:diamond_axe");
    event.addTrade("minecraft:weaponsmith", 5, [TradeItem.of("minecraft:emerald", 13, 24),"minecraft:diamond"], "minecraft:diamond_sword");
});