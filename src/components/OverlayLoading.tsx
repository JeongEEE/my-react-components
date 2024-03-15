/*
로딩 프로그레스 컴포넌트
 */

import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import LoadingOverlay from 'react-loading-overlay-ts';
import {useRecoilState} from "recoil";
import {overlayLoadingState} from '../states/atoms.ts';

const darkBackground = (props: { isActive: boolean }) => css`
  display: ${props.isActive ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1302; /* Sit on top */
  top: 0;
  left: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

const OverlayLoading = () => {
  const [isActive, setActive] = useState<boolean>(true)
  const [loading, setLoading] = useRecoilState<boolean>(overlayLoadingState);

  useEffect(() => {
    setActive(loading);
  }, [loading]);

  return (
    <div css={darkBackground({isActive})}>
      <LoadingOverlay active={true} spinner
                      css={css`position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);`}
                      styles={{
                        spinner: (base) => ({
                          ...base,
                          width: '100px'
                        })
                      }}
      ></LoadingOverlay>
    </div>
  )
}

export default OverlayLoading