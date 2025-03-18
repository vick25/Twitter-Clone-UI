import vine from '@vinejs/vine'

export const RegisterUserValidator = vine.compile(
    vine.object({
        firstname: vine.string().trim().minLength(3).maxLength(50),
        lastname: vine.string().trim().minLength(3).maxLength(50),
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