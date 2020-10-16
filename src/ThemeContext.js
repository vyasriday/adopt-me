import { createContext } from 'react';

/**
 * createContext takes a default value and an optional cb that it can use as provider if not provider provided above it.
 */
const ThemeContext = createContext('green', () => {});

export default ThemeContext;
