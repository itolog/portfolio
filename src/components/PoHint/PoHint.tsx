import { useLocation, useRoute } from "wouter";

import styles from "./poHint.module.scss";

const PoHint = () => {
	const [, params] = useRoute("/item/:id");
	const [, setLocation] = useLocation();

	return (
		<div className={styles.root}>
			<button onClick={() => setLocation("/")}>
				{params ? "< back" : "double click to enter portal"}
			</button>
		</div>
	);
};

export default PoHint;
