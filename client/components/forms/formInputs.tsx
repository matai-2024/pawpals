export const TextField = ({ handleChange, form, fields, type }) => (
  <div
    className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6"
    key={type}
  >
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  </div>
)

// TODO the rest of these with tailwind

export const TextAreaField = ({ handleChange, form, fields, type }) => (
  <div className="form-text" key={type}>
    <label id={fields[type].name} htmlFor={fields[type].name}>
      {type}
    </label>
    <textarea
      name={fields[type].name}
      id={fields[type].name}
      placeholder={type}
      rows={Number(fields[type].options[0])}
      value={form[fields[type].name] || ''}
      onChange={handleChange}
    />
  </div>
)

export const CheckboxField = ({ handleChange, fields, type }) => (
  <div className="form-options" key={type}>
    <label id={fields[type].name} htmlFor={fields[type].name}>
      {type}
    </label>
    <div className="form-options__items">
      {fields[type].options.map((option: string) => (
        <div className="button--option" key={option}>
          <input
            onChange={handleChange}
            type={fields[type].type}
            name={option}
            id={option}
          />
          <label id={option} htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    </div>
  </div>
)

export const SelectField = ({ handleChange, form, fields, type }) => (
  <div className="form-text" key={type}>
    <label id={fields[type].name} htmlFor={fields[type].name}>
      {type}
    </label>
    <select
      id={fields[type].name}
      name={fields[type].name}
      value={form[fields[type].name] || 'placeholder'}
      onChange={handleChange}
    >
      <option value="placeholder">Select an option</option>
      {fields[type].options.map((option: string) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
)
