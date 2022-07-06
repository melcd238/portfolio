import './MyResumeHeading.css'


const ResumeHeading = ({heading, fromDate, toDate, subHeading, description}) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{heading ? heading : ""}</span>
          {fromDate && toDate ? (
            <div className="heading-date">
              {fromDate + "-" + toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{subHeading ? subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{description ? description : ""}</span>
        </div>
      </div>
    );
  };

  export default ResumeHeading;