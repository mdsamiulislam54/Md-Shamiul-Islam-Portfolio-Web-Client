"use client";

import React, { useState } from "react";
import { Loader2 } from "lucide-react";
import { FaLocationArrow } from "react-icons/fa6";

import { Field } from "../ui/field";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { toast } from "sonner";

const ContactFrom = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try {
        setLoading(true)
        console.log(formData)
    } catch (error) {
        console.error(error)
        toast.error("Message Send Failed!")
        throw error
    }finally{
        setLoading(false)
    }
  }


  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Send a Message</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Field>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter Your Name..."
            value={formData.name}
            className="py-6"
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="Project Discussion"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            rows={7}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Field>

        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <FaLocationArrow className="h-4 w-4" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ContactFrom;