import { MeLogo } from 'components/icons/MeLogo'
import { Disney } from 'components/icons/Disney'
import { MedCircle } from 'components/icons/MedCircle'
import { Biorad } from 'components/icons/Biorad'
import { ReactSight } from 'components/icons/ReactSight'
import { Dictionary } from 'components/icons/Dictionary'
import { PortfolioItemProps } from './PortfolioItem'

export default [
  {
    title: 'Dictionary.com',
    description: 'Senior Software Engineer',
    skills: ['React', 'Web Vitals'],
    logo: {
      component: Dictionary,
      backgroundColor: '#00248B',
      width: '80%',
      height: undefined,
    },
  },
  {
    title: 'Meundies',
    description: 'Software Engineer',
    skills: ['React', 'Redux', 'Rails', 'Solidus'],
    logo: {
      component: MeLogo,
      height: '60%',
      width: '60%',
      backgroundColor: '#7023f0',
    },
  },
  {
    title: 'Disney',
    description: 'Software Engineer',
    skills: ['React', 'Redux', 'Backbone', 'Rails'],
    logo: {
      component: Disney,
      height: '70%',
      width: '70%',
      backgroundColor: '#0795e6',
    },
  },
  {
    title: 'MedCircle',
    description: 'Full Stack Engineer',
    skills: ['React', 'Redux', 'Node', 'Express'],
    logo: {
      component: MedCircle,
      backgroundColor: '#e7e7e7',
      height: '70%',
      width: '70%',
    },
  },
  {
    title: 'React-Sight',
    description: 'Open Source Project',
    skills: ['React', 'D3', 'Boostrap', 'Chrome Extension'],
    logo: {
      component: ReactSight,
      backgroundColor: '#e7e7e7',
    },
  },
  {
    title: 'Bio-Rad Laboratories',
    description: 'Research Associate',
    skills: ['Digital PCR', 'centrifuging', 'pipetting', 'soldering'],
    logo: {
      component: Biorad,
      backgroundColor: '#e7e7e7',
    },
  },
] as PortfolioItemProps[]
