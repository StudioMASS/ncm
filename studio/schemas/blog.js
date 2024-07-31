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
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'video',
      type: 'file',
      title: 'Video',
      options: {
        accept: '.mp4, .mov',
      },
    },
    {
      name: 'type',
      title: 'Blog Type',
      type: 'string',
      options: {
        list: [
          {title: 'Default', value: 'default'},
          {title: 'Featured', value: 'featured'},
        ],
        layout: 'dropdown',
      },
      validation: (Rule) => Rule.required(),
      initialValue: 'default',
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
      weak: true,
      to: [{type: 'authors'}],
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Heading', value: 'h3'},
            {title: 'Normal', value: 'normal'},
            {title: 'Quote', value: 'blockquote'},
          ],
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
          title: 'Image',
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
        {
          title: 'Video',
          name: 'video',
          type: 'object',
          fields: [
            {
              title: 'URL',
              name: 'url',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'url',
            },
          },
        },
      ],
    },
  ],
})
