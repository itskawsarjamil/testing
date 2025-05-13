import "./App.css";
import PrimaryButton from "./components/primaryButton";
import UserTable from "./UsersTable/UsersTable";

export const users = [
  { id: 1, name: "John", age: 32 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 43 },
];

function App() {
  return (
    <div>
      <p>hello world</p>
      <PrimaryButton />
      <UserTable users={users} />
      {/* <PrimaryButton action="post" /> */}
    </div>
  );
}

export default App;
