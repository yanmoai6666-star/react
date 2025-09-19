# React Mini API Reference

## React Core API

### React.createElement(type, [props], [...children])

Creates a React element.

- **type**: The type of the element (string for HTML tags, function/class for components)
- **props**: Optional properties object
- **children**: Optional child elements

**Example:**
```jsx
const element = React.createElement('div', { className: 'container' }, 'Hello World');
```

### React.Component

Base class for React components.

**Methods:**
- `setState(partialState, [callback])`: Updates the component state
- `forceUpdate([callback])`: Forces the component to re-render

**Example:**
```jsx
class MyComponent extends React.Component {
  render() {
    return <div>{this.props.message}</div>;
  }
}
```

### React.PureComponent

Similar to `Component` but implements `shouldComponentUpdate` with a shallow prop and state comparison.

### React.cloneElement(element, [props], [...children])

Clones and returns a new React element using an existing element as the starting point.

### React.isValidElement(object)

Verifies if an object is a React element.

### React.createContext(defaultValue)

Creates a Context object.

**Example:**
```jsx
const MyContext = React.createContext(defaultValue);

// Provider component
<MyContext.Provider value={value}>
  {children}
</MyContext.Provider>

// Consumer component
<MyContext.Consumer>
  {value => /* render something based on the context value */}
</MyContext.Consumer>
```

## React DOM API

### ReactDOM.createRoot(container[, options])

Creates a React root for the supplied container and returns the root. The root can be used to render a React element into the DOM.

**Example:**
```jsx
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
```

### ReactDOM.render(element, container[, callback])

Renders a React element into the DOM in the supplied container and returns a reference to the component (or null for stateless components).

### ReactDOM.unmountComponentAtNode(container)

Removes a React component from the DOM and cleans up its event handlers and state.

### ReactDOM.findDOMNode(component)

If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.

### ReactDOM.createPortal(children, container)

Creates a portal. Portals provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

### ReactDOM.hydrate(element, container[, callback])

Same as render(), but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.

## Event System

### SyntheticEvent

Base class for all React synthetic events.

**Properties:**
- `nativeEvent`: The browser's native event
- `target`: The element that triggered the event
- `currentTarget`: The element that the event handler is attached to
- `type`: The type of the event
- `timeStamp`: The timestamp of the event

**Methods:**
- `preventDefault()`: Prevents the default behavior
- `stopPropagation()`: Stops the event from bubbling up the DOM tree
- `stopImmediatePropagation()`: Stops other listeners of the same event from being called
- `persist()`: Removes the event from the pool

## Components API

### Button

A customizable button component.

**Props:**
- `onClick`: Function to call when the button is clicked
- `type`: Button type ('button', 'submit', 'reset')
- `variant`: Button variant ('default', 'primary', 'secondary', 'danger', 'success')
- `size`: Button size ('small', 'medium', 'large')
- `disabled`: Boolean to disable the button
- `className`: Additional CSS class name
- `children`: Content to display inside the button

**Example:**
```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

### Input

A customizable input component.

**Props:**
- `type`: Input type (e.g., 'text', 'email', 'password')
- `value`: Input value
- `onChange`: Function to call when the input value changes
- `placeholder`: Placeholder text
- `disabled`: Boolean to disable the input
- `required`: Boolean to mark the input as required
- `className`: Additional CSS class name
- `name`: Input name attribute
- `id`: Input id attribute

**Example:**
```jsx
<Input
  type="text"
  placeholder="Enter your name"
  value={name}
  onChange={handleNameChange}
/>
```

### Modal

A modal dialog component.

**Props:**
- `isOpen`: Boolean to control visibility
- `onClose`: Function to call when the modal is closed
- `title`: Modal title
- `children`: Content to display inside the modal
- `className`: Additional CSS class name for the modal
- `overlayClassName`: Additional CSS class name for the overlay
- `closeOnOverlayClick`: Boolean to close the modal when clicking the overlay

**Example:**
```jsx
<Modal isOpen={isModalOpen} onClose={handleClose} title="My Modal">
  <p>Modal content goes here</p>
</Modal>
```