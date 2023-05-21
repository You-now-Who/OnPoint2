"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import "@styles/remainder.css";

import Remainder from "@components/Remainder";

const RemainderPage = () => {
    return (
      <div>
        <h1>Remainder Page</h1>
        <Remainder />
      </div>
    );
  };
  
  export default RemainderPage;
