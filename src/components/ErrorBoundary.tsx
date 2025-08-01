import React from "react";
import type {ErrorInfo} from 'react';

interface State{
  hasError: boolean;
  errorInfo:ErrorInfo | null;
}

interface Props{
  children:React.ReactNode;
}

class ErrorBoundary extends React.Component<Props, State>{
  constructor(props:Props){
    super(props);
    this.state = {hasError:false, errorInfo:null};
  }
  
  static getDerivedStateFromError(error:Error):State{
    // Update state so the next render will show the fallback UI.
    return{
      hasError:true,
      errorInfo: null
    }
  }

  componentDidCatch(error:Error, info:ErrorInfo){
    this.setState({
      errorInfo:info,
    });
  }

  render(){
    if(this.state.hasError){
      // render any fallback UI
      return(
        <div>
          <h1>Something went wrong.</h1>
          <details style={{whiteSpace: 'pre-wrap'}}>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children; // render children when no error

  }
}

export default ErrorBoundary;