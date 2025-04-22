import React from 'react';

const SVGLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        style={{
          color: '#ffdb58',
          animation: 'spin 2s linear infinite', // Apply the CSS animation
        }}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 1 1-6.219-8.56"
        />
      </svg>
    </div>
  );
};

const styles = `
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

export default () => (
  <>
    <style>{styles}</style>
    <SVGLoader />
  </>
);
