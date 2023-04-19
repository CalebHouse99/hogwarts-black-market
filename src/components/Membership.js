import './Membership.css'
import Tier from './Tier.js'

function Membership() {
  return (
    <div className="Membership">
      <Tier title="Quidditch Team Member" tierPrice={`$2.99`} />
      <Tier title="House Captain" tierPrice={`$9.99`} />
      <Tier title="House Prefect" tierPrice={`$99.99`} />
    </div>
  );
}

export default Membership;