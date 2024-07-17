import { Circle, X } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full">
      <div className="flex gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/farreltobias.png" />
          <AvatarFallback>FT</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h1 className="font-bold">Farrel Tobias</h1>
          <p className="flex items-center gap-1 text-ring text-xs">
            <Circle className="fill-ring" size={8} /> Online
          </p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <X />
      </Button>
    </header>
  )
}
