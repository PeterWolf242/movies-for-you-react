import "./Header.css";

interface HeaderProps {
	onSort: (criteria: string) => void;
}

export default function Header({ onSort }: HeaderProps) {
	return (
		<header>
			<button type="button" onClick={() => onSort("asc")}>
				Sort by Date Ascending
			</button>
			<button type="button" onClick={() => onSort("desc")}>
				Sort by Date Descending
			</button>
			<button type="button" onClick={() => onSort("rate")}>
				Best Rate
			</button>
			<button type="button" onClick={() => onSort("a-z")}>
				A - Z
			</button>
			<button type="button" onClick={() => onSort("z-a")}>
				Z - A
			</button>
		</header>
	);
}
