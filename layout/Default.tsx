import React, { useState, useEffect } from 'react'
import { includes, replace, some } from 'lodash'
import { withRouter } from 'next/router'

function Default({ children, router }) {
  useEffect(() => {
    const handleHashChange = (url) => {
      if (includes(url, '#')) {
        const id = replace(url, '/#', 'section-')
        const el = document.getElementById(id)
        if (el) {
          window.scroll({ top: el.offsetTop - 50, behavior: 'smooth' })
          el.focus()
        }
      }
    }

    router.events.on('hashChangeComplete', handleHashChange)

    return () => {
      router.events.off('hashChangeComplete', handleHashChange)
    }
  }, [router])

  return <div className="default-container mx-auto py-10">{children}</div>
}

export default withRouter(Default)
