import './ErrorPage.scss';


function ErrorPage (){
    return (
        <div className="error-container">
            <h1 className="error-heading">Oops!</h1>
            <p className="error-message">We're sorry, but an error occurred.</p>
            <p className="error-description">Please check your url.</p>
        </div>
    );
}

export default ErrorPage;