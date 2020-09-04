import { Story, Meta } from '@storybook/react/types-6-0';

import { Main } from '.';

export default {
  title: 'Main',
  component: Main,
} as Meta;

export const Index: Story = (args) => <Main {...args} />;

export const Secondary: Story = (args) => <Main {...args} />;
