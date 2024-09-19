import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'

export const NotePrevList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note) => (
        <li key={note.title}>{note.title}</li>
      ))}
    </ul>
  )
}
