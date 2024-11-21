import BasicGrid from "./Grid";
import "./SideProject.css";
function SideProject() {
  return (
    <>
      <div className="side-project-wrapper">
        <h1 className="project-header">Project</h1>
        <BasicGrid />
        {/* <div className="side-project">
          <div className="streaming">
            <BasicCard />
          </div>
          <div className="calculator">
            <BasicCard />
          </div>
          <div className="tic-tac-toe">
            <BasicCard />
          </div>
        </div>
        <div className="side-project">
          <div className="todo-list">
            <BasicCard />
          </div>
          <div className="test">
            <BasicCard />
          </div>
          <div className="test2">
            <BasicCard />
          </div>
        </div> */}
      </div>
    </>
  );
}
export default SideProject;
