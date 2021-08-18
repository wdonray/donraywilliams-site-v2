import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'
import portrait from '../public/portrait2.jpeg'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header
        portrait={portrait}
        name={'Donray Williams'}
        sections={['Home', 'About', 'Experience', 'Work', 'Contact']}
      />
      {/* Content */}
      <Default />
      {/* Footer */}
    </div>
  )
}
