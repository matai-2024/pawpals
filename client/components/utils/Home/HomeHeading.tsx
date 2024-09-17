import { ImgDirection } from '../../../../models/enums'

interface Props {
  heading: string
  subheading: string
  body: string
  img: string
  alt: string
  direction: ImgDirection
}

const HomeHeading: React.FC<Props> = ({
  heading,
  subheading,
  body,
  img,
  alt,
  direction,
}) => (
  <>
    <div className={`flex flex-col md:flex-row max-w-5xl w-full gap-10`}>
      <img
        className={`object-scale-down md:w-1/2 h-60 w-full rounded-2xl ${direction === ImgDirection.Left ? 'flex' : 'flex md:hidden'}`}
        src={img}
        alt={alt}
      />
      <div className="md:w-1/2 md:h-[350px] w-full flex-col justify-start items-start gap-6">
        <div className="text-start self-stretch h-[61px] flex-col gap-2 flex">
          <h1
            className={`text-[#1e1e1e] text-2xl font-semibold leading-[28.80px]`}
          >
            {heading}
          </h1>
          <h2
            className={`self-stretch text-[#757575] text-xl font-normal leading-normal`}
          >
            {subheading}
          </h2>
        </div>
        <div className={`self-stretch justify-start items-start`}>
          <p className="text-start line-clamp-[12] pt-6 grow shrink basis-0 text-[#1e1e1e] text-base font-normal leading-snug">
            {body}
          </p>
        </div>
      </div>
      <img
        className={`object-scale-down w-1/2 h-[350px] rounded-2xl ${direction === ImgDirection.Right ? 'md:flex hidden' : 'hidden'} `}
        src={img}
        alt={alt}
      />
    </div>
  </>
)

export default HomeHeading
