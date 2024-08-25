export const formFields = {
  'Pet name': {
    type: 'text',
    name: 'petName',
    placeholder: 'Pet name',
  },
  'Date of birth': {
    type: 'date',
    name: 'dateOfBirth',
    placeholder: 'Age in years e.g. 2',
  },
  Sex: {
    type: 'select',
    name: 'sex',
    placeholder: '',
    options: ['Female', 'Male', 'Other'],
  },
  Breed: {
    type: 'text',
    name: 'breed',
    placeholder: 'Gold fish',
  },
  Species: {
    type: 'text',
    name: 'species',
    placeholder: 'Fish',
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