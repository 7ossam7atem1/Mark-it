import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePrev } from './NotePrev'

export const NotePrevList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <NotePrev key={note.title + note.lastEditedtime} {...note} />
      ))}
    </ul>
  )
}
