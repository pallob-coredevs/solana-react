import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import VerifiedIcon from "./assets/icons/verified.svg?react";

function App() {
  return (
    <>
      <Button variant="button-primary">Primary Button</Button>
      <div className="my-4" />
      <Button variant="button-secondary">Secondary Button</Button>
      <div className="my-4" />
      <Input label="Email" placeholder="info@coredevs.ltd" />
      <div className="my-4" />
      <Input label="Password" placeholder="********" type="password" />
      <div className="my-4" />
      <Card
        icon={<VerifiedIcon />}
        title="Win Rate (Percentage)"
        amount="30.63%"
      />
    </>
  );
}

export default App;
