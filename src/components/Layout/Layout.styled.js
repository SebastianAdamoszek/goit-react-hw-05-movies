import styles from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styles.div`
  max-width: 100vw;
  margin: 0 auto;
`;

export const Header = styles.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  border-bottom: 1px solid rgb(134, 92, 158);
  box-shadow: 0px 4px 8px rgba(134, 23, 158, 0.5);

  > nav {
    display: flex;
    gap: 30px;
  }
`;

export const Link = styles(NavLink)`
  padding: 6px 12px;
  border-radius: 4px;
  text-decoration: none;
  color: #18c140;
  font-weight: 500;
  font-size: 24px;
  transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1),
    color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    background-color 0.2s cubic-bezier(0.25, 0.1, 0.25, 1),
    box-shadow 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);
  &:hover {
    transform: scale(1.03);
    color: white;
  }
  &.active {
    color: black;
    background-color: rgb(24, 102, 158);
    box-shadow: 0px 0px 20px rgb(12, 12, 10);
  &.active:hover {
    color: white;
    }
  }
`;


