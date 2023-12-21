import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Tabelkelola.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import EditVideo from "../crud/EditVideo";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function TabelVideo() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [kelasData, setKelasData] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    async function getCourseList() {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/getAllSubject`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setKelasData(response.data.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    }
    getCourseList();
  }, []);

  const handleEditClick = (code) => {
    setSelectedVideo(code);
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  const handleDelete = async (code) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_BASE_URL}/api/admin/subject/delete/${code}`);

      if (response.status === 200) {
        toast.success("Course deleted successfully");
      } else {
        toast.error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="content">
        <div className="container-fluid pt-4 px-4">
          <div className="row g-4">
            <div className="col-12">
              <div className="bg-light rounded h-100 p-4">
                <h6 className="mb-4 text-tabel" >Video Course</h6>
                <div className="table-responsive">
                  <TransitionGroup component="table" className="table">
                    <thead>
                      <tr>
                        <th scope="col">Kode </th>
                        <th scope="col">Judul</th>
                        <th scope="col">Tipe Kelas</th>
                        <th scope="col">Link Video</th>
                        <th scope="col">Deskripsi</th>
                        <th scope="col">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {kelasData && kelasData.length > 0 ? (
                        kelasData.map((subject, index) => (
                          <CSSTransition key={index} timeout={1500} classNames="fade">
                            <tr>
                              <td>{subject.code}</td>
                              <td>{subject.title}</td>
                              <td>{subject.isPremium ? "Premium" : "Free"}</td>
                              <td>{subject.link}</td>
                              <td>{subject.description}</td>

                              <td>
                                <div>
                                  <button type="button" className="btn btn-edit" onClick={() => handleEditClick(subject.code)}>
                                    <FontAwesomeIcon icon={faEdit} />
                                  </button>
                                  <button type="button" className="btn btn-delete" onClick={() => handleDelete(subject.code)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </CSSTransition>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7">No data available</td>
                        </tr>
                      )}
                    </tbody>
                  </TransitionGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditVideo showModal={showEditModal} handleCloseModal={handleCloseModal} selectedCourse={selectedVideo} code={selectedVideo} />
    </>
  );
}

export default TabelVideo;
