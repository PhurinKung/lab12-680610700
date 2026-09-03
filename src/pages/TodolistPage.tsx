import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TaskInput from "../components/TaskInput";
import TaskCard from "../components/TaskCard";
import { type TaskCardProps } from "../libs/Todolist";
import Footer from "../components/Footer";
export default function TodolistPage() {
  const title = "Todo List";
  const tasks: TaskCardProps[] = [
    {
      id: "1",
      title: "Read a book",
      description: "Vite + React + Bootstrap + TS",
      isDone: false,
    },
    {
      id: "2",
      title: "Write code",
      description: "Finish project for class",
      isDone: false,
    },
    {
      id: "3",
      title: "Deploy app",
      description: "Push project to GitHub Pages",
      isDone: true,
    },
  ];

  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        {/* ── 2) Sidebar (รับ props userName, type) ─────────────────────────── */}
          <Sidebar username="Phichamon" type="student"/>

        {/* <div className="col-2 p-0">
          <aside
            className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
            style={{ width: "auto", height: "100%", overflowY: "auto" }}
            data-bs-theme="dark"
          >
            <div className="flex-grow-1">
              <nav className="navbar align-items-start flex-column">
                <h3 className="navbar-brand">Note App</h3>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" href="#">
                      <span className="d-md-inline px-2">Todo List</span>
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="d-md-inline px-2">My Stuffs</span>
                    </a>
                    <ul className="dropdown-menu p-2">
                      <li>
                        <a className="nav-link active" href="#">
                          <span className="d-md-inline px-2">All Tasks</span>
                        </a>
                      </li>
                      <li>
                        <a className="nav-link active" href="#">
                          <span className="d-md-inline px-2">About</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <p className="text-white">chanadda :admin</p>
            </div>
          </aside>
        </div> */}

        <div className="col-10 p-0 d-flex flex-column min-vh-100">
          {/* ── 1) Header (ไม่รับ props) ────────────────────────────────────── */}
          <Header/>

          <main className="flex-grow-1 p-4">
            <div className="container">
              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>

              {/* ── 3) TaskInput (ไม่รับ props) ──────────────────────────── */}
              <TaskInput/>

              {/* ── 4) Task (3 แถว) → แยกเป็น <TaskCard /> แล้ว .map() ─────── */}
              {
                tasks.map((task) => (
                  <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    description={task.description}
                    isDone={task.isDone}
                  />
                ))
              }
              {/* <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0">Read a book</h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Vite + React + Bootstrap + TS
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0">Write code</h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Finish project for class
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-lg-4">
                      <h5 className="card-title m-0 text-decoration-line-through">
                        Deploy app
                      </h5>
                    </div>
                    <div className="col-lg-4">
                      <p className="card-text m-0 text-muted">
                        Push project to GitHub Pages
                      </p>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-success w-100">Done</button>
                    </div>
                    <div className="col-lg-2">
                      <button className="btn btn-danger w-100">Delete</button>
                    </div>
                  </div>
                </div>
              </div> */}
            </div> 
          </main>

          {/* ── 5) Footer (รับ props year, fullName, studentId) ─────────────── */}
          <Footer year="2026" fullName="Phichamon  Kaewboot" studentId="690610700"/>
        </div>
      </div>
    </div>
  );
}
