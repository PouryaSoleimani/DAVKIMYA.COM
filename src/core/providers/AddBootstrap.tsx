/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
import { useEffect } from "react";

const AddBootstrap = () => {
  useEffect(() => { import('bootstrap/dist/js/bootstrap.bundle.js'); }, []);

  return <></>;
};
export { AddBootstrap };
