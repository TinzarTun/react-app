import { useState, useEffect } from "react";

type User = {
  name: string;
  age: number;
  email: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address?: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
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

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [users, setUser] = useState<User[]>([]);
  console.log(users);
  const [name, setName] = useState<string>("");
  // API fetch
  const fetchUsers = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  };
  //useEffect
  useEffect(() => {
    fetchUsers();
    // setName("Rosella");
    console.log("useEffect");
  }, [count]); // Empty dependency array means this runs once

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Error : {error}</div>;
  }

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
      <br />
      {users.length > 0 ? (
        users.map((user, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded mb-4">
            <p>
              <strong>
                <i>Name : </i>
              </strong>
              {user.name}
            </p>
            <p>
              <strong>
                <i>Email : </i>
              </strong>
              {user.email}
            </p>
            <p>
              <strong>
                <i>Phone : </i>
              </strong>
              {user.phone}
            </p>
            <p>
              <strong>
                <i>Website : </i>
              </strong>
              {user.website}
            </p>
            <p>
              <strong>
                <i>Company Name : </i>
              </strong>
              {user.company?.name}
            </p>
            <p>
              <strong>
                <i>Company CatchPhrase : </i>
              </strong>
              {user.company?.catchPhrase}
            </p>
            <p>
              <strong>
                <i>Company Bs : </i>
              </strong>
              {user.company?.bs}
            </p>
            <p>
              <strong>
                <i>Address Street : </i>
              </strong>
              {user.address?.street}
            </p>
            <p>
              <strong>
                <i>Address Suite : </i>
              </strong>
              {user.address?.suite}
            </p>
            <p>
              <strong>
                <i>Address City : </i>
              </strong>
              {user.address?.city}
            </p>
            <p>
              <strong>
                <i>Address Zipcode : </i>
              </strong>
              {user.address?.zipcode}
            </p>
            <p>
              <strong>
                <i>Address Geo Lat : </i>
              </strong>
              {user.address?.geo.lat}
            </p>
            <p>
              <strong>
                <i>Address Geo Lng : </i>
              </strong>
              {user.address?.geo.lng}
            </p>
          </div>
        ))
      ) : (
        <p>No users found</p>
      )}
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
