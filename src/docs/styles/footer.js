import { css } from 'emotion';

const footerStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  margin: 20px 0;

  .links ul {
    list-style: none;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    line-height: 1.1;
  }

  .links a {
    text-decoration: none;
    color: #777;
    font-weight: bold;
  }

  .links li {
    text-align: center;
    margin: 2px 10px;
    position: relative;
  }

  .copyright {
    font-size: 0.8em;
    text-align: center;
    margin: 10px 0 30px;

    & p {
      color: var(--superLightTextColor);
    }
  }

  .credits {
    font-size: 0.8em;
    color: var(--superLightTextColor);
    margin: 20px 0 0;
    text-align: center;

    & a {
      text-decoration: none;
      color: var(--lightTextColor);
    }
  }
`;

export default footerStyle;
