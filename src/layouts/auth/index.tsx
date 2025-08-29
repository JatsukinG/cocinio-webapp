import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const AuthLayout = ({ children }: Props) => {
  return (
      <div className="min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-[url('/images/bg2.jpg')] bg-cover opacity-50"></div>
        {children}
      </div>
  )
}

export default AuthLayout