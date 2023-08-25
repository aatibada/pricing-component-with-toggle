import plans from './plans';
import Card from "./Card";

const Cards = () => {
  return (
    <main>
      {plans.map(plan => {
        return <Card key={plan.type} plan={plan}  />
      })}
    </main>
  )
}
export default Cards;