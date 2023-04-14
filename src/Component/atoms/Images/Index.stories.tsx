import React from 'react'
import { Story, Meta } from '@storybook/react'
import ImageComponent, { ImageProps } from './Index'
import ChequeImg from '../../../Asset/image/ChequeImg.svg'
import greetImg from '../../../Asset/image/GreetImage.svg'
import review_gitImg from '../../../Asset/image/review-gif.svg'
import arrow_bottomIcon from '../../../Asset/image/arrow-bottom.svg'
import calender from '../../../Asset/image/calendar.svg'
import coin from '../../../Asset/image/coin.svg'
import cross from '../../../Asset/image/cross.svg'
import documentDownload from '../../../Asset/image/document-download.svg'
import flash from '../../../Asset/image/flash.svg'
import home from '../../../Asset/image/home.svg'
import info_circle from '../../../Asset/image/info-circle.svg'
import percentage_square from '../../../Asset/image/percentage-square.svg'
import receipt_text from '../../../Asset/image/receipt-text.svg'
import seederLogo from '../../../Asset/image/SeederLogo.svg'

export default {
  title: 'Atoms/Image',
  component: ImageComponent,
} as Meta

const Template: Story<ImageProps> = (args) => <ImageComponent {...args} />

export const Default = Template.bind({})
Default.args = {
  source: 'https://via.placeholder.com/150',
  alt: 'example image',
  height: '150',
  width: '150',
}
export const cheque = Template.bind({})
cheque.args = {
  source: ChequeImg,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const greet = Template.bind({})
greet.args = {
  source: greetImg,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const review_gif = Template.bind({})
review_gif.args = {
  source: review_gitImg,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const arrow_bottom = Template.bind({})
arrow_bottom.args = {
  source: arrow_bottomIcon,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Calender = Template.bind({})
Calender.args = {
  source: calender,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Coin = Template.bind({})
Coin.args = {
  source: coin,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Cross = Template.bind({})
Cross.args = {
  source: cross,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const DocumentDownload = Template.bind({})
DocumentDownload.args = {
  source: documentDownload,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Flash = Template.bind({})
Flash.args = {
  source: flash,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Home = Template.bind({})
Home.args = {
  source: home,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Info_Circle = Template.bind({})
Info_Circle.args = {
  source: info_circle,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Percentage = Template.bind({})
Percentage.args = {
  source: percentage_square,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Receipt = Template.bind({})
Receipt.args = {
  source: receipt_text,
  alt: 'example image',
  height: '150',
  width: '150',
}
export const Seeder = Template.bind({})
Seeder.args = {
  source: seederLogo,
  alt: 'example image',
  height: '150',
  width: '150',
}
