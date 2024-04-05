import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import VideoBackground from './VideoBackground';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/VideoBackground',
  component: VideoBackground,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof VideoBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  args: {
    vidSrc: 'https://res.cloudinary.com/dtwk4dm3g/video/upload/v1708889926/refresh_studios/hero_refresh_dua0i7.webm',
    type: 'webm',
    headingText: 'Refresh Studios',


  },
};