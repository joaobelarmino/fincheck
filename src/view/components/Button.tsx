import { type ComponentProps } from 'react'
import cn from '../../app/utils/className.ts'

interface ButtonProps extends ComponentProps<'button'> {
}

export default function Button ({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'w-full px-6 h-12 flex justify-center items-center bg-teal-900 rounded-2xl text-white hover:bg-teal-800 disabled:bg-gray-100 disabled:cursor-not-allowed transition-all', className)
      }
    >{props.children}</button>
  )
}
