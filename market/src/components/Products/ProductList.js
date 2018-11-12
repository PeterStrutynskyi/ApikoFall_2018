import React from "react";
import styled from 'styled-components';


const ProductList= ({ items, renderListItem }) => {

  return(
    <L>
      { items.map((item) =>
        <div key={item.id}>
          {renderListItem(item)}
        </div>
      ) }
    </L>
  );
};

export default ProductList;

const L = styled.div`
  padding-top: 40px;
  max-width: 930px;
  margin: 0 auto;
  
  > div {
    border-right: 1px solid #eaeaea;
    display: inline-block;  
    margin-bottom: 40px;
    position: relative; 
  
    &:after {
      content: '';
      height: 2px;
      width: calc(100% + 2px);
      position: absolute;
      bottom: -20px;
      left: -1px;
      right: -1px;
      background: #eaeaea;
    }
    
    &:nth-child(5n) {
      border-right: none;
    }
  }
`;
