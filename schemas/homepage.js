export default {
    name: 'homepage',
    title: 'Homepage',
    type: 'document',
    __experimental_actions: [/*'create',*/ 'update', /*'delete',*/ 'publish'],
    fieldsets: [{ name: 'hero', title: 'Hero' }],
    fields: [
        {
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            fieldset: 'hero',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'heroText',
            title: 'Hero Text',
            type: 'string',
            fieldset: 'hero',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            fieldset: 'hero',
            validation: (Rule) => Rule.required(),
        },
    ],
}
