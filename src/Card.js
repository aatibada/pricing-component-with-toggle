const Card = (props) => {
  const { type, monthlyPrice, annualPrice, storage, users, sendingStorage } = props.plan;
  let userSetPricing = monthlyPrice;
  
  if (props.pricing === "monthly") {
    userSetPricing = monthlyPrice;
  } else {
    userSetPricing = annualPrice;
  }

  return (
    <section id={type} className="card">
      <h2>{type}</h2>
      <h3 className="price"><span>$</span>{userSetPricing}</h3>
      <span className="divider"></span>
      <div className="features">
        <p>{storage} Storage</p>
        <span className="divider"></span>
        <p>{users} Users Allowed</p>
        <span className="divider"></span>
        <p>Send up to {sendingStorage} GB</p>
        <span className="divider"></span>
      </div>
      <button>Learn More</button>
    </section>
  )
}

export default Card;