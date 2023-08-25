import plans from './plans';
import Card from "./Card";

const Cards = ({ pricing }) => {
  return (
    <main>
      {plans.map(plan => {
        return <Card key={plan.type} pricing={pricing} plan={plan}  />
      })}
    </main>
  )
}
export default Cards;