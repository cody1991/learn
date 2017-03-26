import Main from '@/components/Main'
import Introduction from '@/components/essentials/Introduction'
import Instance from '@/components/essentials/Instance'
import Syntax from '@/components/essentials/Syntax'
import Computed from '@/components/essentials/Computed'
import List from '@/components/essentials/List'

export default [{
  path: '/essentials',
  name: 'essentials',
  component: Main,
  children: [{
    path: 'introduction',
    name: 'introduction',
    component: Introduction
  }, {
    path: 'instance',
    name: 'instance',
    component: Instance
  }, {
    path: 'syntax',
    name: 'syntax',
    component: Syntax
  }, {
    path: 'computed',
    name: 'computed',
    component: Computed
  }, {
    path: 'list',
    name: 'list',
    component: List
  }]
}]
