ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('cold_sweat:goat_fur', 1), 
        [
          'butcher:goatfur'
        ]
      )
      event.shapeless(
        Item.of('minecraft:experience_bottle', 5), 
        [
          'knightlib:small_essence'
        ]
      )
      event.shapeless(
        Item.of('crystal_gems:orange_gem', 1), 
        [
          'crystal_gems:red_gem',
          'reactive:soul_bottle',
          'reactive:light_bottle',
          'reactive:vital_bottle'
        ]
      )
      event.replaceInput(
        { input: 'knightlib:small_essence' }, 
        'knightlib:small_essence',            
        'minecraft:echo_shard'         
      ) 
      event.shaped('reactive:gravity_chandelier', [// arg 1: output
        'AAA', 
        'BBB', // arg 2: the shape (array of strings)
        ' C '  
      ], {
        A: 'reactive:motion_salt', 
        B: 'minecraft:end_rod',  //arg 3: the mapping object
        C: 'minecraft:gold_ingot'   
      }
      )
      event.shaped('reactive:gravity_beam', [// arg 1: output
          'AAA', 
          'ACA', // arg 2: the shape (array of strings)
          'ABA'  
        ], {
          A: 'minecraft:cobblestone', 
          B: 'reactive:motion_salt',  //arg 3: the mapping object
          C: 'minecraft:redstone_lamp'   
        }
      )
      event.shaped('cataclysm:black_steel_ingot', [// arg 1: output
          ' A ', 
          'ABA', // arg 2: the shape (array of strings)
          ' A '  
        ], {
          A: 'caupona:vivid_charcoal', 
          B: 'minecraft:iron_ingot',  //arg 3: the mapping object
        }
      )
      event.remove({ output: 'mofus_better_end_:end_archive_book' })
      event.remove({ output: 'reactive:linked_warp_bottle' })
      event.remove({ output: 'reactive:rending_plinth' })
      event.remove({ output: 'reactive:gateway' })
      event.remove({ output: 'reactive:secret_scale' })
      event.remove({ type: 'minecraft:blasting', input: 'minecraft:iron_ingot' })
      event.blasting('magistuarmory:steel_ingot','cataclysm:black_steel_ingot')
      .xp(0.5)
      .cookingTime(2000)
  },
)
