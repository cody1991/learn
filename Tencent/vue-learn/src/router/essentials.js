import Main from '@/components/Main'
import Introduction from '@/components/essentials/Introduction'

export default [{
  path: '/essentials',
  name: 'essentials',
  component: Main,
  children: [{
    path: 'introduction',
    name: 'introduction',
    component: Introduction
  }]
}]
