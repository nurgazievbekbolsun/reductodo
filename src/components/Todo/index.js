import { useRef, useState } from "react";
import { addText, delALL, delText } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import './index.scss'
import { type } from "@testing-library/user-event/dist/type";
const Home = () => {
  const [value, setValue] = useState("");
  const { todo } = useSelector((s) => s);
  const dispatch = useDispatch();

  const inp = () => {
    let hh = document.querySelector('.hhh')
        hh.innerHTML = '<div><p>Что хотите ? </p> <input id="impu" maxLength="15" type="text"/> </div>'
    }
  const enter = (e) => {
    if (value.trim() !== "" && e.key === "Enter" ? (dispatch(addText(value)),setValue('')) : '' ){  
    }else if(value === '0112'){
      inp()
    }
    
  };
  return (
    <div className="container w-[1140px] mx-auto">
      <div className="flex flex-col justify-center items-center gap-4 pt-4 bg-white">
        <input
          onKeyDown={enter}
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          type={+value || value === '0' ? 'password' : 'text'}
         
          id="default-search"
          className=" p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="text"
          // required
        />
        <div className="hhh flex-col text-center"></div>

        <div className="flex gap-4">
        <button
          onClick={() => {
            if(value === '0112'){
              inp()
              setValue('')
            }else if(value.trim() !== ""){
              dispatch(addText(value));
              setValue("")
            }
          }
        }
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          add
        </button>
          {
            todo.length > 1 ? <button 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() =>{
            dispatch(delALL(value))
          }}>del all</button>
          : null
          }
        </div>
      </div>

      <div
        className="rounded px-2
       bg-gray-400  mt-10 mx-auto w-[400px] h-[auto] "
      >
        {todo?.map((el) => (
          <div>
            <div className="flex justify-between items-center">
              <div className="flex">
              <input type="checkbox" />
              <h1>{el.text}</h1>
              </div>
              <button
                onClick={() => {
                  dispatch(delText(el));
                }}
              >
                delete
              </button>
              {/* <img src={el.image} alt="" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
