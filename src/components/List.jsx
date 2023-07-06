import Person from "./Person";

const List = ({ people, setPeople }) => {
	return (
		<ul>
			{people.map((person) => {
				return <Person key={person.id} {...person} itemClass="person" />;
			})}
			<button
				type="button"
				className="btn btn-block"
				onClick={() => setPeople([])}
			>
				Clear all
			</button>
		</ul>
	);
};
export default List;
