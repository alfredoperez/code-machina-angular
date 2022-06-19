import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { VerticalNavigationComponent } from './vertical-navigation.component';

export default {
  title: 'Vertical Navigation',
  component: VerticalNavigationComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    }),
  ],
} as Meta<VerticalNavigationComponent>;

const Template: Story<VerticalNavigationComponent> = (
  args: VerticalNavigationComponent
) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  config: {
    sections: [
      {
        title: 'Getting started',
        items: [{ title: 'Overview', link: 'home' }],
      },
    ],
  },
};
