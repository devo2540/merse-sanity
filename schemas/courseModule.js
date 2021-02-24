export default {
    name: 'courseModule',
    title: 'Modules',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'lesson',
            title: 'Lesson',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'lesson' }],
                },
            ],
        },
    ],
}
