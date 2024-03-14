import React, { useState, useEffect } from 'react'
import {css, SerializedStyles} from '@emotion/react'

interface GridProps {
  children?: React.ReactNode;
  customCSS?: SerializedStyles;
  container?: boolean;
  m?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  p?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  direction?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: number;
  cols?: number | string;
}

const MyGrid: React.FC<GridProps> = ({children, customCSS, container,
                                     m=0, ml=m, mr=m,
                                     mt=m, mb=m, p=0 ,pl=p, pr=p,
                                     pt=p, pb=p, direction='column', alignItems='top',
                                     justifyContent='start', gap=0, cols='auto' }) => {
  const style = {
    margin: `${m * 2}px`,
    marginLeft: `${ml * 2}px`,
    marginRight: `${mr * 2}px`,
    marginTop: `${mt * 2}px`,
    marginBottom: `${mb * 2}px`,
    padding: `${p * 2}px`,
    paddingLeft: `${pl * 2}px`,
    paddingRight: `${pr * 2}px`,
    paddingTop: `${pt * 2}px`,
    paddingBottom: `${pb * 2}px`,
    flexDirection: `${direction}`,
    alignItems: `${alignItems}`,
    justifyContent: `${justifyContent}`,
    gap: `${gap * 2}px`,
  }
  const con = container ? 'container' : ''
  return (
    <div style={style} css={css`${customCSS}`} className={`col-${cols} ${con}`}>{children}</div>
  );
}

export default MyGrid
