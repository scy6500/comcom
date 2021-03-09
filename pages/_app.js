import React from 'react';
import Head from 'next/head';
import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const comcom = ({ Component }) => (
  <>
    <Head>
      <title>커먼컴퓨터 온라인 과제</title>
    </Head>
    <Component />
  </>
);

export default wrapper.withRedux(withReduxSaga(comcom));