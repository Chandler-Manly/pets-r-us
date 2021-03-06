
import './Pet.css'
import { Link } from 'react-router-dom'

const Pet = (props) => {
  return (
    <div className="all-pets-container">
      <Link className="all-link" to={`/pets/${props._id}`}>
          <div className="all-pet-card">
            <div className="all-name">{props.name}</div>
            <div className="all-breed">{props.breed}</div>
            <img className="all-imgURL"
            src={props.imgURL}
            alt={props.breed} />
            <div className="more">Read More!</div>
          </div>
      </Link>
    </div>
  )
}

export default Pet;

