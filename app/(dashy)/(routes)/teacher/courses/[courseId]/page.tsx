import React from "react";

const CoursePage = ({ params }: { params: { courseId: String } }) => {
  return (
    <div>
      {params.courseId} <br /> {JSON.stringify(params)}
    </div>
  );
};

export default CoursePage;
