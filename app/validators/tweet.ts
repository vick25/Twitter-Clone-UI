import vine from '@vinejs/vine'

export const TweetValidator = vine.compile(
    vine.object({
        content: vine.string().trim().minLength(3).maxLength(280),
    })
) 