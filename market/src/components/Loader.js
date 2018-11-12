import React from 'react';
import Loader from 'react-loader-spinner'
import styled from 'styled-components';

const LoaderWrapper = styled.div`
    height: calc(100vh - 265px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MyLoader = () => (
<LoaderWrapper>
  <Loader
    type="Triangle"
    color="#00BFFF"
    height="100px"
    width="100px"
  />
</LoaderWrapper>
);

export default MyLoader;
