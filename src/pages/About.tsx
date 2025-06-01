import { useState } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};
export default function About() {
  // hooks
  // const app = useState(100);
  // const [count, setCount] = useState<number>(100);
  const [user, setUser] = useState<User>({
    name: "",
    age: 0,
    email: "",
  });
  // console.log('app', app);
  // count for state data
  // setCount for updating state data
  // console.log("count", count);
  // console.log("setCount", setCount);
  // function increment() {
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   // setCount(count + 1);
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  //   setCount((prevCount) => prevCount + 1);
  // }
  // function decrement() {
  //   // setCount(count - 1);
  //   // setCount(count - 1);
  //   // setCount(count - 1);
  //   // setCount(count - 1);
  //   // setCount(count - 1);
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1);
  // }
  function handlerChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, name: e.target.value });
  }
  function handlerChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, age: Number(e.target.value) });
  }
  function handlerChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setUser({ ...user, email: e.target.value });
  }
  return (
    <div className="min-h-screen">
      <h1>This is About Page</h1>
      {/* <p>Count : {count}</p> */}
      {/* <button
        className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        onClick={increment}
      >
        Increment
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mr-2"
        onClick={decrement}
      >
        Decrement
      </button> */}
      <div>
        <h2 className="text-lg font-semibold">User Information</h2>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
      </div>
      <div>
        <input
          className="border border-gray-300 rounded px-2 py-1 mb-2 block"
          type="text"
          value={user.name}
          onChange={handlerChangeName}
        />
        <input
          className="border border-gray-300 rounded px-2 py-1 mb-2 block"
          type="number"
          value={user.age}
          onChange={handlerChangeAge}
        />
        <input
          className="border border-gray-300 rounded px-2 py-1 mb-2 block"
          type="text"
          value={user.email}
          onChange={handlerChangeEmail}
        />
        <button
          className="bg-emerald-500 text-white px-4 py-2 rounded mr-2"
          onClick={() =>
            setUser({ name: user.name, age: user.age, email: user.email })
          }
        >
          Update
        </button>
      </div>
    </div>
  );
}
