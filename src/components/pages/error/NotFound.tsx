import React from 'react';
import { useRouteError } from 'react-router-dom';

type RouterError = {
  status: number;
  statusText: string;
  internal: boolean;
  data: string;
  error: object;
};

export default function ErrorPage() {
  const error: RouterError = useRouteError() as RouterError;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.status + ' - ' + error.statusText}</i>
        <br />
        <i>{error.data}</i>
      </p>
    </div>
  );
}
