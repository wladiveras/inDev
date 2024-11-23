export default eventHandler(async (event) => {
    const { id } = getRouterParams(event)
    const { name } = await readBody(event)

    const todo = await useDrizzle()
        .update(tables.users)
        .set({
            name
        })
        .where(eq(tables.users.id, Number(id)))
        .returning()
        .get()

    return todo
})
