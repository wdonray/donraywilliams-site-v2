import React, { useState, useEffect } from 'react'
import { includes, replace } from 'lodash'
import { withRouter } from 'next/router'

function Default({ children, router }) {
  const isHome = router.asPath === '/'
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (includes(router.asPath, '#')) {
      const id = replace(router.asPath, '/#', '')

      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          el.focus()
        }
      }, 0)
    }
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 2000)
    }
  }, [isLoading, router])

  return (
    <div className="default-container mx-auto py-10">
      {isLoading && isHome ? <h1>Loading...</h1> : <div>{children}</div>}
    </div>
  )
}

export default withRouter(Default)
