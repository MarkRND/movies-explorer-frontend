import { useState, useCallback } from "react";
import { EMAIL_VALID, EMAIL_FORMAT } from "../components/constants/constants";

export function useFormAndValidation() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const isValidEmail = EMAIL_VALID.test(value);
      setErrors({
        ...errors,
        [name]: isValidEmail ? "" : EMAIL_FORMAT,
      });
    } else {
      setErrors({ ...errors, [name]: e.target.validationMessage });
    }

    setInputs({ ...inputs, [name]: value });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newInputs = {}, newErrors = {}, newIsValid = false) => {
      setInputs(newInputs);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setInputs, setErrors, setIsValid]
  );

  return {
    inputs,
    handleChange,
    errors,
    isValid,
    resetForm,
    setInputs,
    setIsValid,
  };
}
