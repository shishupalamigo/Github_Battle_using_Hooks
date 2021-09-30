function Card(props) {
  return (
    <div
      className={
        props.darkMode
          ? 'w-1/4 bg-gray-600 m-2 p-6 rounded-md flex flex-col items-center'
          : 'w-1/4 bg-gray-200 m-2 p-6 rounded-md flex flex-col items-center'
      }
    >
      <h2 className="text-3xl text-center font-bold">#{props.score}</h2>
      <div className="mt-3 mb-2 w-40 rounded-full">
        <img
          src={props.owner.avatar_url}
          alt={props.owner.login}
          className="w-full rounded-full"
        />
      </div>
      <a href={props.html_url}>
        <h2 className="text-center text-green-900 font-bold text-xl">
          {props.owner.login}
        </h2>
      </a>
      <div className="mt-5">
        <div>
          <i className="fas fa-user text-green-300 mr-3"></i>
          <h3 className="text-xl font-medium inline-block">
            {props.owner.login}
          </h3>
        </div>
        <div>
          <i className="fas fa-star text-yellow-500 mr-3"></i>
          <h3 className="text-xl inline-block">
            {props.stargazers_count} Stars
          </h3>
        </div>
        <div>
          <i className="fas fa-code-branch text-blue-500 mr-3"></i>
          <h3 className="text-xl inline-block">{props.forks} forks</h3>
        </div>
        <div>
          <i className="fas fa-exclamation-triangle text-red-700 mr-3"></i>
          <h3 className="text-xl inline-block">{props.open_issues} issues</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
