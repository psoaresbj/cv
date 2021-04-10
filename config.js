/* eslint-disable sort-keys */
export const footer = {
  buttonLabel: 'View detailed info'
};

export const profile = {
  name: 'Paulo Soares',
  title: 'Front-end developer & UI Designer',
  birthdate: '29/10/1980',
  description: 'I am a frontend developer, a UI designer and a motorcycle traveler with video editing skills.'
};

export const seo = {
  description: 'Paulo Soares CV website',
  image: 'images/profile-photo.png',
  keywords: 'front-end develope, react developer, web developer, developer, designer, ui designer, component designer',
  title: 'Paulo Soares - Front-end Developer & UI Designer'
};

export const sidebar = {
  blocks: [
    {
      heading: 'Contact & Social',
      rows: [
        {
          icon: 'envelope',
          heading: '{{ email }}',
          href: 'mailto:{{ email }}'
        },
        {
          icon: 'github',
          heading: 'github.com/psoaresbj',
          href: 'https://github.com/psoaresbj'
        },
        {
          icon: 'linkedin',
          heading: 'in/soarespaulo',
          href: 'https://www.linkedin.com/in/soarespaulo/'
        },
        {
          icon: 'phone',
          heading: '{{ phone }}',
          href: 'tel:{{ phone }}'
        }
      ]
    },
    {
      heading: 'Location',
      rows: [
        {
          icon: 'home',
          heading: 'Braga - Portugal'
        },
        {
          icon: 'world',
          heading: 'Available for remote'
        },
        {
          icon: 'plante',
          heading: 'Available for relocation'
        }
      ]
    },
    {
      heading: 'Skills',
      rows: [
        {
          icon: 'code',
          heading: 'Languages',
          content: [
            {
              type: 'chipList',
              items: ['Javascript', 'HTML', 'CSS', 'PHP', 'GRAPHQL']
            }
          ]
        },
        {
          icon: 'box',
          heading: 'Libs, frameworks and tooling',
          content: [
            {
              type: 'chipList',
              items: [
                'React',
                'Styled-components',
                'Emotion',
                'Sass',
                'Nextjs',
                'Gatsby',
                'Angular',
                'Webpack',
                'ESlint',
                'Git'
              ]
            }
          ]
        },
        {
          icon: 'software',
          heading: 'Software',
          content: [
            {
              type: 'chipList',
              items: ['Adobe suite', 'Corel suite', 'Sketch', 'Figma', 'VS Code', 'Sublime', 'Atom']
            }
          ]
        },
        {
          icon: 'heart',
          heading: 'Soft skills',
          content: [
            {
              type: 'chipList',
              items: [
                'Accountability',
                'Creativity',
                'Self-learning',
                'Availability',
                'Communication',
                'Teamwork',
                'Self-awareness'
              ]
            }
          ]
        }
      ]
    },
    {
      heading: 'Languages',
      rows: [
        {
          content: [
            {
              type: 'progressBarList',
              items: [{ label: 'EN', progress: 85 }, { label: 'PT', progress: 100 }, { label: 'ES', progress: 55 }]
            }
          ]
        }
      ]
    },
    {
      heading: 'Education',
      rows: [
        {
          icon: 'headphones',
          heading: 'Self learning and training',
          content: [
            {
              type: 'text',
              items: ['React, Angular, Git, CSS, Node, and many other online courses.']
            }
          ]
        },
        {
          icon: 'school',
          heading: 'BA IT Eng. - ESTIG - Beja'
        }
      ]
    }
  ]
};
