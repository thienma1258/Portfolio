import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogsCards from "./BlogsCards";
import Particle from "../Particle";
import PostService from "../../api/PostService";
import PaginationList from "../Pagination/Pagination";
import Preloader from "../../components/Pre";

const ITEM_PER_ROW = 3

function Blogs() {
  var [ids, setIDs] = useState([]);
  var [items, setItems] = useState([]);
  var colPerRow = ITEM_PER_ROW || 2;
  var md = 12 / colPerRow;
  var rows = (items.length + (colPerRow - 1)) / colPerRow;
  const [loading, setIsLoading] = useState(false);
  const reloadIDs = async () => {
    var ids = await PostService.getAllIDs();
    setIDs(ids);
  };

  useEffect( () => {
    setIsLoading(true);

    reloadIDs();
    setIsLoading(false);

  }, []);

  const onChangePage = async (ids) => {
    setIsLoading(true);

    var itemMap = await PostService.getByIDs(ids, [
        "title",
        "image",
        "published",
        "description",
        "id",
        "slug"
      ]);
      var result = [];
      for (const id of ids) {
        result.push(itemMap[`post-${id}`]);
      }
      setItems(result);
      setIsLoading(false);
  };

  var rowCard = [];
  for (var i = 0; i < rows; i++) {
    let itemRender = items.slice(i * colPerRow, (i + 1) * colPerRow);
    rowCard.push(
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }} key={i}>
        {itemRender.map((item, index) => (
          <Col md={md} className="project-card" key={index}>
            <BlogsCards
              key={index}
              id={item.id}
              imgPath={item.image}
              isBlog={true}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <Preloader className={loading ? "preload-detail" : ""} load={loading} />
        {rowCard}
      <PaginationList
      className="justify-content-right float-end float-md-end paginationList"
       items={ids} onChangePage={onChangePage}
       pageSize={ITEM_PER_ROW*2} >
       </PaginationList>
       <br className="float-none"></br>

      </Container>
    </Container>
  );
}

export default Blogs;
