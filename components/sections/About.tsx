import { AboutType } from '../../utils/types'

export default function About({ content }: { content: AboutType }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="col-span-4">{content.body}</p>
      </div>
    </div>
  )
}
