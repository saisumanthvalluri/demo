import "./index.css";

const MultiLevelDropdown = ({ menuItems }) => {
	return (
		<select
			native
			defaultValue=""
			id="grouped-native-select"
			label="Grouping"
			className="grouped-select"
		>
			<option value="all" id="all">
				All
			</option>
			{menuItems.map((menuItem, index) => (
				<optgroup key={index} label={menuItem.label} id={index}>
					{menuItem.subItems.map((item, ind) => (
						<option key={`${index}-${ind}`} value={ind}>
							{item.label}
						</option>
					))}
				</optgroup>
			))}
		</select>
	);
};

export default MultiLevelDropdown;
