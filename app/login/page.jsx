"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import authImage from "../../public/images/authImage.png";
import Logo from "@components/image/logo";
import IconLogo from "@components/icon/IconLogo";
import Button from "@components/button/Button";
import InputField from "@components/input/InputField";
import Link from "next/link";
import { toast } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

function page() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const login = async (event) => {
    event.preventDefault();
    try {
      fetch("/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const handleSuccess = () => {
            toast.success("LoggedIn Successfully");
          };
          const handleError = () => {
            toast.error("Email or password is wrong");
          };
          if (data && data.status == "Successfull") {
            handleSuccess();
            router.push("/dashboard");
          } else {
            handleError();
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

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
          <div className={"w-full md:max-w-[400px] px-4"}>
            <div className={"flex justify-center mb-6"}>
              <IconLogo />
            </div>
            <div>
              <div className={"text-[32px] font-semibold text-center m-3"}>
                Login to account
              </div>
              <div className={"text-[#4F4D55] text-center mb-6"}>
                Enter your credentials to access your account
              </div>
            </div>

            <div>
              <div className={"border border-[#E6E6E6] rounded-lg text-sm"}>
                <InputField
                  placeholder={"Enter email*"}
                  style={
                    "w-full px-3 py-2 focus-visible:outline-0 rounded-t-lg border-b"
                  }
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <InputField
                  type="password"
                  placeholder={"Enter password*"}
                  style={
                    "w-full px-3 py-2 focus-visible:outline-0 rounded-b-lg"
                  }
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div className={"flex justify-center my-5"}>
                <span className={"font-medium text-sm text-[#6A5BC1]"}>
                  Forgot Password?
                </span>
              </div>
              <div className={"mb-6"}>
                <Button
                  text={"Log in"}
                  style={
                    "shadow-md w-full border text-sm p-2.5 rounded-[7px] bg-[#6A5BC1] text-white rounded-full"
                  }
                  onClick={(event) => login(event)}
                />
              </div>
              <div className={"flex justify-center"}>
                <span className={"font-medium text-sm"}>
                  Don’t have an account?
                </span>
                <Link
                  className={"font-medium text-sm ml-2 text-[#6A5BC1]"}
                  href={"/signup"}
                >
                  Create Account
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
            className={"object-cover w-full h-fit"}
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
