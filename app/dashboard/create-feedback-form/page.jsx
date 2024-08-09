"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import AtendeeSelector from "@components/AtendeeSelector";
import EventModal from "@components/dialog/EventModal";
import Button from "@components/button/Button";
import ShareLink from "@components/ShareLink";
import QuestionAddition from "@components/QuestionAddition";
import { toast } from "react-hot-toast";
import NextTopLoader from "nextjs-toploader";

function page() {
  const searchParams = useSearchParams();
  const eventId = searchParams.get("eventId");
  const [questions, setData] = useState([]);
  let [isOpenEventModal, setIsOpenEventModal] = useState(false);
  let [IsQuestionModel, setIsQuestionModel] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPublished, setIsPublished] = useState(false);

  useEffect(() => {
    if (questions.length == 0) {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    }
  });

  function closeModal() {
    setIsOpenEventModal(false);
  }

  function closeQuestionModal() {
    setIsQuestionModel(false);
  }

  function openModal() {
    setIsOpenEventModal(true);
  }

  function openQuestionAdditionModel() {
    setIsQuestionModel(true);
  }

  function closePublishedModel() {
    setIsPublished(false);
  }

  function publish() {
    setIsPublished(true);
  }

  function updateData(data) {
    console.log("parer");
    console.log(data);
    const newAddition = [...questions, data];
    console.log(newAddition);
    setData(newAddition);
    try {
      fetch("/api/update-questions", {
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
            toast.success("Question is added"); // Displays a success message
          };
          handleButtonClick();
        });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <NextTopLoader />
      {loading && <div className="loading-bar">Loading...</div>}
      <EventModal
        isOpen={isOpenEventModal}
        title="Attendee Information"
        close={() => closeModal()}
        showclose={true}
        showbtn={false}
        event={<AtendeeSelector eventId={"1"} />}
      />
      <EventModal
        isOpen={IsQuestionModel}
        title="Add Question"
        close={() => closeQuestionModal()}
        showbtn={false}
        event={
          <QuestionAddition
            eventID={eventId}
            close={() => closeQuestionModal()}
            onSave={updateData}
          />
        }
      />

      <EventModal
        isOpen={isPublished}
        title="Link to share"
        close={() => closePublishedModel()}
        showbtn={false}
        event={
          <ShareLink eventID={eventId} close={() => closePublishedModel()} />
        }
      />
      <div className={"gap-3 hidden md:flex flex-row-reverse mt-5 mr-5"}>
        <div>
          <Button
            style={
              "bg-[#dea749] py-3 px-5 bg-opacity-100 text-black rounded-2xl"
            }
            text="Publish"
            type="button"
            onClick={() => publish()}
          />
        </div>
        <div>
          <Button
            style={
              "bg-[#725fde] py-3 px-5 bg-opacity-100 text-black rounded-2xl"
            }
            onClick={() => openModal()}
            text="Select Attendees"
          />
        </div>
      </div>
      <form className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="text-2xl font-bold mb-4">Feedback Form</h2>
        <Button
          text="Add Question"
          style={"bg-[#6A5BC1] py-3 px-5 text-white rounded-2xl"}
          onClick={() => {
            openQuestionAdditionModel();
          }}
        />
        {/* <button type="button" onClick={() => openQuestionAdditionModel()}>
          {" "}
          Add Question
        </button> */}
        {questions.map((question, ind) => {
          if (question.type == "text") {
            return (
              <div className="mb-4">
                <div className="block mb-1">
                  <b>{ind + 1}. </b>
                  {question.question}
                </div>
                <div>
                  <input
                    type="text"
                    className="w-full py-2 px-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(event) => (question.answer = event.target.value)}
                  />
                </div>
              </div>
            );
          } else if (question.type == "checkbox" || question.type == "radio") {
            return (
              <div className="mb-4">
                <div>
                  <b>{ind + 1}. </b>
                  {question.question}
                </div>
                <div>
                  {question.options.map((ops) => {
                    return (
                      <div>
                        <input
                          type={question.type}
                          value={ops}
                          name="radio"
                          onChange={(event) =>
                            (question.answer = event.target.value)
                          }
                        />{" "}
                        {ops}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        })}
        {/* <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={() => console.log(questions)}
        >
          Submit
        </button> */}
      </form>
    </div>
  );
}

export default page;
