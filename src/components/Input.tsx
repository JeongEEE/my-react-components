import React, { useState, useEffect } from 'react'
import { css } from '@emotion/react'
import {Grid} from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SearchIcon from '@mui/icons-material/Search';

// css style은 App.css에

const InputComp = () => {
  return (
    <Grid container direction="row" alignItems="start" gap={1}>
      <Grid item xs={2}>
        <div className="input-group">
          <label htmlFor="userName">사용자 이름:</label>
          <input type="text" id="userName" name="userName" placeholder="이름을 입력하세요"/>
        </div>
      </Grid>
      <Grid item xs={2}>
        <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요"/>
      </Grid>
      <Grid item xs={2}>
        <input type="email" id="email" name="email" placeholder="이메일을 입력하세요"/>
      </Grid>
      <Grid item xs={2}>
        <div className="input-icon">
          <PersonSearchIcon className="front_icon" />
          <input type="text" placeholder="사용자 이름"/>
          <SearchIcon className="end_icon" />
        </div>
      </Grid>
    </Grid>
  );
}

export default InputComp
