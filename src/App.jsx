import 'tailwindcss/tailwind.css';
import { jsx, css } from '@emotion/react';
import './App.css';

import logo from './assets/images/logo_100x100.png';

function App() {
  const containerStyles = css`
    background-color: #e2e8f0;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const cardStyles = css`
    max-width: md;
    padding: 6;
    background-color: white;
    border-radius: lg;
    box-shadow: lg;
    display: flex;
    align-items: center;
  `;

  const logoStyles = css`
    width: 16px;
    height: 16px;
    margin-right: 4;
  `;

  const titleStyles = css`
    font-size: 2xl;
    font-weight: bold;
    margin-bottom: 4;
  `;

  const descriptionStyles = css`
    color: #4a5568;
  `;

  const buttonStyles = css`
    margin-top: 4;
    padding: 2 4;
    background-color: #3b82f6;
    color: white;
    border-radius: rounded;
    &:hover {
      background-color: #2563eb;
    }
  `;

  return (
    <div css={containerStyles}>
      <div css={cardStyles}>
        <img src={logo} alt="Logo" css={logoStyles} />
        <div>
          <h1 css={titleStyles}>
            <span css={{ display: 'inline-block', verticalAlign: 'middle' }}>
              Welcome to Agile Biscuits App
            </span>
          </h1>
          <p css={descriptionStyles}>
            This is a sample application using Tailwind CSS.
          </p>
          <button css={buttonStyles}>
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
