import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <section className="flex items-center">
            <div className="container flex m-auto my-2 py-5">
                <div className="text-center">
                    <h2 className="mb-8">
                        <span className="">Error</span> {status || 404}
                    </h2>
                    <p className="mb-8">{error?.message}</p>
                    <Link
                        to="/"
                        className="btn btn-sm btn-outline-secondary px-8 py-3 rounded"
                    >
                        <b>Back to homepage</b>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default ErrorPage
