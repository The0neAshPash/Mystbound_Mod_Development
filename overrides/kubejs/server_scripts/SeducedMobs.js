let $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
let $MobCategory = Java.loadClass('net.minecraft.world.entity.MobCategory')

// This will list each entity categorized as a Mob. If we need other categories for whatever reason 'like a mod adds their own mob types', let me know. - IllestT
let seducedMobs = []
$BuiltInRegistries.ENTITY_TYPE.keySet().forEach(id => {
    let type = $BuiltInRegistries.ENTITY_TYPE.get(id)
    if (!type) return;

    let category = type.getCategory()
    if (
        category == $MobCategory.MONSTER ||
        category == $MobCategory.CREATURE ||
        category == $MobCategory.MISC
    ) {
        seducedMobs.push(id.toString())
    }
})

seducedMobs.forEach(seducedMob => {
    EntityJSEvents.addGoalSelectors(seducedMob, event => {
        event.customGoal('sirenSeduced', 1, m => m.target != null, m => m.target != null, true, m => { }, m => { }, true, mob => {
            const { target } = mob;
            if (target == null) return;
            let origin = target.player.getNbt().getCompound('ForgeCaps').getCompound('origins:origins').getCompound('Origins').getString('origins:origin')
            if (!target.isPlayer() || origin != 'mystbound-origins:siren') return;
            if (mob.getActiveEffects().toString().includes('seduction')) {
                mob.setTarget(null)
            }
        })
    })
})