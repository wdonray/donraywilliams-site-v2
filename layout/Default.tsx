import React, { useState, useEffect } from 'react'
import { includes, replace } from 'lodash'
import { withRouter } from 'next/router'

function Default({ children, router }) {
  useEffect(() => {
    if (includes(router.asPath, '/?section=')) {
      const id = replace(router.asPath, '/?section=', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
          el.focus()
        }, 30)
      }
    }
  }, [router])

  return <div className="default-container mx-auto py-10">{children}</div>
}

export default withRouter(Default)
