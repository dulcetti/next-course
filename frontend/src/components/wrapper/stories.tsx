import { Story, Meta } from '@storybook/react/types-6-0';
import Wrapper from '.';

export default {
  title: 'Wrapper',
  component: Wrapper,
} as Meta;

export const BasicWrapper: Story = (args) => <Wrapper {...args} />;
