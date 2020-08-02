import { withKnobs, text } from '@storybook/addon-knobs';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
};

export const Index = () => (
  <Main
    title={text('Title', 'Sérgio Hampel')}
    description={text(
      'Description',
      'Typescript, React, NextJS e Styled Components'
    )}
  />
);
