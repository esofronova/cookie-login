export default function Login() {

  return (
    <form 
      className="p-4 border border-dark border-3" 
      action="/process_login" 
      method="post"
      // onSubmit={ e => e.preventDefault() }
    >
      {['username', 'password'].map((item, index) =>
        <label key={index} className="w-100 mb-4 text-capitalize">
          {item}
          <input
            type="text"
            name={item}
            className="form-control border-dark mt-1"
          />
        </label>
      )}
      <div className="flex-center">
        <button className="btn-dark px-3 py-2 rounded">Log In</button>
      </div>
    </form>
  );
};