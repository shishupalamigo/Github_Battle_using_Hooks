import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";

function Battle (props) {
  console.log(props);
    let user1 = props.location.state[0];
    let user2 = props.location.state[1];
    let darkMode = props.darkMode;
    // console.log(darkMode, "From Battle");
    let winner;
    let  loser;
  
    if (
      user1.public_repos * 20 + user1.followers >
      user2.public_repos * 20 + user2.followers
    ) {
      winner = user1;
      loser = user2;
    } else {
      winner = user2;
      loser = user1;
    }

    return (
      <main className="pb-12">
        <section className="w-1/2 mx-auto flex justify-between mt-16">
          <div className={darkMode ? "flex-35 bg-gray-700 text-black p-6 rounded-md mr-10" : "flex-35 bg-gray-200 text-black p-6 rounded-md mr-10"}>
            <h2 className="text-center text-3xl mb-4">Winner</h2>
            <div>
              <img
                src={winner.avatar_url}
                alt={winner.login}
                className="w-full"
              />
            </div>
            <h5 className="text-center my-2 font-bold ">
              Score: {winner.public_repos * 20 + winner.followers}
            </h5>
            <h2 className="text-red-300 font-bold text-xl text-center mb-3">
              {winner.login}
            </h2>
            <div className="text-xl">
              <i className="fas fa-user text-red-400"></i>
              <h3 className="inline-block mx-3">{winner.name}</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-compass text-blue-400"></i>
              <h3 className="inline-block mx-3">{winner.location}</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-users text-blue-400"></i>
              <h3 className="inline-block mx-3">
                {winner.followers} followers
              </h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-users text-green-400"></i>
              <h3 className="inline-block mx-3">
                {winner.following} following
              </h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-code text-red-500"></i>
              <h3 className="inline-block mx-3">
                {winner.public_repos} repositories
              </h3>
            </div>
          </div>

          <div className={darkMode ? "flex-35 bg-gray-700 text-black p-6 rounded-md mr-10" : "flex-35 bg-gray-200 text-black p-6 rounded-md mr-10"}>
            <h2 className="text-center text-3xl mb-4">Loser</h2>
            <div>
              <img
                src={loser.avatar_url}
                alt={winner.login}
                className="w-full"
              />
            </div>
            <h5 className="text-center my-2 font-bold ">
              Score: {loser.public_repos * 20 + winner.followers}
            </h5>
            <h2 className="text-red-300 font-bold text-xl text-center mb-3">
              {loser.login}
            </h2>
            <div className="text-xl">
              <i className="fas fa-user text-red-400"></i>
              <h3 className="inline-block mx-3">{loser.name}</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-compass text-blue-400"></i>
              <h3 className="inline-block mx-3">{loser.location}</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-users text-blue-400"></i>
              <h3 className="inline-block mx-3">{loser.followers} followers</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-users text-green-400"></i>
              <h3 className="inline-block mx-3">{loser.following} following</h3>
            </div>
            <div className="text-xl">
              <i className="fas fa-code text-red-500"></i>
              <h3 className="inline-block mx-3">
                {loser.public_repos} repositories
              </h3>
            </div>
          </div>
        </section>

        <div className="text-center my-6">
          <Link to="/battle">
            <h3 className="inline-block bg-black text-white py-3 px-8 rounded-md font-bold">
              Reset
            </h3>
          </Link>
        </div>
      </main>
    );
  };

export default withRouter(Battle);
