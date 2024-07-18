import { nanoid } from 'nanoid'

export type Message = {
  id: string
  sender: string
  text: string
  date: Date
}

export const messages = [
  {
    id: nanoid(),
    sender: 'Farrel Tobias',
    text: 'Tive uma ideia incrível para um projeto! 😍',
    date: new Date(),
  },
  {
    id: nanoid(),
    sender: 'Você',
    text: 'Sério? Me conta mais.',
    date: new Date(),
  },
  {
    id: nanoid(),
    sender: 'Farrel Tobias',
    text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
    date: new Date(),
  },
  {
    id: nanoid(),
    sender: 'Você',
    text: '#boraCodar! 🚀',
    date: new Date(),
  },
]
