import classes from "./Checkout.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => value.trim() === "";
const isSixDigits = (value) => value.trim().length === 6;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostCode = postCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostCodeIsValid = isSixDigits(enteredPostCode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postCode: enteredPostCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postCode: enteredPostCode,
    });
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div
        className={`${classes.control} ${
          !formInputsValidity.name && classes.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formInputsValidity.name && <p>Name must not be empty.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.street && classes.invalid
        }`}
      >
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formInputsValidity.street && <p>Street must not be empty.</p>}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.postCode && classes.invalid
        }`}
      >
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postCodeInputRef} />
        {!formInputsValidity.postCode && (
          <p>Postal code must be 6 characters</p>
        )}
      </div>
      <div
        className={`${classes.control} ${
          !formInputsValidity.city && classes.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formInputsValidity.city && <p>City must not be empty.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
