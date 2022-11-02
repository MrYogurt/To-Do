import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "@fontsource/abhaya-libre";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Box, createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { COLORS } from './utils/Constants';

const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

const MOCK_DATA = [
  {
    date: "Today",
    tasks: [
      { id: 0, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 1, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 2, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  },
  {
    date: "Tomorrow",
    tasks: [
      { id: 3, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 4, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 5, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  },
  {
    date: "09/07",
    tasks: [
      { id: 6, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 7, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 8, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  },
  {
    date: "10/07",
    tasks: [
      { id: 9, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 10, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 11, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  },
  {
    date: "11/07",
    tasks: [
      { id: 12, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 13, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 14, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  },
  {
    date: "12/07",
    tasks: [
      { id: 15, name: "Visit David", description: LOREM, lineColor: COLORS.red, completed: false },
      { id: 16, name: "Goceries For Dinner", description: LOREM, lineColor: COLORS.blue, completed: false },
      { id: 17, name: "Fix Dad’s iPad", description: LOREM, lineColor: COLORS.yellow, completed: true }
    ]
  }
]

const theme = createTheme({
  components: {
    MuiTypography: {
      defaultProps: {
        color: COLORS.typographyDefault
      },
    },
  },
});

const queryClient = new QueryClient()

const RootApp = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <>
          <Box display="flex" flexDirection="column-reverse" alignItems="center">
            <App mockedData={MOCK_DATA} />
          </Box>
          <ReactQueryDevtools initialIsOpen={false} />
        </>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
)

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <RootApp />
);

reportWebVitals();

