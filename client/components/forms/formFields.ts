export const formFields = {
  'Pet name': {
    type: 'text',
    name: 'petName',
    placeholder: 'Pet name',
  },
  'Image': {
    type: 'file',
    name: 'image',
  },
  'Date of birth': {
    type: 'date',
    name: 'dateOfBirth',
  },
  Sex: {
    type: 'select',
    name: 'sex',
    options: ['Female', 'Male', 'Other'],
  },
  Species: {
    type: 'text',
    name: 'species',
    placeholder: 'Fish',
  },
  Breed: {
    type: 'text',
    name: 'breed',
    placeholder: 'Gold fish',
  },
  Bio: {
    type: 'textarea',
    name: 'bio',
    placeholder: 'Share what makes your pet unique',
    options: [5],
  },
  'Favourite food': {
    type: 'text',
    name: 'faveFood',
    placeholder: 'Anything!',
  },
  Traits: {
    type: 'checkbox',
    name: 'traits',
    placeholder: '',
    options: [
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
    ],
  },
}