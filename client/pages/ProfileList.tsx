import { Link } from 'react-router-dom'
import { PetProfile } from '../../models/forms.ts'
import LoadingSpinner from '../components/LoadingSpinner.tsx'
import { usePets } from '../hooks/hooks.ts'

export default function ProfileList() {
  const { data, isPending, isError, error } = usePets()

  if (isPending) return <LoadingSpinner />

  if (isError)
    return (
      <div>
        <h3>Error loading pet list: </h3>
        {String(error)}
      </div>
    )

  function getAge(dateString: string) {
    const today = new Date()
    const birthDate = new Date(dateString)
    let age = today.getFullYear() - birthDate.getFullYear()
    const m = today.getMonth() - birthDate.getMonth()
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--
    }
    return age
  }

  return (
    <>
      <div className="mx-auto max-w-7xl py-32 sm:py-48 lg:py-24">
        <div>
          <h1 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ">
            Pet Profiles
          </h1>
          <p className="my-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className="mt-10 grid grid-cols-5 gap-x-6 gap-y-6 ">
            {data.map((profile: PetProfile) => (
              <div
                key={profile.id}
                className=" shadow-lg hover:shadow-xl relative group duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-72 w-56  rounded-2xl hover:duration-700 "
              >
                <Link to={`${profile.id}`}>
                  <div>
                    <img
                      className="rounded-2xl object-contain h-full w-full"
                      src={profile.image}
                      alt={profile.petName}
                    />
                  </div>
                  <div className="opacity-90 rounded rounded-lg absolute bg-gray-50 -bottom-12 w-56 p-3 flex flex-col gap-1 group-hover:-bottom-0 group-hover:duration-600 duration-500 ease-in-out duration-200 group-hover:bg-yellow-100 group-hover:border-yellow-400 group-hover:opacity-90">
                    <span className="text-[#2b2b2d] font-['Inter'] font-bold text-2xl pb-6 align-text-top">
                      {profile.petName}
                    </span>
                    <div className="flex flex-row justify-between">
                      <span className="text-[#2b2b2d] font-['Inter'] font-bold text-xs">
                        {profile.breed}
                      </span>
                      <span className="opacity-70 text-right text-[#2b2b2d] text-[13px] font-medium font-['Inter'] leading-none">
                        {getAge(profile.dateOfBirth) > 1
                          ? `${getAge(profile.dateOfBirth)}yrs`
                          : `${getAge(profile.dateOfBirth)}yr`}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
    // <div
    //   key={profile.id}
    //   className="bg-white rounded-2xl shadow sm:col-span-1 bg-opacity-20 ease-in-out duration-200 hover:bg-opacity-50 hover:bg-gray-100"
    // >
    //   <Link to={`${profile.id}`}>
    //     <div className="rounded-2xl h-40 overflow-hidden ">
    //       <img
    //         className=" object-cover h-full w-full"
    //         src={profile.image}
    //         alt={profile.petName}
    //       />
    //     </div>
    //     <div className="p-2  rounded-2xl ">
    //       <div className="flex flex-row justify-between pb-2">
    //         <p className="text-[#2b2b2d] text-base font-thin font-['Inter'] leading-tight">
    //           {profile.petName}
    //         </p>
    //         <p className="opacity-70 text-right text-[#2b2b2d] text-[13px] font-medium font-['Inter'] leading-none">
    //           {getAge(profile.dateOfBirth) > 1
    //             ? `${getAge(profile.dateOfBirth)}yrs`
    //             : `${getAge(profile.dateOfBirth)}yr`}
    //         </p>
    //       </div>

    //       <p className="pb-4 opacity-70 text-[#2b2b2d] text-xs font-normal font-['Inter'] leading-[14px]">
    //         {profile.breed}
    //       </p>
    //     </div>
    //   </Link>
    // </div>

    //     <div className="mt-10 flex flex-wrap gap-6">
    //       {data.map((profile: PetProfile) => (
    //         <div
    //           key={profile.id}
    //           className="w-1/5 h-72 overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl relative"
    //         >
    //           <Link to={`/profiles/${profile.id}`}>
    //             <img
    //               className="w-full h-full object-cover"
    //               src={profile.image}
    //               alt={profile.petName}
    //             />
    //             <div className="absolute h-32 inset-x-0 bottom-0 bg-gradient-to-t from-gray-900 from-10% opacity-80"></div>
    //             <div className="absolute bottom-4 inset-x-0">
    //               <div className="text-2xl font-bold text-white">
    //                 {profile.petName},{' '}
    //                 {getAge(profile.dateOfBirth) > 1
    //                   ? `${getAge(profile.dateOfBirth)}yrs`
    //                   : `${getAge(profile.dateOfBirth)}yr`}
    //               </div>
    //               <div className="mt-1 text-md text-white uppercase tracking-widest">
    //                 Location
    //               </div>
    //             </div>
    //           </Link>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}
