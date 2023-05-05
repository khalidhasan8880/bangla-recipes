import React from 'react';
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Blog = () => {

    return (

        <div>
            <div className='flex justify-center mb-8'>
                <Pdf targetRef={ref} filename="Important-QNA">
                    {({ toPdf }) => <button className='btn-custom' onClick={toPdf}>Generate Pdf</button>}
                </Pdf>
            </div>
            <div ref={ref} className='grid grid-cols-1 Class Properties divide-solid divide-y-2 container mx-auto gap-20 text-2xl'>
                <div>
                    <h3 className='font-semibold '>1. Tell us the differences between uncontrolled and controlled components.</h3>
                    <p>Ans :
                        <span className='italic'>UnControlled Component</span> are controlled by the DOM.It manage their own state internally.
                        <span className='italic'>Controlled Component</span> are controlled by the React State. Suppose if we want to get value from any input then we should declare a useState and stored value with event. It will give you better controlling for form validation and more features.
                    </p>
                </div>
                <div>
                    <h3 className='font-semibold '> 2. How to validate React props using PropTypes?</h3>
                    <p>Ans : First of all we need to install <span className='italic'>npm install prop-types --save</span> and <span className='italic'>import  PropTypes  from "prop-types";</span> Suppose We have a component and the component name are Hero. Now We can use Hero.PropTypes then second bracket like an object. Object Properties will be PropType.string or PropType.object or any  primitive and non primitive. If props does not matched with given primitive or non primitive value then it will give a warning in console for Developers. This Warning not going to production</p>
                </div>
                <div>
                    <h3 className='font-semibold '> 3. Tell us the difference between nodejs and express js.</h3>
                    <p>Ans :
                        <span className='font-bold'>NodeJs: </span>
                        is a JavaScript runtime environment that allows developers to run JavaScript code outside of a browser.Node.js provides a lot of flexibility depend when where i use it.  Node.js provides core modules for building networking, file system etc. simplifies the process of building web applications. We can say in brief, ExpressJs simplifies the process of building web applications.
                    </p>
                    <p>
                        <span className='font-bold'>Express.js</span> is a popular web framework built on top of Node.js . Express.js provides a simple and powerful API for building web applications and APIs. Express.js provides features like routing, middleware, templating engines, and other features that simplify the process of building web applications.
                    </p>
                </div>
                <div>
                    <h3 className='font-semibold '> 4. What is a custom hook, and why will you create a custom hook?</h3>
                    <p>Ans :
                        The biggest advantage of using hooks is that we can reuse the specific functionality of a component.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;