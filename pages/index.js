import Header from '../components/Header.tsx'
import Default from '../layout/Default.tsx'

export default function Home() {
  return (
    <div>
      {/* Header */}
      <Header name={'Donray Williams'} />
      {/* Content */}
      <Default />
      {/* Footer */}
    </div>
  )
}
