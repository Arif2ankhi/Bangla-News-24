"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Userinfo = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  //   console.log(user);

  const handleSignout = async () => {
    await authClient.signOut();
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-col items-center gap-2">
          {/* avatar image */}
          <Link href={'/profile'}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
          
          </Link>
          <h2>{user.name}</h2>
          <button onClick={handleSignout} className="btn btn-error btn-xs">
            Signout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <Link href={"/signin"}>
            <button className="text-sm text-gray-700 hover:text-red-600">
              সাইন ইন
            </button>
          </Link>
          <Link href={"/signup"}>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md text-sm hover:bg-red-700">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Userinfo;
