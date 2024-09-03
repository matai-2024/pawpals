export default function Checkbox({ onChange }) {
  const traitsArr = [
    'Busy',
    'Lazy',
    'Goofy',
    'Gorgeous',
    'Brat',
    'Loyal',
    'Playful',
    'Adventurous',
    'Foodie',
    'Snorer',
    'Crazy',
    'Floofy',
  ]

  return (
    <>
      {traitsArr.map((label: string) => (
        <div className="bg-yellow rounded-full py-1 px-4" key={label}>
          <div className="flex items-center">
            <label className="pr-2">
              <input
                type="checkbox"
                id={label}
                name="trait"
                value={label}
                onChange={onChange}
                className="checkbox"
              />
              {label}
            </label>
          </div>
        </div>
      ))}
    </>
  )
}
