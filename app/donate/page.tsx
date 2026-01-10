"use client";
import { useState } from "react";
import { PaystackCheckout } from "@/src/features/donate/paystack-checkout";
import Link from "next/link";

export default function Donate() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <h1 className="bg-[#FBFBFB] text-2xl font-semibold mt-36 py-6 text-center px-8 w-[90%] mx-auto">
        Make a donation
      </h1>
      <div className="flex">
        <div className="w-[90%] max-w-[819px] mx-auto py-10 mt-5 mb-10 px-5 md:px-[60px] bg-light border border-[rgba(11,40,81,0.20)]">
          <div className="mb-10 font-medium text-xl text-center">
            Donate today and stand a chance to be recognized among our esteemed
            sponsors.{" "}
            <Link
              href="/team#sponsors"
              className="hover:text-primary inline-flex"
            >
              View the list of our previous donors. &raquo;
            </Link>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-[30px] md:mb-0">
              <div className="font-semibold text-xl mb-[11px] text-primary uppercase">
                ACCOUNT DETAILS:
              </div>
              <div className="text-sm mb-2">
                <span className="font-semibold">Account Name:</span> GOLDEN
                GENERATION OYO
              </div>
              <div className="text-sm mb-2">
                <span className="font-semibold">Account Number:</span> 2178254317 
              </div>
              <div className="text-sm">
                <span className="font-semibold">Bank:</span> UBA (United Bank for Africa)
              </div>
            </div>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <button
                onClick={() => setOpenModal(true)}
                className="bg-primary text-white text-[15px] w-fit rounded-lg px-3 py-2 font-medium flex items-center shrink-0 transition duration-200 active:scale-100 hover:scale-90"
              >
                Donate Via Paystack
                <svg
                  className="ml-[10px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={17}
                  height={18}
                  viewBox="0 0 17 18"
                  fill="none"
                >
                  <path
                    d="M8.82088 15.5167C8.71458 15.4105 8.63026 15.2843 8.57273 15.1455C8.51519 15.0067 8.48558 14.8579 8.48558 14.7076C8.48557 14.5573 8.51518 14.4085 8.57271 14.2696C8.63023 14.1308 8.71455 14.0047 8.82084 13.8984L12.5895 10.1297L1.61871 10.1297C1.31517 10.1297 1.02406 10.0091 0.809423 9.79451C0.594788 9.57988 0.47421 9.28877 0.47421 8.98523C0.47421 8.68169 0.594788 8.39058 0.809423 8.17595C1.02406 7.96132 1.31517 7.84074 1.6187 7.84074L12.5896 7.84078L8.82083 4.07203C8.60622 3.85743 8.48566 3.56636 8.48566 3.26286C8.48566 2.95937 8.60622 2.6683 8.82083 2.45369C9.03543 2.23909 9.3265 2.11853 9.63 2.11853C9.9335 2.11853 10.2246 2.23909 10.4392 2.45369L16.1615 8.17601C16.2678 8.28225 16.3521 8.4084 16.4097 8.54724C16.4672 8.68608 16.4968 8.8349 16.4968 8.9852C16.4968 9.13549 16.4672 9.28431 16.4097 9.42315C16.3522 9.562 16.2678 9.68815 16.1615 9.7944L10.4392 15.5168C10.3329 15.623 10.2068 15.7074 10.0679 15.7649C9.92911 15.8224 9.7803 15.852 9.63002 15.852C9.47974 15.852 9.33093 15.8224 9.19209 15.7649C9.05326 15.7073 8.92712 15.623 8.82088 15.5167Z"
                    fill="#F8F8F8"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 overflow-auto z-50 top-0 left-0 bg-black/30 backdrop-blur-sm flex justify-center">
          <PaystackCheckout setOpenModal={setOpenModal} />
        </div>
      )}
    </main>
  );
}
