import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { NotePrev } from './NotePrev'

export const NotePrevList = ({ className, ...props }: ComponentProps<'ul'>) => {
  if (notesMock.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props} className={twMerge(className)}>
      {notesMock.map((note) => (
        <NotePrev key={note.title + note.lastEditedtime} {...note} />
      ))}
    </ul>
  )
}
