import { useState, useEffect } from "react";

type User = {
  name: string;
  age: number;
  email: string;
};
export default function About() {
  // hooks
  // const app = useState(100);
  const [count, setCount] = useState<number>(100);
  // const [user, setUser] = useState<User>({
  //   name: "",
  //   age: 0,
  //   email: "",
  // });
  // console.log('app', app);
  // count for state data
  // setCount for updating state data
  // console.log("count", count);
  // console.log("setCount", setCount);
  function increment() {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  }
  function decrement() {
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    // setCount(count - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
    setCount((prevCount) => prevCount - 1);
  }
  // function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUser({ ...user, name: e.target.value });
  // }
  // function handleChangeAge(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUser({ ...user, age: Number(e.target.value) });
  // }
  // function handleChangeEmail(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUser({ ...user, email: e.target.value });
  // }
  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   setUser({
  //     ...user,
  //     [e.target.name]: e.target.value,
  //   });
  // }
  // function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  //   e.preventDefault();
  //   console.log("User submitted:", user);
  // }

  //useEffect
  const [name, setName] = useState<string>("");
  useEffect(() => {
    // This code runs when the component mounts
    console.log("useEffect");
    // setName("Rosella");
  }, [count]); // Empty dependency array means this runs once

  return (
    <div className="min-h-screen">
      <h1>This is About Page</h1>
      <p>Name : {name}</p>
      <input
        type="text"
        className="border-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Count : {count}</p>
      <button
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
      </button>
      {/* <div>
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
      </div> */}
      {/* <div> */}
      {/* <form
          action=""
          className="p-4 border border-gray-300 rounded"
          onSubmit={handleSubmit}
        >
          <input
            className="border border-gray-300 rounded px-2 py-1 mb-2 block"
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 rounded px-2 py-1 mb-2 block"
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}
          />
          <input
            className="border border-gray-300 rounded px-2 py-1 mb-2 block"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="submit"
            className="bg-emerald-500 text-white px-4 py-2 rounded mr-2"
            value="Login"
          />
        </form> */}
      {/* <button
            className="bg-emerald-500 text-white px-4 py-2 rounded mr-2"
            onClick={() =>
              setUser({ name: user.name, age: user.age, email: user.email })
            }
          >
            Update
          </button> */}
      {/* </div> */}
    </div>
  );
}
