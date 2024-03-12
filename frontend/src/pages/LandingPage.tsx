import { useEffect, useState } from "react";
import { SignInComponent } from "../components/SignInComponent";
import { Socket, io } from "socket.io-client";
import { User } from "../models/User";

export const LandingPage = () => {
  return (
    <section>
      <SignInComponent />
    </section>
  );
};
