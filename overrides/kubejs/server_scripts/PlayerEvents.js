PlayerEvents.inventoryChanged(e => {
    if (!e.item.nbt.contains('affix_data') && e.item.hasTag("mystbound:socketed"))
        e.item.setNbt({affix_data:{sockets:1}})
})

