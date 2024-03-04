import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'FAQs',
  type: 'document',
  fields: [
    {
      title: 'Introduction',
      name: 'intro',
      type: 'text',
    },
    {
      title: 'Feature Article',
      name: 'feature',
      type: 'reference',
      weak: true,
      to: [{type: 'blog'}],
    },
    {
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'question',
              title: 'Question',
              type: 'string',
            },
            {
              name: 'answer',
              title: 'Answer',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'listpara',
      title: 'Reading List Introduction',
      type: 'text',
    },
    {
      name: 'item',
      title: 'List Item',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'contentType',
              title: 'Content Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Podcast', value: 'podcast'},
                  {title: 'Video', value: 'video'},
                  {title: 'Article', value: 'article'},
                ],
              },
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'author',
              title: 'Author',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
        {
          type: 'reference',
          weak: true,
          title: 'Blog Post',
          to: [{type: 'blog'}],
        },
      ],
    },
    {
      title: 'Acknowledgement of Country',
      name: 'acknowledgement',
      type: 'text',
    },
    {
      name: 'social',
      title: 'Social Media Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
    },
  },
})
