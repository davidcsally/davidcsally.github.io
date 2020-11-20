import { MeLogo } from '../icons/MeLogo'
import { Disney } from '../icons/Disney'
import { MedCircle } from '../icons/MedCircle'
import { Biorad } from '../icons/Biorad'
import { ReactSight } from '../icons/ReactSight'
import { Dictionary } from '../icons/Dictionary'
import { PortfolioItemProps } from './PortfolioItem'

export default [
  {
    title: 'Dictionary.com',
    role: 'Senior Software Engineer',
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
    role: 'Software Engineer',
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
    role: 'Software Engineer',
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
    role: 'Full Stack Engineer',
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
    role: 'Open Source Project',
    skills: ['React', 'D3', 'Boostrap', 'Chrome Extension'],
    logo: {
      component: ReactSight,
      backgroundColor: '#e7e7e7',
    },
  },
  {
    title: 'Bio-Rad Laboratories',
    role: 'Research Associate',
    skills: ['Digital PCR', 'centrifuging', 'pipetting', 'soldering'],
    logo: {
      component: Biorad,
      backgroundColor: '#e7e7e7',
    },
  },
] as PortfolioItemProps[]
