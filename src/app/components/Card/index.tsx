"use client";

import React, { useState } from "react";
import { Card } from "@/types/Card";
import { Switch } from "@headlessui/react";
import { XCircle } from "lucide-react";

export default function Card({
  cartItems,
  connectWallet,
  buy,
  price,
  royalty,
  takerFee,
}: Card) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex flex-col w-full h-full border border-gray-800 rounded">
      <div className="flex justify-between  items-center space-x-6 px-6 h-[50px]">
        <h2 className="text-white">Cart ({cartItems})</h2>
        <div className="flex items-center justify-center space-x-2">
          <span>Advanced Options</span>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-pink-600" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Advanced</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <h3 className="text-red-500">Clear</h3>
          <XCircle />
        </div>
      </div>
      <div className="flex space-x-4 border-b border-gray-800 p-6">
        <button className="w-full h-[40px]  text-white bg-pink-600 rounded-lg">
          Buy
        </button>
        <button className="w-full h-[40px] text-white bg-gray-600 rounded-lg">
          Sell
        </button>
      </div>
      <div className="flex justify-between  border-gray-800 p-6">
        <span>Sweep Mode</span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-pink-600" : "bg-gray-800"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      <div className="flex items-center justify-center p-6 border-y border-gray-800">
        <h2 className="text-center text-gray-800">(Cart is empty)</h2>
      </div>

      <div className="flex justify-between items-center px-6 pt-2">
        <h2 className="text-gray-800">Price(0)</h2>
        <div className="flex gap-2">
          <svg
            width="14"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use href="#solana-icon"></use>
          </svg>
          {price}
        </div>
      </div>
      <div className="flex justify-between items-center px-6">
        <h2 className="text-gray-800">Royalty</h2>
        <div className="flex gap-2">
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 bg-blue-500"
            fill="white"
          >
            <use href="#solana-icon"></use>
          </svg>
          {royalty}
        </div>
      </div>
      <div className="flex justify-between items-center px-6 pb-2 border-b border-gray-800">
        <h2 className="text-gray-800">Taker Fee</h2>
        <div className="flex gap-2">
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 bg-blue-500"
            fill="white"
          >
            <use href="#solana-icon"></use>
          </svg>
          {takerFee}
        </div>
      </div>

      <div className="flex justify-between items-center px-6 p-6">
        <h2 className="text-white">You pay</h2>
        <div className="flex gap-2">
          <svg
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 bg-blue-500"
            fill="white"
          >
            <use href="#solana-icon"></use>
          </svg>
          0
        </div>
      </div>
      <div className="pb-6 px-6">
        <button
          className="w-full bg-pink-600 h-[40px] text-white text-center rounded-lg"
          onClick={connectWallet}
        >
          Connect Wallat
        </button>
        <p className="text-gray-800">
          By clicking "Connect wallet", you agree to the Lorem ipsum dolor sit
          amet.
        </p>
      </div>
    </div>
  );
}
