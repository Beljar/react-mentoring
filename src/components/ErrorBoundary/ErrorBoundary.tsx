import * as React from 'react';

import scss from './errorBoundary.scss';

export class ErrorBoundary extends React.Component {
  state: {
    hasError: boolean;
  };

  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={scss.error}>
          <div className={scss.exclamation}>!</div>
          <b>Something went wrong</b>
        </div>
      );
    }
    return this.props.children;
  }
}
