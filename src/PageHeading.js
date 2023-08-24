const PageHeading = () => {
  const handleClick = () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    toggleBtn.classList.toggle("annually");
  }

  return (
    <header>
      <h1>Our Pricing</h1>
      <div className="switch-container" >
        <h6>Annually</h6>
        <div className="toggle-btn" onClick={handleClick}>
          <span className="slider"></span>
        </div>
        <h6>Monthly</h6>
      </div>
    </header>
  );
}

export default PageHeading;