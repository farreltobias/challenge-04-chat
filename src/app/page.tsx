import { format } from 'date-fns'

import { Header } from '@/components/header'
import { Message } from '@/components/message'
import { messages } from '@/data/messages'

export default function Home() {
  // TODO: Implement the time from the last message on screen
  const now = format(new Date(), 'HH:mm')
  const today = `Hoje ${now}`

  return (
    <main className="container h-screen py-8 space-y-4">
      <Header />
      <article className="flex flex-col items-center gap-8">
        <h1 className="text-xs">{today}</h1>

        <ul className="list-none flex flex-col gap-8 w-full">
          {messages.map((message) => (
            <Message
              key={message.id}
              variant={message.sender !== 'Você' ? 'receiver' : 'sender'}
              {...message}
            />
          ))}
        </ul>
      </article>
    </main>
  )
}
