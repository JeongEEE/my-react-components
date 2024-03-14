import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import './App.css'
import './styles/reset.css'
import {Box, Grid} from '@mui/material';
import Pagination from './components/Pagination.tsx';
import { global } from './styles/global.ts'
import InputComp from './components/Input.tsx';
import {useToast} from './components/Toast.tsx';
import {useModal} from './hooks/useModal.ts';
import Modal from './components/Modal.tsx';
import MyGrid from './components/Grid.tsx'

function App() {
  const { showMessage } = useToast();
  const { showModal } = useModal();

  // Pagenation에 필요한 useState
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(7)

  const showToast = () => showMessage('이것은 토스트 메시지 입니다!')
  const showDialog = () => {
    showModal({
      title: '모달1',
      message: '이것은 모달1 메시지입니다.',
      okHandler: () => showMessage('확인을 눌렀습니다!'),
      cancel: true
    })
  }

  return (
    <Box>
      <Grid container p={7} direction="column">
        <Grid container pt={3} direction="column">
          <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
        </Grid>

        <Grid container pt={3} direction="row" alignItems="center" gap={1}>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`}>버튼</button>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={showToast}>Toast</button>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={showDialog}>Modal</button>
        </Grid>

        <Grid container pt={3} direction="column">
          <InputComp />
        </Grid>

        <Grid container pt={3} direction="column">
          <MyGrid container direction="row" customCSS={css`background-color: blue;color: white;`}>
            <MyGrid cols={'auto'}>auto</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={11}>11</MyGrid>
            <MyGrid cols={12}>12</MyGrid>
          </MyGrid>
          <MyGrid container direction="row" justifyContent="end">
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
          </MyGrid>
          <MyGrid cols={'auto'}>abc</MyGrid>
        </Grid>
        <Modal />
      </Grid>
    </Box>
  )
}

export default App
