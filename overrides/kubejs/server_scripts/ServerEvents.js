ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('cold_sweat:goat_fur', 1), 
        [
          'butcher:goatfur'
        ]
      )
      event.replaceInput(
        { input: 'knightlib:small_essence' }, 
        'knightlib:small_essence',            
        'minecraft:echo_shard'         
      ) 
      event.remove({ output: 'mofus_better_end_:end_archive_book' })
  },
)
