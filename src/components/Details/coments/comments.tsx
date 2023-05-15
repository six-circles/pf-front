import React, { Fragment } from "react";
import "./comments.scss";
import { Rating } from "../..";

function Comments({ comments }: { comments: object[] }) {
  return (
    <div className="card">
      <div className="comments">
        <div className="comment-react">
          {/* <button>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#707277"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#707277"
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
              ></path>
            </svg>
          </button> */}

          {/* <span>14</span> */}
        </div>
        <div>
          {comments?.map((item: any, i) => (
            <div key={i}>
              <strong>{item.userName}</strong>
              <p>{item.body}</p>
              <Rating punctuation={item.punctuation} />
              <br />
            </div>
          ))}
        </div>
      </div>

      {/* <div className="text-box">
        <div className="box-container">
          <textarea placeholder="Reply"></textarea>
          <div>
            <div className="formatting">
              <button type="button">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M5 6C5 4.58579 5 3.87868 5.43934 3.43934C5.87868 3 6.58579 3 8 3H12.5789C15.0206 3 17 5.01472 17 7.5C17 9.98528 15.0206 12 12.5789 12H5V6Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M12.4286 12H13.6667C16.0599 12 18 14.0147 18 16.5C18 18.9853 16.0599 21 13.6667 21H8C6.58579 21 5.87868 21 5.43934 20.5607C5 20.1213 5 19.4142 5 18V12"
                  ></path>
                </svg>
              </button>
              <button type="button">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M12 4H19"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M8 20L16 4"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M5 20H12"
                  ></path>
                </svg>
              </button>
              <button type="button">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M5.5 3V11.5C5.5 15.0899 8.41015 18 12 18C15.5899 18 18.5 15.0899 18.5 11.5V3"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M3 21H21"
                  ></path>
                </svg>
              </button>
              <button type="button">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M4 12H20"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M17.5 7.66667C17.5 5.08934 15.0376 3 12 3C8.96243 3 6.5 5.08934 6.5 7.66667C6.5 8.15279 6.55336 8.59783 6.6668 9M6 16.3333C6 18.9107 8.68629 21 12 21C15.3137 21 18 19.6667 18 16.3333C18 13.9404 16.9693 12.5782 14.9079 12"
                  ></path>
                </svg>
              </button>
              <button type="button">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    r="10"
                    cy="12"
                    cx="12"
                  ></circle>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#707277"
                    d="M8 15C8.91212 16.2144 10.3643 17 12 17C13.6357 17 15.0879 16.2144 16 15"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="3"
                    stroke="#707277"
                    d="M8.00897 9L8 9M16 9L15.991 9"
                  ></path>
                </svg>
              </button>
              <button type="submit" className="send" title="Send">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  height="18"
                  width="18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#ffffff"
                    d="M12 5L12 20"
                  ></path>
                  <path
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-width="2.5"
                    stroke="#ffffff"
                    d="M7 9L11.2929 4.70711C11.6262 4.37377 11.7929 4.20711 12 4.20711C12.2071 4.20711 12.3738 4.37377 12.7071 4.70711L17 9"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Comments;
