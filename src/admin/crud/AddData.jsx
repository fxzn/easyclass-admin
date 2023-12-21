import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

function AddData(props) {
  const { showModal, handleClose } = props;

  const [formData, setFormData] = useState({
    // id: "",
    titleCourse: "",
    categories: [
      {
        id: 0,
      },
    ],
    duration: "",
    module: "",
    codeCourse: "",
    isPremium: false,
    priceCourse: 0,
    levelCourse: "",
    teacher: "",
    aboutCourse: "",
    subjects: [
      {
        id: "",
        course: "",
        code: "",
        title: "",
        linkVideo: "",
        description: "",
        isPremium: true,
      },
    ],
  });

  const handleCourseSubmit = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/api/admin/course/add`,
        {
          titleCourse: formData.titleCourse,
          duration: formData.duration,
          module: formData.module,
          categories: formData.categories,
          codeCourse: formData.codeCourse,
          priceCourse: formData.priceCourse,
          levelCourse: formData.levelCourse,
          teacher: formData.teacher,
          aboutCourse: formData.aboutCourse,
          isPremium: formData.isPremium,
          subjects: formData.subjects.map((subject) => ({
            code: subject.code,
            title: subject.title,
            linkVideo: subject.linkVideo,
            description: subject.description,
            isPremium: subject.isPremium,
          })),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="font-Montserrat text-[24px] font-bold leading-[36px] text-darkblue-05">Tambah Kelas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="titleCourse">
              <Form.Label>Title Course</Form.Label>
              <Form.Control type="text" name="titleCourse" value={formData.titleCourse} onChange={(e) => setFormData({ ...formData, titleCourse: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="categories">
              <Form.Label>Categories</Form.Label>
              <Form.Control
                type="text"
                name="categories"
                value={formData.categories.map((cat) => cat.id).join(",")}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    categories: e.target.value.split(",").map((id) => ({ id: id })),
                  })
                }
              />
            </Form.Group>

            <Form.Group controlId="duration">
              <Form.Label>Duration</Form.Label>
              <Form.Control type="text" name="duration" value={formData.duration} onChange={(e) => setFormData({ ...formData, duration: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="module">
              <Form.Label>Modul</Form.Label>
              <Form.Control type="text" name="module" value={formData.module} onChange={(e) => setFormData({ ...formData, module: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="codeCourse">
              <Form.Label>Code Course</Form.Label>
              <Form.Control type="text" name="codeCourse" value={formData.codeCourse} onChange={(e) => setFormData({ ...formData, codeCourse: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="isPremium">
              <Form.Label>Is Premium</Form.Label>
              <Form.Control type="boolean" name="isPremium" value={formData.isPremium} onChange={(e) => setFormData({ ...formData, isPremium: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="priceCourse">
              <Form.Label>Price Course</Form.Label>
              <Form.Control type="number" name="priceCourse" value={formData.priceCourse} onChange={(e) => setFormData({ ...formData, priceCourse: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="levelCourse">
              <Form.Label>Level Course</Form.Label>
              <Form.Control type="text" name="levelCourse" value={formData.levelCourse} onChange={(e) => setFormData({ ...formData, levelCourse: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="teacher">
              <Form.Label>Teacher</Form.Label>
              <Form.Control type="text" name="teacher" value={formData.teacher} onChange={(e) => setFormData({ ...formData, teacher: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="aboutCourse">
              <Form.Label>About Course</Form.Label>
              <Form.Control type="text" name="aboutCourse" value={formData.aboutCourse} onChange={(e) => setFormData({ ...formData, aboutCourse: e.target.value })} />
            </Form.Group>

            <hr />
            <h5>Subject Details</h5>
            {formData.subjects.map((subject, index) => (
              <div key={index}>
                <Form.Group controlId={`code-${index}`}>
                  <Form.Label>Code</Form.Label>
                  <Form.Control
                    type="text"
                    name={`code-${index}`}
                    value={subject.code}
                    onChange={(e) =>
                      setFormData((prevData) => {
                        const updatedSubjects = [...prevData.subjects];
                        updatedSubjects[index].code = e.target.value;
                        return { ...prevData, subjects: updatedSubjects };
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId={`title-${index}`}>
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name={`title-${index}`}
                    value={subject.title}
                    onChange={(e) =>
                      setFormData((prevData) => {
                        const updatedSubjects = [...prevData.subjects];
                        updatedSubjects[index].title = e.target.value;
                        return { ...prevData, subjects: updatedSubjects };
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId={`linkVideo-${index}`}>
                  <Form.Label>Link Video</Form.Label>
                  <Form.Control
                    type="text"
                    name={`linkVideo-${index}`}
                    value={subject.linkVideo}
                    onChange={(e) =>
                      setFormData((prevData) => {
                        const updatedSubjects = [...prevData.subjects];
                        updatedSubjects[index].linkVideo = e.target.value;
                        return { ...prevData, subjects: updatedSubjects };
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId={`description-${index}`}>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    name={`description-${index}`}
                    value={subject.description}
                    onChange={(e) =>
                      setFormData((prevData) => {
                        const updatedSubjects = [...prevData.subjects];
                        updatedSubjects[index].description = e.target.value;
                        return { ...prevData, subjects: updatedSubjects };
                      })
                    }
                  />
                </Form.Group>

                <Form.Group controlId={`isPremium-${index}`}>
                  <Form.Label>Is Premium</Form.Label>
                  <Form.Control
                    as="select"
                    name={`isPremium-${index}`}
                    value={subject.isPremium}
                    onChange={(e) =>
                      setFormData((prevData) => {
                        const updatedSubjects = [...prevData.subjects];
                        updatedSubjects[index].isPremium = e.target.value === "true";
                        return { ...prevData, subjects: updatedSubjects };
                      })
                    }
                  >
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                  </Form.Control>
                </Form.Group>
              </div>
            ))}

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="warning"
            onClick={() =>
              setFormData((prevData) => ({
                ...prevData,
                subjects: [
                  ...prevData.subjects,
                  {
                    id: "",
                    course: "",
                    code: "",
                    title: "",
                    linkVideo: "",
                    description: "",
                    isPremium: true,
                  },
                ],
              }))
            }
          >
            Upload Video
          </Button>
          <Button variant="danger" onClick={handleCourseSubmit}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddData;
