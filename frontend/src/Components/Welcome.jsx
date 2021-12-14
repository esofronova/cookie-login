export default function Welcome(props) {

  return (
    <div>
      <h1>{`Welcome, @${props.user}`}!!!</h1>
      <form action="/logout" method="post" className="m-0">
        <button>Sign Out</button>
      </form>
    </div>
  );
};