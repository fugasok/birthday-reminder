import { useState } from "react";
import data from "./data";
import List from "./components/List";

const App = () => {
	const [people, setPeople] = useState(data);
	return (
		<main>
			<section className="container">
				<h3>{people.length} Birthdays today</h3>
				<List people={people} setPeople={setPeople} />
			</section>
		</main>
	);
};
export default App;
