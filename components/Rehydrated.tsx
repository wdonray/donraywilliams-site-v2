import React, { useContext, useEffect, useState } from 'react'
import { getApolloContext } from '@apollo/client'

const Rehydrated: React.FC = ({ children }) => {
  const { client } = useContext(getApolloContext())
  const [rehydrated, setRehydrated] = useState(false)
  useEffect(() => {
    ;(async () => {
      console.log(client)
      await (client as any).hydrate()
      setRehydrated(true)
    })()
  }, [client])
  return (
    <div
      className={`awsappsync ${rehydrated ? 'awsappsync--rehydrated' : 'awsappsync--rehydrating'}`}
    >
      {rehydrated ? children : <span>Loading...</span>}
    </div>
  )
}

export default Rehydrated
