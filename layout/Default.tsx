import React, { useEffect } from 'react'
import { withRouter } from 'next/router'
import { scrollToSection } from '../utils/ScrollToSection'
import { listSections } from '../api/queries'
import { useQuery } from '@apollo/client'

function Default({ children, router }) {
  const { loading, error, data } = useQuery(listSections)
  console.log(data)
  useEffect(() => {
    router.events.on('hashChangeComplete', scrollToSection)

    return () => {
      router.events.off('hashChangeComplete', scrollToSection)
    }
  }, [router])

  return <div className="default-container mx-auto py-10">{children}</div>
}

export default withRouter(Default)
