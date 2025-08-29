import { Text } from '@components'
import OrdersTable from '@/modules/home/components/OrdersTable'

const HomePage = () => {
  return (
      <div className="flex-grow p-4 flex flex-col gap-4">
        <div className="w-full bg-white border border-gray-100 rounded-lg p-5">
          <Text as="h3" className="mb-8" weight="bold">
            Orders
          </Text>
          <OrdersTable/>
        </div>
        <div className="w-full bg-white border border-gray-100 rounded-lg p-5">
          <Text as="h3" className="mb-8" weight="bold">
            Monthly Sales
          </Text>
          <OrdersTable/>
        </div>
      </div>
  )
}

export default HomePage