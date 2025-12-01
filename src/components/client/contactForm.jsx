"use client";

import { useState } from "react";
import Btn from "../UI/btn";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [mess, setMess] = useState({ mess: "", isRed: true });

  const inputClass = "w-full border-b py-2.5 px-1.5";

  function handleChangeForm(prop, value) {
    let newValues = { ...values };
    newValues[prop] = value;
    setValues(newValues);
  }

  function handleSubmit() {
    if (Object.values(values).some((item) => item.trim() == "")) {
      setMess({ isRed: true, mess: "همه موارد زیر رو وارد کن !" });
    } else if (!values.email.includes("@") || !values.email.includes(".com")) {
      setMess({ isRed: true, mess: "ایمیل رو درست وارد نکردی !" });
    } else {
      setMess({ isRed: false, mess: "چند لحظه صبر کن." });
      fetch("/api/contact-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
        .then(async (e) => {
          let data = await e.json();
          if (!e.ok) {
            throw new Error(data.message);
          }
          return data;
        })
        .then((e) => {
          setMess({ isRed: false, mess: "پیامت با موفقیت ارسال شد !" });
          console.log(e);
          setValues({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error(err);
          setMess({ isRed: true, mess: err.message });
        });
    }
  }

  return (
    <div className="col-span-2 bg-white rounded-lg p-5 mini-shadow">
      {mess.mess && (
        <p
          className="text-center mb-2.5"
          style={mess.isRed ? { color: "red" } : { color: "green" }}
        >
          {mess.mess}
        </p>
      )}
      <form
        className="flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <div>
          <input
            className={inputClass}
            value={values.name}
            onChange={(e) => {
              handleChangeForm("name", e.target.value);
            }}
            type="text"
            placeholder="نام"
          />
        </div>
        <div>
          <input
            className={inputClass}
            value={values.email}
            onChange={(e) => {
              handleChangeForm("email", e.target.value);
            }}
            type="email"
            placeholder="ایمیل"
          />
        </div>
        <div>
          <input
            className={inputClass}
            type="number"
            value={values.phone}
            onChange={(e) => {
              handleChangeForm("phone", e.target.value);
            }}
            placeholder="شماره تماس"
          />
        </div>
        <div>
          <textarea
            className={inputClass + " h-[200px]"}
            value={values.message}
            onChange={(e) => {
              handleChangeForm("message", e.target.value);
            }}
            placeholder="حرفی، صحبتی، چیزی داری؛ بنویس"
          ></textarea>
        </div>
        <div>
          <Btn>ارسال پیام</Btn>
        </div>
      </form>
    </div>
  );
}
