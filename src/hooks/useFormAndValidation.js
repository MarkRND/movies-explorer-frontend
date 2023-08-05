import { useState, useEffect } from "react";

export function useFormAndValidation() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [isFormEmpty, setIsFormEmpty] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = (newinputs = {}, newErrors = {}, newIsValid = false) => {
    setInputs(newinputs);
    setErrors(newErrors);
    setIsValid(newIsValid);
    setIsFormEmpty(true);
  };

  useEffect(() => {
    const isFormEmpty = Object.values(inputs).every((value) => value === "");
    setIsFormEmpty(isFormEmpty);
  }, [inputs]);

  return {
    inputs,
    handleChange,
    errors,
    isValid,
    resetForm,
    isFormEmpty,
    setInputs,
    setIsValid,
  };
}
