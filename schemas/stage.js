export default {
    name: 'stage',
    title: 'Stage',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent',
        },
        {
            name: 'courses',
            title: 'Courses',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'course' }],
                },
            ],
        },
    ],
}
