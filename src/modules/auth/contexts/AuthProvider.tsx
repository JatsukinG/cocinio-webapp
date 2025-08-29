import type { FC, PropsWithChildren } from 'react'
// import { useRecoilState, useResetRecoilState } from 'recoil'
// import { authTokenReactiveVar } from '@/client'
// import AuthContext from '@auth/contexts/AuthContext'
// import authTokenState from '@auth/atoms/authTokenState'


const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  // const [authToken, setAuthToken] = useRecoilState(authTokenState)
  // const resetAuthToken = useResetRecoilState(authTokenState)
  // const isAuthenticated = authToken !== undefined
  //
  // const login = (tokenAuth: string) => {
  //   authTokenReactiveVar(JSON.stringify(tokenAuth))
  //   setAuthToken(() => tokenAuth)
  //   console.log('¡Has iniciado sesión exitosamente!', 'success')
  // }
  //
  // const logout = () => {
  //   resetAuthToken()
  //   authTokenReactiveVar(null)
  //   console.log('¡Has cerrado sesión exitosamente!', 'success')
  // }

  // return (
  //     <AuthContext.Provider
  //         value={{
  //           authToken,
  //           isAuthenticated,
  //           login,
  //           logout,
  //         }}>
  //       {children}
  //     </AuthContext.Provider>
  // )
  return children
}

export default AuthProvider