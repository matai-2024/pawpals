export const TextField = ({ handleChange, form, fields, type }) => (
  <div className="sm:col-span-4">
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
      id={fields[type].name}
      htmlFor={fields[type].name}
    >
      {type}
    </label>
    <div className="mt-2">
      <input
        onChange={handleChange}
        value={form[fields[type].name] || ''}
        type={fields[type].type}
        name={fields[type].name}
        id={fields[type].name}
        placeholder={type}
        className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  </div>
)

// TODO the rest of these with tailwind

export const TextAreaField = ({ handleChange, form, fields, type }) => (
  <div className="sm:col-span-4" key={type}>
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
      id={fields[type].name}
      htmlFor={fields[type].name}
    >
      {type}
    </label>
    <div className="mt-2">
      <textarea
        name={fields[type].name}
        id={fields[type].name}
        placeholder={type}
        rows={Number(fields[type].options[0])}
        value={form[fields[type].name] || ''}
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
    <p className="mt-3 text-sm leading-6 text-gray-600">
      Write a few sentences about your pet.
    </p>
  </div>
)

export const CheckboxField = ({ handleChange, fields, type }) => (
  <div className="sm:col-span-3" key={type}>
    <h2 className="text-base font-semibold leading-7 text-gray-900">{type}</h2>
    <p className="mt-1 text-sm leading-6 text-gray-600">
      We'll always let you know about important changes, but you pick what else
      you want to hear about.
    </p>

    <div className="mt-10 space-y-10">
      <fieldset>
        <legend className="text-sm font-semibold leading-6 text-gray-900">
          By Email
        </legend>
        <div className="mt-6 space-y-6">
          {fields[type].options.map((option: string) => (
            <div className="relative flex gap-x-3" key={option}>
              <div className="flex h-6 items-center">
                <input
                  onChange={handleChange}
                  type={fields[type].type}
                  name={option}
                  id={option}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
              </div>
              <div className="text-sm leading-6">
                <label
                  id={option}
                  htmlFor={option}
                  className="font-medium text-gray-900"
                >
                  {option}
                </label>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  </div>
)

export const SelectField = ({ handleChange, form, fields, type }) => (
  <div className="sm:col-span-3" key={type}>
    <label
      className="block text-sm font-medium leading-6 text-gray-900"
      id={fields[type].name}
      htmlFor={fields[type].name}
    >
      {type}
    </label>
    <div className="mt-2">
      <select
        id={fields[type].name}
        name={fields[type].name}
        value={form[fields[type].name] || 'placeholder'}
        onChange={handleChange}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
      >
        <option value="placeholder">Select an option</option>
        {fields[type].options.map((option: string) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
)
