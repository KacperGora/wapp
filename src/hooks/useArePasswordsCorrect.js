import { useEffect, useState } from "react";

const useArePasswordsCorrect = (password, confirmPassword) => {
  const [passwordsOk, setPasswordsOk] = useState(null);
  const [error, setError] = useState(null);
  const [isTouched, setTouched] = useState(false);

  useEffect(() => {
    if (
      (password === confirmPassword) &
      (password.trim() !== "") &
      (confirmPassword.trim() !== "")
    ) {
      setPasswordsOk(true);
      setError(null);
    } else if ((password !== confirmPassword) & isTouched) {
      setError("Podane hasła nie są identyczne.");
      setPasswordsOk(false);
    }
  }, [confirmPassword, isTouched, password]);

  return {
    passwordsOk,
    error,
    setTouched,
    isTouched,
  };
};

export default useArePasswordsCorrect;
