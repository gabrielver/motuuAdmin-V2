
import gql from "graphql-tag";

export const FETCH_APPUSERS_QUERY = gql`
  {
    getAppUsers{
    id
    email
    createdAt
    username
    firstname
    lastname
    role
    enable
    locked
    lastLogin
    modifiedAt
  
    
  }
  }
`;
