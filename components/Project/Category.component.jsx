import React from 'react';
import { category } from '../../data/projects';
import { Category, CategoryContainer } from './Project.style';

const CategoryComponent = ({ current, changeProjectCategory }) => {
  return (
    <CategoryContainer current={current}>
      {Object.keys(category).map((cate) => (
        <Category
          key={cate}
          current={current === cate}
          onClick={() => changeProjectCategory(cate)}
        >
          {cate}
        </Category>
      ))}
    </CategoryContainer>
  );
};

export default CategoryComponent;
