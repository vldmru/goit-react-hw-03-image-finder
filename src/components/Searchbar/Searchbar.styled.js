import styled from "styled-components";

export const Searchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding-right: 25px;
  padding-left: 25px;
  padding-top: 15px;
  padding-bottom: 15px;
  color: #ffffff;
  background-color: #4287f5;
`

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;

export const ButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const SearchFormInput = styled.input`
display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
`
