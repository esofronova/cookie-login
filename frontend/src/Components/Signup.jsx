import { useState } from "react";

export default function Signup() {

  let [usernameValidation, setUsernameValidation] = useState('');
  let [passwordValidation, setPasswordValidation] = useState('');
  let [data, setData] = useState({});

  const registerNewUser = (e) => {
    if (usernameValidation === "" && passwordValidation === "") {
      fetch('/add-user', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: data })
      });
    } else { e.preventDefault() };
  };

  return (
    <form
      className="p-4 border border-dark border-3"
      onSubmit={registerNewUser}
    >
      {['username', 'email', 'password', 'repeat password'].map((item, index) =>
        <label key={index} className="w-100 mb-4 text-capitalize">
          {item}
          <span className="text-danger ms-1">*</span>
          <input
            type={item === 'password' || item === 'repeat password' ? "password" : item === 'email' ? "email" : "text"}
            name={item}
            className="form-control border-dark mt-1"
            minlength="6"
            onBlur={async e => {
              if (item === 'username') {
                await fetch('./check-username', {
                  method: 'POST',
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ username: e.target.value })
                })
                  .then(res => res.json())
                  .then(data => setUsernameValidation(data.message));
              } else if (item === 'repeat password') {
                document.querySelector('input[name="password"]').value === document.querySelector('input[name="repeat password"]').value ?
                  setPasswordValidation("") : setPasswordValidation("Passwords do not match");
              };
            }}
            onChange={e => item !== 'repeat password' && setData({ ...data, [item]: e.target.value })}
            required
          />
        </label>
      )}
      {(usernameValidation !== '' || passwordValidation !== '') && <p className="text-danger">{usernameValidation !== '' ? usernameValidation : passwordValidation !== '' ? passwordValidation : ''}</p>}
      <div className="flex-center">
        <button type="submit" className="btn-dark px-3 py-2 rounded">Sign Up</button>
      </div>
      <p className="text-center mt-3">Already have an account? <a href="/" className="text-decoration-none">Log in!</a></p>
    </form>
  );
};