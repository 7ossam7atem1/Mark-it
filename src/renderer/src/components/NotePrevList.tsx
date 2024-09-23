import { NotePrev } from '@/components'
import { useNotesList } from '@/hooks/useNotesList'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
export type NotePrevListProps = ComponentProps<'ul'> & {
  onSelect?:()=>void
}
export const NotePrevList = ({ onSelect,className, ...props }: NotePrevListProps) => {
  const { notes, selectedNoteIndex, handleNoteSelect } = useNotesList({onSelect})
  if (notes.length === 0) {
    return (
      <ul className={twMerge('text-center pt-4', className)} {...props}>
        <span>No Notes Yet!</span>
      </ul>
    )
  }

  return (
    <ul {...props} className={twMerge(className)}>
      {notes.map((note, index) => (
        <NotePrev
          key={note.title + note.lastEditedtime}
          isActive={selectedNoteIndex === index}
          onClick = { handleNoteSelect(index)}
          {...note}
        />
      ))}
    </ul>
  )
}
