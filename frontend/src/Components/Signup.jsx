import axios from 'axios';

export default function Signup() {

  return (
    <form 
      className="p-4 border border-dark border-3"
      method="post"
      action="/check-username"
    >
      {['username', 'password'].map((item, index) =>
        <label key={index} className="w-100 mb-4 text-capitalize">
          {item}
          <input
            type="text"
            name={item}
            className="form-control border-dark mt-1"
            onChange={e => {
              // axios({
              //   method: "POST",
              //   url: "/check-username",
              //   data: { value: e.target.value }
              // });
            }}
          />
        </label>
      )}
      <div className="flex-center">
        <button className="btn-dark px-3 py-2 rounded">Sign Up</button>
      </div>
      <p className="text-center mt-3">Already have an account? <a href="/" className="text-decoration-none">Log in!</a></p>
    </form>
  );
};