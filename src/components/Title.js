import React from 'react';

const Title = (props) => {
  const { wordFirst, wordSecond } = props;
  return (
    <div className="section-title">
      <h2>
        {wordFirst} <span>{wordSecond}</span>
      </h2>
    </div>
  );
};
export default Title;
