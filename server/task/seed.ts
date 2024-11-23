export default defineTask({
    meta: {
        name: 'db:seed',
        description: 'Run database seed task'
    },
    async run() {
        console.log('Running DB seed task...')
        const users = [
            {
                name: 'John Doe',
                email: 'john@example.com',
                password: 'password123',
                avatar: 'https://ui-avatars.com/api/?name=john.png',
                createdAt: new Date()
            },
            {
                name: 'Jane Doe',
                email: 'jane@example.com',
                password: 'password123',
                avatar: 'https://ui-avatars.com/api/?name=jane.png',
                createdAt: new Date()
            }
        ]
        await useDrizzle().insert(tables.users).values(users)
        return { result: 'success' }
    }
})
