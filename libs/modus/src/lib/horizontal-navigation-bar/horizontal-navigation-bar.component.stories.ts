import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { HorizontalNavigationBarComponent } from './horizontal-navigation-bar.component';

export default {
  title: 'HorizontalNavigationBarComponent',
  component: HorizontalNavigationBarComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<HorizontalNavigationBarComponent>;

const Template: Story<HorizontalNavigationBarComponent> = (args: HorizontalNavigationBarComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}