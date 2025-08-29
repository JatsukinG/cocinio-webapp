import clsx from 'clsx'
import { FaLock, FaUser } from 'react-icons/fa'
import { Button, Input, Text } from '@components'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const onSubmit = (e: FormEvent) => {
    console.log('Submit')
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      navigate('/')
    }, 3000)
  }

  return (
      <form
          onSubmit={onSubmit}
          className="relative w-full bg-white rounded-xl p-8 pt-12 flex flex-col items-center gap-4 shadow-lg"
      >
        <h1 className="mb-4 text-gray-700 font-bold text-xl">Ingresar</h1>
        {/*TODO Create FormField component*/}
        <div className="w-full">
          <Text className="mb-1" color="gray" size="sm" weight="medium">Usuario</Text>
          <Input placeholder="user@gmail.com" icon={FaUser} className="w-full"/>
        </div>

        {/*TODO Create FormField component*/}
        <div className="w-full">
          <Text className="mb-1" color="gray" size="sm" weight="medium">Contraseña</Text>
          <Input placeholder="------" icon={FaLock} className="w-full"/>
        </div>
        <Button className="w-full" type="submit" isLoading={loading}>Ingresar</Button>
        <Text as="p" className="self-start" color="gray" size="sm">
          No tienes una cuenta?&nbsp;
          <Text as="span" size="sm">
            <a href="#" className="text-indigo-500 underline">Registrate</a>
          </Text>
        </Text>

        <div
            className={clsx([
              'absolute bottom-full translate-y-1/2',
              'bg-indigo-400 text-white font-bold text-xl px-8 py-2 rounded-xl shadow-xl shadow-indigo-100',
            ])}
        >
          Cocin.io
        </div>
      </form>
  )
}

export default LoginForm