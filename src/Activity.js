import React from 'react';
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Activity({act, onRemove}) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => {navigate(`/detail/${act.id}`)}}>
      <CardTitle>
        {act.title}
      </CardTitle>
      <CardBottom>
        {act.created_at}
        <DeleteButton onClick={(e) => onRemove(e, act.id)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H20" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M10 11V17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 11V17" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </DeleteButton>
      </CardBottom>
    </Card>
  );
}

export default Activity;

const Card = styled.div`
  background-color: white;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  display: flex;
  height: 234px;
  padding: 26px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 1 calc(25% - 1em);
`

const CardTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  text-overflow: ellipsis;
  overflow: hidden;
`
const CardBottom = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: #888;
  cursor: auto;
`

const DeleteButton = styled.button`
  outline: 0!important;
  border: 0!important;
  background: transparent;
  cursor: pointer;
`