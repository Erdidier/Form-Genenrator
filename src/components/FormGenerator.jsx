import React, { useState, useEffect } from "react";
import data from "../templates/data";

function FormGenerator() {
  const [hidden, setHidden] = useState({});
  useEffect(() => {
    data.fields.forEach((field) => {
      // if (field.type === "hidden") {
      //   setHidden((prev) => ({ ...prev, [field.name]: field.value }));
      // }
      setHidden((prev) => ({ ...prev, [field.name]: field.hidden }));
    });
  }, []);

  const toggleHidden = (name, e) => {
    e.preventDefault();
    setHidden((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  console.log(hidden);
  return (
    <div className="text-center bg-gray-300 h-screen">
      <h1 className="text-5xl font-bold p-5">Form Generator</h1>
      <form>
        {data.fields.map((item, index) => {
          let element = null;
          switch (item.type) {
            case "text":
              element = (
                <div className="inline mx-4">
                  <label>{item.name}</label>
                  <input type={item.type} />
                </div>
              );
              break;
            case "select":
              element = (
                <div className="inline mx-4">
                  <label>{item.name}</label>
                  <select name={item.name} id="item.name">
                    {item.options.map((option) => (
                      <option value={option.name}>{option.name}</option>
                    ))}
                  </select>
                </div>
              );
              break;
            case "radio":
              element = (
                <div className="inline mx-4">
                  <label>{item.name}</label>
                  {item.options.map((option) => (
                    <div>
                      <input
                        type={item.type}
                        name={item.name}
                        value={option.name}
                      />
                      <label>{option.name}</label>
                    </div>
                  ))}
                </div>
              );
              break;
            default:
              element = null;
          }
          return (
            <div key={index}>
              {hidden[item.name] ? "" : element}
              <button
                className={
                  hidden[item.name]
                    ? "my-4 inline-block rounded-full bg-green-500 text-white font-bold px-4 py-3 hover:bg-green-700 transition duration-500"
                    : "my-4 inline-block rounded-full bg-red-500 text-white font-bold px-4 py-3 hover:bg-red-700 transition duration-500"
                }
                onClick={(e) => toggleHidden(item.name, e)}
              >
                {hidden[item.name]
                  ? `add ${item.name} field`
                  : `remove ${item.name} field`}
              </button>
            </div>
          );
        })}
      </form>
    </div>
  );
}

export default FormGenerator;
