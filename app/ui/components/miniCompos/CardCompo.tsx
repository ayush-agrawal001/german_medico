'use client'

import '@/app/cardCompo.css';
import Image from 'next/image';

interface CardComponentProps {
    onClick: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({ onClick }) => {
     return (
    <div className="card">
      <div className="availability">
        <span className="not-available">• nicht lieferbar</span>
      </div>
      <div className="product-image">
        <Image src="/image.png" width={300} height={150} alt='bottle'/>
      </div>
      <div className="product-details">
        <div className="brand-label">Canify</div>
        <div className="info">
          <span className="thc">THC 18%</span>
          <span className="cbd">CBD &lt;1%</span>
          <span className="icon"><Image src="/logo.svg" width={20} height={20} alt='logo' /></span>
        </div>
        <h2 className="product-name">Cannabis Flos 18/1 PT Mango</h2>
        <div className="product-attributes">
          <div className="attribute">
            <span>Kultivar</span><span>Mango</span>
          </div>
          <div className="attribute">
            <span>Genetik</span><span>Hybrid</span>
          </div>
        </div>
        <div className="price-container">
          <span className="price">€ 11,66<sup>1</sup></span>
          <button className="add-to-cart" onClick={onClick}>in den Warenkorb</button>
        </div>
        <div className="price-note">pro Gramm</div>
      </div>
    </div>
  );
};

export default CardComponent;
