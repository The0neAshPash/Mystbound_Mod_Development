const LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');

let huntingDogs = [
    "dragnpets:labrador",
    "dragnpets:bloodhound",
    "dragnpets:cocker_spaniel",
    "dragnpets:whippet",
    "dragnpets:american_ridgeback"
]

let guardianDogs = [
    "dragnpets:doberman",
    "dragnpets:pyrenees",
    "dragnpets:bernese",
    "dragnpets:rottweiler"
]

let wolves = [
    "minecraft:wolf",
    "dragnpets:o_wolf"
]

huntingDogs.forEach(huntingDog => {
    EntityJSEvents.addGoals(huntingDog, event => {
        event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
            if (!event.entity.isTame() && (target.tags.toString().includes('prey') || target.tags.toString().includes('beast'))) return true;
            if (event.entity.wasToldToHunt() && (target.tags.toString().includes('prey') || target.tags.toString().includes('beast'))) return true;
            return false;
        });
    });
})

guardianDogs.forEach(guardianDog => {
    EntityJSEvents.addGoals(guardianDog, event => {
        event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
            if (!event.entity.isTame() && (target.tags.toString().includes('predator'))) return true;
            if (event.entity.wasToldToHunt() && (target.tags.toString().includes('predator'))) return true;
            return false;
        });
    });
})

wolves.forEach(wolf => {
    EntityJSEvents.addGoals(wolf, event => {
        event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
            if (!event.entity.isTame() && (target.tags.toString().includes('prey') || target.tags.toString().includes('beast'))) return true;
            return false;
        });
    });
})

EntityJSEvents.addGoals('minecraft:polar_bear', event => {
    event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
        if (target.tags.toString().includes('prey')) return true;
        return false;
    });
})

EntityJSEvents.addGoals('minecraft:iron_golem', event => {
    event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
        if (target.tags.toString().includes('a_monster')) return true;
        return false;
    });
})