"use client";
import Image from "next/image";
import ViewIcon from "../../public/images/viewicon.svg";
import { useState, useEffect } from "react";
import ReviewModal from "@components/dialog/ReviewModal";

function page() {
  const [reviews, setReview] = useState([]);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    console.log("asdfasdfasdf", reviews);
    if (reviews.length == 0) {
      try {
        fetch("/api/get-feedback-response", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ eventId: "1" }),
        })
          .then((res) => res.json())
          .then((data) => {
            let review = [];
            data.data.map((d) => {
              review.push({
                reviews: d.overall,
                event: "JKT 48 11th Anniversary Concert",
                eventId: d.eventID,
                answers: JSON.parse(d.answers),
              });
              setReview(review);
            });
          });
      } catch (err) {
        console.error(err);
      }
    }
  });

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const reviewList = [
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews:
        "Very cool event from them I really like being able to reminisce again!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews:
        "What an interesting event! It's also very easy to order tickets, the best!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "Blink is too perfect, complementing high school nostalgia",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "I really like! Set off on another world tour soon!",
    },
    {
      email: "lar.har@mail.com",
      event: "JKT 48 11th Anniversary Concert",
      reviews: "Green Day never fails to give concerts that amaze their fans!",
    },
  ];

  let [isOpenEventModal, setIsOpenEventModal] = useState(false);
  function closeModal() {
    setIsOpenEventModal(false);
  }
  function openModal(index) {
    setAnswers(reviews[index].answers);
    console.log("asdfasdfasdfasdfpooiop", answers);
    setIsOpenEventModal(true);
  }

  return (
    <div className={"py-8 px-[100px]"}>
      <ReviewModal
        isOpen={isOpenEventModal}
        showclose={true}
        close={() => closeModal()}
        review={answers}
      />

      {/*insert breadcrumb*/}
      <div className={"flex gap-6"}>
        <div>Home</div>
        <div>/</div>
        <div>Reviews</div>
      </div>

      <div className={"mt-8"}>
        {/* Creating Table */}
        <div className={"bg-white p-6 mt-8"}>
          <table className={"w-full"}>
            {/* Row 1 */} {/*Table head*/}
            <thead className={"text-left"}>
              <tr className={"bg-[#F9F9F9] text-[#6C6C6C]"}>
                <th className={"p-2.5"}>Event Id</th>
                <th className={"p-2.5"}>Event Name</th>
                <th className={"p-2.5"}>Overall Review</th>
              </tr>
            </thead>
            {/* Row 2 */}
            <tbody className={"w-full"}>
              {reviews.map((review, index) => {
                return (
                  <tr key={index}>
                    <td className={"p-2.5"}>
                      <div>{review.eventId}</div>
                    </td>
                    <td className={"p-2.5"}>{review.event}</td>
                    <td className={"p-2.5"}>{review.reviews}</td>
                    <td className={"p-2.5"}>
                      <div className={"flex gap-2.5"}>
                        <div
                          className={
                            "flex gap-1.5 items-center bg-[#f9f9f9] p-1 pr-2 rounded-lg text-sm cursor-pointer"
                          }
                          onClick={() => openModal(index)}
                        >
                          <Image src={ViewIcon} alt={""} />
                          <div>View</div>
                        </div>
                        {/*<Image src={DeleteIcon} alt={""} onClick={}/>*/}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default page;
