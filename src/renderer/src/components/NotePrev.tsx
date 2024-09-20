import { noteInfo } from '@/shared/models'
import { cn, formatDateFromMs } from '@renderer/utils'
import { ComponentProps } from 'react'

export type NotePreviewProps = noteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePrev = ({
  title,
  content,
  lastEditedtime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {

  const date = formatDateFromMs(lastEditedtime);
  return (
    <div
      className={cn(
        'cursos-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className="mb-1 font-bold truncate">{title}</h3>
      <span className="inline-block w-full mb-2 text-xs font-light text-left">
        {date}
      </span>
    </div>
  )
}
