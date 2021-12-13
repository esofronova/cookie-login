export default function Login() {

  let error = window.location.search.includes("msg=fail") ? true : false;

  return (
    <form
      className="p-4 border border-dark border-3"
      action="/process_login"
      method="post"
    >
      {['username', 'password'].map((item, index) =>
        <label key={index} className="w-100 mb-4 text-capitalize">
          {item}
          <input
            type={item === "password" ? "password" : "text"}
            name={item}
            className="form-control border-dark mt-1"
          />
        </label>
      )}
      {error && <p className="text-danger">Incorrect username or password</p>}
      <div className="flex-center">
        <button className="btn-dark px-3 py-2 rounded">Log In</button>
      </div>
      <p className="text-center mt-3">Don't have an account? <a href="/register" className="text-decoration-none">Sign Up!</a></p>
    </form>
  );
};