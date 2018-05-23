import React from 'react';
import PropTypes from 'prop-types';

export default function Ranking({ categoryId }) {
  return (
    <div>
      <h2>Rankingコンポーネント</h2>
      <p>カテゴリーID: {categoryId}</p>
    </div>
  )
}

Ranking.PropTypes = {
  categoryId: PropTypes.string
};
Ranking.defaultProps = {
  // categoryId=1は総合ランキング
  categoryId: '1'
};
