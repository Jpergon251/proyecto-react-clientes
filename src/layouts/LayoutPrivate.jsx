import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../contexts/UserContext'

const LayoutPrivate = () => {
  const { user } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutPrivate
