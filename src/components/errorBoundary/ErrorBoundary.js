import {Component} from "react";
import errorMessage from "../errorMessage/ErrorMessage";
import ErrorMessage from "../errorMessage/ErrorMessage";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <h2>Something went wrong</h2>
            // return <ErrorMessage/>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;