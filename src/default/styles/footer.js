import { css } from 'emotion';

const footerStyle = css`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  margin: 20px 0;

  .links ul {
    list-style: none;
    color: #666;
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
    font-size: 0.9em;
    color: #999;
    text-align: center;
    margin: 10px 0 30px;
  }
`;

export default footerStyle;
