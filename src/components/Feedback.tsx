"use client";

import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { collection, addDoc } from "firebase/firestore";
import { FIREBASE_DB } from "../../firebaseConf";

const FeedbackForm = () => {
  const [rating, setRating] = useState<number>(0);
  const [review, setReview] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!rating || !review.trim()) {
      alert("Please provide a rating and a review!");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(FIREBASE_DB, "feedback"), {
        rating,
        review,
        timestamp: new Date(),
      });
      alert("Feedback submitted successfully!");
      setRating(0);
      setReview("");
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="text-black w-full max-w-[90%] sm:max-w-[70%] lg:max-w-[60%] mx-auto my-10">
      <h2 className="text-lg font-semibold text-center mb-3">
        Do you like this website?
      </h2>
      <div className="flex items-center lg:flex-row flex-col space-y-2 lg:space-y-0 lg:space-x-4 md:space-x-2 md:flex-col md:items-center sm:flex-col sm:items-center">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-3xl ${
                star <= rating ? "text-[#d2af26]" : "text-gray-300"
              }`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <input
          className="flex-grow p-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-[#08AB88] focus:border-transparent"
          placeholder="Your thoughts..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={handleSubmit}
          className="bg-[#08AB88] text-white w-[200px] lg:w-fit p-2 rounded-md hover:bg-[#079d7a] transition justify-center items-center flex"
          aria-label="Submit Feedback"
          disabled={loading}
        >
          {loading ? "Submitting..." : <IoSend size={20} />}
        </button>
      </div>
    </div>
  );
};

export default FeedbackForm;
