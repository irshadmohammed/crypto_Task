import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  background-color: white;
  background-color: lightblue;
  border-radius: 25px;
  box-shadow: 0px 7px 20px 6px;
  margin: auto;
  width: 85%;
`;

export const ContainerDiv = styled.div`
  top: 0;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  z-index: 999;
`;

export const ImageDiv = styled.img`
  display: flex;
  height: 100px;
  margin-left: 20px;
  object-fit: contain;
  height: 40px;
`;

export const HeaderText = styled.span`
  font-size: 18px;
  color: ${(props) => props ? props.color : 'lightgrey'};
  cursor: pointer;
  background-color: white;
  display: flex
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 40px;
  background-color: ${(props) => props ? props.color : 'black'};
  color: white;
  box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;
`;

export const WalletWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const DivContainer = styled.div`
  box-shadow: 0px 10px 15px;
  background-color: white;
  width: 250px;
  margin-bottom: 50px;
  height: 100px;
  border: 1px solid red;
  border-radius: 25px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: ${(props) => props && props.top ? '30px' : null}
`;