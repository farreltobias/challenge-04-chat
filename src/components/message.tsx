import { cva, VariantProps } from 'class-variance-authority'
import { format } from 'date-fns/format'

import { Message as MessageType } from '@/data/messages'
import { cn } from '@/lib/utils'

const messageVariants = cva('flex flex-col gap-2 w-fit max-w-[50%] text-xs', {
  variants: {
    variant: {
      receiver: '[&>p]:bg-secondary [&>p]:rounded-tl-none',
      sender: 'items-end self-end [&>p]:bg-primary [&>p]:rounded-br-none',
    },
  },
  defaultVariants: {
    variant: 'sender',
  },
})

export type MessageProps = Omit<MessageType, 'id'> &
  VariantProps<typeof messageVariants>

export const Message: React.FC<MessageProps> = ({
  variant,
  date,
  sender,
  text,
}) => {
  const time = format(date, 'HH:mm')

  return (
    <li className={cn(messageVariants({ variant }))}>
      <span>
        {sender} - {time}
      </span>
      <p className="p-3 rounded-lg">{text}</p>
    </li>
  )
}
