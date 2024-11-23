export default eventHandler(async (event) => {
    const { id } = getRouterParams(event)

    const deletedUser = await useDrizzle()
        .delete(tables.users)
        .where(and(eq(tables.users.id, Number(id))))
        .returning()
        .get()

    if (!deletedUser) {
        throw createError({
            statusCode: 404,
            message: 'User not found'
        })
    }
    return deletedUser
})
