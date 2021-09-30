import React, { useState } from 'react';
import Players from './Players';
import { Link } from 'react-router-dom';

function GithubBattle (props) {

  let [inputText1, setInputText1] = useState('');
  let [inputText2, setInputText2] = useState('');
  let [hideForm1, setHideForm1] = useState(false);
  let [hideForm2, setHideForm2] = useState(false);
  let [data1, setData1] = useState('');
  let [data2, setData2] = useState('');
  let [closeUser1Data, setCloseUser1Data] = useState(true);
  let [closeUser2Data, setCloseUser2Data] = useState(true);

  function handleSubmit (event) {
    event.preventDefault();
    let id = event.target.dataset.id;    
    if (inputText1 || inputText2) {
      fetch(`https://api.github.com/users/${inputText1 || inputText2}`)
        .then((res) => res.json())
        .then((data) => {
          if (id === 'inputText1') {
            setData1(data);
            setHideForm1(true);
            setCloseUser1Data(false);
            setInputText1('')
          } else {
            setData2(data);
            setHideForm2(true);
            setCloseUser2Data(false);
            setInputText2('');
          }
        });
    }
  };

  function hadleChange ({ target }) {
    let { value } = target;
    let id = target.dataset.id;
    if(id === "inputText1") {
     setInputText1(value); 
    } else {
      setInputText2(value); 
    }
  };

 function handleKeyPress(event) {
    if (event.target === 13) {
      handleSubmit(event);
    }
  };

  function closeUserData ({ target }) {
    let id = target.dataset.id;
    if (id === 'user1') {
      setHideForm1(!hideForm1);
      setCloseUser1Data(!closeUser1Data);
      setData1('')
    } else {
      setHideForm2(!hideForm2);
      setCloseUser2Data(!closeUser2Data);
      setData2('')
    }
  };

    return (
      <main className="flex flex-col items-center">
        <section className="w-4/6">
          <h1 className="text-center text-4xl mb-12">Instructions</h1>
          <div className="flex justify-between">
            <div className="flex-35 flex flex-col items-center">
              <h3 className="text-center text-2xl">Enter two Github users</h3>
              <div
                className={
                  props.darkMode
                    ? 'bg-gray-600 h-64  text-center w-64 flex justify-center items-center my-3'
                    : 'bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3'
                }
              >
                <i className="fas fa-user-friends text-9xl text-green-400"></i>
              </div>
            </div>

            <div className="flex-35 flex flex-col items-center">
              <h3 className="text-center text-2xl">Battle</h3>
              <div
                className={
                  props.darkMode
                    ? 'bg-gray-600 h-64  text-center w-64 flex justify-center items-center my-3'
                    : 'bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3'
                }
              >
                <i className="fas fa-balance-scale text-9xl text-blue-500"></i>
              </div>
            </div>

            <div className="flex-35 flex flex-col items-center">
              <h3 className="text-center text-2xl">Know the Winner</h3>
              <div
                className={
                  props.darkMode
                    ? 'bg-gray-600 h-64  text-center w-64 flex justify-center items-center my-3'
                    : 'bg-gray-300 h-64  text-center w-64 flex justify-center items-center my-3'
                }
              >
                <i className="fas fa-shield-alt text-9xl text-yellow-400"></i>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-32">
          <h2 className="text-center text-3xl">Players</h2>
          <div className="flex justify-between mt-6">
            <Players
              data1={data1}
              data2={data2}
              closeUser1Data={closeUser1Data}
              closeUser2Data={closeUser2Data}
              hideForm1={hideForm1}
              hideForm2={hideForm2} 
              inputText1={inputText1}
              inputText2={inputText2} 
              handleChange={hadleChange}
              handleSubmit={handleSubmit}
              handleKeyPress={handleKeyPress}
              closeUserData={closeUserData}
              darkMode={props.darkMode}
            />
          </div>

          <div className="text-center py-12">
            <Link
              to={{
                pathname: '/userbattle',
                state: [data1, data2],
              }}
            >
              <h4
                className={
                  !closeUser1Data && !closeUser2Data
                    ? 'visible bg-black text-white py-3 px-8 font-bold inline-block rounded-md'
                    : 'hidden'
                }
              >
                Battle
              </h4>
            </Link>
          </div>
        </section>
      </main>
    );
  }

export default GithubBattle;
