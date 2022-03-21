import {
    useRecoilState,
    useRecoilValue,
    atom,
    selector
} from 'recoil';
import type { ChangeEvent } from "react"
const textState = atom({
    key: 'textState', // unique ID (with respect to other atoms/selectors)
    default: 'A页面', // default value (aka initial value)
});

const charCountState = selector({
    key: 'charCountState', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const text = get(textState);
  
      return text.length;
    },
  });


export default function () {
    const [text, setText] = useRecoilState(textState);
    const count = useRecoilValue(charCountState);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    };

    return <div>
         <div>text:{text}</div>
         <div>count:{count}</div>
        <input type="text" value={text} onChange={onChange} />

    </div>
}