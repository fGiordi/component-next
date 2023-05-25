"use client";

import React from "react";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <div className="flex w-[500px] h-full">
        <Card
          cartItems={10}
          connectWallet={() => console.log("connectWallat")}
          price={10}
          royalty={50}
          takerFee={12}
        />
      </div>
    </div>
  );
}
