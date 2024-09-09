import { PetFormProps } from '../../../models/forms.ts'
import FormWrapper from './FormWrapper.tsx'

export default function PetTraitsForm({ updateFields }: PetFormProps) {
  return (
    <FormWrapper title="Choose your pet's traits">
      <div className="sm:col-span-2">
        <input
          id="busy"
          name="busy"
          type="checkbox"
          onChange={(e) => updateFields({ busy: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="busy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-gauge-high text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Busy bee</h3>
              <p className="text-gray-500">Why would I ever sit still.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="lazy"
          name="lazy"
          type="checkbox"
          onChange={(e) => updateFields({ lazy: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="lazy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-couch text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Lazy</h3>
              <p className="text-gray-500">The best activity is taking a nap.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="goofy"
          name="goofy"
          type="checkbox"
          onChange={(e) => updateFields({ goofy: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="goofy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-masks-theater text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Goofy</h3>
              <p className="text-gray-500">Some details about Goofy.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="gorgeous"
          name="gorgeous"
          type="checkbox"
          onChange={(e) => updateFields({ gorgeous: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="gorgeous"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-crown text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Gorgeous</h3>
              <p className="text-gray-500">Some details about Gorgeous.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="brat"
          name="brat"
          type="checkbox"
          onChange={(e) => updateFields({ brat: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="brat"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-handcuffs text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Brat</h3>
              <p className="text-gray-500">Some details about brat.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="loyal"
          name="loyal"
          type="checkbox"
          onChange={(e) => updateFields({ loyal: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="loyal"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-ring text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Loyal</h3>
              <p className="text-gray-500">Some details about loyal.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="playful"
          name="playful"
          type="checkbox"
          onChange={(e) => updateFields({ playful: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="playful"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-grin-tongue text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Playful</h3>
              <p className="text-gray-500">Some details about playful.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="adventurous"
          name="adventurous"
          type="checkbox"
          onChange={(e) => updateFields({ adventurous: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="adventurous"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-person-hiking text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Adventurous</h3>
              <p className="text-gray-500">Some details about adventurous.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="foodie"
          name="foodie"
          type="checkbox"
          onChange={(e) => updateFields({ foodie: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="foodie"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-pizza-slice text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Foodie</h3>
              <p className="text-gray-500">Some details about foodie.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="snorer"
          name="snorer"
          type="checkbox"
          onChange={(e) => updateFields({ snorer: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="snorer"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-bed text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Snorer</h3>
              <p className="text-gray-500">Some details about snorer.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="crazy"
          name="crazy"
          type="checkbox"
          onChange={(e) => updateFields({ crazy: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="crazy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-dumpster-fire text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Crazy</h3>
              <p className="text-gray-500">Some details about crazy.</p>
            </div>
          </div>
        </label>
      </div>

      <div className="sm:col-span-2">
        <input
          id="floofy"
          name="floofy"
          type="checkbox"
          onChange={(e) => updateFields({ floofy: e.target.value })}
          className="checkbox hidden"
        />
        <label
          htmlFor="floofy"
          className="trait-label block p-4 border-2 border-gray-100 rounded-lg cursor-pointer transition-all"
        >
          <div className="flex gap-x-4">
            <div className="h-12">
              <i className="fa-solid fa-cloud text-4xl text-yellow-400"></i>
            </div>
            <div className="text-sm leading-6">
              <h3 className="font-medium text-gray-900">Floofy</h3>
              <p className="text-gray-500">Some details about floofy.</p>
            </div>
          </div>
        </label>
      </div>
    </FormWrapper>
  )
}
