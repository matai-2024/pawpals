import { EventFormProps } from '../../../../models/events.ts'
import FormWrapper from '../FormWrapper.tsx'

export default function CreateEventForm({
  title,
  date,
  time,
  location,
  description,
  eventImage,
  eventWebsite,
  audience,
  creatorId,
  updateFields,
}: EventFormProps) {
  return (
    <FormWrapper title="">
      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="title"
        >
          Event name
        </label>
        <div className="mt-2">
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Event name"
            value={title}
            onChange={(e) => updateFields({ title: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="date"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => updateFields({ date: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="time"
        >
          Time
        </label>
        <div className="mt-2">
          <input
            id="time"
            name="time"
            type="time"
            value={time}
            onChange={(e) => updateFields({ time: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="location"
        >
          Location
        </label>
        <div className="mt-2">
          <input
            id="location"
            name="location"
            type="text"
            placeholder="Venue address"
            value={location}
            onChange={(e) => updateFields({ location: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          htmlFor="description"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            placeholder="Tell us about your event"
            defaultValue={description}
            onChange={(e) => updateFields({ description: e.target.value })}
            rows={5}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="eventImage"
        >
          Event image
        </label>
        <div className="mt-2">
          <input
            id="eventImage"
            name="eventImage"
            type="text"
            placeholder="Link to an image"
            value={eventImage}
            onChange={(e) => updateFields({ eventImage: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-6">
        <label
          className="block text-sm font-medium leading-6 text-gray-900"
          htmlFor="eventWebsite"
        >
          Event website
        </label>
        <div className="mt-2">
          <input
            id="eventWebsite"
            name="eventWebsite"
            type="text"
            placeholder="Link to your event website"
            value={eventWebsite}
            onChange={(e) => updateFields({ eventWebsite: e.target.value })}
            className="form-input block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="sm:col-span-3">
        <label
          htmlFor="audience"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Who can attend?
        </label>
        <div className="mt-2">
          <select
            id="audience"
            name="audience"
            value={audience}
            onChange={(e) => updateFields({ audience: e.target.value })}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
          >
            <option>Please select</option>
            <option>My friends only</option>
            <option>Anyone!</option>
          </select>
        </div>
      </div>
    </FormWrapper>
  )
}
