import '@/app/Footer.css';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <ul>
            <li><a >AGB</a></li>
            <li><a >Impressum</a></li>
            <li><a >Datenschutz</a></li>
          </ul>
        </div>
        <div className="footer-middle">
            <div>
                <Image src="/image01.png" width={10} height={10} alt='leaf' /><a>Rezept einlösen</a>
            </div>
            <div>
                <Image src="/image01.png" width={10} height={10} alt='leaf' /><a>Live Bestand</a>
            </div>
            <div>
                <Image src="/image01.png" width={10} height={10} alt='leaf' /><a>Videosprechstunde</a>
            </div>
            <div>
                <Image src="/image01.png" width={10} height={10} alt='leaf' /><a>FAQs</a>
            </div>
            <div>
                <Image src="/image01.png" width={10} height={10} alt='leaf' /><a>Kontakt</a>
            </div>
            
          
        </div>
        <div className="footer-right">
          <p>
            <strong>Standort</strong><br />
            Bergstraße 49 - 57<br />
            69469 Weinheim<br />
            (3 Glocken Quartier)
          </p>
          <p>
            <strong>Telefon</strong><br />
            0223 545 5250
          </p>
          <p>
            <strong>Öffnungszeiten</strong><br />
            Mo-Fr: 09:00 - 18:00 Uhr<br />
            Sa: 09:00 - 14:00 Uhr
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;