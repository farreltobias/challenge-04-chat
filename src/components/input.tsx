'use client'

import { useForm } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import { SendHorizontal } from 'lucide-react'
import { nanoid } from 'nanoid'
import { z } from 'zod'

import { Button } from './ui/button'
import { Form, FormControl, FormField, FormItem } from './ui/form'
import { Textarea } from './ui/textarea'

import { Message } from '@/data/messages'

type Props = {
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>
}

const FormSchema = z.object({
  text: z.string().trim().min(1),
})

export const Input: React.FC<Props> = ({ setMessages }) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: nanoid(),
        sender: 'Você',
        text: data.text,
        date: new Date(),
      },
    ])

    form.reset({ text: '' })
  }

  function handleKeyPress(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key !== 'Enter' || event.shiftKey) return

    event.preventDefault()
    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full relative mt-auto"
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder="Digite sua mensagem"
                  className="resize-none bg-muted rounded-full py-3 px-6 h-fit min-h-0 text-xs leading-6"
                  onKeyDown={handleKeyPress}
                  rows={1}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className="absolute right-6 top-1/2 -translate-y-1/2"
        >
          <SendHorizontal />
        </Button>
      </form>
    </Form>
  )
}
