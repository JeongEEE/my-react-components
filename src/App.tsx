import React, { useState, useEffect } from 'react'
import './App.css'
import './styles/reset.css'
import {Grid} from '@mui/material';
import Pagination from './components/Pagination.tsx';

function App() {
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(7)

  return (
    <>
      <Grid container p={4} direction="column">
        <Grid container pt={3} direction="column">
          <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
        </Grid>

      </Grid>
    </>
  )
}

export default App
