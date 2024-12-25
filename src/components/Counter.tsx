import { useDispatch, useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../app/store";
import { increaseAction } from "../app/features/counter/counterSlice";
export default function Counter() {
    //RootState define state is refer store

  const {text,value}  = useSelector((state: RootState) => state.counter); 
  // Syntax sugar:make the code easier to read and write
  //const { value, text } = useSelector(({ counter }: RootState) => counter);
  const dispatch = useDispatch(); //or  useAppDispatch()
  return (
    <div>
      <h3>Counter: {value}</h3>
      <button onClick={() => dispatch(increaseAction(3))}>{text}</button>
    </div>
  );
}
