import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import {Box, Grid} from '@mui/material';
import {useToast} from '../hooks/useToast.ts';
import useModal from '../hooks/useModal.ts';
import SampleDialog2 from '../components/dialogs/SampleDialog2.tsx';
import SampleDialog from '../components/dialogs/SampleDialog1.tsx';
import Pagination from '../components/Pagination.tsx';
import {global} from '../styles/global.ts';
import InputComp from '../components/Input.tsx';
import MyGrid from '../components/Grid.tsx';
import {useNavigate} from 'react-router-dom';
import {useRecoilState} from 'recoil';
import {overlayLoadingState} from '../states/atoms.ts';

const Home = () => {
  const navigate = useNavigate();
  const addToast = useToast();

  // Pagenation에 필요한 useState
  const [page, setPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(7)

  // OverlayLoading 을 사용하기 위한 recoilState 변수. true로 바꿔주면 표시된다
  const [overlayLoading, setOverlayLoading] = useRecoilState<boolean>(overlayLoadingState);

  const showToast = () => addToast('이것은 토스트 메시지 입니다!')

  const goTest = () => navigate('/test')

  const showOverlayLoading = () => {
    setOverlayLoading(true);
    setTimeout(() => {
      setOverlayLoading(false);
    }, 2000)
  }

  const dialog2 = useModal(() => {
    return (
      <SampleDialog2 isOpen closeModal={dialog2.closeModal} />
    );
  });
  const dialog1 = useModal(() => {
    return (
      <SampleDialog isOpen closeModal={dialog1.closeModal} openModal={dialog2.openModal} />
    );
  });

  return (
    <Box>
      <Grid container p={7} direction="column">
        <Grid container pt={3} direction="column">
          <Pagination totalPage={totalPage} limit={5} page={page} setPage={setPage} />
        </Grid>

        <Grid container pt={3} direction="row" alignItems="center" gap={2}>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={goTest}>Test 페이지</button>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={showToast}>Toast</button>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={() => dialog1.openModal()}>Modal</button>
          <button type="button" css={css`${global.btn};width: 8rem;height: 2.5rem;`} onClick={showOverlayLoading}>Overlay Loading</button>
        </Grid>

        <Grid container pt={3} direction="column">
          <InputComp />
        </Grid>

        <Grid container direction="column">
          <MyGrid container direction="row" customCSS={css`background-color: #7cc3ed;`}>
            <MyGrid cols={'auto'}>auto</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={11}>11</MyGrid>
            <MyGrid cols={12}>12</MyGrid>
          </MyGrid>
          <MyGrid container direction="row" justifyContent="end" customCSS={css`background-color: #7cc3ed;`}>
            <MyGrid cols={1}>1</MyGrid>
            <MyGrid cols={1}>1</MyGrid>
          </MyGrid>
          <MyGrid cols={'auto'} customCSS={css`background-color: #7cc3ed;`}>abc</MyGrid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Home
