import { css } from '@emotion/react'

export const global = {
  btn: css`
    min-width: 0.5rem;
    border-radius: 2px;
    cursor: pointer;
    &:hover {
      background-color: #e3e3e3
    }
    &:focus {
      outline-color: transparent;
      outline-style: solid;
      box-shadow: 0 0 0 2px gray;
    }
    &:active {
      background-color: #e3e3e3
    }
  `,
  backCleanBtn: css`min-width: 0.5rem;background-color: transparent;color: black;border-radius: 2px; &:hover {background-color: gray;color: #fff;}`,
  bolderBtn: css`min-width: 0.5rem;background-color: transparent;color: black;border:1px solid grey;border-radius: 2px; &:hover {background-color: gray;color: #fff;}`,

}