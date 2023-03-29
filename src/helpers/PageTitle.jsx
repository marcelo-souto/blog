import React from 'react';

const PageTitle = (props) => {
	React.useEffect(() => {
		document.title = props.title;
	}, [props]);

	return <></>;
};

export default PageTitle;
