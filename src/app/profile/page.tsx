"use client";
import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  // if(!user){
  //   redirect ('/signin')
  // }


  const [show, setShow] = useState(false);

  const handleUpdateProfile = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      image: string;
    };
    // console.log(newUserData);
    await authClient.updateUser({
      ...newUserData
    });
  };

  const handleShowForm = () => {
    setShow(!show);
  };
  return (
    <div>
      <div className="flex flex-col items-center gap-2">
        {/* avatar image */}
        <Link href={"/profile"}>
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
              <img
             
                alt="Tailwind-CSS-Avatar-component"
                src={user?.image as string}
              />
            </div>
          </div>
        </Link>
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>

        <button onClick={handleShowForm} className="btn btn-success">
          Edit profile
        </button>
        {show && (
          <form onSubmit={handleUpdateProfile}>
            <fieldset className="fieldset bg-base-200 rounded-box  w-md ">
              <label className="label">নাম </label>
              <input
                name="name"
                type="text"
                className="input w-md"
                placeholder="Name"
              />

              <label className="label">ImageUrl </label>
              <input
                name="image"
                type="url"
                className="input w-md"
                placeholder="Image"
              />

              <button
                type="submit"
                className="btn bg-green-600 text-white mt-4"
              >
                Update profile
              </button>
            </fieldset>
          </form>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
