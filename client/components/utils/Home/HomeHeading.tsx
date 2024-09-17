interface Props {
  heading: string
  subheading: string
  body: string
  img: string
}

const HomeHeading: React.FC<Props> = ({ heading, subheading, body, img }) => (
  <>
    <div className="text-center max-w-5xl ">
      <div className="w-[484px] h-[351px] flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-[61px] flex-col justify-start items-start gap-2 flex">
          <div className="self-stretch text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            {heading}
          </div>
          <div className="self-stretch text-[#757575] text-xl font-normal font-['Inter'] leading-normal">
            {subheading}
          </div>
        </div>
        <div className="self-stretch justify-start items-start inline-flex">
          <div className="grow shrink basis-0 text-[#1e1e1e] text-base font-normal font-['Inter'] leading-snug">
            {body}
          </div>
        </div>
      </div>
    </div>
    <img className="w-[484px] h-[350px] rounded-2xl" src={`${img}`} alt="" />
  </>
)

export default HomeHeading
