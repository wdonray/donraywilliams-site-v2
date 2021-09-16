import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import { scrollToSection } from '../utils/ScrollToSection'


function Default({ children, router }) {
  useEffect(() => {
    router.events.on('hashChangeComplete', scrollToSection)

    return () => {
      router.events.off('hashChangeComplete', scrollToSection)
    }
  }, [router])

  return <div className="default-container mx-auto py-10">{children}</div>
}

export default withRouter(Default)
