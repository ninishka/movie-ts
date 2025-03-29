import React, { useRef } from 'react';


const RefExample = ({}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        inputRef.current?.focus();
    }
return (
    <div>
        <form>
            <input ref={inputRef} type="text" />
        </form>
        <button onClick={handleClick}>press</button>
    </div>
    
)
}
export default RefExample;