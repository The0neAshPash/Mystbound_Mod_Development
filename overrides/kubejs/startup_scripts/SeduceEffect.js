
StartupEvents.registry('mob_effect', event => {
  event.create('mystbound:seduction', 'basic').displayName('Seduced')
})

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.LivingDamageEvent", event => {
  const { amount, source: { player }, entity } = event
  if (!player) return;
  let origin = player.getNbt().getCompound('ForgeCaps').getCompound('origins:origins').getCompound('Origins').getString('origins:origin')
  if (origin == 'mystbound-origins:siren' && entity.hasEffect('mystbound:seduction')) {
    let newDamage = (amount * 1.5)
    event.setAmount(newDamage)
    player.tell('1.5x Damage')
    return;
  }
}
)