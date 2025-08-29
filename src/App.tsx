import { RecoilRoot } from 'recoil'
import { Toaster } from 'react-hot-toast'
import { ApolloProvider } from '@apollo/client'
import { RouterProvider } from 'react-router-dom'
import client from '@/client'
import router from '@/router'

function App() {
  return (
      <RecoilRoot>
        <ApolloProvider client={client}>
          <RouterProvider router={router}/>
          <Toaster/>
        </ApolloProvider>
      </RecoilRoot>
  )
}

export default App
