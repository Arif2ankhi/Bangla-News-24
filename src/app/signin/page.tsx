"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const SignInPage = () => {
const onSubmit = async(e:React.SubmitEvent<HTMLElement>) => {
    e.preventDefault()

     


    const formData = new FormData(e.target);
    // const formData = new Formdata(e.target)
    const user = Object.fromEntries(formData.entries()) as {email:string, password:string}

    console.log(user);

   const {data, error}  = await authClient.signIn.email({
    ...user,
    callbackURL: "/"

    })

    if(data) {
        toast.success("User signed in successfully");
        console.log(data);
    }
    if(error){
        toast.error('Invalid email or password')
        console.log(error);
    }
}

//     const handleGoogleSignIn = async()= >{
//         const data = await authClient.signIn.social({
//     provider: "google",
//   });
//   console.log(data)

//     }

const handleGoogleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
  
  console.log(data);
};


    return (
        <div className='flex flex-col items-center justify centre mt-5'>
            <h2 className='tewxt-2xl font-bold text-red-700'>সাইন ইন</h2>
           <form onSubmit= {onSubmit}>
    <fieldset className="fieldset bg-base-200 rounded-box  w-md ">

  {/* <label className="label">নাম  </label>
  <input name ="name" type="text" className="input w-md" placeholder="Name" />

  <label className="label">ImageUrl </label>
  <input name="image"  type="url" className="input w-md" placeholder="Image" /> */}

  <label className="label"> ইমেইল</label>
  <input name= "email" type="email" className="input w-md" placeholder="Email" />

  <label className="label">পাসওয়ার্ড </label>
  <input name="password" type="password" className="input w-md" placeholder="Password" />

  <button type="submit"  className="btn bg-green-600 text-white mt-4">সাইন ইন করুন </button>
</fieldset>
           </form>

           <button  onClick= {handleGoogleSignIn} className='btn btn-success'>Sign in with Google</button>
        </div>
    );
};

export default SignInPage;