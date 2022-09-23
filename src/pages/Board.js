import Articl from "./Articl"
import Aside from "./Aside"
import '../css/Subpage.scss'

const Board = ({ content }) => {
  const num = 0;
  return (
    <div className="Subpage">
      <div className="nav-bar">
        <div className="inner">{conent[num].tit} / {conent[0].tit}</div>
      </div>
      <div className="inner sub">
        <Articl content={content} num={num} />
        <Aside />
      </div>
    </div>
  )
}

export default Board