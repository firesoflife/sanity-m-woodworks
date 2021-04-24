export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '608466ae4935d2cc1bd88bf2',
                  title: 'Sanity Studio',
                  name: 'sanity-m-woodworks-studio',
                  apiId: '984670d5-6485-4f4c-8d4b-fdce90bd97dd'
                },
                {
                  buildHookId: '608466ae091c3dc5c01b905f',
                  title: 'Blog Website',
                  name: 'sanity-m-woodworks',
                  apiId: '849c1cbc-aba4-4bed-8633-fd9eba71c410'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firesoflife/sanity-m-woodworks',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-m-woodworks.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
