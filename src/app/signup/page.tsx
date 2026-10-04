"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const onSubmit = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()

        const formData = new FormData(e.target);
        const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image: string, password:string};

        

         const {data, error} =await authClient.signUp.email({
            ...user,
            callbackURL: "/"

        })

        if(data) {
            console.log(data);
            redirect("/");
        }

        if(error){
            console.log(error);
        }

    }

    return (
        <div className='flex flex-col items-center justify centre mt-5'>
            <h2 className='tewxt-2xl font-bold text-red-700'>সাইন আপ</h2>
           <form onSubmit ={onSubmit}>
    <fieldset className="fieldset bg-base-200 rounded-box  w-md ">

  <label className="label">নাম  </label>
  <input name ="name" type="text" className="input w-md" placeholder="Name" />

  <label className="label">ImageUrl </label>
  <input name="image"  type="url" className="input w-md" placeholder="Image" />

  <label className="label"> ইমেইল</label>
  <input name= "email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড </label>
  <input name="password" type="password" className="input w-md" placeholder="Password" />

  <button  type="submit" className="btn bg-green-600 text-white mt-4">সাইন আপ  করুন </button>
</fieldset>
           </form>
        </div>
    );
};

export default SignUpPage;