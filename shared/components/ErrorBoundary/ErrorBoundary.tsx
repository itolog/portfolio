import React, { PureComponent } from 'react';

import MainLayout from '../../Layouts/MainLayout';

interface State {
  hasError: boolean;
  errInfo: string;
}
interface Props {
  children: React.ReactChild | React.ReactChild[];
}

class ErrorBoundary extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errInfo: '' };
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true, errInfo: error.message };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    // console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <MainLayout title={this.state.errInfo}>
          <h1 className='errorBoundary'>{this.state.errInfo}</h1>
        </MainLayout>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
