"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import ReactStars from "react-stars";
import Logo from "@components/image/logo";
import { useSearchParams } from "next/navigation";
import Button from "@components/button/Button";
import { toast } from "react-hot-toast";

function feedbackform() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");
  const [questions, setData] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [overall, setOverallValue] = useState();

  useEffect(() => {
    if (questions.length == 0) {
      console.log("getting data");
      try {
        fetch("/api/get-questions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId: eventId }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setData(data.data);
          });
      } catch (err) {
        console.error(err);
      }
    }
  });

  function submit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    console.log(questions);
    let newAddition = {
      answers: JSON.stringify(
        questions.map((data) => {
          return {
            questionId: data.questionId,
            question: data.question,
            type: data.type,
            options: data.options,
            answer: data.answer,
          };
        })
      ),
      overall: overall,
      eventID: eventId,
    };
    console.log(newAddition);
    try {
      fetch("/api/save-feedback-response", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: newAddition }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const handleButtonClick = () => {
            toast.success("Response has been saved Successfully");
          };
          handleButtonClick();
        });
    } catch (err) {
      console.error(err);
    }
  }

  if (!isSubmitted) {
    return (
      <form className="Feedbackform">
        <div className={"p-6"}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>

        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="form1">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Feedback Form
              </h2>
            </div>
            <div className="para">
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Share the success of our event by sharing your insights!
                <br></br>
                <br></br>
                This brief form allows you to give fast comments on a variety of
                topics, including presenters, material, and organization.
                <br></br>
                Your opinions matter, as it allows us to adapt future events to
                better match your expectations.
                <br></br>
                <br></br>
                Thank you for taking time to share your opinions.
              </p>
            </div>
            {questions.map((question, ind) => {
              if (question.type == "checkbox" || question.type == "radio") {
                return (
                  <div>
                    <fieldset>
                      <legend className="text-sm font-semibold leading-6 text-gray-900">
                        {question.question}
                      </legend>
                      <div className="mt-6 space-y-6">
                        {question.options.map((ops) => {
                          return (
                            <div className="flex items-center gap-x-3">
                              <input
                                id={question.questionId}
                                name={question.questionId}
                                type={question.type}
                                value={ops}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                onClick={(event) =>
                                  (question.answer = event.target.value)
                                }
                              />
                              <label
                                htmlFor={question.question}
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {ops}
                              </label>
                            </div>
                          );
                        })}
                      </div>
                    </fieldset>
                  </div>
                );
              } else if (question.type == "text") {
                return (
                  <div className="col-span-full">
                    <label
                      htmlFor="about"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      {question.question}
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="about"
                        name="about"
                        type="text"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={(event) =>
                          (question.answer = event.target.value)
                        }
                      />
                    </div>
                  </div>
                );
              }
            })}

            <div className="rating2">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your Overall Review
              </label>
              <ReactStars
                onChange={(number) => setOverallValue(number)}
                count={5}
                size={40}
                color2={"#ffd700"}
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-6">
          <div>
            <Button
              style={"bg-[#6A5BC1] py-3 px-5 text-white rounded-2xl"}
              text="Submit"
              onClick={(event) => submit(event)}
            />
          </div>
        </div>
      </form>
    );
  } else {
    return (
      <div>
        <div className={"p-6"}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        Thank you for submitting, Thank you for submitting the form{" "}
      </div>
    );
  }
}

export default feedbackform;
