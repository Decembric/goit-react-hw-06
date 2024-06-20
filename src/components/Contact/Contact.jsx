
import { useDispatch } from "react-redux"
import css from "./Contact.module.css"
import { FaUser, FaPhone } from "react-icons/fa"
import { removeContact } from "../../redux/contactsSlice"
const Contact = ({ data }) => {
 console.log(data)
  const dispatch = useDispatch()
  const handleRemoveClick = () => {
dispatch(removeContact(data))
  }
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

