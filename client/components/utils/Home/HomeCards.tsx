interface Props {
  title: string
  body: string
}

const HomeCards: React.FC<Props> = ({ title, body }) => (
  <div className="inline-flex px-20">
    <div className="grow shrink basis-0 h-[173px] p-6">
      <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
        <div className="self-stretch h-[125px] flex-col justify-start items-start gap-2 flex">
          <h1 className="self-stretch text-center text-[#1e1e1e] text-2xl font-semibold font-['Inter'] leading-[28.80px]">
            {title}
          </h1>
          <p className="mx-auto text-center max-w-5xl">{body}</p>
        </div>
      </div>
    </div>
  </div>
)

export default HomeCards
