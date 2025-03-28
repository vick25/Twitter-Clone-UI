import vine, { SimpleMessagesProvider } from '@vinejs/vine'

vine.messagesProvider = new SimpleMessagesProvider({
    minLength: 'Le champ {{field}} doit avoir au minimum {{min}} caractères',
    maxLength: 'Le champ {{field}} doit avoir au maximum {{max}} caractères',
    email: 'Le champ {{field}} doit être une adresse email valide',
})

export const RegisterUserValidator = vine.compile(
    vine.object({
        firstname: vine.string().trim().minLength(3).maxLength(50),
        lastname: vine.string().trim().minLength(3).maxLength(50),
        username: vine.string().unique(async (db, value) => {
            const result = await db.from('users').select('username').where('username', value).first();
            return !result;
        }),
        email: vine.string().trim().email(),
        password: vine.string().trim().minLength(6).confirmed(),
    })
);

export const LoginUserValidator = vine.compile(
    vine.object({
        email: vine.string().email(),
        password: vine.string().minLength(6),
    })
);