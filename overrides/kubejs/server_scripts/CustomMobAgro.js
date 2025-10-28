const LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');

let huntingDogs = [
    
    "dragnpets:bloodhound",
    "dragnpets:american_ridgeback",
    "drasgnpets:coonhound",

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

let foxHounds = [
    "dragnpets:o_ocelot",
    "dragnpets:labrador",
    "dragnpets:cocker_spaniel",
    "dragnpets:whippet",
    "dragnpets:foxhound",
    "dragnpets:jack_russell"
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

foxHounds.forEach(foxHound => {
    EntityJSEvents.addGoals(foxHound, event => {
        event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
            if (!event.entity.isTame() && (target.tags.toString().includes('small_prey'))) return true;
            if (event.entity.wasToldToHunt() && (target.tags.toString().includes('small_prey'))) return true;
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

EntityJSEvents.addGoals('dragnpets:o_fox', event => {
    event.nearestAttackableTarget(0, LivingEntity, 10, true, false, target => {
        if (!event.entity.isTame() && (target.tags.toString().includes('small_prey'))) return true;
        return false;
    });
})