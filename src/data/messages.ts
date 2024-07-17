import { randomUUID } from 'crypto'

export type Message = {
  id: string
  sender: string
  text: string
  date: Date
}

export const messages = [
  {
    id: randomUUID(),
    sender: 'Farrel Tobias',
    text: 'Tive uma ideia incrível para um projeto! 😍',
    date: new Date(),
  },
  {
    id: randomUUID(),
    sender: 'Você',
    text: 'Sério? Me conta mais.',
    date: new Date(),
  },
  {
    id: randomUUID(),
    sender: 'Farrel Tobias',
    text: 'E se a gente fizesse um chat moderno e responsivo em apenas uma semana?',
    date: new Date(),
  },
  {
    id: randomUUID(),
    sender: 'Você',
    text: '#boraCodar! 🚀',
    date: new Date(),
  },
]
