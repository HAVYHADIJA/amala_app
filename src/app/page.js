import Heading from "../components/Heading";
import Content from "../components/Content";
import Footer from "../components/Footer";
import Button from '@mui/material/Button';


export default function Home() {

  let Lunch_items = ["Beef stew", "Steak", "Chicken Curry", "Grilled chicken"]
  let breakfast_items = ["coffee","latte","tea"]
  let name = "Nakalyowa Havy"


  return (
    <div>
      <Heading />
      <Content tittle="Breakfast" items={breakfast_items} />
      <Content tittle="Lunch/dinner"items={Lunch_items} />
      <Footer name ={name}/>
      <Button variant="contained">ORDER</Button>
    </div>
  )
}

