
BlockEvents.modification(event => {
  function breakSpeed(b, s) {
    event.modify(b, block => { block.destroySpeed = s })
  }

  breakSpeed('minecraft:spawner', -1)
})