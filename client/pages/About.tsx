import { Link } from 'react-router-dom'

export default function About() {
  const teamMembers = [
    {
      name: 'Anahera Foley-Paama',
      role: 'Product Owner',
      img: 'devs/anahera.jpeg',
      linkedin: 'https://www.linkedin.com/in/afoleypaama/',
      email: 'anahera.work@gmail.com',
      github: 'https://github.com/anaherawashere',
    },
    {
      name: 'Amy Jackson',
      role: 'Backend Lead',
      img: 'devs/amy.jpg',
      linkedin: 'https://www.linkedin.com/in/amyjackson-aj/',
      email: 'dev@achoo-o.mozmail.com',
      github: 'https://github.com/achoo-o',
    },
    {
      name: 'Dean Tunbridge',
      role: 'Frontend Lead',
      img: 'devs/dean.jpg',
      linkedin: 'https://www.linkedin.com/in/deantunbridge/',
      email: 'Deantunbridgedev@gmail.com',
      github: 'https://github.com/dean-tunbridge',
    },
    {
      name: 'Jack Gloyer',
      role: 'Git Lead',
      img: 'devs/jack.png',
      linkedin: 'https://www.linkedin.com/in/jack-gloyer',
      email: 'jackgloyer8@gmail.com',
      github: 'https://github.com/jack-gloyer',
    },
    {
      name: 'Sam Pedersen',
      role: 'Vibes Lead',
      img: 'devs/sam.webp',
      linkedin: 'https://www.linkedin.com/in/sam-pedersen-2060b0241/',
      email: 'sjcfpedersen@gmail.com',
      github: 'https://github.com/sam-pedersen',
    },
  ]

  return (
    <div className="min-h-screen mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          About
        </h1>
      </div>

      <div className="flex flex-row items-center gap-6 py-10">
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            Letting pets live their best lives
          </h2>
          <p className="text-lg text-gray-700 mb-4 mt-8">
            Pawpals is a community-driven website designed to connect pet lovers
            and pet-friendy events, whether you have a pet or not.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Browse adorable pets, learn their personalities, explore your local
            pet-friendly events, or even create your own!
          </p>
          <Link
            to="/create"
            className="rounded-md bg-yellow-400 hover:bg-yellow-500 px-8 py-4 text-md font-semibold text-gray-900 shadow-sm ease-in-out duration-200"
          >
            Get started
            <span aria-hidden="true" className="pl-3">
              →
            </span>
          </Link>
        </div>
        <div className="w-1/2 p-6">
          <img
            className="mt-4 w-full rounded-lg object-cover"
            src="/pets/pet-event.webp"
            alt="A cutie dog at a outdoor event"
          />
        </div>
      </div>

      <div className="flex flex-row-reverse items-center gap-6 py-10">
        <div className="w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-gray-900">
            The animals that made this
          </h2>
          <p className="text-lg text-gray-700 mb-4 mt-8">
            This project was conceptualized by Anahera and developed in
            collaboration with Jack, Dean, Sam, and Amy as part of the pawpals
            team!
          </p>
          <p className="text-lg text-gray-700 mb-4">
            pawpals is our final group project for{' '}
            <Link
              target="_blank"
              to={'https://devacademy.co.nz/course-details/'}
              className="underline text-blue-950 hover:text-blue-800"
            >
              Dev Academy&apos;s Full Stack Web Development course
            </Link>
            , graduating October 2024.
          </p>
          <p className="text-lg text-gray-700">Find out more about us below.</p>
        </div>
        <div className="w-1/2 p-6">
          <img
            className="mt-4 w-full rounded-lg object-cover"
            src="team.webp"
            alt="pawpal coders at work"
          />
        </div>
      </div>

      <div>
        <div className="py-10">
          <h2 className="text-center text-4xl font-semibold text-gray-900">
            Our Team
          </h2>
          <div className="flex lg:flex-row flex-col gap-6 py-10 overflow-x-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center w-1/5 p-6 bg-white border rounded-lg shadow-lg hover:shadow-xl ease-in-out duration-200"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg mb-6">
                  <img
                    className="object-cover relative"
                    src={member.img}
                    alt={`${member.name}'s profile`}
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{member.role}</p>

                  <div className="flex justify-center space-x-4 mt-4">
                    <Link
                      to={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <i className="text-2xl fa-brands fa-linkedin text-gray-700 hover:text-blue-900"></i>
                    </Link>

                    <Link
                      to={`mailto:${member.email}`}
                      aria-label={`${member.name}'s email`}
                    >
                      <i className="text-2xl fa-solid fa-envelope text-gray-700 hover:text-blue-900"></i>
                    </Link>
                    <Link
                      to={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name}'s github`}
                    >
                      <i className="text-2xl fa-brands fa-square-github text-gray-700 hover:text-blue-900"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
