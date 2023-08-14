import { useState } from "react";
import { addText } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const { todo } = useSelector((s) => s);
  const dispatch = useDispatch();
  console.log(todo);

  return (
    <div className="container w-[1140px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-4 pt-4 bg-white">
        <input
          onChange={(e) => setValue(e.target.value)}
          type="search"
          id="default-search"
          className=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="text"
          required
        />
        <input
          onChange={(e) => {
            setValue1(e.target.value);
          }}
          type="search"
          id="default-search"
          className=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="img"
          required
        />

        <button
          onClick={() => {
            dispatch(addText(value));
            dispatch(addText(value1));
          }}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          add
        </button>
      </div>

      <div className="rounded px-2
       bg-gray-400  mt-10 mx-auto w-[400px] h-[auto] ">
        {todo.map(
          (el) => (
            <div className="flex items-center">
                <img src={el.image} alt="" />
              <h1>{el.text}</h1>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Home;
