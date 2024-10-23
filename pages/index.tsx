import * as React from 'react';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { DataGridPro } from '@mui/x-data-grid-pro';
import { arSD } from '@mui/x-data-grid/locales';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';

// Create rtl cache
const cacheRtl = createCache({
  key: 'data-grid-rtl-demo',
  stylisPlugins: [prefixer, rtlPlugin],
});

const columns = [
  { field: 'name', headerName: 'Name', width: 160, editable: true },
  { field: 'email', headerName: 'Email', width: 200, editable: true },
  { field: 'age', headerName: 'Age', type: 'number', editable: true },
  {
    field: 'dateCreated',
    headerName: 'Date Created',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'lastLogin',
    headerName: 'Last Login',
    type: 'dateTime',
    width: 220,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
  {
    id: 2,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
  {
    id: 3,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
  {
    id: 4,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
  {
    id: 5,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
  {
    id: 6,
    name: 'Mabel Webster',
    email: 'id@oklafu.ps',
    age: 36,
    dateCreated: new Date(),
    lastLogin: new Date(),
  },
];
export default function DataGridRTL() {
  // Inherit the theme from the docs site (dark/light mode)
  const existingTheme = useTheme();

  const theme = React.useMemo(
    () =>
      createTheme({}, arSD, existingTheme, {
        direction: 'rtl',
      }),
    [existingTheme],
  );
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div dir="rtl" style={{ height: 400, width: '100%' }}>
          <DataGridPro
            rows={rows}
            columns={columns}
            initialState={{
              pinnedColumns: { left: ['name'], right: ['lastLogin'] },
            }}
          />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
