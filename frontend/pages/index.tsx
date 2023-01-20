import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { io } from "socket.io-client";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const socket = io("http://localhost:8000");

  // Connect to the server
  socket.on("connect", () => {
    console.log("Connected to the server");
  });

  socket.on("connect_error", (error) => {
    console.error("Failed to connect to the server", error);
  });
  // socket.listeners("connection", (socket) => {
  //   // console.log(`hello World`);
  // });

  socket.emit("helloWorld", { message: "A message from FE" });
  socket.on("helloWorld", (data) => {
    console.log(`I received a message from BE`, data);
  });

  return (
    <>
      <h1>Hello, World</h1>
    </>
  );
}
