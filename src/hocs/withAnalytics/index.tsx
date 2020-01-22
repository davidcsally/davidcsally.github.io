import React from 'react';

/** wrapper for amplitude event logging */
const logEvent = (name: string, properties: object) => {
  window.amplitude.getInstance().logEvent(name, properties);
};

function withAnalytics<T>(WrappedComponent: any, componentName: string) {
  return class extends React.Component<T> {
    componentDidMount() {
      window.addEventListener('mouseover', this.logMouseOver);
      window.addEventListener('click', this.logButtonClick);
    }

    componentWillUnmount() {
      window.removeEventListener('mouseover', this.logMouseOver);
      window.removeEventListener('click', this.logButtonClick);
    }
    
    logMouseOver = () => {
      logEvent('ButtonMouseover', { button: componentName });
    }

    logButtonClick = () => {
      logEvent('click', { button: componentName });
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withAnalytics;
