import styled from 'styled-components';

export default styled.button`
  background: var(--twitter);
  color: white;
  border: none;

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  &:hover {
    background: var(--tertiary)
  }
`;
