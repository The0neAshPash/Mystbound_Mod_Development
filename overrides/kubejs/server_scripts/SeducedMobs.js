let $BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries')
let $MobCategory = Java.loadClass('net.minecraft.world.entity.MobCategory')
let $MemoryModuleType = Java.loadClass('net.minecraft.world.entity.ai.memory.MemoryModuleType')

// This will list each entity categorized as a Mob. If we need other categories for whatever reason 'like a mod adds their own mob types', let me know. - IllestT
let seducedMobs = []
$BuiltInRegistries.ENTITY_TYPE.keySet().forEach(id => {
    let type = $BuiltInRegistries.ENTITY_TYPE.get(id)
    if (!type) return;

    if (type.tags.anyMatch(tag => tag.location() == 'mystbound-origins:bosses')) return;

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
                try {
                        let nav = mob.getNavigation()
                        if (nav && typeof nav.stop === 'function') nav.stop()
                    } catch (e) { }

                    try {
                        let brain = mob.getBrain()
                        if (brain && $MemoryModuleType && $MemoryModuleType.ATTACK_TARGET) {
                            brain.eraseMemory($MemoryModuleType.ATTACK_TARGET)
                        }
                    } catch (e) { } // Needs to be try/catch to filter out mobs that don't have a vanilla Attack Target Goal
            }                       // If the mob continues to attack, the goal is custom and report to IllestT the mob type (mystbound:bosses are excluded)
        })
    })

})

