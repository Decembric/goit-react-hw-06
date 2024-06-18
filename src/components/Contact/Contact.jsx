import { removeContact } from "../../redux/store"
import { useDispatch, useSelector } from "react-redux"
import css from "./Contact.module.css"
import { FaUser, FaPhone } from "react-icons/fa"
const Contact = ({ data }) => {
  const value = useSelector((state => state.filters.name))
  const dispatch = useDispatch()
  const handleRemoveClick = () => {
dispatch(removeContact(data))
  }
  console.log(value)
  return (
    <>
      <div className={css.userData}>
        <div className={css.userName}>
          <FaUser className={css.userIconName} />
          <p>{data.name}</p>
        </div>
        <div className={css.userNumber}>
          <FaPhone className={css.userIconNumber} />
          <p>{data.number}</p>
        </div>
      </div>
      <button type="button" onClick={handleRemoveClick}>
        REMOVE
      </button>

    </>
  )
}

export default Contact

