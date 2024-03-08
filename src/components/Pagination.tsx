/*
Pagination 컴포넌트
props로 totalPage, limit, page, setPage를 받는다
totalPage는 전체 페이지 수, limit는 한번에 보여질 페이지 버튼 개수,
page는 현재 페이지, setPage는 페이지를 바꾸는 함수이다.
 */

import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import { Grid } from '@mui/material'
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { global } from '../styles/global.ts'

const navBtn = (props: { active: boolean }) => css`
  width: 3rem;
  font-size: 1rem;
  border: 1px solid grey;
  border-radius: 2px;
  min-width: 0.5rem;
  background-color: ${props.active ? 'black' : '#fff'};
  color: ${props.active ? '#fff' : 'black'};
  &:hover {
    background-color: grey;
    color: white;
  }
`

// limit를 같이 수정해야함, 값이 같아야함
const pageBtnCount: number = 5; // 페이지버튼 보여질 개수(1에서 10까지)


const Pagination = ({ totalPage, limit, page, setPage }: {
  totalPage: number, limit: number, page: number, setPage: React.Dispatch<React.SetStateAction<number>>
}) => {
  // 총 페이지 갯수에 따라 Pagination 갯수 정하기, limit 단위로 페이지 리스트 넘기기
  const [currentPageArray, setCurrentPageArray] = useState<number[]>([]);
  const [totalPageArray, setTotalPageArray] = useState<number[][]>([]);

  useEffect(() => {
    if (page % limit >= 1) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArray(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedPageArray: number[][] = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedPageArray);
    setCurrentPageArray(slicedPageArray[0] ?? []);
  }, [totalPage]);

  const sliceArrayByLimit = (totalPage: number, limit: number) => {
    const totalPageArray: number[] = Array(totalPage)
      .fill(undefined)
      .map((_, i) => i);
    return Array(Math.ceil(totalPage / limit))
      .fill(undefined)
      .map(() => totalPageArray.splice(0, limit));
  };

  const leftArray = (): void => {
    for(let i: number =0; i<totalPageArray.length; i++) {
      if(totalPageArray[i].includes(page-1)) {
        setPage(totalPageArray[i-1][0] + 1);
        break;
      }
    }
  }
  const rightArray = (): void => {
    for(let i: number =0; i<totalPageArray.length; i++) {
      if(totalPageArray[i].includes(page-1)) {
        setPage(totalPageArray[i+1][0] + 1);
        break;
      }
    }
  }

  const checkAvailable = (): boolean => {
    const value: number = page - 1;
    const firstArray: number[] = Array.from({ length: pageBtnCount }, (_, index) => index);
    const check: boolean = firstArray.includes(value)
    return check;
  }
  const checkRightAvailable = (): boolean => {
    const value: number = totalPage - 1;
    const check: boolean = currentPageArray.includes(value)
    if(currentPageArray.length === 0) return true;
    return check;
  }

  return (
    <Grid container direction="row" justifyContent="start" gap={1}>
      <Button variant="contained" css={css`width:3rem;${global.bolderBtn};`}
              onClick={() => setPage(1)} disabled={page === 1}>
        <KeyboardDoubleArrowLeftIcon />
      </Button>
      <Button variant="contained" css={css`width:3rem;${global.bolderBtn};`}
              onClick={leftArray} disabled={checkAvailable()}>
        <KeyboardArrowLeftIcon />
      </Button>
      {currentPageArray?.map((i) => (
        <Button key={i + 1} variant="contained" css={navBtn({active: i === page -1})}
                onClick={() => setPage(i + 1)}>
          {i + 1}
        </Button>
      ))}
      <Button variant="contained" css={css`width:3rem;${global.bolderBtn};`}
              onClick={rightArray}
              disabled={checkRightAvailable()}>
        <KeyboardArrowRightIcon />
      </Button>
      <Button variant="contained" css={css`width:3rem;${global.bolderBtn};`}
              onClick={() => setPage(totalPage)}
              disabled={page === totalPage}>
        <KeyboardDoubleArrowRightIcon />
      </Button>
    </Grid>
  )
}

export default Pagination