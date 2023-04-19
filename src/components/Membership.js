import './Membership.css';
import Tier from './Tier.js';

function Membership({ isDarkMode }) {
  return (
    <div className="Membership">
      <Tier title="Quidditch Team Member" tierPrice={`$2.99`} isDarkMode={isDarkMode} />
      <Tier title="House Captain" tierPrice={`$9.99`} isDarkMode={isDarkMode} />
      <Tier title="House Prefect" tierPrice={`$99.99`} isDarkMode={isDarkMode} />
    </div>
  );
}

export default Membership;
