import React from 'react';
import ReactDOM from 'react-dom';

import App from "./app.js";

class Cq extends React.Component {
	render() {
		return (
            <>
			<App/>
            </>
		)
	}
}

ReactDOM.render(
	<Cq />,
	document.getElementById('root')
);
