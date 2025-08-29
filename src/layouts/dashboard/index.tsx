import type { ReactNode } from 'react'
import Sidebar from '@dash-lay/sidebar'
import MainNavbar from '@dash-lay/navbar'

interface Props {
  children: ReactNode
}

const DashboardLayout = ({ children }: Props) => {
  return (
      <div className="w-full h-screen bg-gray-50 flex">
        <Sidebar/>
        <div className="flex-grow flex flex-col">
          <MainNavbar/>
          <div className="flex-grow max-w-full max-h-full overflow-auto">
            {children}
          </div>
        </div>
      </div>
  )
}

export default DashboardLayout