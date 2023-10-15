import React from "react";

const commentsData = [
  {
    name: "anand",
    text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
    replies: [],
  },
  {
    name: "anand",
    text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
    replies: [
      {
        name: "anand",
        text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
        replies: [
          {
            name: "anand",
            text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
            replies: [
              {
                name: "anand",
                text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "anand",
    text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
    replies: [
      {
        name: "anand",
        text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
        replies: [
          {
            name: "anand",
            text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
            replies: [
              {
                name: "anand",
                text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "anand",
    text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
    replies: [
      {
        name: "anand",
        text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
        replies: [
          {
            name: "anand",
            text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
            replies: [
              {
                name: "anand",
                text: "lorem10 cejncjej fnwidd jiojdndnw fnc ",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="h-8 "
        alt="user-iocn"
        src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className=" text-2xl font-bold">comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
