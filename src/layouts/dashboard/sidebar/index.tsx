import { IoFastFoodSharp } from 'react-icons/io5'
import { TiHome, TiThList } from 'react-icons/ti'
import { TbSettingsFilled } from 'react-icons/tb'
import { Text } from '@components'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

const links = [
  {
    name: 'Inicio',
    icon: TiHome,
    href: '/',
  },
  {
    name: 'Pedidos',
    icon: TiThList,
    href: '/orders',
  },
  {
    name: 'Configuración',
    icon: TbSettingsFilled,
    href: '/settings',
  },
]

const MainSidebar = () => {
  const location = useLocation()

  return (
      <div className="w-full h-screen bg-white max-w-[250px] border-r border-gray-100">
        <div className="w-full h-[60px] flex items-center gap-4 px-4">
          <IoFastFoodSharp className="text-3xl text-indigo-500"/>
          <Text color="gray" size="xl" weight="bold">
            Cocin.io
          </Text>
        </div>
        <div className="w-full flex flex-col gap-2 p-4">
          {
            links.map(({ icon: Icon, ...link }) => (
                <div
                    key={link.href}
                    className={clsx([
                      'w-full px-2 py-1.5 flex items-center gap-4 rounded-lg duration-300',
                      location.pathname === link.href ? 'bg-gradient-to-br from-violet-100 to-indigo-100' : 'bg-white hover:bg-gray-100',
                      'hover:cursor-pointer',
                    ])}
                >
                  <Icon
                      className={clsx(['text-xl', location.pathname === link.href ? '!text-indigo-600' : '!text-gray-400'])}/>
                  <Text
                      className={clsx([location.pathname === link.href ? '!text-indigo-600' : '!text-gray-600'])}
                      size="sm"
                      weight="semibold"
                  >
                    {link.name}
                  </Text>
                </div>
            ))
          }
        </div>
      </div>
  )
}

export default MainSidebar