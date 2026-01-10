import Input from "../../components/ui/input/Input"
import Textarea from "../../components/ui/input/Textarea"
import Card from './parts/Card'
import Button from "../../components/ui/botton/Button"
import { useForm } from "react-hook-form"

function Contact() {
  const {register , handleSubmit} = useForm()
  const handleSendMessage = (data) =>{
    console.log(data)

  }

  return (
    <div className='w-full flex lg:flex-row md:flex-col max-md:flex-col gap-10  bg-slate-50 lg:px-10 px-5 max-sm:px-4 py-10'>
      <div className='lg:w-[30%] md:w-full max-md:w-full flex flex-col gap-5'>
        <Card icon={"line-md:phone"} text={'+1 (555) 987-6543'}/>
        <Card icon={"line-md:email"} text={'starline@gmail.com'}/>
        <Card icon={"tdesign:location" } text={'Herat 12 Street AFG'}/>
        <Card icon={"ri:time-line"} text={'Mon-Fri: 6:00 AM - 10:00 PM'}/>
      </div>
      <form onSubmit={handleSubmit(handleSendMessage)} className='lg:w-[70%] md:w-full max-md:w-full bg-white shadow-md rounded-md border-t-4 border mainbordercolor p-7 max-sm:p-5'>
        <h1 className='text-xl font-semibold'>Send Us a Message</h1>
        <div className='w-full mt-5 flex max-sm:flex-col gap-5'>
          <div className="w-1/2 max-sm:w-full">
            <Input lable={'Your Name'} placeholder={'Alireza'} register={register("name")}/>
          </div>
          <div className="w-1/2 max-sm:w-full">
            <Input lable={'Email Address'} register={register("email")} placeholder={'ali@gmail.com'}/>
          </div>
        </div>
        <div className="mt-4">
          <Input register={register('phone')} lable={'Phone Number (Optional)'} placeholder={'+93 77236845'}/>
        </div>
        <div className="mt-4">
          <Input register={register('subject')} lable={'Subject'} placeholder={'How i can help You?'}/>
        </div>
        <div className="mt-4">
          <Textarea register={register('message')} lable={'Message'} placeholder={'Tell us more about your inquiry...'} inputclass={'min-h-32'}/>
        </div>
        <div className="mt-4">
          <Button type="submit" label={'Send Message'} color={'o'} customClass={'w-full py-2.5 text-[16px] '}/>
        </div>
      </form>
    </div>
  )
}

export default Contact
