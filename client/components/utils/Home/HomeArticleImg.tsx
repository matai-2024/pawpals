interface Props {
  direction: string
  img: string
}

const HomeArticleImg: React.FC<Props> = ({ direction, img }) => (
  <div className={`justify-items-start`}>
    <img className="w-[484px] h-[350px] rounded-2xl" src={`${img}`} alt="" />
  </div>
)

export default HomeArticleImg
