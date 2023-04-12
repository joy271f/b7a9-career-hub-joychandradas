import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h3>When should you use context API?</h3>
            <p><strong>Ans: </strong>Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult.</p>
            <h3>What is a custom hook?</h3>
            <p><strong>Ans: </strong>A custom hook is a special JavaScript function whose name starts with ‘use’ and can be used to call other hooks. Let’s take a look at some major differences between a custom React JS hook and React JS</p>
            <h3>What is useRef?</h3>
            <p><strong>Ans: </strong>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.</p>
            <h3>What is useMemo?</h3>
            <p><strong>Ans: </strong>useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.</p>
        </div>
    );
};

export default Blog;