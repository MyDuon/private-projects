import "./SideProject.css";
import { Link } from "react-router";
import streaming from "../../resources/movie-app.png";
import calculator from "../../resources/calculator.png";
import todo from "../../resources/todo-list.png";
import tictactoe from "../../resources/tic-tac-toe.png";
function SideProject() {
  return (
    <>
      <div className="side-project-wrapper">
        <h1 className="project-header">Project</h1>
        <div className="grid-container">
          <div className="image-wrapper">
            <Link className="link" to="/streaming">
              <div className="hidden-header">
                <h2>Movie App</h2>
              </div>
              <img className="image" src={streaming} alt="streaming picture" />
              {/* <div className="hei">hei</div> */}
            </Link>
          </div>
          <div className="image-wrapper">
            <Link className="link" to="/calculator">
              <div className="hidden-header">
                <h2>Calculator</h2>
              </div>
              <img
                className="image"
                src={calculator}
                alt="calculator picture"
              />
            </Link>
          </div>
          <div className="image-wrapper">
            <Link className="link" to="todolist">
              <div className="hidden-header">
                <h2>Todo list</h2>
              </div>
              <img className="image" src={todo} alt="todo-list picture" />
            </Link>
          </div>
          <div className="image-wrapper">
            <Link className="link" to="tictactoe">
              <div className="hidden-header">
                <h2>Tic Tac Toe</h2>
              </div>
              <img
                className="image"
                src={tictactoe}
                alt="tic-tac-toe picture"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default SideProject;
