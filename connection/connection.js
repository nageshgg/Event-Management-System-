import prisma from "@lib/prisma";

export async function getUser(user) {
  const users = await prisma.Users.findUnique({
    where: {
      email: user.email,
    },
  });
  return users;
}

export async function getFeedbackQuestion(eventID) {
  const questions = await prisma.FeedbackQuestion.findMany({
    where: {
      eventID: eventID,
    },
  });
  return questions;
}

export async function getFeedbackResponse(eventID) {
  const answers = await prisma.FeedbackResponse.findMany({
    where: {
      eventID: eventID,
    },
  });
  return answers;
}

export async function getAttendees(eventID) {
  const AttendeesData = await prisma.AttendeesProfile.findMany({});
  console.log(AttendeesData);
  return AttendeesData;
}

export async function saveAttendeesInfo(data) {
  let status = "fail";
  if (data) {
    await data.map(async (ad) => {
      status = await prisma.AttendeesProfile.update({
        where: {
          profilId: ad.profilId,
        },
        data: {
          selected: ad.selected,
        },
      });
    });
    setTimeout(() => {
      console.log(status);
      return "success";
    }, 5000);
  } else {
    return status;
  }
}

export async function createUserQuuery(user) {
  let status = "fail";
  if (user) {
    status = await prisma.users.create({
      data: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    });
    setTimeout(() => {
      console.log(status);
      return "success";
    }, 5000);
  } else {
    return status;
  }
}

export async function saveFeedbackQuestion(data) {
  let status = "fail";
  console.log("dadas", data);
  if (data) {
    await data.data.map(async (que) => {
      status = await prisma.FeedbackQuestion.upsert({
        where: {
          questionId: que.questionId,
        },
        update: {
          question: que.question,
          type: que.type,
          options: que.options,
          required: que.required,
        },
        create: {
          question: que.question,
          type: que.type ? que.type : "text",
          options: que.options ? que.options : [],
          required: que.required ? que.required : false,
          answer: que.answer ? que.answer : "",
          eventID: que.eventID ? que.eventID : "",
        },
      });
    });
    setTimeout(() => {
      console.log(status);
      return "success";
    }, 5000);
  } else {
    return status;
  }
}

export async function saveFeedbackResponse(data) {
  let status = "fail";
  console.log("answers1111", data.data);
  if (data) {
    status = await prisma.FeedbackResponse.create({
      data: data.data,
    });
    setTimeout(() => {
      console.log(status);
      return "success";
    }, 5000);
  } else {
    return status;
  }
}
