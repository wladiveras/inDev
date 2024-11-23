export default eventHandler(async () => {
    const users = await useDrizzle().select().from(tables.users).all()

    return users
})
