import {defineType} from 'sanity'

export default defineType({
  name: 'blog',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Publish Date',
      name: 'date',
      type: 'date',
    },
    {
      title: 'Read Estimate (Min)',
      name: 'time',
      type: 'number',
    },
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'authors'}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          marks: {
            decorators: [
              {title: 'Bold', value: 'strong'},
              {title: 'Italic', value: 'em'},
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          title: 'Inline Image',
          name: 'inlineImage',
          type: 'object',
          fields: [
            {
              title: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              title: 'Caption',
              name: 'caption',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
})
