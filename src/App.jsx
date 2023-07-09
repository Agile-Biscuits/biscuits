import 'tailwindcss/tailwind.css';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import './App.css';

import logo from './assets/images/logo_100x100.png';

function App() {

  const Title = styled.h1`
    font-size: 2xl;
    font-weight: bold;
    margin-bottom: 4px;
  `;

  const Description = styled.p`
    color: #4a5568;
  `;

  const Button = styled.button`
    margin-top: 4px;
    padding: 2px 4px;
    background-color: #3b82f6;
    color: white;
    border-radius: 0.25rem;
    &:hover {
      background-color: #2563eb;
    }
  `;

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-md p-6 bg-white rounded-lg shadow-lg flex items-center">
        <img src={logo} alt="Logo" className="w-16 h-16 mr-4" />
        <div>
          <Title>
            <span className={{ display: 'inline-block', verticalAlign: 'middle' }}>
              Welcome to Agile Biscuits App
            </span>
          </Title>
          <Description>
            This is a sample application using Tailwind CSS.
          </Description>
          <Button>
            Click Me
            </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
