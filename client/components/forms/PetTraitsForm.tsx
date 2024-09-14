import { PetFormProps } from '../../../models/forms.ts'
import FormWrapper from './FormWrapper.tsx'

function changeBorder(isChecked: boolean, trait: string) {
  let oldBorder;
  let newBorder;
  if(isChecked) {
    oldBorder="border-gray-100"
    newBorder="border-blue-500"
  } else {
    oldBorder ="border-blue-500"
    newBorder ="border-gray-100"
  }

  const div = document.querySelector(`#${trait}-label`)
  div?.classList.remove(`${oldBorder}`)
  div?.classList.add(`${newBorder}`)
}

export default function PetTraitsForm({ updateFields }: PetFormProps) {
  return (
    <FormWrapper title="Choose your pet's traits">
      <div className="sm:col-span-2">
        <label
          id="busy-label"
          htmlFor="busy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-gauge-high text-4xl text-yellow-400"></i>
            </div>
            
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Busy bee</h3>
              <p className="text-gray-600">Why would I ever sit still.</p>
            </div>
            <input
            id="busy"
            name="busy"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="busy checkbox"
          />
          </div>
        </label>
      </div>
      <div className="sm:col-span-2">
        <label
          id="lazy-label"
          htmlFor="lazy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-couch text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Lazy</h3>
              <p className="text-gray-600">
                The best activity is taking a nap.
              </p>
            </div>
            <input
            id="lazy"
            name="lazy"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="lazy checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="goofy-label"
          htmlFor="goofy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-masks-theater text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Goofy</h3>
              <p className="text-gray-600">Some details about Goofy.</p>
            </div>
            <input
            id="goofy"
            name="goofy"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="goofy checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="gorgeous-label"
          htmlFor="gorgeous"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-crown text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Gorgeous</h3>
              <p className="text-gray-600">Some details about Gorgeous.</p>
            </div>
            <input
            id="gorgeous"
            name="gorgeous"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="gorgeous checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="brat-label"
          htmlFor="brat"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-handcuffs text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Brat</h3>
              <p className="text-gray-600">Some details about brat.</p>
            </div>
            <input
            id="brat"
            name="brat"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="brat checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="loyal-label"
          htmlFor="loyal"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-ring text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Loyal</h3>
              <p className="text-gray-600">Some details about loyal.</p>
            </div>
            <input
            id="loyal"
            name="loyal"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="loyal checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="playful-label"
          htmlFor="playful"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-grin-tongue text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Playful</h3>
              <p className="text-gray-600">Some details about playful.</p>
            </div>
            <input
            id="playful"
            name="playful"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="playful checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="adventurous-label"
          htmlFor="adventurous"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-person-hiking text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Adventurous</h3>
              <p className="text-gray-600">Some details about adventurous.</p>
            </div>
            <input
            id="adventurous"
            name="adventurous"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="adventurous checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="foodie-label"
          htmlFor="foodie"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-pizza-slice text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Foodie</h3>
              <p className="text-gray-600">Some details about foodie.</p>
            </div>
            <input
            id="foodie"
            name="foodie"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="foodie checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="snorer-label"
          htmlFor="snorer"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-bed text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Snorer</h3>
              <p className="text-gray-600">Some details about snorer.</p>
            </div>
            <input
            id="snorer"
            name="snorer"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="snorer checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="crazy-label"
          htmlFor="crazy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-dumpster-fire text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Crazy</h3>
              <p className="text-gray-600">Some details about crazy.</p>
            </div>
            <input
            id="crazy"
            name="crazy"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="crazy checkbox"
          />
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <label
          id="floofy-label"
          htmlFor="floofy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer"
        >
          <div className="flex gap-x-4 justify-end">
            <div className="h-12">
              <i className="fa-solid fa-cloud text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Floofy</h3>
              <p className="text-gray-600">Some details about floofy.</p>
            </div>
            <input
            id="floofy"
            name="floofy"
            type="checkbox"
            onChange={(e) => {changeBorder(e.currentTarget.checked, e.target.name)
              updateFields({ [e.target.name]: String(e.currentTarget.checked) })}}
            className="border-2 border-gray-300 absolute rounded-sm"
            aria-label="floofy checkbox"
          />
          </div>
        </label>
      </div>
    </FormWrapper>
  )
}
