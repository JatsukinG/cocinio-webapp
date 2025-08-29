import type { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import { Button as HUButton } from '@headlessui/react'
import { Loader } from '@/components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean
}

const Button = ({ children, isLoading, className, ...rest }: Props) => {
  return (
      <HUButton
          disabled={isLoading}
          className={clsx([
            'flex justify-center items-center gap-4',
            'px-4 py-1.5 text-sm text-white font-medium rounded-lg duration-300',
            'bg-gradient-to-b from-violet-500 to-indigo-500 shadow-md shadow-indigo-200',
            'hover:cursor-pointer hover:from-violet-600 hover:shadow-lg active:from-violet-500',
            'disabled:opacity-50 disabled:pointer-events-none',
            className,
          ])}
          {...rest}
      >
        {isLoading && <Loader/>}
        {children}
      </HUButton>
  )
}

export default Button