export default [
  {
    id: "q1",
    text: "Which of the following definitions best describes React.js?",
    answers: [
      "A library to build user interfaces with help of declarative code.",
      "A library for managing state in web applications.",
      "A framework to build user interfaces with help of imperative code.",
      "A library used for building mobile applications only.",
    ],
  },
  {
    id: "q2",
    text: "What purpose do React hooks serve?",
    answers: [
      "Enabling the use of state and other React features in functional components.",
      "Creating responsive layouts in React applications.",
      "Handling errors within the application.",
      "Part of the Redux library for managing global state.",
    ],
  },
  {
    id: "q3",
    text: "Can you identify what JSX is?",
    answers: [
      "A JavaScript extension that adds HTML-like syntax to JavaScript.",
      "A JavaScript library for building dynamic user interfaces.",
      "A specific HTML version that was explicitly created for React.",
      "A tool for making HTTP requests in a React application.",
    ],
  },
  {
    id: "q4",
    text: "What is the most common way to create a component in React?",
    answers: [
      "By defining a JavaScript function that returns a renderable value.",
      "By defining a custom HTML tag in JavaScript.",
      "By creating a file with a .jsx extension.",
      'By using the "new" keyword followed by the component name.',
    ],
  },
  {
    id: "q5",
    text: 'What does the term "React state" imply?',
    answers: [
      "An object in a component that holds values and may cause the component to render on change.",
      "The lifecycle phase a React component is in.",
      "The overall status of a React application, including all props and components.",
      "A library for managing global state in React applications.",
    ],
  },
  {
    id: "q6",
    text: "How do you typically render list content in React apps?",
    answers: [
      "By using the map() method to iterate over an array of data and returning JSX.",
      "By using the for() loop to iterate over an array of data and returning JSX.",
      "By using the forEach() method to iterate over an array of data and returning JSX.",
      "By using the loop() method to iterate over an array of data and returning JSX.",
    ],
  },
  {
    id: "q7",
    text: "Which approach can NOT be used to render content conditionally?",
    answers: [
      "Using a the #if template syntax.",
      "Using a ternary operator.",
      "Using the && operator.",
      "Using an if-else statement.",
    ],
  },
  {
    id: "q8",
    text: "What is the purpose of the 'key' prop in React when rendering a list of components?",
    answers: [
      "It helps React identify which items have changed, are added, or are removed, improving performance and facilitating smooth updates.",
      "It defines a unique identifier for the component within the DOM.",
      "It is required for all components and serves as a primary key in React applications.",
      "It determines the order in which components are rendered within a list.",
    ],
  },
  {
    id: "q9",
    text: "What role does the 'virtual DOM' play in React's performance optimization?",
    answers: [
      "It is a lightweight copy of the actual DOM, enabling efficient updates and reducing unnecessary re-rendering.",
      "It is responsible for handling HTTP requests and managing data fetching in React applications.",
      "It acts as a placeholder for components that are not currently visible on the screen.",
      "It is an alternative to the actual DOM, used for rendering static content only.",
    ],
  },
  {
    id: "q10",
    text: "What is the purpose of the 'propTypes' system in React?",
    answers: [
      "It allows you to specify the expected data type of each prop, helping catch bugs and improve component reliability.",
      "It is used to define the types of components within a React application.",
      "It provides a way to declare the default values for component props.",
      "It ensures that all components have the same set of required props for consistency.",
    ],
  },
  {
    id: "q11",
    text: "How does React handle forms and form elements?",
    answers: [
      "By using controlled components, where form elements are tied to the component's state.",
      "By relying solely on the native HTML form handling without any React-specific approach.",
      "By using the 'autoSubmit' prop to automatically submit forms on user input.",
      "By utilizing a separate library specifically designed for form handling in React.",
    ],
  },
  {
    id: "q12",
    text: "What is the purpose of the 'useEffect' hook in React functional components?",
    answers: [
      "It allows performing side effects in functional components, such as data fetching or subscriptions.",
      "It is used to define the effect of user interactions within the component.",
      "It handles the rendering of components based on changes in the application state.",
      "It is a replacement for the 'componentDidMount' lifecycle method in class components.",
    ],
  },
  {
    id: "q13",
    text: "Which method is commonly used for handling user input in React?",
    answers: [
      "By using the 'onChange' event handler for input elements.",
      "By utilizing the 'onClick' event handler for input elements.",
      "By directly manipulating the DOM within the component.",
      "By relying on the 'submit' event for all user input actions.",
    ],
  },
  {
    id: "q14",
    text: "What is the purpose of the 'Fragment' element in React?",
    answers: [
      "It is used to group multiple elements without adding unnecessary nodes to the DOM.",
      "It defines a lightweight version of a React component.",
      "It is a replacement for the 'div' element in React applications.",
      "It serves as a placeholder for dynamic content that will be loaded asynchronously.",
    ],
  },
];
