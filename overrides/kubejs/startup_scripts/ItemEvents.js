ItemEvents.modification(event => {
    event.modify('born_in_chaos_v1:dark_metal_armor_helmet', item => {
      item.armorProtection = 3
      item.armorToughness = 4
    })
  
    event.modify('born_in_chaos_v1:dark_metal_armor_chestplate', item => {
      item.armorProtection = 8
      item.armorToughness = 4
    })
  
    event.modify('born_in_chaos_v1:dark_metal_armor_leggings', item => {
      item.armorProtection = 6 
      item.armorToughness = 4
    })

    event.modify('born_in_chaos_v1:dark_metal_armor_boots', item => {
      item.armorProtection = 3  
      item.armorToughness = 4
    })
    
    event.modify('cataclysm:ignitium_helmet', item => {
      item.armorProtection = 3
      item.armorToughness = 4  
    })
    
    event.modify('cataclysm:ignitium_chestplate', item => {
      item.armorProtection = 8  
      item.armorToughness = 4
    })
    
    event.modify('cataclysm:ignitium_elytra_chestplate', item => {
      item.armorProtection = 8
      item.armorToughness = 4  
    })
    
    event.modify('cataclysm:ignitium_leggings', item => {
      item.armorProtection = 6 
      item.armorToughness = 4 
    })
    
    event.modify('cataclysm:ignitium_boots', item => {
      item.armorProtection = 3
      item.armorToughness = 4  
    })
    
    event.modify('cataclysm:cursium_helmet', item => {
      item.armorProtection = 3 
      item.armorToughness = 4 
    })
    
    event.modify('cataclysm:cursium_chestplate', item => {
      item.armorProtection = 8 
      item.armorToughness = 4 
    })

    event.modify('cataclysm:cursium_leggings', item => {
      item.armorProtection = 6 
      item.armorToughness = 4
    })

    event.modify('cataclysm:cursium_boots', item => {
      item.armorProtection = 3 
      item.armorToughness = 4 
    })
    event.modify('crystal_gems:green_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:pink_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:orange_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:yellow_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:purple_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:white_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:red_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:black_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:blue_gem', item => { item.fireResistant = false })
    event.modify('crystal_gems:rainbow_gem', item => { item.fireResistant = false })

  })