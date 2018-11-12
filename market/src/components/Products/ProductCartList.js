import React from "react";
import styled from 'styled-components';


const ProductCartList= ({ items, renderListItem }) => {

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

export default ProductCartList;

const L = styled.div`
  margin-top: 40px;
  
  > div:not(:last-child) {
    border-bottom: 1px solid #eaeaea;
  }
`;
