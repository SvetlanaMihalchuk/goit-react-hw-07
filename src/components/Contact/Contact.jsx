import css from "./Contact.module.css";
import { BiSolidUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <div className={css.contact}>
        <p className={css.name}>
          <BiSolidUser className={css.icon} size="20" />
          {name}
        </p>
        <p className={css.number}>
          <BiPhone className={css.icon} size="20" />
          {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
