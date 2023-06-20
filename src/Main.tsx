import React from "react";
import { useState } from "react";
import axios from "axios";
import TypingAnimation from "./components/typingAnimation";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import Footer from "./components/footer";

const Main = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState<string>();
  const [inputChecker, setInputChecker] = useState<boolean>(false);

  const options = {
    method: "POST",
    url: `${process.env.REACT_APP_RAPID_API_URL}`,
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      "X-RapidAPI-Host": `${process.env.REACT_APP_RAPID_API_HOST}`,
    },
    data: {
      messages: [
        {
          role: "user",
          content: questions,
        },
      ],
      temperature: 1,
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(options);
      return response;
    } catch (error) {
      console.error(error);
    }
  };

  const { mutate, isLoading, isSuccess, isError, data } = useMutation(getData);
  const handleSubmit: any = (event: {
    preventDefault: () => void;
    target: HTMLFormElement | undefined;
  }) => {
    event.preventDefault();
    // Call the mutate function to trigger the mutation
    if (questions === undefined) {
      setInputChecker(true);
    } else {
      setInputChecker(false);
      mutate();
    }
  };

  return (
    <>
      <div className="w-full min-h-screen px-[8%] py-[4%] text-center relative">
        <div
          onClick={() => navigate("/")}
          className="absolute left-[8%] bg-none text-[#3b74d5] w-[10%] cursor-pointer underline italic"
        >
          Back
        </div>
        <h1 data-testid="title">Vis Major</h1>
        <TypingAnimation
          text="Welcome to a new era of AI-powered innovation."
          typingDelay={40}
        />
        <h4 className="text-black">How may I be of help to you?</h4>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="questions"
            placeholder="What is your request?"
            onChange={(e) => setQuestions(e.target.value)}
          />
          <div className="w-full flex items-center justify-center">
            <button type="submit" className="bg-black w-[40%] text-white">
              send
            </button>
          </div>
        </form>
        <div>
          {inputChecker === true ? (
            <p className="text-[red] text-xs">Input field cannot be empty</p>
          ) : isLoading ? (
            "Getting Response..."
          ) : (
            <>
              {isSuccess ? (
                <TypingAnimation
                  text={data?.data?.choices[0]?.message?.content}
                  typingDelay={40}
                />
              ) : null}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Main;
