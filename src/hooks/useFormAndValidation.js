import { useState, useCallback } from 'react';

export function useFormAndValidation() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false); // Здесь изменено начальное значение на false

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest('form').checkValidity());
  };

  const resetForm = useCallback((newInputs = {}, newErrors = {}, newIsValid = false) => {
    setInputs(newInputs);
    setErrors(newErrors);
    setIsValid(newIsValid);
  }, [setInputs, setErrors, setIsValid]);

  return { inputs, handleChange, errors, isValid, resetForm, setInputs, setIsValid };
}
