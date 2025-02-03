"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Card } from "flowbite-react";
import { Nav } from "../Components/Navbar";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <div>
      <Nav></Nav>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Card className="w-full max-w-sm rounded-2xl bg-[#06283D] p-5">
          <form className="flex max-w-md flex-col gap-4 ">
            <div>
              <h1 className="text-2xl font-bold text-[#DFF6FF]">Login</h1>
              <p className="text-xs text-[#DFF6FF]">
                Please Log in to book appointment
              </p>
            </div>
            <div>
              <div className="mb-2 ">
                <Label
                  htmlFor="email1"
                  value="Email"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
                className="rounded-3xl"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="password1"
                  value="Password"
                  className="text-[#DFF6FF]"
                />
              </div>
              <TextInput id="password1" type="password" required />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-[#DFF6FF]">
                Remember me
              </Label>
            </div>
            <div className="flex justify-center">
            <Link to="/">
              <Button
                type="submit"
                className="rounded-3xl border-none bg-[#1363DF] w-80">
                Login
              </Button>
            </Link>
            </div>
            <div>
              <p className="text-xs text-[#DFF6FF]">
                Create an new account ?               
                  <Link to="/createaccount" className="text-[#47B5FF]"> Click here</Link>               
              </p>
              <p className="text-xs text-[#DFF6FF]">
                Login for Admin:
                <Link to="#" className="text-[#47B5FF]"> Click here</Link> 
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
