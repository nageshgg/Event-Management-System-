"use client";
import React, { useState } from "react";
import Image from "next/image";
import authImage from "../../public/images/authImage.png";
import { useRouter } from "next/navigation";
import Logo from "@components/image/logo";
import IconLogo from "@components/icon/IconLogo";
import Button from "@components/button/Button";
import InputField from "@components/input/InputField";
import PasswordValidationBox from "@components/PasswordValidationBox";
import Link from "next/link";
import { toast } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

function page() {
  const router = useRouter();

  const [validationArray, setValidationArray] = useState({
    olc: false,
    osc: false,
    ouc: false,
    ecm: false,
    onm: false,
  });
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);

  function createAccount(event) {
    event.preventDefault();
    let user = {
      name,
      password,
      email,
    };
    try {
      fetch("/api/create-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const handleButtonClick = () => {
            toast.success("Account is created succesfully"); // Displays a success message
          };
          handleButtonClick();
          router.push("/login");
        });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={"w-full h-screen grid lg:grid-cols-2"}>
      <NextTopLoader />
      <div className={"flex flex-col h-full"}>
        <div className={"p-6"}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className={"grow flex justify-center items-center"}>
          <div className={"w-full max-w-[400px]"}>
            <div className={"flex justify-center mb-6"}>
              <IconLogo />
            </div>
            <div>
              <div className={"text-[32px] font-semibold text-center m-3"}>
                Create your account
              </div>
              <div className={"text-[#4F4D55] text-center mb-6"}>
                Enter the fields below to get started
              </div>
            </div>

            <div>
              <div className={"border border-[#E6E6E6] rounded-lg text-sm"}>
                <InputField
                  placeholder={"Enter name*"}
                  style={
                    "w-full px-3 py-2 focus-visible:outline-0 rounded-t-lg border-b"
                  }
                  onChange={(e) => setName(e.target.value)}
                />

                <InputField
                  placeholder={"Enter email*"}
                  style={"w-full px-3 py-2 focus-visible:outline-0 border-b"}
                  type={"email"}
                  required={true}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className={"relative"}>
                  <InputField
                    placeholder={"Create a password*"}
                    style={
                      "w-full px-3 py-2 focus-visible:outline-0 rounded-b-lg"
                    }
                    type={showPass ? "" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={
                      "absolute top-0 right-2 h-full flex items-center"
                    }
                    onClick={() => setShowPass(!showPass)}
                  >
                    {showPass ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                        />
                      </svg>
                    )}
                  </div>
                </div>
              </div>
              <div className={"my-5"}>
                <PasswordValidationBox
                  password={password}
                  validationArray={validationArray}
                  setValidation={setValidationArray}
                />
              </div>
              <div className={"mb-6"}>
                <Button
                  disabled={name && password && email ? false : true}
                  text={"Create account"}
                  style={
                    "shadow-md w-full border text-sm p-2.5 rounded-[7px] bg-[#6A5BC1] " +
                    "text-white rounded-full disabled:bg-gray-500 disabled:cursor-not-allowed"
                  }
                  onClick={(event) => createAccount(event)}
                />
              </div>
              <div className={"flex justify-center md:justify-start"}>
                <span className={"font-medium text-sm"}>
                  Already have an account?
                </span>
                <Link
                  className={"font-medium text-sm ml-2 text-[#6A5BC1]"}
                  href={"/login"}
                >
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"hidden lg:flex justify-center items-center p-8"}>
        <div className={"h-full w-full max-w-2xl relative"}>
          <Image
            src={authImage}
            alt={"auth-image"}
            className={"w-full h-full object-cover"}
          />
          <div
            className={
              "absolute top-0 h-full w-full flex flex-col justify-end p-8"
            }
          >
            <div className={"text-white text-xl"}>
              Discover groups, join events, and spark meaningful connections
              around shared interests.
            </div>
            <div className={"flex gap-2 mt-8"}>
              <div className={"w-2 h-2 rounded-full bg-white"}></div>
              <div
                className={"w-2 h-2 rounded-full bg-gray-50 bg-opacity-40"}
              ></div>
              <div
                className={"w-2 h-2 rounded-full bg-gray-50 bg-opacity-40"}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
