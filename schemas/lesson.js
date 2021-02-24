export default {
    name: 'lesson',
    title: 'Lessons',
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
            name: 'video',
            title: 'Video',
            type: 'string',
        },
        {
            name: 'videoTranscript',
            title: 'Video Transcript',
            type: 'blockContent',
        },
    ],
}
