"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/lib/Auth/getUser";
import Spinner from "@/Components/spinner";
import Navbar from "./Components/Navbar/navbar";

const dashLayout = ({ children }) => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (!user) {
      router.replace("/login");
    } else {
      setAuthChecked(true);
    }
  }, []);

  if (!authChecked) {
    return (
      <div style={{ display: "grid", placeItems: "center", height: "100vh" }}>
        <Spinner size={40} />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default dashLayout;
