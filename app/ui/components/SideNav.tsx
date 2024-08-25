'use client'

import React, { useState } from 'react';
import '@/app/sideNavBar.css';
import PriceRange from './miniCompos/PriceRange';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface RangeSliderProps {
  min: number;
  max: number;
  value: [number, number];
  onChange: (value: [number, number]) => void;
}

interface SideNavBarProps {
  manufacturers?: string[];
  genetics?: string[];
}


const SideNavBar: React.FC<SideNavBarProps> = ({
  manufacturers = ['ADREXpharma', 'Aurora', 'Avaay', 'Bedrocan', 'Cannamedical'],
  genetics = ['Indica', 'Sativa', 'Hybrid'],
}) => {
  const [selectedManufacturers, setSelectedManufacturers] = useState<string[]>([]);
  const [selectedGenetics, setSelectedGenetics] = useState<string>('');
  const [selectedIrradiation, setSelectedIrradiation] = useState<string>('');

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setSelectedManufacturers((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  const handleResetFilters = () => {
    setSelectedManufacturers([]);
    setSelectedGenetics('');
    setSelectedIrradiation('');
  };

  return (
    <div className="side-nav">
      <h3>Filter</h3>

      <div className="filter-section">
        <PriceRange label="Preis" min = "1"  max = "40" unit = "€"/>
      </div>

      <div className="filter-section">
        <h4>Hersteller</h4>
        <ul className="filter-options">
          {manufacturers.map((manufacturer) => (
            <li key={manufacturer}>
              <label>
                <input
                  type="checkbox"
                  value={manufacturer}
                  checked={selectedManufacturers.includes(manufacturer)}
                  onChange={handleCheckboxChange}
                />
                {manufacturer}
              </label>
            </li>
          ))}
        </ul>
        <button className="show-more">mehr anzeigen</button>
      </div>

      <div className="filter-section">
        <PriceRange label='THC Gehalt' min = "1"  max = "30" unit = "%"/>
      </div>

      <div className="filter-section">
        <PriceRange label='CBD Gehalt' min = "1"  max = "15" unit = "%"/>
      </div>

      <div className="filter-section">
        <h4>Genetik</h4>
        <div className="button-group">
          {genetics.map((genetic) => (
            <div
              key={genetic}
              className={`button ${selectedGenetics === genetic ? 'active' : ''}`}
              onClick={() => setSelectedGenetics(genetic)}
            >
              {genetic}
            </div>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h4>Bestrahlung</h4>
        <div className="button-group">
          <div
            className={`button ${selectedIrradiation === 'bestrahlt' ? 'active' : ''}`}
            onClick={() => setSelectedIrradiation('bestrahlt')}
          >
            bestrahlt
          </div>
          <div
            className={`button ${selectedIrradiation === 'nicht bestrahlt' ? 'active' : ''}`}
            onClick={() => setSelectedIrradiation('nicht bestrahlt')}
          >
            nicht bestrahlt
          </div>
        </div>
      </div>

      <div className="filter-section">
        <div className='dropSection'>
          <h4>Terpene</h4>
          <span><FontAwesomeIcon icon={faCaretDown} /></span>
        </div>
      </div>

      <span className="reset-filters" onClick={handleResetFilters}>
        x alle Filter zurücksetzen
      </span>
    </div>
  );
};

export default SideNavBar;
