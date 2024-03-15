import { css } from '@emotion/react'
import OverlayLoading from '../OverlayLoading.tsx';

const root = css`
	max-width: 1300px;
	min-width: 1300px;
	margin-left: auto;
	margin-right: auto;
	min-height: 100vh;
`
const mainStyle = css`
  //padding-top: 70px;
  //height: calc(100vh - 70px);
  height: 100vh;
  min-height: 700px;
`

const Layout = ({ children }) => {
  return (
    <>
      <div css={root}>
        <main css={mainStyle}>{children}</main>
        <OverlayLoading />
      </div>
    </>
  )
}

export default Layout
