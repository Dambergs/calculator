import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
  width: 232px;
  margin: 40px auto;
  grid-template-columns: repeat(4, 58px);
  grid-template-rows: minmax(48px, auto) repeat(5, 48px);
  box-shadow: 2px 2px 10px #333;
  border-radius: 10px;
`;

export const Screen = styled.div`
  grid-column: 1 / -1;
  background-color: #454647;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 20px 15px 0 0;
  word-wrap: break-word;
  word-break: break-all;
  text-align: right;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 80px;
`;

export const CurrentNumber = styled.div`
  color: white;
  font-size: 3rem;
  font-weight: 100;
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-size: 1.3rem;
  border: 1px outset #504f54;
  outline: none;
  background-color: #737474;

  /* expanded form example 
    ${function ({ gridSpan }) {
    if (gridSpan) {
      return `grid-column: span ${gridSpan}`;
    }
  }}
    */

  /* shothand */
  ${({ zero }) => zero && `border-bottom-left-radius: 10px;`}

  ${({ gridSpan }) => gridSpan && `grid-column: span ${gridSpan}`} 
    ${({ operation }) => operation && `background-color: #ff9f09;`} 
    ${({ equals }) => equals && `border-bottom-right-radius: 10px;`} 
    ${({ special }) => special && `background-color: #5e5e5e;`}
`;
