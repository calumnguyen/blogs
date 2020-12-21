import { v4 as uuidv4 } from 'uuid';

function articles() {
  return [
    {
      title: 'Title of the very first article that is medium length.',
      content:
        'This is the first paragraph. This is the first paragraph. This is the first paragraph. This is the first paragraph. This is the first paragraph. This is the first paragraph. This is the first paragraph. ',
      datePosted: 'Dec-24-2020',
      tag: 'Bitcoin',
      id: uuidv4(),
    },
    {
      title: 'Second article. Short length!',
      content:
        'This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. This is the second paragraph. ',
      datePosted: 'Nov-12-2020',
      tag: 'Growth',
      id: uuidv4(),
    },
    {
      title: 'Third article with a medium length.',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo voluptatibus eaque beatae iste est debitis nihil quam repellat assumenda in.',
      datePosted: 'Nov-12-2020',
      tag: 'NextJS',
      id: uuidv4(),
    },
  ];
}

export default articles;
