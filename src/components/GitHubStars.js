import React, { useState, useEffect  } from 'react';
import AllCard from "./AllCard";

function  GitHubStars (props) {

  let [data, setData] = useState(null);
  let [tag, setTag ] = useState('all');

  useEffect(() => {
    fetchData(tag);
    return () => {}
  }, [tag])
 function handleTags ({ target }) {
    let id = target.dataset.id;
    setTag(id);
     fetchData(tag)
  };
  function fetchData(tag) {
    fetch(
      `https://api.github.com/search/repositories?q=stars:%3E1+language:${tag}&sort=stars&order=desc&type=Repositories`
    )
      .then((res) => {
      if(!res.ok) {
        throw new Error("Something went Wrong")
      } else {
       return res.json()
      }
    })
      .then((data) => setData(data.items))
      .catch(err => console.log(err)); 
  };

    return (
      <main className="flex flex-col items-center w-full">
        <header className="flex justify-center mt-5">
          <nav className="flex">
            <h2
              className={
                tag === 'all'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="all"
              onClick={(event) => handleTags(event)}
            >
              All
            </h2>
            <h2
              className={
                tag === 'javascript'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="javascript"
              onClick={(event) => handleTags(event)}
            >
              JavaScript
            </h2>
            <h2
              className={
                tag === 'ruby'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="ruby"
              onClick={(event) => handleTags(event)}
            >
              Ruby
            </h2>
            <h2
              className={
                tag === 'java'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="java"
              onClick={(event) => handleTags(event)}
            >
              Java
            </h2>
            <h2
              className={
                tag === 'css'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="css"
              onClick={(event) => handleTags(event)}
            >
              CSS
            </h2>
            <h2
              className={
                tag === 'python'
                  ? 'cursor-pointer text-red-500 text-2xl font-bold mx-5'
                  : 'inline-block cursor-pointer mx-5 text-2xl font-bold'
              }
              data-id="python"
              onClick={(event) => handleTags(event)}
            >
              Python
            </h2>
          </nav>
        </header>
        <div className="flex flex-wrap w-full justify-center">
          {data ? (
            <AllCard data={data} darkMode={props.darkMode} />
          ) : (
            <h2 className="text-center text-2xl font-bold py-8">Loading...</h2>
          )}
        </div>
      </main>
    );
  };
export default GitHubStars;
