import React, { useState } from "react";
import Input from "../ui/input/Input";
import DateInput from "../ui/input/DateInput";
import Button from "../ui/botton/Button";
import { useForm } from "react-hook-form";

function SearchBox({myclass=null}) {
  const {register , handleSubmit} =useForm();
  const [date , setDate] = useState({
   "day":null,
   "month" : null,
   "year" :null
  });

  const searchbuss = (data) =>{
   const searchdata ={
     "from" : data?.from,
     "to" :data?.to,
     "date" : date
   }
   console.log(searchdata)
  }

  return (
    <form onSubmit={handleSubmit(searchbuss)} className={` py-7 max-sm:py-5 px-5 max-sm:px-3 flex max-sm:flex-col gap-5 justify-between items-center  rounded-lg border border-[#065656ca] bg-white ${myclass}`}>
      <div className="w-1/4 max-sm:w-full">
        <Input
          icon={"basil:location-outline"}
          register={register("from" , {required:"This Feild is requird."})}
          placeholder={"From"}
          inputclass={"placeholder:font-semibold placeholder:text-black"}
        />
      </div>
      <div className="w-1/4 max-sm:w-full">
        <Input
          icon={"basil:location-outline"}
          register={register("to", {required:"This Feild is requird."})}
          placeholder={"To"}
          inputclass={"placeholder:font-semibold placeholder:text-black"}
        />
      </div>
      <div className="w-1/4 max-sm:w-full">
        <DateInput setDate={setDate} required={true} register={register("date" , {required : ""})}/>
      </div>
      <div className="w-1/4 max-sm:w-full">
        <Button
          label={"Search Buses"}
          color={"g"}
          icon={"bitcoin-icons:search-filled"}
          customClass={"w-full py-2"}
        />
      </div>
    </form>
  );
}

export default SearchBox;
