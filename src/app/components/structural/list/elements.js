import styled from "react-emotion"

export const ListContainer = styled(`ul`)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  max-width: 124rem;
  padding: 0;
  margin: 0;
  list-style: none;
`

export const ListItem = styled(`li`)`
  display: flex;
  flex: 0 1 auto;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 0.5rem 0;
  width: 100%;
`
