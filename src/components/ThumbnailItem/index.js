// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, setActiveId} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? `thumbnail active` : ` thumbnail`

  const onClick = () => {
    setActiveId(id)
  }

  return (
    <li className="list-container">
      <button className="button" type="button" onClick={onClick}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnailClassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
