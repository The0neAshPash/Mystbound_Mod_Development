ServerEvents.recipes(event => {
      event.recipes.summoningrituals
          .altar(Ingredient.of("simplyswords:empowered_remnant"))
          .mobOutput('alexsmobs:sunbird')
          .input('quark:bottled_cloud')
          .input('call_of_yucutan:fragment_of_rebirth')
          .input('born_in_chaos_v1:fire_dust')
          .input('irons_spellbooks:holy_upgrade_orb')
          .sacrifice('alexsmobs:blue_jay')
          .sacrificeRegion(3, 3)
          .recipeTime(200)
          .dayTime('day')
          .weather('clear');
  },
)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("minecraft:recovery_compass"))
      .itemOutput('minecraft:respawn_anchor')
      .mobOutput('born_in_chaos_v1:supreme_bonescaller')
      .mobOutput('born_in_chaos_v1:spiritof_chaos')
      .input('6x minecraft:crying_obsidian')
      .input('3x minecraft:glowstone')
      .input('minecraft:totem_of_undying')
      .sacrifice('dragnlivestock:o_pig', 1)
      .sacrificeRegion(3, 3)
      .recipeTime(200)
      .blockBelow('minecraft:bedrock')
      .dayTime('night');
  },
)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("minecraft:obsidian"))
      .itemOutput('minecraft:crying_obsidian')
      .itemOutput('spelunkery:sulfur')
      .mobOutput('born_in_chaos_v1:firelight')
      .mobOutput('born_in_chaos_v1:spiritof_chaos')
      .mobOutput('born_in_chaos_v1:restless_spirit')
      .input('2x apotheosis:gem_dust')
      .input('13x ars_nouveau:runic_chalk')
      .input('21x ars_nouveau:source_gem')
      .input('alexsmobs:lava_bottle')
      .input('3x alexsmobs:mungal_spores')
      .input('10x irons_spellbooks:arcane_essence')
      .input('5x ars_nouveau:conjuration_essence')
      .sacrifice('born_in_chaos_v1:seared_spirit', 1)
      .sacrificeRegion(3, 3)
      .recipeTime(200)
      .blockBelow('minecraft:bedrock')
      .dayTime('night');
  },
)
ServerEvents.recipes(event => {
    event.recipes.summoningrituals
        .altar(Ingredient.of("royalvariations:royal_bone_meal"))
        .mobOutput('dragnlivestock:o_mooshroom')
        .input('call_of_yucutan:fragment_of_rebirth')
        .input('bakery:strawberry')
        .input('minecraft:carrot')
        .input('minecraft:potato')
        .input('minecraft:wheat')
        .input('farmersdelight:tomato')
        .input('farmersdelight:cabbage')
        .input('farmersdelight:onion')
        .input('farmersdelight:rice')
        .input('farmersdelight:brown_mushroom_colony')
        .input('farmersdelight:red_mushroom_colony')
        .sacrifice('dragnlivestock:o_cow')
        .sacrificeRegion(3, 3)
        .recipeTime(200)
        .blockBelow('farmersdelight:rich_soil');
  },
)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("irons_spellbooks:upgrade_orb"))
      .itemOutput('irons_spellbooks:lesser_spell_slot_upgrade')
      .input('6x irons_spellbooks:hogskin')
      .input('illagerinvasion:hallowed_gem')
      .input('2x apotheosis:rare_material')
      .input('ars_nouveau:ritual_binding')
      .sacrifice('born_in_chaos_v1:spiritof_chaos', 1)
      .sacrificeRegion(3, 3)
      .recipeTime(200)
      .blockBelow('irons_spellbooks:arcane_anvil')
      .dayTime('night');
  },
)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("irons_spellbooks:rotten_spell_book"))
      .itemOutput('irons_spellbooks:ruined_book')
      .input('apotheosis:gem_dust')
      .input('supplementaries:antique_ink')
      .input('minecraft:echo_shard')
      .input('irons_spellbooks:ancient_knowledge_fragment')
      .input('irons_spellbooks:hogskin')
      .sacrifice('minecraft:warden', 2)
      .sacrificeRegion(3, 3)
      .recipeTime(200)
      .blockBelow('minecraft:reinforced_deepslate');
  },
)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("butcher:pig_skin"))
      .itemOutput('irons_spellbooks:hogskin')
      .mobOutput('born_in_chaos_v1:spiritof_chaos')
      .mobOutput('born_in_chaos_v1:mother_spider')
      .input('spelunkery:portal_fluid_bottle')
      .input('ars_nouveau:manipulation_essence')
      .input('spelunkery:inkcap_mushroom')
      .input('spelunkery:white_inkcap_mushroom')
      .sacrifice('minecraft:slime', 3)
      .sacrificeRegion(3, 3)
      .recipeTime(200)
      .blockBelow('minecraft:crying_obsidian')
      .dayTime('night');
  },
)
//Weather (incomplete)
ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("ars_nouveau:frostaya_pod"))
      .itemOutput('crystal_gems:white_gem')
      .input('13x ars_nouveau:air_essence')
      .input('2x butcher:sponge')
      .input('8x caupona:vivid_charcoal')
      .input('3x ars_nouveau:abjuration_essence')
      .sacrifice('dragnlivestock:o_chicken', 5)
      .sacrificeRegion(3, 3)
      .recipeTime(3600)
      .blockBelow('minecraft:stone');
  },
)

ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("royalvariations:royal_gunpowder"))
      .itemOutput('crystal_gems:blue_gem')
      .input('13x ars_nouveau:water_essence')
      .input('2x irons_spellbooks:lightning_bottle')
      .input('5x ars_nouveau:air_essence')
      .input('3x quark:bottled_cloud')
      .input('21x galosphere:silver_nugget')
      .input('34x minecraft:kelp')
      .sacrifice('minecraft:slime', 8)
      .sacrificeRegion(3, 3)
      .recipeTime(3600)
      .blockBelow('minecraft:moss_block');
  },
)

ServerEvents.recipes(event => {
  event.recipes.summoningrituals
      .altar(Ingredient.of("irons_spellbooks:energized_core"))
      .itemOutput('crystal_gems:purple_gem')
      .input('13x irons_spellbooks:lightning_bottle')
      .input('8x ars_nouveau:air_essence')
      .input('3x ars_nouveau:fire_essence')
      .input('1x spelunkery:cinnabar')
      .input('2x call_of_yucutan:hematite')
      .input('21x galosphere:silver_nugget')
      .input('34x minecraft:kelp')
      .sacrifice('minecraft:sheep', 5)
      .sacrificeRegion(3, 3)
      .recipeTime(3600)
      .blockBelow('minecraft:copper_ore');
  },
)

//Gem usage area

ItemEvents.rightClicked('crystal_gems:white_gem', event => {
    event.server.runCommand('weather clear')

    const stack = event.player.getHeldItem(event.hand);
    stack.count -= 1;
    
    // Update the player's inventory so client syncs
    event.player.setHeldItem(event.hand, stack);
  }
)

ItemEvents.rightClicked('crystal_gems:blue_gem', event => {
    event.server.runCommand('weather rain')

    const stack = event.player.getHeldItem(event.hand);
    stack.count -= 1;
    
    // Update the player's inventory so client syncs
    event.player.setHeldItem(event.hand, stack);
  }
)

ItemEvents.rightClicked('crystal_gems:purple_gem', event => {
    event.server.runCommand('weather thunder')

    const stack = event.player.getHeldItem(event.hand);
    stack.count -= 1;
    
    // Update the player's inventory so client syncs
    event.player.setHeldItem(event.hand, stack);
  }
)


