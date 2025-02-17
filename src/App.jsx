import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Card from "./components/Card";
import VerifiedIcon from "./assets/icons/verified.svg?react";
import FileIcon from "./assets/icons/file.svg?react";
import OTPBox from "./components/OTPBox.jsx";

function App() {
  const handleOtpChange = (otp) => {
    console.log("OTP Entered:", otp);
  };

  return (
    <>
      <Button name="Primary Button" variant="button-primary" />
      <div className="my-4" />
      <Button
        name="Import Bulk Wallet CSV"
        variant="button-secondary"
        Icon={FileIcon}
        className="rounded-full"
      />
      <div className="my-4" />
      <Input label="Email" placeholder="info@coredevs.ltd" />
      <div className="my-4" />
      <Input label="Password" placeholder="********" type="password" />
      <div className="my-4" />
      <Card Icon={VerifiedIcon} title="Win Rate (Percentage)" amount="30.63%" />
      <div className="my-4" />
      <OTPBox onChange={handleOtpChange} />
    </>
  );
}

export default App;
