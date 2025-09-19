import React from './react';
import ReactDOM from './react-dom/client';
import Button from './components/Button';
import Input from './components/Input';
import Modal from './components/Modal';

/**
 * React Mini 示例应用
 */
function App() {
  // 简单的状态管理
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  // 处理按钮点击事件
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  // 处理输入变化
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  // 处理模态框显示/隐藏
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="app-container">
      <h1>Welcome to React Mini!</h1>
      <p>This is a simplified implementation of React core concepts.</p>
      
      <div className="counter-section">
        <h2>Counter Example</h2>
        <p>Count: {count}</p>
        <div className="button-group">
          <Button onClick={handleDecrement} variant="secondary">
            - Decrement
          </Button>
          <Button onClick={handleIncrement} variant="primary">
            + Increment
          </Button>
        </div>
      </div>
      
      <div className="input-section">
        <h2>Input Example</h2>
        <Input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
        {name && <p>Hello, {name}!</p>}
      </div>
      
      <div className="modal-section">
        <h2>Modal Example</h2>
        <Button onClick={toggleModal} variant="success">
          Open Modal
        </Button>
        
        <Modal isOpen={isModalOpen} onClose={toggleModal} title="React Mini Modal">
          <p>This is a modal dialog implemented with React Mini.</p>
            <p>This is a modal dialog implemented with React Mini.</p>
            <p>This is a modal dialog implemented with React Mini.</p>
            <p>This is a modal dialog implemented with React Mini.</p>
          <p>Modal content can include any React elements.</p>
          <Button onClick={toggleModal} variant="primary" style={{ marginTop: '20px' }}>
            Close
          </Button>
        </Modal>
      </div>
    </div>
  );
}

// 渲染应用
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
