import { AboutType } from '../../utils/types'
import { map } from 'lodash'
import { AcademicCapIcon } from '@heroicons/react/solid'

const interestsList = (interests: string[]) => {
  return map(interests, (interest) => <li key={interest}> {interest} </li>)
}

export default function About({ content, name }: { content: AboutType; name: string }) {
  console.log(content.interests)

  return (
    <div className="section-container">
      <div className="flex-1 flex-col items-start lg:pr-40 2xl:pr-52">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <p dangerouslySetInnerHTML={{ __html: content.body }} className="col-span-4 text-xl" />
      </div>

      <div className="flex flex-col md:flex-row xl:flex-col items-start justify-between">
        <div className="flex flex-col mb-4 md:mb-0 lg:mb-4">
          <h1 className="text-3xl font-bold mb-2">Interests</h1>
          <ul className="list-disc list-inside">{interestsList(content.interests)}</ul>
        </div>

        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">Education</h1>
          <ul className="list-inside">
            <li className="flex items-center mb-3">
              <AcademicCapIcon className="h-5 w-5 mr-2" />
              <div>
                <h2 className="col-span-4 text-lg font-bold">
                  {content.education.degree}, {content.education.year}
                </h2>
                <p className="col-span-4 text-md"> {content.education.name} </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
