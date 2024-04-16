export default function TabButton({ isSelected, onClick, children}) {
    return (
        <li>
            <button
                className={isSelected ? 'active' : ''}
                onClick={onClick}
            >
                {children}
            </button>
        </li>
    );
}