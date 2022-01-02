import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import './input.scss';

const Input = forwardRef((props, ref) => {
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
    }));

    return <input className='input' ref={inputRef} {...props}/>;
});

export default Input;
