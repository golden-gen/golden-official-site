import { useState } from "react";
import { useRouter } from "next/navigation";
import { PaystackConsumer } from "react-paystack";

interface PaystackCheckoutProps {
  setOpenModal: (val: boolean) => void;
}
// eslint-disable-next-line react/prop-types
export const PaystackCheckout: React.FC<PaystackCheckoutProps> = ({
  setOpenModal,
}) => {
  const { push } = useRouter();
  const [paymentEmail, setPaymentEmail] = useState("");
  const [amount, setAmount] = useState<number>(1000);

  const config = {
    reference: new Date().getTime().toString(),
    email: paymentEmail,
    amount: amount && amount * 100,
    publicKey: "pk_test_c865641c02971ec5d05a61916f33a4b861f80da5",
  };
  const handlePaystackSuccessAction = (reference: any) => {
    if (reference.status === "success") {
      setOpenModal(false);
      push("/success");
    }
  };

  const handlePaystackCloseAction = () => {
    setOpenModal(false);
  };

  const componentProps = {
    ...config,
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };
  const prices = [1000, 2000, 3000, 4000, 5000, 10000, 20000, 50000];

  const donationTiers: { [key: number]: string } = {
    1000: "Bronze",
    2000: "Silver",
    3000: "Gold",
    4000: "Platinum",
    5000: "Diamond",
    10000: "Emerald",
    20000: "Ruby",
    50000: "Sapphire",
  };

  return (
    <div className="relative my-auto p-8 bg-white rounded-lg h-fit w-[90%] max-w-md">
      <button
        onClick={() => setOpenModal(false)}
        className="absolute top-4 right-4 text-2xl hover:scale-90 transition duration-200"
        aria-label="Close Modal"
      >
        ❌
      </button>
      <h1 className="mb-4 mt-4 text-xl">Enter your details to proceed</h1>
      <div className="mb-0 flex flex-col">
        <label htmlFor="name" className="mb-2 text-lg text-[#808097]">
          Email Address
        </label>
        <input
          className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
          id="paymentEmail"
          name="paymentEmail"
          value={paymentEmail}
          type="paymentEmail"
          onChange={(e) => setPaymentEmail(e.target.value)}
          placeholder="Enter a valid email address"
          required
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="price" className="my-2 text-lg text-[#808097]">
          Amount to donate - category
        </label>
        <select
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
          name="price"
          id="price"
          className="w-full rounded border border-[#012F1C] py-1 px-3 outline-none"
        >
          {prices?.map((s, idx) => (
            <option key={idx} value={s}>
              {" "}
              <span className="text">
                ₦{s.toLocaleString()} - {donationTiers[s]} sponsor
              </span>
            </option>
          ))}
        </select>
      </div>
      {
        //@ts-expect-error
        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (
            <button
              onClick={(e) => {
                e.preventDefault();
                initializePayment(
                  handlePaystackSuccessAction,
                  handlePaystackCloseAction
                );
              }}
              className="w-full rounded-lg bg-primary py-2 text-white transition duration-200 hover:scale-95 active:scale-100"
            >
              Donate Now
            </button>
          )}
        </PaystackConsumer>
      }
    </div>
  );
};
