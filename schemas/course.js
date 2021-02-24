import { array } from 'prop-types'

export default {
    name: 'course',
    title: 'Courses',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'overview',
            title: 'Overview',
            type: 'blockContent',
        },
        {
            name: 'modules',
            title: 'Modules',
            type: 'array',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'courseModule' }],
                },
            ],
        },
    ],
}
