import { useSelector , useDispatch } from "react-redux";





function App() {
  const result = useSelector(state => state);
  console.log(result);
  const [task, setTask] = useState('')
  const dispatch = useDispatch();

  return (
    <div className="p-8">
      <input
        type="text"
        className="pl-2 border-2 border-black"
        placeholder="Enter your task"
        onChange={e => setTask(e.target.value)} />
      <br />
      <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      onclick={() => dispatch
      ({type: "CREATE_TASK",
        payload: {task}
      })}
        Submit
      </button>
    </div>
  );
}

export default App;
