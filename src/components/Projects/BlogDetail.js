import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { useParams } from "react-router-dom";
import PostService from "../../api/PostService";
import { ENTITY_TYPE_POST } from "../../constant/entityType";
import Preloader from "../../components/Pre";

function BlogDetail(props) {
  const [post, setPost] = useState({
    title: "",
    published: "",
    thumbnail: "",
    description: "",
  });
  const [bodyPayload, setBody] = useState(null);
  const [loading, setIsLoading] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function fetchMyAPI() {
      if (parseInt(id) && id !== undefined) {
        setIsLoading(true);
        let postMap = await PostService.getByIDs(
          [id],
          ["author", "image", "title", "description", "body"]
        );
        if (typeof postMap !== "undefined") {
          const post = postMap[`${ENTITY_TYPE_POST}-${id}`];
          const published = post.published ? 1 : 0;
          setPost({
            title: post.title,
            published: published,
            thumbnail: post.image,
            description: post.description,
          });
          setBody(post.body);
          setIsLoading(false);
        }
      }
    }
    fetchMyAPI();
  }, [id]);

  return (
    <Container fluid className="section">
      <Particle></Particle>

      <Row>
        <h1>{post.title}</h1>

        <Preloader className={loading ? "preload-detail" : ""} load={loading} />
        <Col hidden={loading} className="content-data offset-md-2">
          <span dangerouslySetInnerHTML={{ __html: bodyPayload }} />
        </Col>
        <h2>Author :{post.author}</h2>
      </Row>
    </Container>
  );
}

export default BlogDetail;
