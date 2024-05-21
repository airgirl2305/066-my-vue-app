import {useEffect, useState} from "react"
export const HooksPage = () => {
  // хук
  const [count, setCount] = useState(0);
  const [advice, setAdvice] = useState("");

  //работает каждый прогруз без массива в конце
  useEffect(() => {
    const urlAPI = 'https://api.adviceslip.com/advice';
    const fetchData = async () => {
      try {
        const response = await fetch(urlAPI);
        const json = await response.json();
        console.log(json);
         setAdvice(json.slip.advice);
      } catch (error) {
        console.log("Ошибка API:", error);
      }
    }
    fetchData();
  }, [])

  // писать на строке return либо ()
  return (
    <div className="flex flex-col">
      <h2>Сообщения</h2>
      <div className="max-w-full p-5 bg-red-300">
        <p>Колличество кликов: {count}</p>
      </div>
      <div className="max-w-full p-5">
        <button
          className="p-6 bg-green-500"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Нажми на меня
        </button>
        <div className="max-w-full p-5 text-lg bg-red-700 rounder2xl">
          <p>{advice}</p>
        </div>
      </div>
    </div>
  );
};
