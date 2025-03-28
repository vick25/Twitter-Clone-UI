import vine from '@vinejs/vine'

export const UserProfileValidator = vine.compile(
    vine.object({
        profilePictureUrl: vine.file({
            size: '2mb',
            extnames: ['jpg', 'jpeg', 'png', 'webp'],
        }).nullable(),
        biography: vine.string().trim().nullable(),
        location: vine.string().trim().nullable(),
        websiteUrl: vine.string().trim().nullable(),
        birthdate: vine.string().trim().nullable(),
    })
); 