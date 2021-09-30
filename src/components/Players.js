function Players(props) {
  let inputText1 = props.inputText1;
  let inputText2 = props.inputText2;

  return (
    <>
      <div className="w-1/2 flex flex-col mr-10">
        <form
          onSubmit={(e) => props.handleSubmit(e)}
          data-id="inputText1"
          className={
            props.hideForm1 && !props.closeUser1Data ? 'hidden' : 'visible'
          }
        >
          <label htmlFor="p-1" className="font-bold">
            Player One
          </label>
          <fieldset className="my-2">
            <input
              type="text"
              placeholder="github username"
              id="p-1"
              className={
                props.darkMode
                  ? 'border-2 border-gray-200 py-4 w-96 px-2 bg-gray-600'
                  : 'border-2 border-gray-200 py-4 w-96 px-2'
              }
              data-id="inputText1"
              value={inputText1}
              onChange={(e) => props.handleChange(e)}
              onKeyDown={(e) => props.handleKeyPress(e)}
            />
            <input
              type="submit"
              value="submit"
              className="py-4 ml-4 px-8 cursor-pointer bg-blue-500 rounded-md text-white font-bold"
            />
          </fieldset>
        </form>

        <div
          className={
            props.closeUser1Data && !props.hideForm1
              ? 'hidden'
              : 'visible flex w-80 justify-between mr-20 p-2 rounded-md bg-gray-400'
          }
        >
          <div className="flex">
            <img
              src={props.data1.avatar_url}
              alt={props.data1.login}
              className="h-20 object-contain"
            />
            <h3 className="text-xl ml-6 text-blue-600 font-bold">
              {props.data1.login}
            </h3>
          </div>
          <div>
            <i
              className="fas fa-times-circle text-xl text-red-500 cursor-pointer"
              data-id="user1"
              onClick={(e) => props.closeUserData(e)}
            ></i>
          </div>
        </div>
      </div>

      <div className="w-1/2 flex flex-col">
        <form
          onSubmit={(e) => props.handleSubmit(e)}
          data-id="inputText2"
          className={
            props.hideForm2 && !props.closeUser2Data ? 'hidden' : 'visible'
          }
        >
          <label htmlFor="p-2" className="font-bold">
            Player Two
          </label>
          <fieldset className="my-2">
            <input
              type="text"
              placeholder="github username"
              id="p-2"
              className={
                props.darkMode
                  ? 'border-2 border-gray-200 py-4 w-96 px-2 bg-gray-600'
                  : 'border-2 border-gray-200 py-4 w-96 px-2'
              }
              value={inputText2}
              data-id="inputText2"
              onChange={(e) => props.handleChange(e)}
              onKeyDown={(e) => props.handleKeyPress(e)}
            />
            <input
              type="submit"
              value="submit"
              className="py-4 ml-4 px-8 cursor-pointer bg-blue-500 rounded-md text-white font-bold"
            />
          </fieldset>
        </form>

        <div
          className={
            props.closeUser2Data && !props.hideForm2
              ? 'hidden'
              : 'visible flex w-80 justify-between mr-20 p-2 rounded-md bg-gray-400'
          }
        >
          <div className="flex">
            <img
              src={props.data2.avatar_url}
              alt={props.data2.login}
              className="h-20 object-contain"
            />
            <h3 className="ml-6 text-xl text-blue-600 font-bold">
              {props.data2.login}
            </h3>
          </div>
          <div>
            <i
              className="fas fa-times-circle text-xl text-red-500 cursor-pointer"
              data-id="user2"
              onClick={(e) => props.closeUserData(e)}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Players;
