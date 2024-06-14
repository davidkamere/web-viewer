
interface SearchBarProps {
    value: string;
    onChange: (value: string) => void
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            placeholder="Search books by title"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    )
}

export default SearchBar