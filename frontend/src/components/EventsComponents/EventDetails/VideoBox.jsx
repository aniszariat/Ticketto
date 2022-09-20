import React from "react";

function VideoBox({ event }) {
  return (
    <section
      id="videobox"
      className="why-us section-bg mb-5 shadow rounded-1  p-5"
    >
      <div className="container" data-aos="fade-up">
        <div className="row ">
          {/* <div className="col-6 align-items-stretch video-box" style={{backgroundImage: ``url(img/slide-1.jpg")', backgroundPosition: 'center', backgroundSize: 'cover'}} data-aos="zoom-in" data-aos-delay={100}> */}
          <div
            className="col-6 align-items-stretch video-box"
            style={{
              backgroundImage: `url(${event.PosterEvent})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            data-aos="zoom-in"
            data-aos-delay={100}
          >
            <a
              href="https://www.youtube.com/watch?v=22lBZpuyZxA&ab_channel=ThisizBalti"
              target="_blank"
              className="venobox play-btn mb-4"
              data-vbtype="video"
              data-autoplay="true"
            />
          </div>
          <div className="col-6 p-4 d-flex flex-column justify-content-center align-items-stretch">
            <div className="content">
              <h3>
                Eum ipsam laborum<br></br>
                <strong>velit pariatur architecto</strong>
              </h3>
              <p className="lead">
                {event.Description} <br></br>
              </p>
            </div>
            <div className="accordion-list">
              <ul>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    className="collapse nav-link"
                    data-bs-target="#accordion-list-1"
                  >
                    <span>01</span> Non consectetur a erat nam at lectus urna
                    duis? <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-1"
                    className="collapse show"
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna
                      id volutpat lacus laoreet non curabitur gravida. Venenatis
                      lectus magna fringilla urna porttitor rhoncus dolor purus
                      non.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-2"
                    className="collapse nav-link"
                  >
                    <span>02</span> Feugiat scelerisque varius morbi enim nunc?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-2"
                    className="collapse "
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque
                      habitant morbi. Id interdum velit laoreet id donec
                      ultrices. Fringilla phasellus faucibus scelerisque
                      eleifend donec pretium. Est pellentesque elit ullamcorper
                      dignissim. Mauris ultrices eros in cursus turpis massa
                      tincidunt dui.
                    </p>
                  </div>
                </li>
                <li>
                  <a
                    data-bs-toggle="collapse"
                    data-bs-target="#accordion-list-3"
                    className="collapsed nav-link"
                  >
                    <span>03</span> Dolor sit amet consectetur adipiscing elit?{" "}
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div
                    id="accordion-list-3"
                    className="collapse "
                    data-bs-parent=".accordion-list"
                  >
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices
                      sagittis orci. Faucibus pulvinar elementum integer enim.
                      Sem nulla pharetra diam sit amet nisl suscipit. Rutrum
                      tellus pellentesque eu tincidunt. Lectus urna duis
                      convallis convallis tellus. Urna molestie at elementum eu
                      facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoBox;
