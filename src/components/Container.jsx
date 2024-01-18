import React from "react";

const Container = () => {
  return (
    <div>
      <div className="content">
        <div className="content-experience">
          <div className="experience-head">
            <img src="./images/Frame.svg" alt="" />
            <h4>Experience</h4>
          </div>
          <div className="experience-jobs">
            <div className="sidebars" data-aos="fade-right">
              <p className="sidebar-job-company">Emplosoft Inc</p>
              <p className="sidebar-job-title">
                Front-End Developer 02/2021 - 05/2021 Seattle, USA
              </p>
              <p className="sidebar-job-duties">
                - Built front-end part of CRUD applications with HTML, CSS,
                Bootstrap, React and JavaScript. <br />- Developed and
                implemented highly responsive components using React and Redux.
              </p>
            </div>

            <div className="sidebars" data-aos="fade-left">
              <p className="sidebar-job-company">Skyeng</p>
              <p className="sidebar-job-title">Teacher of English language</p>
              <p className="sidebar-job-duties">
                - Conducted lessons for adults <br />- Checked homeworks
              </p>
            </div>
            <div className="sidebars" data-aos="fade-right">
              <p className="sidebar-job-company">Falcon DGCA LLC</p>
              <p className="sidebar-job-title">General Manager</p>
              <p className="sidebar-job-duties">
                - Organized preparation of proposals for bids <br />
                - Monitored adherence to working schedule <br />- Met with
                customers
              </p>
            </div>
            <div className="sidebars jobs-sidebar" data-aos="fade-left">
              <p className="sidebar-job-company">
                Xanadu Casino at Hyatt Regency Bishkek LLC
              </p>
              <p className="sidebar-job-title">HR Manager</p>
              <p className="sidebar-job-duties">
                - Hiring and interviewing staff <br />
                - Administering pay, benefits, and leave <br />- Enforcing
                company policies and practices
              </p>
            </div>
          </div>

          <div className="study">
            <h4>Study</h4>
            <div className="sidebars-study">
              <p className="university-name">Makers Bootcamp</p>
              <p className="faculty">Front-End Developer</p>
            </div>
            <div className="sidebars-study">
              <p className="university-name">
                Academy of management under the president of KR
              </p>
              <p className="faculty">Master of Business Administration</p>
            </div>
            <div className="sidebars-study">
              <p className="university-name">
                Kyrgyz State Pedagogical University by I.Arabaev
              </p>
              <p className="faculty">
                Teacher of English language and literature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
