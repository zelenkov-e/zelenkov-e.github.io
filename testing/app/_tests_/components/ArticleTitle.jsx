import React from 'react';

const ArticleTitle = ({ title, url, timestamp }) => (
  <div>
    <h1>{title} [{timestamp}]</h1>
    <h4><a href={url}>{url}</a></h4>
  </div>
);

 