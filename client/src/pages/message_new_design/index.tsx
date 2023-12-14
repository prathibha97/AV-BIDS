import "./components/chat-app.css";
import "./components/tailwindfile.css";
import "./components/chat";
import { MdSend } from "react-icons/md";

function Index() {
  return (
    <div className="container mx-auto ">
      <section className="bg-white rounded-xl p-6 drop-shadow">
        <p> New message section here</p>
        <section className="chat-section">
          <div className="chat-container">
            {/* <!-- start: Sidebar --> */}

            {/* <!-- end: Sidebar -->
            <!-- start: Content --> */}
            <div className="chat-content">
              {/* <!-- start: Content side --> */}
              <div className="content-sidebar">
                <div className="content-sidebar-title">Chats</div>
                <form action="" className="content-sidebar-form">
                  <button type="submit" className="content-sidebar-submit">
                    <i className="ri-search-line"></i>
                  </button>
                </form>
                <div className="content-messages">
                  <ul className="content-messages-list">
                    <li className="content-message-title">
                      <span>Recently</span>
                    </li>
                    <li>
                      <a href="#" data-conversation="#conversation-1">
                        <span className="content-message-info">
                          <span className="content-message-name">Ricky </span>
                          <span className="content-message-text">Hello 1</span>
                        </span>
                        <span className="content-message-more">
                          {/* <span className="content-message-unread">5</span> */}
                          <span className="content-message-time">12:30</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" data-conversation="#conversation-2">
                        {/* <img className="content-message-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                        <span className="content-message-info">
                          <span className="content-message-name">Shane</span>
                          <span className="content-message-text">Hello 2</span>
                        </span>
                        <span className="content-message-more">
                          <span className="content-message-time">12:30</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- end: Content side -->
                <!-- start: Conversation --> */}
              <div className="conversation">
                <i className="ri-chat-3-line"></i>
                <p>Select chat and view conversation!</p>
              </div>
              <div
                className="conversation conversation-default active"
                id="conversation-1"
              >
                <div className="conversation-top">
                  <button type="button" className="conversation-back">
                    <i className="ri-arrow-left-line"></i>
                  </button>
                </div>
                <div className="conversation-main w-full">
                  <ul className="conversation-wrapper">
                    <div className="coversation-divider">
                      <span>Today</span>
                    </div>
                    <li className="conversation-item me">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 1</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 3</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="conversation-item">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 3</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 4</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 5</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="conversation-item me">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 6</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 7</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 8</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="conversation-form w-full">
                  <button type="button" className="conversation-form-button">
                    <i className="ri-emotion-line"></i>
                  </button>
                  <div className="conversation-form-group">
                    <textarea
                      className="conversation-form-input"
                      rows={1}
                      placeholder="Type here..."
                    ></textarea>
                    <button type="button" className="conversation-form-record">
                      <i className="ri-mic-line"></i>
                    </button>
                  </div>
                  {/* <button
                    type="button"
                    className="conversation-form-button conversation-form-submit"
                  >
                    <i className="ri-send-plane-2-line"></i>
                  </button> */}

                  <MdSend className="text-[27px] text-center mb-2" />
                </div>
              </div>
              <div className="conversation" id="conversation-2">
                <div className="conversation-top">
                  <button type="button" className="conversation-back">
                    <i className="ri-arrow-left-line"></i>
                  </button>
                  <div className="conversation-user">
                    {/* <img className="conversation-user-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                    <div>
                      <div className="conversation-user-name">Someone 1</div>
                      <div className="conversation-user-status online">
                        online
                      </div>
                    </div>
                  </div>
                  <div className="conversation-buttons">
                    <button type="button">
                      <i className="ri-phone-fill"></i>
                    </button>
                    <button type="button">
                      <i className="ri-vidicon-line"></i>
                    </button>
                    <button type="button">
                      <i className="ri-information-line"></i>
                    </button>
                  </div>
                </div>
                <div className="conversation-main w-full">
                  <ul className="conversation-wrapper">
                    <div className="coversation-divider">
                      <span>Today</span>
                    </div>
                    <li className="conversation-item me">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 9</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 10</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="conversation-item">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 11</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 12</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 13</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="conversation-item me">
                      <div className="conversation-item-side">
                        {/* <img className="conversation-item-image" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt=""> */}
                      </div>
                      <div className="conversation-item-content">
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 14</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 15</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="conversation-item-wrapper">
                          <div className="conversation-item-box">
                            <div className="conversation-item-text">
                              <p>chat 16</p>
                              <div className="conversation-item-time">
                                12:30
                              </div>
                            </div>
                            <div className="conversation-item-dropdown">
                              <button
                                type="button"
                                className="conversation-item-dropdown-toggle"
                              >
                                <i className="ri-more-2-line"></i>
                              </button>
                              <ul className="conversation-item-dropdown-list">
                                <li>
                                  <a href="#">
                                    <i className="ri-share-forward-line"></i>{" "}
                                    Forward
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ri-delete-bin-line"></i>{" "}
                                    Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="conversation-form ">
                  <button type="button" className="conversation-form-button">
                    <i className="ri-emotion-line"></i>
                  </button>
                  <div className="conversation-form-group">
                    <textarea
                      className="conversation-form-input"
                      rows={1}
                      placeholder="Type here..."
                    ></textarea>
                    <button type="button" className="conversation-form-record">
                      <i className="ri-mic-line"></i>
                    </button>
                  </div>
                  <button
                    type="button"
                    className="conversation-form-button conversation-form-submit"
                  >
                    <i className="ri-send-plane-2-line"></i>
                  </button>
                </div>
              </div>
              {/* <!-- end: Conversation --> */}
            </div>
            {/* <!-- end: Content --> */}
          </div>
        </section>
      </section>
    </div>
  );
}

export default Index;
