import Heading from "../components/Heading";
import Content from "../components/Content";


export default function Home() {

  let Lunch_items = ["Beef stew", "Steak", "Chicken Curry", "Grilled chicken"]
  let breakfast_items = ["coffee","latte","tea"]


  return (
    <div>
      <Heading />
      <Content tittle="Breakfast" items={breakfast_items} />
      <Content tittle="Lunch/dinner"items={Lunch_items} />
      <h2>MEET OUR CHEF HAVY</h2>
    </div>
  )
}

