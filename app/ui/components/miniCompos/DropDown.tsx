import { useState } from 'react';
import '@/app/SortByDropdown.css';

interface SortByDropdownProps {
  options: string[];
  onSortChange : (selectedOption: string) => void;
  name : string
}

const SortByDropdown: React.FC<SortByDropdownProps> = ({ options, onSortChange, name }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    onSortChange(option);
    setIsOpen(false);
  };

  return (
    <div className="sort-by-dropdown">
      <button className="sort-by-button" onClick={() => setIsOpen(!isOpen)}>
        {name} ▼
      </button>
      {isOpen && (
        <ul className="sort-by-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortByDropdown;
