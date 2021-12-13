export default function Welcome(props) {

  return (
    <div>
      <h1>{`Welcome, @${props.user}`}!!!</h1>
      <form action="/logout" method="post">
        <button>Sign Out</button>
      </form>
    </div>
  );
};