'use client'

import { useEffect, useRef, useState } from 'react'

import { format } from 'date-fns'

import { Header } from '@/components/header'
import { Input } from '@/components/input'
import { Message } from '@/components/message'
import { messages as initialMessages } from '@/data/messages'

export default function Home() {
  const messagesRef = useRef<HTMLUListElement>(null)
  const [messages, setMessages] = useState(initialMessages)

  // TODO: Implement the time from the last message on screen
  const now = format(new Date(), 'HH:mm')
  const today = `Hoje ${now}`

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: 'smooth',
    })
  }, [messages])

  return (
    <main className="container flex flex-col gap-4 h-screen py-8">
      <Header />

      <article className="flex flex-col items-center gap-8 h-full grow">
        <h1 className="text-xs">{today}</h1>

        <ul
          ref={messagesRef}
          className="list-none flex flex-col gap-8 w-full max-h-[70vh] overflow-scroll no-scrollbar"
        >
          {messages.map((message) => (
            <Message
              key={message.id}
              variant={message.sender !== 'Você' ? 'receiver' : 'sender'}
              {...message}
            />
          ))}
        </ul>

        <Input setMessages={setMessages} />
      </article>
    </main>
  )
}
