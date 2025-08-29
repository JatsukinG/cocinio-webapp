import { FaMoon } from 'react-icons/fa'
import { BiMenu, BiStore } from 'react-icons/bi'
import { IconButton, Text } from '@components'
import { TbPoint, TbPointFilled } from 'react-icons/tb'

const MainNavbar = () => {
  return (
      <div className="w-full h-[60px] bg-white border-b border-gray-100 flex justify-between items-center px-4">
        <IconButton
            outlined
            icon={BiMenu}
            onClick={() => console.log('close')}
        />
        <div className="flex items-center gap-2">
          <IconButton outlined icon={FaMoon}/>
          <TbPointFilled className="text-gray-200"/>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 shrink-0 bg-gray-200 rounded-lg grid place-items-center text-xl text-gray-500">
              <BiStore/>
            </div>
            <Text weight="medium">Monstricos</Text>
          </div>
        </div>
      </div>
  )
}

export default MainNavbar