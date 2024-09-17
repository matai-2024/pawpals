interface Props {
  heading: string
  subheading: string
  body: string
  img: string
  direction: string
}

const HomeHeading: React.FC<Props> = ({
  heading,
  subheading,
  body,
  img,
  direction,
}) => (
  <>
    <div className="inline-flex max-w-5xl ">
      <div className="w-[484px] h-[351px] flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-[61px] flex-col gap-2 flex">
          <h1 className=" text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            {heading}
          </h1>
          <h2 className="self-stretch text-[#757575] text-xl font-normal font-['Inter'] leading-normal">
            {subheading}
          </h2>
        </div>
        <div className="self-stretch justify-start items-start ">
          <p className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
            {body}
          </p>
        </div>
      </div>
      <img className="w-[484px] h-[350px] rounded-2xl" src={`${img}`} alt="" />
    </div>
  </>
)

export default HomeHeading
