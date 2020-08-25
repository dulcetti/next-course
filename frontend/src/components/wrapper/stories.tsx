import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs, text } from '@storybook/addon-knobs';
import Wrapper from '.';

export default {
  title: 'Wrapper',
  component: Wrapper,
  decorators: [withKnobs],
} as Meta;

export const BasicWrapper: Story = () => <Wrapper title={text('Title', 'Papo de Bar')} />;
