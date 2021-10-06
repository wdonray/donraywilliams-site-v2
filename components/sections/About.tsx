import { AboutType } from '../../utils/types'

export default function About({ content }: { content: AboutType }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-x-12">
        <h2 className="col-span-6">{'Donray Williams'}</h2>
        <p className="col-span-4">{content.body}</p>
      </div>
    </div>
  )
}
