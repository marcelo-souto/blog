const calculateTime = (date) => {
	const creationDay = new Date(date).getTime();
	const today = new Date().getTime();
	const milliseconds = today - creationDay;

	const days = Math.floor(milliseconds / 86400000);
	const hours = Math.floor((milliseconds / 3600000) % 24);
	const minutes = Math.floor((milliseconds / 60000) % 60);
	const seconds = Math.floor((milliseconds / 1000) % 60);

	if (days > 0) {
		return `Há ${days} dia${days > 1 ? 's' : ''}`;
	} else if (hours > 0) {
		return `Há ${hours} hora${hours > 1 ? 's' : ''}`;
	} else if (minutes > 0) {
		return `Há ${minutes} minuto${minutes ? 's' : ''}`;
	} else if (seconds > 0) {
		return `Há ${seconds} segundo${seconds ? 's' : ''}`;
	}
};

export default calculateTime;
