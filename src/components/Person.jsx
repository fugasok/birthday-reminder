const Person = ({ itemClass, image, name, age }) => {
	return (
		<li className={itemClass}>
			<img src={image} alt={name} style={{ objectFit: "cover" }} />
			<div>
				<h4>{name}</h4>
				<p>{age}</p>
			</div>
		</li>
	);
};
export default Person;
