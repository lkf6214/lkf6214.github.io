import React from "react";
import "../css/RollingBaner.css";

export default function Rolling() {
  return (
    <>
      {/* <button class="btn btn-primary btn-round btn-marquee">
        <span className="rollingbtn" data-text="Marquee">
          Marquee
        </span>
      </button> */}

      <section class="notify-wrap">
        <div class="notify-wrap-inner ellipsis">
          <div class="notify-scroll">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_KSLP"
                    src="/img/mou_logo_0.jpg"
                    width={"90%"}
                    style={{ padding: "0rem 5rem" }}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국언어임상학회"
                    src="/img/mou_logo_1.gif"
                    width={"90%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국임상심리학회"
                    src="/img/mou_logo_1_0.png"
                    width={"50%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="한국상담심리학회"
                    src="/img/mou_logo_1_1.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_이화"
                    src="/img/mou_logo_2.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_서울특별시교육청"
                    src="/img/mou_logo_3.gif"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_경기도교육청"
                    src="/img/mou_logo_4.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_강동송파교육지원처"
                    src="/img/mou_logo_5.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_전자바우처"
                    src="/img/mou_logo_6.jpg"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_7.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_8.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_9.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_KSLP"
                    src="/img/mou_logo_0.jpg"
                    width={"90%"}
                    style={{ padding: "0rem 5rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국언어임상학회"
                    src="/img/mou_logo_1.gif"
                    width={"90%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국임상심리학회"
                    src="/img/mou_logo_1_0.png"
                    width={"50%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="한국상담심리학회"
                    src="/img/mou_logo_1_1.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_이화"
                    src="/img/mou_logo_2.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_서울특별시교육청"
                    src="/img/mou_logo_3.gif"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_경기도교육청"
                    src="/img/mou_logo_4.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_강동송파교육지원처"
                    src="/img/mou_logo_5.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_전자바우처"
                    src="/img/mou_logo_6.jpg"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_7.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_8.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_9.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_KSLP"
                    src="/img/mou_logo_0.jpg"
                    width={"90%"}
                    style={{ padding: "0rem 5rem" }}
                  />
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국언어임상학회"
                    src="/img/mou_logo_1.gif"
                    width={"90%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_한국임상심리학회"
                    src="/img/mou_logo_1_0.png"
                    width={"50%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="한국상담심리학회"
                    src="/img/mou_logo_1_1.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_이화"
                    src="/img/mou_logo_2.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_서울특별시교육청"
                    src="/img/mou_logo_3.gif"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_경기도교육청"
                    src="/img/mou_logo_4.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_강동송파교육지원처"
                    src="/img/mou_logo_5.png"
                    width={"60%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_전자바우처"
                    src="/img/mou_logo_6.jpg"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_7.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_8.png"
                    width={"80%"}
                  />
                </a>
              </li>

              <li>
                <a href="javascript:void(0)">
                  <img
                    alt="mou_logo_0"
                    src="/img/mou_logo_9.png"
                    width={"80%"}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
