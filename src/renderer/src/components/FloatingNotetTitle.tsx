import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export const FloatingNotetTitle = ({ className, ...props }: ComponentProps<'div'>) => {
  const title = `Note title`
  return (
    <div className={twMerge('flex justify-center', className)} {...props}>
      <span className="text-gray-400">{title}</span>
    </div>
  )
}
