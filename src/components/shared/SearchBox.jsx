import React, { useState } from "react";
import Input from "../ui/input/Input";
import DateInput from "../ui/input/DateInput";
import Button from "../ui/botton/Button";
import { useForm } from "react-hook-form";

function SearchBox() {
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
    <form onSubmit={handleSubmit(searchbuss)} className="w-[800px] py-7 px-5 flex gap-5 justify-center items-center  rounded-lg border border-[#065656ca] bg-white">
      <div className="w-1/4">
        <Input
          icon={"basil:location-outline"}
          register={register("from" , {required:"This Feild is requird."})}
          placeholder={"From"}
          inputclass={"placeholder:font-semibold placeholder:text-black"}
        />
      </div>
      <div className="w-1/4">
        <Input
          icon={"basil:location-outline"}
          register={register("to", {required:"This Feild is requird."})}
          placeholder={"To"}
          inputclass={"placeholder:font-semibold placeholder:text-black"}
        />
      </div>
      <div className="w-1/4">
        <DateInput setDate={setDate} required={true} register={register("date" , {required : ""})}/>
      </div>
      <div className="w-1/4">
        <Button
          label={"Search Buses"}
          color={"g"}
          icon={"bitcoin-icons:search-filled"}
          customClass={" gap-5 py-2"}
        />
      </div>
    </form>
  );
}

export default SearchBox;
