import React, { useState } from "react";
import "./Blog.css";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: "landscape", // Set the orientation to landscape
};

const Blog = () => {
    const [collapseOpen, setCollapseOpen] = useState(false);

    return (
        <div className="px-8 min-h-screen bg-base-200">
            <Pdf targetRef={ref} options={options} filename="Questionnaire.pdf">
                {({ toPdf }) => (
                    <button
                        class="mx-8 mt-4 btn btn-active rounded-full"
                        onClick={toPdf}
                    >
                        Generate Pdf
                    </button>
                )}
            </Pdf>

            <div ref={ref} className="flex-col">
                <div className="text-center">
                    <h1 className="text-5xl mb-4 font-bold">Questionnaire</h1>
                </div>

                {/* Question 1: */}
                <div className="mb-4">
                    <h3 className="font-bold">
                        Tell us the differences between uncontrolled and
                        controlled components.
                    </h3>
                    <p>
                        The main difference between controlled and uncontrolled
                        components is that controlled components rely on the
                        React state to manage their state, while uncontrolled
                        components manage their state internally. Controlled
                        components are typically more powerful and flexible than
                        uncontrolled components because they can be controlled
                        and synchronized with other components in the
                        application. However, they require more setup and
                        coordination between parent and child components.
                        Uncontrolled components, on the other hand, are simpler
                        and more straightforward, but can be less flexible and
                        harder to coordinate with other components.
                    </p>
                </div>

                {/* Question 2: */}
                <div className="mb-4">
                    <h3 className="font-bold">
                        How to validate React props using PropTypes
                    </h3>
                    <p>
                        React provides a library called PropTypes to validate
                        the props passed to a component. PropTypes allows you to
                        define the expected type and shape of each prop, and it
                        provides helpful warning messages in the console if the
                        props do not meet the expected criteria.
                    </p>
                </div>

                {/* Question 3: */}
                <div className="mb-4">
                    <h3 className="font-bold">
                        Tell us the difference between nodejs and express js.
                    </h3>
                    <p>
                        Node.js is a runtime environment that allows developers
                        to run JavaScript code outside of a web browser. It
                        provides a set of built-in modules for creating
                        server-side applications.
                    </p>
                    <p className="mt-4">
                        Express.js, on the other hand, is a web framework for
                        Node.js. It is built on top of Node.js and provides a
                        set of features and tools for creating web applications
                        and APIs.
                    </p>
                </div>

                {/* Question 4: */}
                <div className="mb-4">
                    <h3 className="font-bold">
                        What is a custom hook, and why will you create a custom
                        hook?
                    </h3>
                    <p>
                        A custom hook is a JavaScript function that utilizes the
                        React Hooks API to enable reuse of logic across
                        different components. Custom hooks allow developers to
                        extract commonly used functionality from a component and
                        reuse it across multiple components.
                    </p>
                    <p className="mt-4">
                        Developers create custom hooks to encapsulate logic and
                        functionality that is reused across multiple components.
                        This can include things like fetching data from an API,
                        managing the state of a component, or handling complex
                        behaviors like scroll or keyboard events. Custom hooks
                        can also help to simplify component code, making it
                        easier to read and maintain.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
